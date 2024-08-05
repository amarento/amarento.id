"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { QrCode, Send } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { type Client } from "~/server/db/schema";

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "nameGroom",
    header: "Groom",
  },
  {
    accessorKey: "nameBride",
    header: "Bride",
  },
  {
    accessorKey: "parentsNameGroom",
    header: "Groom Parents",
  },
  {
    accessorKey: "parentsNameBride",
    header: "Bride Parents",
  },
  {
    accessorKey: "weddingDay",
    header: "Wedding Day",
    cell: ({ row }) => row.original.weddingDay?.toLocaleDateString(),
  },
  { accessorKey: "holmatLocation", header: "Holy Matrimony Location" },
  {
    accessorKey: "holmatTime",
    header: "Holy Matrimony Time",
    cell: ({ row }) => row.original.holmatTime?.toLocaleTimeString(),
  },
  { accessorKey: "dinnerLocation", header: "Dinner Location" },
  {
    accessorKey: "dinnerTime",
    header: "Dinner Time",
    cell: ({ row }) => row.original.dinnerTime?.toLocaleTimeString(),
  },
  {
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className={buttonVariants({ size: "icon" })}
              onClick={() => console.log("Initial message send.")}
            >
              <Send className="h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Send initial message</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className={buttonVariants({ size: "icon" })}
              onClick={() => console.log("Send QR.")}
            >
              <QrCode className="h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Send QR</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
];
