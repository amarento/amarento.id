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
