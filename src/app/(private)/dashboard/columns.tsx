"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { AppWindowMac, Pen, QrCode, Send } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { type Client } from "~/server/db/schema";
import DeleteClientButton from "./_components/delete-client-button";

export const columns: ColumnDef<Client>[] = [
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
      <div className="flex gap-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className={buttonVariants({ size: "icon" })}
              onClick={() => console.log("Initial message send.")}
            >
              <AppWindowMac className="h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent className="font-mono">
              <p>Client dashboard</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
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
        </TooltipProvider>

        <TooltipProvider>
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
        </TooltipProvider>

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

        <DeleteClientButton clientId={row.original.id} />
      </div>
    ),
  },
];