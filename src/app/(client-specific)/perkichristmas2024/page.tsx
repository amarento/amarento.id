"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useServerAction } from "zsa-react";
import { addGuestByClient } from "~/app/(private)/dashboard/clients/[id]/_actions";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useToast } from "~/components/ui/use-toast";
import { type NewGuest } from "~/server/db/schema";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  whatsapp: z.string().regex(/^49\d{10,11}$/, {
    message:
      "Phone number must start with '49' and have at least 12 digits in total and maximum of 13 digits.",
  }),
  dietary: z.string().optional(),
  address: z.string().min(10, {
    message: "Address must be at least 10 characters.",
  }),
});

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  /** toast for user feedback. */
  const { toast } = useToast();

  /** state for add client action */
  const router = useRouter();
  const { isPending, execute } = useServerAction(addGuestByClient, {
    onSuccess: () => {
      toast({
        title: "✅ Registration successful.",
        description: `Thank you for your registration!`,
      });
      router.push("/perkichristmas2024/thankyou");
    },
    onError: ({ err }) => {
      console.log(err);
      toast({
        title: err.message,
        variant: "destructive",
      });
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const guest: NewGuest = {
      invNames: values.name,
      waNumber: values.whatsapp,
      nRSVPPlan: 1,
      clientId: 1,
    };
    await execute(guest);
  }

  /** local state for agreement. */
  const [agree, setAgree] = React.useState<boolean>(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#555333] to-[#29281a] font-mono text-white-default">
      <div className="mx-auto w-10/12 py-12 md:w-1/3">
        {agree ? (
          <div>
            <div className="mb-4">
              <Button size={"icon"} onClick={() => setAgree(false)}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </div>
            <h1 className="mb-4 text-center text-lg font-bold">
              CHRISTMAS PERKI AACHEN 2024 REGISTRATION FORM
            </h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="max-w-[500x] space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Max Mustermann" />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>No. Whatsapp</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="491234567899" />
                      </FormControl>
                      <FormDescription className="text-white-default/80">
                        Please input a valid whatsapp number. The number will be
                        used for automated RSVP via WhatsApp.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dietary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alergi makanan</FormLabel>
                      <FormControl>
                        <Input placeholder="-" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alamat</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Roermonderstr. 110a, 52072, Aachen"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {isPending ? (
                  <Button className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <p className="text-sm">Registering ...</p>
                  </Button>
                ) : (
                  <Button type="submit">Submit</Button>
                )}
              </form>
            </Form>
          </div>
        ) : (
          <div>
            <h1 className="mb-8 text-center text-lg font-bold">
              CHRISTMAS PERKI AACHEN 2024 REGISTRATION
            </h1>
            <div className="grid gap-y-4">
              <p>Shalom Saudara/i,</p>
              <p>
                Acara natal PERKI Aachen akan diadakan pada tanggal{" "}
                <span className="font-bold">21.12.2024</span> pukul 15:00. Ada
                beberapa informasi yang wajib Saudara/i ketahui:
              </p>
              <p>
                1. Alamat gereja adalah{" "}
                <span className="font-bold">
                  Roermonderstraße 110a, 52072 Aachen
                </span>
                . Demi kelancaran ibadah, Saudara/i mohon hadir di gereja jam
                <span className="font-bold"> 14.30</span>.
              </p>
              <p>
                2. Karena keterbatasan kapasitas gedung dan untuk membantu
                teman-teman pengurus konsumsi, maka pendaftaran akan ditutup 2
                minggu sebelum ibadah{" "}
                <span className="font-bold">(07.12.2024)</span> atau ketika
                pendaftar sudah mencapai 70 orang. Oleh karena itu, kami mohon
                Saudara/i dapat mendaftarkan diri secepat mungkin dan tidak
                mendaftar dekat dengan deadline yang ada.
              </p>
              <p>
                3. Bagi Saudara/i yang ingin hadir bersama keluarga, diharapkan
                untuk mendaftarkan seluruh anggota keluarga yang akan hadir guna
                memastikan jumlah konsumsi.
              </p>
              <p>
                4. Akan diadakan acara tukar kado natal. Saudara/i yang datang
                ke gereja diharapkan dapat mempersiapkan kado natal dengan
                budget +- 5 Euro. Diharapkan untuk membungkus kado dan
                memberikan tulisan (dalam bentuk surat kecil) tentang ayat
                alkitab yang paling berkesan bagi Saudara/i di tahun ini dan
                alasan mengapa ayat tersebut berkesan.
              </p>
              <p>
                Diharapkan Jemaat tidak terlambat untuk datang ke dalam ibadah.
              </p>
              <p className="mt-4 text-right font-bold">
                See you and God bless you! :)
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <Button onClick={() => setAgree(true)}>Sign me up! 🎄</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
