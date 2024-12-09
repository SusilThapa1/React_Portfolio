import { GoPerson } from "react-icons/go";
import Button from "./Button";
const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 to-gray-300 px-4 py-16">
      <div className="flex w-full flex-col items-start gap-10 px-10 md:flex-row md:items-center">
        <div className="flex w-full flex-col items-start gap-3 md:w-1/2">
          <h1 className="text-4xl font-semibold">SUSIL</h1>
          <p className="w-full text-justify md:w-2/3">
            I am a passionate frontend developer with a knack for crafting
            user-friendly and responsive web interfaces. I have skills in
            technologies like React, Next.js, and Tailwind CSS, with a strong
            focus on delivering seamless user experiences.
          </p>
        </div>
        <div className="flex w-full flex-col gap-5 sm:flex-row md:w-1/2 md:items-center">
          <div className="relative flex w-full items-center">
            <GoPerson className="absolute left-2 text-2xl text-gray-300" />
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Enter your email address"
              className="rounded-full border-none bg-gray-600 py-2.5 pl-9"
            />
          </div>
          <div className="w-1/3 md:w-full">
            <Button text="Subscribe" bg="custom-gradient" type="button" />
          </div>
        </div>
      </div>
      <hr className="w-full border-2 border-gray-500" />

      <div className="flex w-full flex-col gap-5">
        <p className="text-center text-lg">
          © 2024 Susil Thapa. All rights reserved.
        </p>
        <div className="flex items-center justify-between px-10">
          <p>Terms and conditions</p>
          <p>Privacy policy</p>
          <a href="#contact">
            <p>Contact me</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
