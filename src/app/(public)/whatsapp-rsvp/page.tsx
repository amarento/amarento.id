import { Reveal } from "~/app/_components/reveal";
import Image from "next/image";
import mockup from "../../../../public/mockup.png";
import whatsapp from "../../../../public/whatsapp.jpg";
import { useState } from "react";

export default function WhatsappRSVP() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="whatsapp" className="relative top-0 flex h-screen w-screen items-center justify-center bg-gradient-to-b from-stone-100 to-white pt-20 text-dark-grey-default">
      <div className="mb-10 flex flex-col-reverse items-center justify-center lg:mt-24 lg:flex-row">
        <div className="flex flex-col lg:mb-20 lg:mr-32">
          <Reveal>
            <h3 className="text-custom-h3 mb-custom-short !font-eco">WHATSAPP RSVP</h3>
          </Reveal>
          <Reveal>
            <p className="text-custom-p max-w-custom">
              WhatsApp RSVP lets you automate invites, track RSVPs, and
              effortlessly manage your guest list — all within WhatsApp.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <div
            className="mb-custom-short relative h-[450px] w-[350px] overflow-hidden rounded-3xl lg:h-[600px] lg:w-[500px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              className={`absolute inset-x-0 rounded-3xl bg-slate-200 object-cover transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-0" : "opacity-100"}`}
              src={mockup}
              alt="Mockup Image"
              style={{
                width: "auto",
                height: "auto",
              }}
              sizes="(max-width: 639px) 70vw, (max-width: 768px) 65vw, (max-width: 1024px) 45vw, (max-width: 1536px) 30vw, 25vw"
            />
            <Image
              className={`absolute inset-x-0 rounded-3xl object-cover transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`}
              src={whatsapp}
              alt="WhatsApp Image"
              style={{
                width: "auto",
                height: "auto",
              }}
              sizes="(max-width: 639px) 70vw, (max-width: 768px) 65vw, (max-width: 1024px) 45vw, (max-width: 1536px) 30vw, 25vw"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
