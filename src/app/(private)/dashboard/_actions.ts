"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { createServerAction } from "zsa";
import { deleteClientSchema, newClientSchema } from "~/server/contracts";
import { db } from "~/server/db";
import { clients } from "~/server/db/schema";

export async function getClients() {
  return await db.select().from(clients);
}

export const addClient = createServerAction()
  .input(newClientSchema)
  .handler(async ({ input }) => {
    await db.insert(clients).values(input);
    revalidatePath("/dashboard");
  });

export const deleteClient = createServerAction()
  .input(deleteClientSchema)
  .handler(async ({ input }) => {
    await db.delete(clients).where(eq(clients.id, input.clientId));
    revalidatePath("/dashboard");
  });

// export const sendReminderMessageWithQR = createServerAction()
//   .input(sendReminderMessageWithQRSchema)
//   .handler(async ({ input }) => {
//     console.log(input);
//     const response = await _axios.post("/api/send-reminder-with-qr");
//     console.log(response);
//     return response;
//   });
