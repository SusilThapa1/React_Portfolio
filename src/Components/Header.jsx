import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Button from "./Button";

const Header = () => {
  // const navLinks = ["Home", "About Me", "Services", "Skills", "Contact"];
  const navLinks = [
    { link: "#home", name: "Home" },
    { link: "#about", name: "About me" },
    { link: "#skills", name: "Skills" },
    { link: "#projects", name: "Projects" },
    { link: "#contact", name: "Contact" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("Home");

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleActiveLink = (navLink) => {
    setActiveNavLink(navLink);
  };

  return (
    <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-[#1a1a1a] px-4 text-white">
      <h1 className="cursor-pointer text-3xl font-bold text-cyan-500">
        S.THAPA
      </h1>
      <nav>
        <ul
          className={`absolute right-0 top-16 z-10 flex h-screen w-1/2 flex-col items-center gap-14 bg-[#1a1a1a] p-5 text-lg text-gray-300 transition-transform duration-500 ease-in-out md:relative md:top-0 md:h-0 md:w-full md:translate-x-0 md:flex-row md:gap-3 md:bg-transparent ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((navLink, index) => (
            <li
              onClick={() => handleActiveLink(navLink.name)}
              key={index}
              className={`cursor-pointer font-semibold transition-colors duration-500 hover:text-cyan-400 ${activeNavLink === navLink.name ? "text-cyan-500" : ""}`}
            >
              <a href={navLink.link}>{navLink.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden md:block">
        <a href="#contact">
          <Button type="button" text="Connect With Me" />
        </a>
      </div>
      <div
        onClick={handleMenu}
        className="z-50 cursor-pointer text-2xl md:hidden"
      >
        {menuOpen ? <IoClose /> : <FiMenu />}
      </div>
    </header>
  );
};

export default Header;
