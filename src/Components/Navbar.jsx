import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const navLinks = ["Home", "About Me", "Services", "Portfolio", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative flex h-16 items-center justify-between px-4 text-white">
      <h1 className="bg-custom-gradient cursor-pointer bg-clip-text text-3xl font-bold text-transparent">
        S.THAPA
      </h1>

      <ul
        className={`bg-custom-gradient absolute right-0 top-16 flex flex-col items-center gap-14 bg-clip-text p-5 text-transparent transition-transform duration-500 ease-in-out md:relative md:top-0 md:translate-x-0 md:flex-row md:gap-4 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((navLink, index) => (
          <li key={index} className="cursor-pointer hover:text-orange-400">
            {navLink}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="bg-custom-gradient hidden rounded-full px-4 py-2 text-base transition-all duration-300 hover:scale-105 md:block"
      >
        Connect With Me
      </button>

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
