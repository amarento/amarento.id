import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";
import AnimatedLink from "./animated-link";
import FadeIn from "./fade-in";

export default function Hero() {
  return (
    <div>
      <div className="relative">
        <FadeIn delay={0}>
          <Image
            className="absolute -z-10 h-auto w-auto object-cover opacity-5"
            src="/flowerBG.svg"
            alt="flowerBackground"
            width={500}
            height={500}
            priority
          />
        </FadeIn>
        <div className="flex flex-col items-center">
          <FadeIn delay={0.2}>
            <h1 className="mt-custom-long mb-custom-medium text-custom-h1 flex max-w-screen-xl font-lagency">
              ENTRUST US WITH YOUR RSVP
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mb-custom-short text-custom-p flex max-w-screen-xl justify-center">
              Streamline your wedding planning with our WhatsApp RSVP and QR
              Check-In System, tailored for couples in Indonesia. Effortlessly
              gather guest responses in real time and ensure a smooth entry for
              your guests on your special day, reducing the stress of managing
              atendees.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="mb-custom-long text-custom-p">
              <AnimatedLink href="./contact" icon={<CgArrowTopRight />}>
                SAY HELLO
              </AnimatedLink>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <div className="mb-custom-long flex justify-center xl:mb-48">
            <Image
              className="flex h-auto w-auto justify-center object-cover"
              src="/flowerBG.svg"
              alt="IMG"
              width={500}
              height={500}
              priority
            />
          </div>
        </FadeIn>
      </div>
      <div>
        <div className="flex flex-col items-center">
          <FadeIn delay={0.2}>
            <h2 className="mb-custom-short text-custom-h2 max-w-screen-xl font-lagency">
              ELEVATE YOUR WEDDING EXPERIENCE WITH PERSONALIZED FEATURES
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex justify-center">
              <p className="mb-custom-long text-custom-p max-w-screen-xl">
                Planning the ideal wedding doesn’t have to be stressful with our
                wide range of services. Couples can personalize every
                detail—from flexible RSVP management to custom wedding
                websites—ensuring their dream wedding comes to life.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
