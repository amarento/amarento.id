"use client";

import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useServerActionQuery } from "~/lib/hooks/server-action-hooks";
import { DataTable } from "../../data-table";
import { getClientByCode, getRSVPStates } from "./_actions";
import { columns } from "./_components/columns";

export default function Page() {
  const params = useParams<{ id: string }>();
  const guestCode = params.id;

  /** user rsvp live tracker */
  const { data } = useQuery({
    queryKey: ["user-state"],
    queryFn: getRSVPStates,
    refetchInterval: 1000,
  });

  const { isLoading, data: client } = useServerActionQuery(getClientByCode, {
    input: { code: guestCode },
    queryKey: [`client-${guestCode}`],
  });

  /** action to reset user state */
  // const { mutate, isPending } = useMutation({
  //   mutationKey: ["user-state"],
  //   mutationFn: () => resetUserState(),
  //   onSuccess: () => {
  //     toast({
  //       title: "User state reset successfully.",
  //     });
  //   },
  //   onError: () => {
  //     toast({
  //       title: "Failed to reset user state.",
  //       variant: "destructive",
  //     });
  //   },
  // });

  const nGuestHolMat = client?.guests.reduce((prev, current) => {
    if (current.nRSVPHolmatWA !== null) {
      return prev + current.nRSVPHolmatWA;
    }
    return prev;
  }, 0);

  const nGuestDinner = client?.guests.reduce((prev, current) => {
    if (current.nRSVPDinnerWA !== null) {
      return prev + current.nRSVPDinnerWA;
    }
    return prev;
  }, 0);

  const nAttendingGuest = client?.guests.filter(
    (x) => x.nRSVPHolmatWA !== null && x.nRSVPDinnerWA !== null,
  ).length;

  const nUnattendingGuest = client?.guests.filter(
    (x) => x.nRSVPHolmatWA === 0 && x.nRSVPDinnerWA === 0,
  ).length;

  const lastUpdated = client?.guests.reduce((latest, current) => {
    return current.updatedAt > latest.updatedAt ? current : latest;
  });

  return (
    <div className="mx-auto grid max-w-screen-2xl gap-8 p-20 font-lagency">
      <h1 className="text-3xl">
        Dashboard for {client?.nameGroom} & {client?.nameBride} Wedding
      </h1>

      <div className="grid gap-4">
        <h1 className="text-xl">KPI</h1>
        <div className="flex gap-4">
          <div className="w-60 rounded-md border p-4">
            <h2>Number of Invitation</h2>
            <p className="text-2xl font-bold">{client?.guests.length}</p>
          </div>

          <div className="w-60 rounded-md border p-4">
            <h2>Number of Guests Holy Matrimony</h2>
            <p className="text-2xl font-bold">{nGuestHolMat}</p>
          </div>

          <div className="w-60 rounded-md border p-4">
            <h2>Number of Guests Reception</h2>
            <p className="text-2xl font-bold">{nGuestDinner}</p>
          </div>

          <div className="w-60 rounded-md border p-4">
            <h2>Responded</h2>
            <p className="text-2xl font-bold">{nAttendingGuest}</p>
          </div>

          <div className="w-60 rounded-md border p-4">
            <h2>RSVP NO :(</h2>
            <p className="text-2xl font-bold">{nUnattendingGuest}</p>
          </div>

          <div className="w-60 rounded-md border p-4">
            <h2>Last Update</h2>
            <p className="text-2xl font-bold">
              {lastUpdated?.updatedAt.toDateString()}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <h1 className="text-xl">Guest List</h1>
        <div>
          {client ? (
            <DataTable
              columns={columns}
              data={client.guests.sort((a, b) => {
                if (a.invNames > b.invNames) return 1;
                else if (a.invNames < b.invNames) return -1;
                else return 0;
              })}
            />
          ) : (
            <div className="mx-auto flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <p>Loading guests...</p>
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-4">
        <h1 className="text-xl">WhatsApp Live Tracker</h1>
        <div>
          {data ? (
            data?.map((message, i) => (
              <div key={i}>{JSON.stringify(message)}</div>
            ))
          ) : (
            <div className="rounded-lg border p-8 text-center">
              <p>Live tracking has not begin yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
