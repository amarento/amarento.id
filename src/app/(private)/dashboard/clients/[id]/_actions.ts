"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createServerAction } from "zsa";
import { addGuestSchema, type UserMessage } from "~/server/contracts";
import { db } from "~/server/db";
import { clients, guests } from "~/server/db/schema";
import { _axios } from "../../_actions";

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

export const addGuestsByClient = createServerAction()
  .input(z.array(addGuestSchema))
  .handler(async ({ input }) => {
    await db.insert(guests).values(input);
    revalidatePath("/dashboard");
  });
