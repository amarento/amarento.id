"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useToast } from "~/components/ui/use-toast";
import { resetUserState, sendInitialMessage } from "./_actions";

export default function Page() {
  const { toast } = useToast();
  const { data } = useQuery({
    queryKey: ["user-state"],
    queryFn: () => [],
  });

  /** action to reset user state */
  const { mutate, isPending } = useMutation({
    mutationKey: ["user-state"],
    mutationFn: () => resetUserState(),
    onSuccess: () => {
      toast({
        title: "User state reset successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Failed to reset user state.",
        variant: "destructive",
      });
    },
  });

  /** action to send initial message */
  const { mutate: onSendInitialMessage, isPending: isInitialMessagePending } =
    useMutation({
      mutationKey: ["initial-message"],
      mutationFn: () => sendInitialMessage(),
      onSuccess: () => {
        toast({
          title: "Initial message sent successfully.",
        });
      },
      onError: () => {
        toast({
          title: "Failed to send initial message.",
          variant: "destructive",
        });
      },
    });

  return (
    <div className="mx-auto max-w-3xl p-20">
      <h1 className="text-3xl">Dashboard for Ricky and Gloria Wedding Event</h1>

      <div className="mt-4 flex gap-2">
        <Button onClick={() => mutate()} disabled={isPending}>
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : (
            <p>Reset user state</p>
          )}
        </Button>
        <Button
          onClick={() => onSendInitialMessage()}
          disabled={isInitialMessagePending}
        >
          {isInitialMessagePending ? (
            <Loader2 className="animate-spin" />
          ) : (
            <p>Send initial message</p>
          )}
        </Button>
      </div>
    </div>
  );
}
