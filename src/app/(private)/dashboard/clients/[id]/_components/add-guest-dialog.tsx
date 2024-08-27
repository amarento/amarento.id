"use client";

import { Loader2, PlusCircle, Save } from "lucide-react";
import React from "react";
import * as xlsx from "xlsx";
import { useServerAction } from "zsa-react";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { useToast } from "~/components/ui/use-toast";
import { type NewGuest } from "~/server/db/schema";
import { addGuestsByClient } from "../_actions";

type GuestExcelData = {
  Nama: string;
  "Nomor WA": string;
  "Pax RSVP": string;
  "Diundang Pemberkatan?": string;
  "Diundang Resepsi?": string;
};

interface IAddGuestDialog {
  readonly clientId: number;
}

export default function AddGuestDialog({ clientId }: IAddGuestDialog) {
  const { toast } = useToast();

  /** state for add client action */
  const { isPending, execute } = useServerAction(addGuestsByClient, {
    onSuccess: () => {
      toast({
        title: "✅ Guests for client added successfully.",
      });
    },
    onError: ({ err }) => {
      toast({
        title: `Failed to add guests for client. Error: ${err.message}`,
        variant: "destructive",
      });
    },
  });

  /** local state for uploaded file. */
  const [guests, setGuests] = React.useState<NewGuest[]>();

  const onOpenFile = React.useCallback(
    (files: FileList | null) => {
      if (files === null) {
        toast({
          title: "No file selected.",
          variant: "destructive",
        });
        return;
      }

      const file = files[0];
      if (file === undefined) {
        toast({
          title: "Error reading excel file.",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = async (event) => {
        const binaryStr = event.target?.result;
        const workbook = xlsx.read(binaryStr, { type: "binary" });
        const sheetName = workbook.SheetNames[0] as unknown as string;

        const worksheet = workbook.Sheets[sheetName];
        if (worksheet === undefined) {
          toast({
            title: "Error reading excel file.",
            variant: "destructive",
          });
          return;
        }

        /** map data to typescript object */
        const data: GuestExcelData[] = xlsx.utils.sheet_to_json(worksheet, {
          range: "B15:F115",
        });

        const guests: NewGuest[] = data.map((x) => {
          const guest: NewGuest = {
            invNames: x.Nama,
            waNumber: x["Nomor WA"],
            nRSVPPlan: parseInt(x["Pax RSVP"]),
            nRSVPHolmatWA:
              x["Diundang Pemberkatan?"].toLowerCase() === "false" ? 0 : null,
            nRSVPDinnerWA: x["Diundang Resepsi?"] ? 0 : null,
            clientId: clientId,
          };
          return guest;
        });

        setGuests(guests);

        toast({
          title: "✅ File uploaded successfully.",
        });
      };

      reader.readAsArrayBuffer(file);
    },
    [clientId, toast],
  );

  const saveGuests = async () => {
    if (guests === undefined) {
      toast({
        title: "No guests to save. Please reload the file.",
        variant: "destructive",
      });
      return;
    }

    await execute(guests);
  };

  return (
    <Dialog>
      <DialogTrigger className={buttonVariants({ size: "icon" })}>
        <PlusCircle className="h-4 w-4" />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add guests</DialogTitle>
          <DialogDescription className="grid gap-4 font-mono">
            <div className="mt-2">
              {isPending ? (
                <Button
                  className="flex items-center gap-1"
                  variant={"secondary"}
                  disabled
                >
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <p>Loading</p>
                </Button>
              ) : (
                <Input
                  type="file"
                  className="cursor-pointer"
                  onChange={(e) => onOpenFile(e.target.files)}
                />
              )}
            </div>

            {guests ? (
              <div className="my-4 flex max-h-80 flex-col gap-2 overflow-y-scroll">
                <h1 className="font-bold">Data Preview</h1>
                <pre>{JSON.stringify(guests, null, 2)}</pre>
              </div>
            ) : null}

            <Button
              className="flex items-center gap-1"
              disabled={guests === undefined}
              onClick={() => saveGuests()}
            >
              <Save className="h-4 w-4" />
              <p>Save guests</p>
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
