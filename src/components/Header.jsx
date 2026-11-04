import { useRef, useState } from "react";
import Logo from "./Logo";
import { headerData } from "../constants/menuData";
import HeaderLink from "./HeaderLink";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(true);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const { theme, setTheme } = useTheme();
  const navbarRef = useRef();
  const signInRef = useRef();
  const signUpRef = useRef();
  const mobileMenuRef = useRef();

  const handleScrool = () => {
    setSticky(window.scrollY >= 80);
  };

  // const handleclickOutside = (event) => {

  // }
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
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center text-body-color duration-300 hover:cursor-pointer hover:text-primary dark:text-white bg-white rounded-lg p-2 outline-none"
          >
            <Icon
              icon="solar:sun-2-bold"
              width="24"
              height="24"
              className="hidden dark:block"
            />
            <Icon
              icon="solar:moon-bold"
              width="24"
              height="24"
              className="dark:hidden block"
            />
          </button>
          <Link
            to="/login"
            className="hidden xl:block bg-transparent border border-primary text-primary px-4 py-2 rounded-lg outline-none hover:bg-primary hover:text-white duration-500 text-base font-semibold"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="hidden xl:block bg-primary border border-primary text-white px-4 py-2 rounded-lg outline-none hover:bg-orange-600 duration-500 text-base font-semibold"
          >
            Sign Up
          </Link>
          <button
            className="block xl:hidden p-2 rounded-lg"
            aria-label="Toggle mobile menu"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="block w-6 h-0.5 bg-primary dark:bg-primary"></span>
            <span className="block w-6 h-0.5 bg-primary dark:bg-primary mt-1.5"></span>
            <span className="block w-6 h-0.5 bg-primary dark:bg-primary mt-1.5"></span>
          </button>
        </div>
      </div>

      {navbarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
      )}
      <div
        ref={mobileMenuRef}
        className={`xl:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-darklight shadow-lg transform transition-transform duration-300 max-w-xs ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <Logo />
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="dark:text-midnight_text"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
