import React from "react";
import AnimatedLink from "./animatedLink";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function Content() {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center lg:flex-row">
          <img
            className="mb-custom-medium rounded-3xl bg-slate-200 lg:h-[70vh] lg:w-1/2"
            src="/flowerBG.svg"
            alt="IMG"
          />
          <div className="flex flex-col lg:ml-20 lg:mt-36">
            <h3 className="mb-custom-short text-custom-h3 font-lagency">
              AUTOMATED WHATSAPP RSVP
            </h3>
            <p className="mb-custom-short text-custom-p max-w-screen-lg">
              Lorem ipsum dolor sit amet consectetur. Non velit euismod nulla
              iaculis turpis augue condimentum. Amet nec at risus laoreet
              ornare. In urna vel mauris iaculis morbi nibh est diam pretium.
              Odio.
            </p>
            <div className="mb-custom-long text-custom-p">
              <AnimatedLink
                href="./whatsapp-rsvp"
                icon={<RiArrowRightUpLine />}
              >
                VIEW MORE
              </AnimatedLink>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center lg:flex-row-reverse">
          <img
            className="mb-custom-medium rounded-3xl bg-slate-200 lg:h-[70vh] lg:w-1/2"
            src="/flowerBG.svg"
            alt="IMG"
          />
          <div className="flex flex-col lg:mr-20 lg:mt-36">
            <h3 className="mb-custom-short text-custom-h3 font-lagency">
              QR CODE CHECK-IN SYSTEM
            </h3>
            <p className="mb-custom-short text-custom-p max-w-screen-lg">
              Lorem ipsum dolor sit amet consectetur. Non velit euismod nulla
              iaculis turpis augue condimentum. Amet nec at risus laoreet
              ornare. In urna vel mauris iaculis morbi nibh est diam pretium.
              Odio.
            </p>
            <div className="mb-custom-long text-custom-p">
              <AnimatedLink
                href="./qr-code-check-in"
                icon={<RiArrowRightUpLine />}
              >
                VIEW MORE
              </AnimatedLink>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center lg:flex-row">
          <img
            className="mb-custom-medium rounded-3xl bg-slate-200 lg:h-[70vh] lg:w-1/2"
            src="/flowerBG.svg"
            alt="IMG"
          />
          <div className="flex flex-col lg:ml-20 lg:mt-36">
            <h3 className="mb-custom-short text-custom-h3 font-lagency">
              PERSONALIZED WEDDING WEBSITE
            </h3>
            <p className="mb-custom-short text-custom-p max-w-screen-lg">
              Lorem ipsum dolor sit amet consectetur. Non velit euismod nulla
              iaculis turpis augue condimentum. Amet nec at risus laoreet
              ornare. In urna vel mauris iaculis morbi nibh est diam pretium.
              Odio.
            </p>
            <div className="mb-custom-long text-custom-p">
              <AnimatedLink
                href="./wedding-website"
                icon={<RiArrowRightUpLine />}
              >
                VIEW MORE
              </AnimatedLink>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center lg:flex-row-reverse">
          <img
            className="mb-custom-medium rounded-3xl bg-slate-200 lg:h-[70vh] lg:w-1/2"
            src="/flowerBG.svg"
            alt="IMG"
          />
          <div className="flex flex-col lg:mr-20 lg:mt-36">
            <h3 className="mb-custom-short text-custom-h3 font-lagency">
              PERSONALIZED E-INVITATION
            </h3>
            <p className="mb-custom-short text-custom-p max-w-screen-lg">
              Lorem ipsum dolor sit amet consectetur. Non velit euismod nulla
              iaculis turpis augue condimentum. Amet nec at risus laoreet
              ornare. In urna vel mauris iaculis morbi nibh est diam pretium.
              Odio.
            </p>
            <div>
              <div className="mb-custom-long text-custom-p">
                <AnimatedLink
                  href="./e-invitation"
                  icon={<RiArrowRightUpLine />}
                >
                  VIEW MORE
                </AnimatedLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
