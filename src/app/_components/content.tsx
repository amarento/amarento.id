"use client";

import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";
import AnimatedLink from "./animated-link";
import FadeIn from "./fade-in";

export default function Content() {
  return (
    <div>
      <div>
        <FadeIn delay={0.15}>
          <div className="flex flex-col items-center lg:flex-row">
            <Image
              className="mb-custom-medium h-auto w-auto rounded-3xl bg-slate-200 object-cover"
              src="/whatsapp.jpg"
              alt="IMG"
              width={500}
              height={500}
              priority={true}
            />
            <div className="flex flex-col lg:ml-20 lg:mt-36">
              <h3 className="mb-custom-short text-custom-h3 font-lagency">
                AUTOMATED WHATSAPP RSVP
              </h3>
              <p className="mb-custom-short text-custom-p max-w-screen-lg">
                Effortlessly collect guest responses via WhatsApp with this
                user-friendly solution, allowing couples to send invitations
                directly and providing real-time updates for clarity throughout
                the planning process. Stay informed about who’s attending and
                make your wedding planning experience smoother and efficient.
              </p>
              <div className="mb-custom-long text-custom-p text-black-default">
                <AnimatedLink href="./whatsapp-rsvp" icon={<CgArrowTopRight />}>
                  VIEW MORE
                </AnimatedLink>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
      <div>
        <FadeIn delay={0.15}>
          <div className="flex flex-col items-center lg:flex-row-reverse">
            <Image
              className="mb-custom-medium h-auto w-auto rounded-3xl bg-slate-200 object-cover"
              src="/qr-code.png"
              alt="IMG"
              width={500}
              height={500}
            />
            <div className="flex flex-col lg:mr-20 lg:mt-36">
              <h3 className="mb-custom-short text-custom-h3 font-lagency">
                QR CODE CHECK-IN SYSTEM
              </h3>
              <p className="mb-custom-short text-custom-p max-w-screen-lg">
                Ensure a seamless entry for your guests with our QR Code
                Check-In System, designed for quick and efficient access to your
                wedding venue. Eliminates long lines and reduces wait times,
                allowing everyone to focus on celebrating your special day.
              </p>
              <div className="mb-custom-long text-custom-p text-black-default">
                <AnimatedLink
                  href="./qr-code-check-in"
                  icon={<CgArrowTopRight />}
                >
                  VIEW MORE
                </AnimatedLink>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
      <div>
        <FadeIn delay={0.15}>
          <div className="flex flex-col items-center lg:flex-row">
            <Image
              className="mb-custom-medium h-auto w-auto rounded-3xl bg-slate-200 object-cover"
              src="/wedding-web.jpg"
              alt="IMG"
              width={500}
              height={500}
            />
            <div className="flex flex-col lg:ml-20 lg:mt-36">
              <h3 className="mb-custom-short text-custom-h3 font-lagency">
                PERSONALIZED WEDDING WEBSITE
              </h3>
              <p className="mb-custom-short text-custom-p max-w-screen-lg">
                Create a memorable experience with a Personalized Wedding
                Website, designed to showcase your love story and provide
                important event details. Customize every aspect to reflect your
                style, from sharing photos and updates to collecting heartfelt
                messages from your guests.
              </p>
              <div className="mb-custom-long text-custom-p text-black-default">
                <AnimatedLink
                  href="./wedding-website"
                  icon={<CgArrowTopRight />}
                >
                  VIEW MORE
                </AnimatedLink>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
      <div>
        <FadeIn delay={0.15}>
          <div className="flex flex-col items-center lg:flex-row-reverse">
            <Image
              className="mb-custom-medium h-auto w-auto rounded-3xl bg-slate-200 object-cover"
              src="/e-invitation.jpg"
              alt="IMG"
              width={500}
              height={500}
            />
            <div className="flex flex-col lg:mr-20 lg:mt-36">
              <h3 className="mb-custom-short text-custom-h3 font-lagency">
                PERSONALIZED E-INVITATION
              </h3>
              <p className="mb-custom-short text-custom-p max-w-screen-lg">
                Create a lasting impression with our Personalized E-Invitation,
                tailored to reflect your unique style and theme. Effortlessly
                send customized digital invitations to your guests, complete
                with RSVP tracking for easy guest list management.
              </p>
              <div className="mb-custom-long text-custom-p text-black-default">
                <AnimatedLink href="./e-invitation" icon={<CgArrowTopRight />}>
                  VIEW MORE
                </AnimatedLink>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
