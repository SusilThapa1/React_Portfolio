import React from "react";
import heroImage from "../assets/file.png";
import Button from "./Button";
const Hero = () => {
  return (
    <main className="mt-16 flex h-full w-full items-center justify-center py-10">
      <div className="flex w-[90%] flex-col items-center justify-center gap-8 text-center md:w-[50%]">
        <img
          className="h-40 w-40 rounded-[50%] bg-white object-cover"
          src={heroImage}
          alt="profile"
        />
        <h1 className="font-semibold">
          <span className="bg-custom-gradient bg-clip-text text-[4.5vw] text-transparent">
            I'm Susil Thapa,
          </span>
          <span className="text-[3vw] text-gray-300">
            frontend developer based in Nepal.
          </span>
        </h1>
        <p className="text-justify text-gray-300 md:text-center">
          I am a passionate frontend developer with a knack for crafting
          user-friendly and responsive web interfaces. I have skills in
          technologies like React, Next.js, and Tailwind CSS, with a strong
          focus on delivering seamless user experiences.
        </p>
        <div className="flex gap-5 text-[13px] md:text-lg">
          <Button type="button" bg="custom-gradient" text="Connect With Me" />
          <Button type="button" text="My Resume" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
