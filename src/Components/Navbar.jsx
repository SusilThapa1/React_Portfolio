import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Button from "./Button";

const Navbar = () => {
  const navLinks = ["Home", "About Me", "Services", "Portfolio", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 flex h-16 w-full items-center justify-between bg-[#1a1a1a] px-4 text-white">
      <h1 className="cursor-pointer bg-custom-gradient bg-clip-text text-3xl font-bold text-transparent">
        S.THAPA
      </h1>

      <ul
        className={`absolute right-0 top-16 z-10 flex h-screen flex-col items-center gap-14 bg-[#1a1a1a] p-5 text-lg transition-transform duration-500 ease-in-out md:relative md:top-0 md:h-0 md:translate-x-0 md:flex-row md:gap-3 md:bg-transparent ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((navLink, index) => (
          <li
            key={index}
            className="cursor-pointer bg-custom-gradient bg-clip-text text-transparent hover:text-orange-400"
          >
            {navLink}
          </li>
        ))}
      </ul>
      <div className="hidden md:block">
        <Button type="button" bg="custom-gradient" text="Connect With Me" />
      </div>
      <div
        onClick={handleMenu}
        className="z-50 cursor-pointer text-2xl md:hidden"
      >
        {menuOpen ? <IoClose /> : <FiMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
