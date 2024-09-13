import { type Metadata } from "next";
import { Lora } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "~/components/ui/toaster";
import "~/styles/globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Amarento",
  description: "WhatsApp RSVP",
  icons: [{ rel: "icon", url: "/logo-white.svg" }],
};

const lagency = localFont({
  src: "./_assets/fonts/Lagency-Regular.woff2",
  variable: "--font-lagency",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lagency.variable} ${lora.variable}`}>
      <body>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
