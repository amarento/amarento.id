import HomeButton from "./home-button";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#555333] font-mono text-white-default">
      <div className="w-10/12">
        <p className="text-base">
          <span className="font-bold">Congratulations! ❤️</span> You are
          successfully registered for Perki Aachen Christmas Celebration. You
          will receive an automated message for confirmation via WhatsApp.
        </p>

        <HomeButton />
      </div>
    </div>
  );
}
