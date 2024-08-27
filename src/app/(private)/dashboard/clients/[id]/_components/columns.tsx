"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { Pen, RotateCw } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { buttonVariants } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { type Guest } from "~/server/db/schema";

export const columns: ColumnDef<Guest>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "invNames",
    header: "Name",
  },
  {
    accessorKey: "waNumber",
    header: "Whatsapp ",
  },

  {
    header: "RSVP Holy Matrimony",
    accessorKey: "nRSVPHolmatWA",
  },
  {
    header: "RSVP Reception",
    accessorKey: "nRSVPDinnerWA",
  },
  {
    header: "Status",
    cell: ({ row }) => (
      <div>
        <Badge className="font-mono text-white-default">
          {row.original.nRSVPHolmatWA === null &&
          row.original.nRSVPDinnerWA === null
            ? "Unresponded"
            : "Responded"}
        </Badge>
      </div>
    ),
  },
  {
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className={buttonVariants({ size: "icon" })}>
              <RotateCw className="h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent className="font-mono">
              <p>Reset user state</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className={buttonVariants({ size: "icon" })}
              onClick={() => console.log("Initial message send.")}
            >
              <Send className="h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent className="font-mono">
              <p>Send initial message</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider> */}

        {/* <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className={buttonVariants({ size: "icon" })}
              onClick={() => console.log("Send QR.")}
            >
              <QrCode className="h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent className="font-mono">
              <p>Send QR</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider> */}

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className={buttonVariants({ size: "icon" })}
              onClick={() => console.log("Send QR.")}
            >
              <Pen className="h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent className="font-mono">
              <p>Edit client</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* <DeleteClientButton clientId={row.original.id} /> */}
      </div>
    ),
  },
];
