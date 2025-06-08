import React from "react";
import heroImage from "../assets/file.png";
import Button from "./Button";

const Hero = () => {
  return (
    <main
      id="home"
      className="flex min-h-screen w-full flex-col items-center justify-center pt-20"
    >
      <div className="flex w-full flex-col items-center gap-5 pb-20 text-center md:flex-row-reverse md:justify-center md:gap-20 md:text-left lg:justify-evenly">
        {/* Image Section */}
        <div className="mb-5 h-40 w-40 md:h-60 md:w-60 lg:h-72 lg:w-72">
          <img
            className="h-full w-full rounded-full border-4 border-dotted border-cyan-600 object-cover transition-colors duration-500"
            src={heroImage}
            alt="profile"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center justify-center gap-5 text-center md:items-start">
          <h1 className="text-xl font-semibold text-cyan-500 sm:text-2xl md:text-4xl">
            I'm Susil Thapa,
          </h1>
          <span className="lg:2xl mt-1 text-lg font-semibold text-gray-400 md:text-xl">
            frontend developer based in Nepal.
          </span>
          <p className="text-justify text-sm leading-relaxed text-gray-400 md:max-w-md md:text-lg">
            I’m a frontend developer focused on building clean, responsive, and
            user-friendly web interfaces with React and Tailwind CSS. I know the
            basics of Next.js and I’m learning backend technologies to become a
            full-stack developer.
          </p>

          {/* Buttons */}
          <div className="flex w-full items-center justify-center gap-5 text-sm md:justify-start">
            <a href="#contact" className="w-auto">
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
              className="w-auto"
            >
              <Button type="button" text="See My Resume" />
            </a>
          </div>
        </div>
      </div>
      <hr className="w-full border border-gray-500" />
    </main>
  );
};

export default Hero;
