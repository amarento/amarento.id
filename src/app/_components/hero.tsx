import React from "react";
import AnimatedLink from "./animatedLink";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function Hero() {
  return (
    <div>
      <div className="relative">
        <img
          className="absolute -z-10 object-cover opacity-5"
          src="/flowerBG.svg"
          alt="flowerBackground"
        />
        <div className="flex flex-col items-center">
          <h1 className="mt-custom-long mb-custom-medium text-custom-h1 flex font-lagency max-w-screen-xl">
            ENTRUST US WITH YOUR RSVP
          </h1>
          <p className="mb-custom-short text-custom-p flex max-w-screen-xl justify-center ">
            Lorem ipsum dolor sit amet consectetur. Feugiat dolor arcu pulvinar
            et. Tempor id adipiscing et ac mauris a. Nunc viverra id ac nibh
            neque. Cum quam mi.
          </p>
          <div className="mb-custom-long text-custom-p">
            <AnimatedLink href="./contact" icon={<RiArrowRightUpLine />}>
              SAY HELLO
            </AnimatedLink>
          </div>
        </div>
        <div className="mb-custom-long flex justify-center xl:mb-48">
          <img className="flex justify-center" src="/flowerBG.svg" alt="IMG" />
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center">
            <h2 className="mb-custom-short font-lagency text-custom-h2 max-w-screen-xl">
              LOREM IPSUM DOLOR SIT AMET
            </h2>
          <div className="flex justify-center">
            <p className="mb-custom-long text-custom-p max-w-screen-xl">
              Lorem ipsum dolor sit amet consectetur. Egestas sem integer
              viverra duis arcu tempor. Duis est ornare tellus duis adipiscing
              morbi. Mi dignissim netus risus mattis maecenas id viverra.
              Iaculis mollis viverra semper dictumst donec.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
