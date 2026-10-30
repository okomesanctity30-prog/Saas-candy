import { useState } from "react";
import Logo from "./Logo";
import { headerData } from "../constants/menuData";
import HeaderLink from "./HeaderLink";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  const handleScrool = () => {
    setSticky(window.scrollY >= 80);
  };
  return (
    <header
      className={`fixed top-0 py-1 z-50 w-full bg-transparent transition-all ${
        sticky ? "shadow-lg bg-white dark:bg-darklight" : "shadow-none"
      }`}
    >
      <div
        className={`container mx-auto lg:max-w-xl md:max-w-screen-md flex items-center justify-between xl:gap-15 gap-10 duration-300 px-4 ${
          sticky ? "py-3" : "py-6"
        }`}
      >
        <Logo />
        <ul className="hidden xl:flex flex-grow items-center justify-start gap-10 duration-300 px-4">
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center text-body-color duration-300 hover:cursor-pointer hover:text-primary dark:text-white bg-white rounded-lg p-2 outline-none"></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
