import { type Metadata } from "next";
import { Crimson_Text} from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "~/components/ui/toaster";
import "~/styles/globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Amarento",
  description: "WhatsApp RSVP",
  icons: [{ rel: "icon", url: "/logo-white.svg" }],
};

const crimson = Crimson_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson",
  weight: ["400", "600"],
  style: "normal",
});

// const libre = Libre_Baskerville({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-libre",
//   weight: ["400"],
//   style: "normal",
// });

const helvetica = localFont({
  src: "./_assets/fonts/Helvetica.woff2",
  variable: "--font-helvetica",
  weight: "400",
});

const eco = localFont({
  src: "./_assets/fonts/Eco-friendlyMarket.woff2",
  variable: "--font-eco",
  weight: "400",
});

const ecoItalic = localFont({
  src: "./_assets/fonts/Eco-friendlyMarket-Italic.woff2",
  variable: "--font-eco-italic",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${crimson.variable} ${helvetica.variable} ${eco.variable} ${ecoItalic.variable}`}>
      <body>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
