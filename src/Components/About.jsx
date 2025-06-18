import image from "../assets/hel.png";
import Education from "./Education";
const About = () => {
  return (
    <section
      id="about"
      className="flex w-full scroll-mt-20 flex-col items-center justify-center text-center"
    >
      <h1 className="mb-10 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-3xl font-semibold text-transparent">
        About Me
      </h1>
      <div className="flex w-full flex-col items-center justify-center gap-10 text-justify md:text-center">
        <p className="text-justify text-sm leading-relaxed text-gray-600 md:text-lg">
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
            className="hidden rounded-full bg-transparent md:block"
          />
          <div className="flex flex-col items-start justify-center gap-10 text-sm leading-relaxed text-gray-900 md:text-lg">
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
      <hr className="w-full border border-gray-300" />
    </section>
  );
};

export default About;
