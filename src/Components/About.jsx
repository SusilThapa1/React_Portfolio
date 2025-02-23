import React from "react";
import image from "../assets/hello.jpg";
import Education from "./Education";
const About = () => {
  return (
    <section
      id="about"
      className="flex w-full flex-col items-center justify-center gap-10 pt-16 text-center text-gray-300"
    >
      <h1 className="bg-custom-gradient bg-clip-text text-5xl font-semibold text-transparent">
        About Me
      </h1>
      <div className="flex w-full flex-col items-center justify-center gap-10 px-3 text-justify md:w-[80%] md:text-center">
        <p>
          I am a passionate frontend developer with a knack for crafting
          user-friendly, visually appealing, and responsive web interfaces. I
          specialize in technologies like React, Next.js, and Tailwind CSS, with
          a strong focus on delivering seamless user experiences. I'm always
          eager to learn, adapt, and bring creative ideas to life through code.
        </p>
        <div className="flex w-full items-center justify-center gap-20 px-10">
          <img
            src={image}
            alt="about"
            className="hidden h-auto w-auto md:block"
          />
          <div className="flex flex-col items-start justify-center gap-10 text-[3vw] lg:text-[1.5vw]">
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
              <span className="text-color2">2000</span>
            </div>
            <div className="flex items-center justify-start gap-4 text-center">
              <span className="font-semibold">Email:</span>
              <span className="text-color2">shrishthapaa@gmail.com</span>
            </div>
            <div className="flex items-center justify-start gap-4 text-center">
              <span className="font-semibold">Phone:</span>
              <span className="text-color2">9825821503</span>
            </div>
          </div>
        </div>
        <Education />
      </div>
    </section>
  );
};

export default About;
