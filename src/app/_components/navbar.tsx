import { VscCircleLargeFilled } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className="-z-1 fixed left-0 top-0 w-full">
      <div className="m-5 flex items-center justify-between sm:m-8 md:m-10 lg:m-12 xl:m-14">
        <img
          className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14"
          src="/logo.svg"
          alt="logo"
        />
        <div className="flex flex-row items-center">
          <VscCircleLargeFilled className="h-4 w-4 cursor-pointer text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
