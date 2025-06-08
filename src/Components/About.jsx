import React from "react";
import image from "../assets/hello.jpg";
import Education from "./Education";
const About = () => {
  return (
    <section
      id="about"
      className="flex w-full flex-col items-center justify-center pt-20 text-center text-gray-300"
    >
      <h1 className="mb-10 text-3xl font-semibold text-cyan-500">About Me</h1>
      <div className="flex w-full flex-col items-center justify-center gap-10 text-justify md:text-center">
        <p className="text-justify text-sm leading-relaxed text-gray-400 md:text-lg">
          I am a passionate frontend developer with a knack for crafting
          user-friendly, visually appealing, and responsive web interfaces. I
          specialize in technologies like React, Next.js, and Tailwind CSS, with
          a strong focus on delivering seamless user experiences. I'm always
          eager to learn, adapt, and bring creative ideas to life through code.
        </p>
        <div className="flex w-full items-center justify-center gap-20">
          <img
            src={image}
            alt="about"
            className="hidden h-[80vh] w-auto bg-transparent md:block"
          />
          <div className="flex flex-col items-start justify-center gap-10 text-sm leading-relaxed text-gray-400 md:text-lg">
            <div className="flex items-center justify-start gap-4 text-center">
              <span className="font-semibold">Name:</span>
              <span className="text-color2">Susil Thapa</span>
            </div>
            <div className="flex items-center justify-start gap-4 text-center">
              <span className="font-semibold">Date Of birth:</span>
              <span className="text-color2">November 05, 2001</span>
            </div>
            <div className="flex items-center justify-start gap-4 text-center">
              <span className="font-semibold">Address:</span>
              <span className="text-color2">Bardibas, Mahottari</span>
            </div>
            <div className="flex items-center justify-start gap-4 text-center">
              <span className="font-semibold">Zip code:</span>
              <span className="text-color2">45700</span>
            </div>
            <div className="flex items-center justify-start gap-4 text-center">
              <span className="font-semibold">Email:</span>
              <span className="text-color2">shrishthapaa@gmail.com</span>
            </div>
            <div className="flex items-center justify-start gap-4 text-center">
              <span className="font-semibold">Phone:</span>
              <span className="text-color2">9763493276</span>
            </div>
          </div>
        </div>
        <Education />
      </div>
      <hr className="w-full border border-gray-500" />
    </section>
  );
};

export default About;
