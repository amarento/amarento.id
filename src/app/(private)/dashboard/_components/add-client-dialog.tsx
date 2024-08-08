"use client";

import { Loader2, Plus } from "lucide-react";
import React from "react";
import * as xlsx from "xlsx";
import { type z } from "zod";
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
import {
  cn,
  constructDateTime,
  constuctClientCode,
  getInitials,
} from "~/lib/utils";
import { type newClientSchema } from "~/server/contracts";
import { addClient } from "../_actions";

type ExcelData = {
  "Nama Groom:": string;
  "Nama Bride:": string;
  "Nama Orang Tua Groom:": string;
  "Nama Orang Tua Bride:": string;
  "Tanggal Acara:": string;
  "Jumlah Undangan:": number;
  "Lokasi Holmat:": string;
  "Jam Holmat:": string;
  "Lokasi Resepsi:": string;
  "Jam Resepsi:": string;
};

export default function AddClientDialog() {
  const { toast } = useToast();

  /** state for add client action */
  const { isPending, execute } = useServerAction(addClient, {
    onSuccess: () => {
      toast({
        title: "✅ Client added successfully.",
      });
    },
  });

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
        const data: [string, string][] = xlsx.utils.sheet_to_json(worksheet, {
          header: 1,
          range: "B4:C13",
        });
        const object = Object.fromEntries(data) as unknown as ExcelData;

        /** read holmat time */
        const holmat = constructDateTime(
          object["Tanggal Acara:"],
          object["Jam Holmat:"],
        );
        if (!holmat.success || holmat.data === null) {
          toast({
            title: "Error constructing holmat date time.",
            variant: "destructive",
          });
          return;
        }

        /** read dinner time */
        const dinner = constructDateTime(
          object["Tanggal Acara:"],
          object["Jam Resepsi:"],
        );
        if (!dinner.success || dinner.data === null) {
          toast({
            title: "Error constructing holmat date time.",
            variant: "destructive",
          });
          return;
        }

        /** construct client unique code */
        const initial = getInitials(
          object["Nama Groom:"],
          object["Nama Bride:"],
        );
        const code = constuctClientCode(initial);

        const client: z.infer<typeof newClientSchema> = {
          code: code,
          nameGroom: object["Nama Groom:"],
          nameBride: object["Nama Bride:"],
          parentsNameGroom: object["Nama Orang Tua Groom:"],
          parentsNameBride: object["Nama Orang Tua Bride:"],
          weddingDay: new Date(object["Tanggal Acara:"]),
          holmatLocation: object["Lokasi Holmat:"],
          holmatTime: holmat.data,
          dinnerLocation: object["Lokasi Resepsi:"],
          dinnerTime: dinner.data,
        };

        await execute(client);
      };

      reader.readAsArrayBuffer(file);
    },
    [execute, toast],
  );

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          buttonVariants(),
          "flex w-fit items-center gap-1 font-mono",
        )}
      >
        <Plus className="h-4 w-4" />
        <p>Add client</p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add client</DialogTitle>
          <DialogDescription>
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
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
