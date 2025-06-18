import { GoPerson } from "react-icons/go";
import Button from "./Button";
const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 py-5">
      <div className="flex w-full flex-col gap-5 text-sm leading-relaxed md:text-lg">
        {/* <div className="mad-w-md flex w-full items-center justify-center gap-5 text-sm md:text-base">
          <p>Terms and conditions</p>
          <p>Privacy policy</p>
          <a href="#contact">
            <p>Contact me</p>
          </a>
        </div> */}
        <p className="bg-gradient-to-l from-cyan-400 to-blue-600 bg-clip-text text-center text-transparent md:text-lg">
          © {new Date().getFullYear()} Susil Thapa. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
