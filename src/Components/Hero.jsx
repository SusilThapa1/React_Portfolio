import React from "react";
import heroImage from "../assets/file.png";
import Button from "./Button";

const Hero = () => {
  return (
    <main
      id="home"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-5 pt-24"
    >
      <div className="flex flex-col items-center gap-8 pb-20 text-center md:flex-row md:text-left">
        {/* Image Section */}
        <img
          className="h-40 w-40 rounded-full border-4 border-dotted border-cyan-600 object-cover transition-colors duration-500 md:h-48 md:w-48"
          src={heroImage}
          alt="profile"
        />

        {/* Text Section */}
        <div className="flex flex-col items-center gap-5 md:items-start">
          <h1 className="text-4xl font-semibold text-cyan-500 sm:text-5xl md:text-6xl">
            I'm Susil Thapa,
          </h1>
          <span className="mt-1 text-xl font-semibold text-gray-300 sm:text-2xl md:text-3xl">
            frontend developer based in Nepal.
          </span>
          <p className="mt-4 max-w-md text-justify text-gray-300 sm:max-w-lg md:max-w-md md:text-left">
            I’m a frontend developer focused on building clean, responsive, and
            user-friendly web interfaces with React and Tailwind CSS. I know the
            basics of Next.js and I’m learning backend technologies to become a
            full-stack developer.
          </p>

          {/* Buttons */}
          <div className="flex w-full items-center justify-center gap-4 text-sm sm:text-base">
            <a href="#contact" className="w-full sm:w-auto">
              <Button
                type="button"
                bg="custom-gradient"
                text="Connect With Me"
              />
            </a>
            <a
              href="/Frontend_Developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button type="button" text="My Resume" />
            </a>
          </div>
        </div>
      </div>
      <hr className="w-full border border-gray-500" />
    </main>
  );
};

export default Hero;
