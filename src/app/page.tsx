import { VscCircleLargeFilled } from "react-icons/vsc";
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="font-lora mx-5 flex flex-col justify-center bg-black-default text-center xl:mx-20">
      <nav className="mb-10 xl:mb-28">
        <div className="my-5 flex items-center justify-between xl:my-10">
          <img className="h-6 w-6 xl:h-10 xl:w-10" src="/logo.png" alt="logo" />
          <div className="flex flex-row items-center">
            <a className="m-2 text-black-default xl:text-2xl">MENU</a>
            <VscCircleLargeFilled />
          </div>
        </div>
      </nav>
      <div className="relative">
        <img
          className="absolute -z-10 object-cover opacity-5"
          src="/flowerBG.svg"
          alt="flowerBG"
        />
        <div className="flex flex-col items-center">
          <h1 className="mb-6 flex font-lagency text-4xl xl:mb-10 xl:max-w-4xl xl:text-8xl">
            ENTRUST US WITH YOUR RSVP
          </h1>
          <p className="mb-8 flex max-w-lg justify-center text-xs xl:mb-32 xl:max-w-4xl xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur. Feugiat dolor arcu pulvinar
            et. Tempor id adipiscing et ac mauris a. Nunc viverra id ac nibh
            neque. Cum quam mi.
          </p>
        </div>
        <div className="mb-9 flex justify-center xl:mb-48">
          <img
            className="flex justify-center xl:h-[621px]"
            src="/flowerBG.svg"
            alt="IMG"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          <div className="mb-3 xl:mb-10">
            <h2 className="font-lagency text-2xl xl:text-6xl">
              LOREM IPSUM DOLOR SIT AMET
            </h2>
          </div>
          <div className="mb-12 flex justify-center xl:mb-52">
            <p className="max-w-lg text-xs xl:max-w-4xl xl:text-3xl">
              Lorem ipsum dolor sit amet consectetur. Egestas sem integer
              viverra duis arcu tempor. Duis est ornare tellus duis adipiscing
              morbi. Mi dignissim netus risus mattis maecenas id viverra.
              Iaculis mollis viverra semper dictumst donec.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col xl:flex-row">
          <img
            className="mb-6 rounded-3xl bg-slate-200 object-cover xl:h-[847px] xl:w-[636px]"
            src="/flowerBG.svg"
            alt="IMG"
          />
          <div className="flex flex-col xl:ml-20 xl:mt-36">
            <h3 className="mb-6 text-xl xl:mb-10 xl:text-5xl">
              Automated WhatsApp RSVP
            </h3>
            <p className="mb-12 xl:text-3xl">
              Lorem ipsum dolor sit amet consectetur. Non velit euismod nulla
              iaculis turpis augue condimentum. Amet nec at risus laoreet
              ornare. In urna vel mauris iaculis morbi nibh est diam pretium.
              Odio.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col xl:flex-row-reverse">
          <img
            className="mb-6 rounded-3xl bg-slate-200 object-cover xl:h-[847px] xl:w-[636px]"
            src="/flowerBG.svg"
            alt="IMG"
          />
          <div className="flex flex-col xl:mr-20 xl:mt-36">
            <h3 className="mb-6 text-xl xl:mb-10 xl:text-5xl">
              Automated WhatsApp RSVP
            </h3>
            <p className="mb-12 xl:text-3xl">
              Lorem ipsum dolor sit amet consectetur. Non velit euismod nulla
              iaculis turpis augue condimentum. Amet nec at risus laoreet
              ornare. In urna vel mauris iaculis morbi nibh est diam pretium.
              Odio.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col xl:flex-row">
          <img
            className="mb-6 rounded-3xl bg-slate-200 object-cover xl:h-[847px] xl:w-[636px]"
            src="/flowerBG.svg"
            alt="IMG"
          />
          <div className="flex flex-col xl:ml-20 xl:mt-36">
            <h3 className="mb-6 text-xl xl:mb-10 xl:text-5xl">
              Automated WhatsApp RSVP
            </h3>
            <p className="mb-12 xl:text-3xl">
              Lorem ipsum dolor sit amet consectetur. Non velit euismod nulla
              iaculis turpis augue condimentum. Amet nec at risus laoreet
              ornare. In urna vel mauris iaculis morbi nibh est diam pretium.
              Odio.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col xl:flex-row-reverse">
          <img
            className="mb-6 rounded-3xl bg-slate-200 object-cover xl:h-[847px] xl:w-[636px]"
            src="/flowerBG.svg"
            alt="IMG"
          />
          <div className="flex flex-col xl:mr-20 xl:mt-36">
            <h3 className="mb-6 text-xl xl:mb-10 xl:text-5xl">
              Automated WhatsApp RSVP
            </h3>
            <p className="mb-12 xl:text-3xl">
              Lorem ipsum dolor sit amet consectetur. Non velit euismod nulla
              iaculis turpis augue condimentum. Amet nec at risus laoreet
              ornare. In urna vel mauris iaculis morbi nibh est diam pretium.
              Odio.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-20 xl:mt-40">
          <h2 className="mb-20 text-2xl xl:text-6xl">
            TELL US ABOUT YOUR PLAN
          </h2>
        </div>
      </div>
      <div className="mb-6 flex flex-row items-center justify-center xl:mt-32">
        <div className="mx-2 flex flex-row items-center">
          <FaRegCopyright className="mr-1 h-2 w-2" />
          <p className="text-[8px] xl:text-xl">Amarento 2024</p>
        </div>
        <div className="mx-2 flex flex-row">
          <FaInstagram className="mx-1 object-contain xl:h-9 xl:w-9" />
          <FaWhatsapp className="mx-1 object-contain xl:h-9 xl:w-9" />
        </div>
      </div>
    </main>
  );
}
