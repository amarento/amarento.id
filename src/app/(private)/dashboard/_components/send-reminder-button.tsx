"use client";

import { useMutation } from "@tanstack/react-query";
import { Loader2, QrCode } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { useToast } from "~/components/ui/use-toast";
import { sendReminderMessageWithQR } from "../action";

interface ISendReminderButtonProps {
  readonly code: string;
}

export default function SendReminderButton(props: ISendReminderButtonProps) {
  const { toast } = useToast();
  const { isPending, mutate } = useMutation({
    mutationKey: ["send-reminder-with-qr"],
    mutationFn: (code: string) => sendReminderMessageWithQR(code),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "✅ Reminder sent successfully!",
      });
    },
  });

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={buttonVariants({ size: "icon" })}
          onClick={() => mutate(props.code)}
        >
          {isPending ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <QrCode className="h-4 w-4" />
          )}
        </TooltipTrigger>
        <TooltipContent className="font-mono">
          <p>Send reminder with QR</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
