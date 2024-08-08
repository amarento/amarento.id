"use server";

import axios from "axios";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { createServerAction } from "zsa";
import { deleteClientSchema, newClientSchema } from "~/server/contracts";
import { db } from "~/server/db";
import { clients } from "~/server/db/schema";

export async function getClients() {
  return await db.select().from(clients);
}

const createAxios = () => {
  // axios instance for making requests
  const instance = axios.create({
    baseURL: "http://localhost:3000",
  });
  return instance;
};

export const _axios = createAxios();

export const resetUserState = async () => {
  const response = await _axios.post("/api/reset-user-state");
  console.log(response);
};

export const sendInitialMessage = async () => {
  const response = await _axios.post("/api/send-initial-message");
  console.log(response);
};

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
