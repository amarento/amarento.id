"use client";

import { Loader2, Trash2 } from "lucide-react";
import { useServerAction } from "zsa-react";
import { buttonVariants } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { useToast } from "~/components/ui/use-toast";
import { deleteClient } from "../_actions";

export default function DeleteClientButton({ clientId }: { clientId: number }) {
  const { toast } = useToast();
  const { isPending, execute } = useServerAction(deleteClient, {
    onSuccess: () => {
      toast({
        title: "✅ Client deleted successfully.",
      });
    },
  });

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={buttonVariants({ size: "icon" })}
          onClick={() => execute({ clientId })}
        >
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Trash2 className="h-4 w-4" />
          )}
        </TooltipTrigger>
        <TooltipContent className="font-mono">
          <p>Delete client</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
