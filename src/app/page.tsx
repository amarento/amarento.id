import { VscCircleLargeFilled } from "react-icons/vsc";
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="font-lora mx-20 flex flex-col justify-center bg-black-default text-center">
      <nav>
        <div className="flex items-center justify-between xl:my-10">
          <img className="h-10 w-10" src="/logo.png" alt="logo" />
          <div className="flex flex-row items-center">
            <a className="text-black-default xl:m-2 xl:text-2xl">MENU</a>
            <VscCircleLargeFilled />
          </div>
        </div>
      </nav>
      <div className="relative h-screen">
        <img
          className="absolute -z-10 object-cover opacity-5"
          src="/flowerBG.svg"
          alt="flowerBG"
        />
        <div className="flex flex-col items-center">
          <h1 className="flex font-lagency xl:mb-10 xl:mt-28 xl:max-w-4xl xl:text-8xl">
            ENTRUST US WITH YOUR RSVP
          </h1>
          <p className="flex justify-center xl:mb-32 xl:max-w-4xl xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur. Feugiat dolor arcu pulvinar
            et. Tempor id adipiscing et ac mauris a. Nunc viverra id ac nibh
            neque. Cum quam mi.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            className="flex h-[621px] justify-center"
            src="/flowerBG.svg"
            alt="IMG"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          <div className="xl:mb-10">
            <h2 className="font-lagency xl:text-6xl">
              LOREM IPSUM DOLOR SIT AMET
            </h2>
          </div>
          <div className="flex justify-center xl:mb-52">
            <p className="xl:max-w-4xl xl:text-3xl">
              Lorem ipsum dolor sit amet consectetur. Egestas sem integer
              viverra duis arcu tempor. Duis est ornare tellus duis adipiscing
              morbi. Mi dignissim netus risus mattis maecenas id viverra.
              Iaculis mollis viverra semper dictumst donec.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row">
          <img
            className="h-[847px] w-[636px] rounded-3xl bg-slate-200 object-cover"
            src="/flowerBG.svg"
            alt="IMG"
          />
          <div className="flex flex-col xl:ml-20 xl:mt-36">
            <h3 className="xl:mb-10 xl:text-5xl">Automated WhatsApp RSVP</h3>
            <p className="xl:text-3xl">
              Lorem ipsum dolor sit amet consectetur. Non velit euismod nulla
              iaculis turpis augue condimentum. Amet nec at risus laoreet
              ornare. In urna vel mauris iaculis morbi nibh est diam pretium.
              Odio.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row">
          <div className="flex flex-col xl:mr-20 xl:mt-36">
            <h3 className="xl:mb-10 xl:text-5xl">Automated WhatsApp RSVP</h3>
            <p className="xl:text-3xl">
              Lorem ipsum dolor sit amet consectetur. Non velit euismod nulla
              iaculis turpis augue condimentum. Amet nec at risus laoreet
              ornare. In urna vel mauris iaculis morbi nibh est diam pretium.
              Odio.
            </p>
          </div>
          <img
            className="h-[847px] w-[636px] rounded-3xl bg-slate-200 object-cover"
            src="/flowerBG.svg"
            alt="IMG"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-row">
          <img
            className="h-[847px] w-[636px] rounded-3xl bg-slate-200 object-cover"
            src="/flowerBG.svg"
            alt="IMG"
          />
          <div className="flex flex-col xl:ml-20 xl:mt-36">
            <h3 className="xl:mb-10 xl:text-5xl">Automated WhatsApp RSVP</h3>
            <p className="xl:text-3xl">
              Lorem ipsum dolor sit amet consectetur. Non velit euismod nulla
              iaculis turpis augue condimentum. Amet nec at risus laoreet
              ornare. In urna vel mauris iaculis morbi nibh est diam pretium.
              Odio.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row">
          <div className="flex flex-col xl:mr-20 xl:mt-36">
            <h3 className="xl:mb-10 xl:text-5xl">Automated WhatsApp RSVP</h3>
            <p className="xl:text-3xl">
              Lorem ipsum dolor sit amet consectetur. Non velit euismod nulla
              iaculis turpis augue condimentum. Amet nec at risus laoreet
              ornare. In urna vel mauris iaculis morbi nibh est diam pretium.
              Odio.
            </p>
          </div>
          <img
            className="h-[847px] w-[636px] rounded-3xl bg-slate-200 object-cover"
            src="/flowerBG.svg"
            alt="IMG"
          />
        </div>
      </div>
      <div>
        <div className="xl:mt-40">
          <h2 className="xl:text-6xl">TELL US ABOUT YOUR PLAN</h2>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center xl:mt-32 mb-6">
        <div className="flex flex-row items-center mx-2">
          <FaRegCopyright className="mr-1" />
          <p className="text-xl">Amarento 2024</p>
        </div>
        <div className="flex flex-row mx-2">
          <FaInstagram className="mx-1 object-contain h-9 w-9"/>
          <FaWhatsapp className="mx-1 object-contain h-9 w-9"/>
        </div>
      </div>
    </main>
  );
}
