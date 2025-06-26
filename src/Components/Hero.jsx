import { FaFacebookF, FaWhatsapp, FaGithub } from "react-icons/fa";
import heroImage from "../assets/file.png";
import Button from "./Button";
import { FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <main
      id="home"
      className="flex w-full scroll-mt-16 flex-col items-center justify-center py-20 md:h-screen"
    >
      <div className="flex w-full flex-col items-center gap-5 text-center md:flex-row-reverse md:justify-center md:gap-20 md:text-left lg:justify-evenly">
        {/* Image Section */}
        <div className="mb-5 h-40 w-40 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 p-1 md:h-60 md:w-60 lg:h-72 lg:w-72">
          <img
            className="h-full w-full rounded-full bg-[#2c2c2c] object-cover transition-colors duration-500"
            src={heroImage}
            alt="profile"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center justify-center gap-5 text-center md:items-start">
          <h1 className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl md:text-4xl">
            I'm Susil Thapa,
          </h1>
          <span className="lg:2xl mt-1 text-lg font-semibold text-gray-800 md:text-xl">
            frontend developer based in Nepal.
          </span>
          <p className="text-justify text-sm leading-relaxed text-gray-600 md:max-w-md md:text-lg">
            I’m a frontend developer focused on building clean, responsive, and
            user-friendly web interfaces with React and Tailwind CSS. I know the
            basics of Next.js and I’m learning backend technologies to become a
            full-stack developer.
          </p>

          {/* Buttons */}
          <div className="flex w-full flex-col items-center gap-3 md:items-start">
            <div className="flex w-full items-center justify-center gap-5 text-sm md:justify-start">
              <a href="#contact" className="w-auto">
                <Button
                  type="button"
                  bg="custom-gradient"
                  text="Connect With Me"
                />
              </a>
              <a
                href="/SusilThapaResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto"
              >
                <Button type="button" text="See My Resume" />
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-4 flex w-full items-center justify-center gap-5 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-2xl text-gray-800 md:justify-start">
              <a
                href="https://www.facebook.com/susil.thapa.3363334"
                target="_blank"
                rel="noopener noreferrer"
                title="facebook"
                className="transition-all duration-500 hover:-translate-y-2 hover:text-blue-600"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/9825821503"
                target="_blank"
                rel="noopener noreferrer"
                title="whatsapp"
                className="transition-all duration-500 hover:-translate-y-2 hover:text-green-500"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://github.com/SusilThapa1"
                target="_blank"
                rel="noopener noreferrer"
                title="github"
                className="transition-all duration-500 hover:-translate-y-2 hover:text-gray-600"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/susilthapa1"
                target="_blank"
                rel="noopener noreferrer"
                title="linkedin"
                className="transition-all duration-500 hover:-translate-y-2 hover:text-sky-600"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
