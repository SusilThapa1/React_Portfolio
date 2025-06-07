import { GoPerson } from "react-icons/go";
import Button from "./Button";
const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 to-gray-300 py-5">
      <div className="flex w-full flex-col gap-5 text-[3vw] md:text-base">
        <div className="flex items-center justify-between gap-5 text-[3vw] md:text-base">
          <p>Terms and conditions</p>
          <p>Privacy policy</p>
          <a href="#contact">
            <p>Contact me</p>
          </a>
        </div>
        <p className="text-center md:text-lg">
          © {new Date().getFullYear()} Susil Thapa. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
