import React from "react";
import heroImage from "../assets/file.png";
import Button from "./Button";
const Hero = () => {
  return (
    <main
      id="home"
      className="flex h-full w-full items-center justify-center pt-16"
    >
      <div className="flex w-[90%] flex-col items-center justify-center gap-8 text-center md:w-[50%]">
        <img
          className="h-40 w-40 rounded-[50%] bg-white object-cover"
          src={heroImage}
          alt="profile"
        />
        <h1 className="bg-custom-gradient bg-clip-text text-[4.5vw] font-semibold text-transparent">
          I'm Susil Thapa,
        </h1>
        <span className="text-[3.2vw] font-semibold text-gray-300">
          frontend developer based in Nepal.
        </span>
        <p className="text-justify text-gray-300 md:text-center">
          I am a passionate frontend developer with a knack for crafting
          user-friendly and responsive web interfaces. I have skills in
          technologies like React, Next.js, and Tailwind CSS, with a strong
          focus on delivering seamless user experiences.
        </p>
        <div className="flex gap-5 text-[13px] md:text-lg">
          <a href="#contact">
            <Button type="button" bg="custom-gradient" text="Connect With Me" />
          </a>
          <a
            href="/Frontend_Developer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="button" text="My Resume" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
