import HomeButton from "./home-button";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#555333] font-mono text-white-default">
      <div className="w-10/12 md:w-1/3">
        <p className="font-bold">Congratulations! ❤️</p>
        <p className="text-base">
          You are successfully registered for Perki Aachen christmas
          celebration. You will receive an automated message for confirmation
          via WhatsApp.
        </p>

        <HomeButton />
      </div>
    </div>
  );
}
