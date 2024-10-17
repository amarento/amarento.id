"use server";

import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createServerAction, ZSAError } from "zsa";
import {
  addChristmasGuestSchema,
  addGuestSchema,
  type UserMessage,
} from "~/server/contracts";
import { db } from "~/server/db";
import { clients, guestInfo, guests } from "~/server/db/schema";
import { _axios } from "../../action";

export const getRSVPStates = async () => {
  const response = await _axios.get<UserMessage[]>("/api/user-state");
  return response.data;
};

export const getClientByCode = createServerAction()
  .input(z.object({ code: z.string() }))
  .handler(async ({ input }) => {
    return (
      await db.query.clients.findMany({
        where: eq(clients.code, input.code),
        with: { guests: true },
      })
    ).at(0);
  });

/** add multiple guests through excel file. */
export const addGuestsByClient = createServerAction()
  .input(z.array(addGuestSchema))
  .handler(async ({ input }) => {
    await db.insert(guests).values(input);
    revalidatePath("/dashboard");
  });

/** add single guest with additional information. */
export const addChristmasGuest = createServerAction()
  .input(addChristmasGuestSchema)
  .handler(async ({ input }) => {
    /** validate guest existance. */
    const _guest = await db.query.guests.findFirst({
      where: and(
        eq(guests.invNames, input.invNames),
        eq(guests.clientId, input.clientId),
      ),
    });

    if (_guest !== undefined)
      throw new ZSAError(
        "CONFLICT",
        "Uh oh! You are already registered to our event. 💚",
      );

    /** add guest. */
    const guest = await db
      .insert(guests)
      .values(input)
      .returning()
      .then((res) => res.at(0));

    /** add guest information. */
    await db
      .insert(guestInfo)
      .values({ guestId: guest!.id, note: input.note, address: input.address });
  });
