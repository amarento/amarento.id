"use client";

import { motion as m } from "framer-motion";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const Services = () => {
  return (
    <m.div className="sticky top-0 flex h-screen w-screen items-center justify-center bg-white-primary-default text-dark-grey-default">
      <div className="mt-10 flex w-screen flex-col items-center justify-center">
        <h3 className="text-custom-h3 mb-custom-short">WHATSAPP RSVP</h3>
        <Splide
          options={{
            type: "loop",
            drag: "free",
            focus: "center",
            perPage: 1,
            gap: "4px",
            autoScroll: {
              speed: 0.25,
            },
            pagination: true,
            arrows: true,
          }}
          extensions={{ AutoScroll }}
          className="mb-custom-short w-[100vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[25vw]"
        >
          <SplideSlide>
            <Image
              className="h-auto w-full rounded-3xl object-cover"
              src="/mockup.png"
              alt="IMG"
              width={3000}
              height={3000}
              priority
            />
            <m.p
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-custom-p max-w-custom text-center"
            >
              WhatsApp RSVP lets you automate invites, track RSVPs, and
              effortlessly manage your guest list — all within WhatsApp.
            </m.p>
          </SplideSlide>
          <SplideSlide>
            <Image
              className="h-auto w-full rounded-3xl object-cover"
              src="/mockup.png"
              alt="IMG"
              width={3000}
              height={3000}
              priority
            />
            <m.p
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-custom-p max-w-custom text-center"
            >
              With QR Check-In, you can easily confirm guests on event day by
              scanning their QR codes, automatically updating your guest list
              for effortless post-event reporting.
            </m.p>
          </SplideSlide>
          <SplideSlide>
            <Image
              className="h-auto w-full rounded-3xl object-cover"
              src="/mockup.png"
              alt="IMG"
              width={3000}
              height={3000}
              priority
            />
            <m.p
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-custom-p max-w-custom text-center"
            >
              A personalized website is a custom-made site designed tailored for
              your event, featuring essential details like the date, pre-wedding
              photos and videos, gift options, and a space for wishes.
            </m.p>
          </SplideSlide>
          <SplideSlide>
            <Image
              className="h-auto w-full rounded-3xl object-cover"
              src="/mockup.png"
              alt="IMG"
              width={3000}
              height={3000}
              priority
            />
            <m.p
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-custom-p max-w-custom text-center"
            >
              A personalized e-invitation provides your event details in a
              design of your choice, and we're here to accommodate any
              additional requests you may have.
            </m.p>
          </SplideSlide>
        </Splide>
      </div>
    </m.div>
  );
};

export default Services;
