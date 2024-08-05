"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const user = { username: "Felix Arjuna" };
  const params = useParams<{ id: string }>();
  const name = "Felix Arjuna";

  function renderGuestContent() {
    return <div>You are a guest. Cant see anything boy.</div>;
  }

  function renderAdminContent() {
    return (
      <div>
        <p>Hello {name}</p>
        <div></div>
        <p className="text-black-default">{params.id}</p>
      </div>
    );
  }

  return (
    <div className="mt-20">
      {user.username === "Felix Arjuna"
        ? renderAdminContent()
        : renderGuestContent()}
    </div>
  );
}
