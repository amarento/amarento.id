"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { AppWindowMac, Pen, Send } from "lucide-react";
import Link from "next/link";
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
import SendReminderButton from "./_components/send-reminder-button";
import AddGuestDialog from "./clients/[id]/_components/add-guest-dialog";

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
      <div className="flex max-w-44 flex-wrap gap-1">
        <AddGuestDialog clientId={row.original.id} />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className={buttonVariants({ size: "icon" })}
              onClick={() => console.log("edit client")}
            >
              <Pen className="h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent className="font-mono">
              <p>Edit client</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DeleteClientButton clientId={row.original.id} />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className={buttonVariants({ size: "icon" })}>
              <Link href={`/dashboard/clients/${row.original.code}`}>
                <AppWindowMac className="h-4 w-4" />
              </Link>
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

        <SendReminderButton code={row.original.code} />
      </div>
    ),
  },
];
