"use server";

import { db } from "~/server/db";
import { clients } from "~/server/db/schema";

export async function getClients() {
  return await db.select().from(clients);
}
