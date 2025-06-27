import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Button from "./Button";

const Header = () => {
  const navLinks = [
    { link: "#home", name: "Home" },
    { link: "#about", name: "About me" },
    { link: "#skills", name: "Skills" },
    { link: "#projects", name: "Projects" },
    { link: "#contact", name: "Contact" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("");

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleActiveLink = (navLink) => {
    setActiveNavLink(navLink);
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-transparent px-5 shadow-lg backdrop-blur-md md:px-10 lg:px-20">
      <div className="relative z-20 flex items-center justify-between py-3">
        <h1
          onClick={goToTop}
          className="cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-2xl font-bold text-transparent"
        >
          S.THAPA
        </h1>

        <ul className={`hidden items-center justify-center gap-5 md:flex`}>
          {navLinks.map((navLink, index) => (
            <li
              onClick={() => handleActiveLink(navLink.name)}
              key={index}
              className={`cursor-pointer from-cyan-400 to-blue-600 font-medium transition-colors duration-500 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent ${activeNavLink === navLink.name ? "bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent" : ""}`}
            >
              <a href={navLink.link}>{navLink.name}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:block">
          <Button type="button" text="Connect With Me" />
        </a>

        <div onClick={handleMenu} className="cursor-pointer text-2xl md:hidden">
          {menuOpen ? (
            <IoClose className="text-red-500" />
          ) : (
            <FiMenu className="text-cyan-400" />
          )}
        </div>
      </div>

      {/* mobile menu */}
      <ul
        className={`absolute right-0 top-[56px] z-10 flex h-screen w-1/2 flex-col items-center gap-14 bg-gray-200 p-5 font-semibold transition-transform duration-500 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((navLink, index) => (
          <li
            onClick={() => {
              handleActiveLink(navLink.name), setMenuOpen(false);
            }}
            key={index}
            className={`cursor-pointer font-medium transition-colors duration-500 hover:text-cyan-400 ${activeNavLink === navLink.name ? "bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent" : ""}`}
          >
            <a href={navLink.link}>{navLink.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
