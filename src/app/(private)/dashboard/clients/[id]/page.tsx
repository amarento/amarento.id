"use client";

import { useQuery } from "@tanstack/react-query";
import { getRSVPStates } from "./_actions";

export default function Page() {
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

  /** action to send initial message */

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col justify-center gap-8 pb-20 font-lagency">
      <h1 className="text-3xl">Dashboard for Ricky and Gloria Wedding Event</h1>
      {data?.map((message, i) => <div key={i}>{JSON.stringify(message)}</div>)}
    </div>
  );
}
