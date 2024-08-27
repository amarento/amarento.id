import { z } from "zod";

export type UserState = {
  readonly nextQuestionId: number;
  readonly isAttendHolmat: boolean;
  readonly nRSVPHolMat: number;
  readonly isAttendDinner: boolean;
  readonly nRSVPDinner: number;
  readonly dinnerNames: string[];
};

export type UserMessage = {
  readonly state: UserState;
};

export const newClientSchema = z.object({
  code: z.string(),
  nameGroom: z.string(),
  nameBride: z.string(),
  parentsNameGroom: z.string(),
  parentsNameBride: z.string(),
  weddingDay: z.date(),
  holmatLocation: z.string(),
  holmatTime: z.date(),
  dinnerLocation: z.string(),
  dinnerTime: z.date(),
});

export const deleteClientSchema = z.object({
  clientId: z.number(),
});

export const addGuestSchema = z.object({
  invNames: z.string(),
  waNumber: z.string(),
  nRSVPPlan: z.number(),
  clientId: z.number(),
});

export const sendReminderMessageWithQRSchema = z.object({
  code: z.string(),
});
