"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams<{ id: string }>();
  const name = "Felix Arjuna";

  return (
    <div className="mt-20">
      <p>Hello {name}</p>
      <div></div>
      <p className="text-black-default">{params.id}</p>
    </div>
  );
}
