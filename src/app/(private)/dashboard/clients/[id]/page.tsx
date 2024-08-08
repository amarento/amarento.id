"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getRSVPStates } from "./_actions";

export default function Page() {
  const params = useParams<{ id: string }>();
  const name = params.id;

  /** user rsvp live tracker */
  const { data } = useQuery({
    queryKey: ["user-state"],
    queryFn: getRSVPStates,
    refetchInterval: 1000,
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

  return (
    <div className="mx-auto max-w-screen-2xl p-20 font-lagency">
      <h1 className="text-3xl">Dashboard for {name} Wedding Event</h1>
      {data?.map((message, i) => <div key={i}>{JSON.stringify(message)}</div>)}
    </div>
  );
}
