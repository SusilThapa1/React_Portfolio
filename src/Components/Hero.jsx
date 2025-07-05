import { FaFacebookF, FaWhatsapp, FaGithub } from "react-icons/fa";
import heroImage from "../assets/file.png";
import Button from "./Button";
import { FaLinkedin } from "react-icons/fa6";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["<Frontend Developer", "<MERN Stack Enthusiast"],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 100,
  });
  console.log(text);

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
        <div className="flex flex-col items-center justify-center gap-5 md:items-start">
          <h1 className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-xl font-extrabold text-transparent sm:text-2xl md:text-4xl">
            Hello, Everyone <span className="text-yellow-400">👋</span>
          </h1>
          <div className="mt-1 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-lg font-extrabold text-transparent md:text-3xl">
            I’M SUSIL THAPA <br />
            <span className="glow-text w-full font-medium">A {text}</span>
            <span className="glow-text text-blue-600">
              <Cursor cursorStyle="/>" />
            </span>
          </div>
          <p className="mt-2 max-w-md text-justify text-gray-600">
            I love building clean, responsive, and easy-to-use websites using
            React with Tailwindcss and the MERN stack.
          </p>

          {/* Buttons */}
          <div className="flex w-full flex-col items-center gap-3 md:items-start">
            <div className="flex w-full items-center justify-center gap-5 text-sm md:justify-start">
              <a href="#projects" className="w-auto">
                <Button type="button" bg="custom-gradient" text="My Projects" />
              </a>
              <a
                href="/SusilThapaResume1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto"
              >
                <Button type="button" text="My Resume" />
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-4 flex w-full items-center justify-center gap-5 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-2xl text-gray-800 md:justify-start">
              <a
                href="https://www.facebook.com/susil.thapa.3363334"
                target="_blank"
                rel="noopener noreferrer"
                title="facebook"
                className="transition-all duration-500 hover:-translate-y-2"
              >
                <FaFacebookF className="text-[#248dec] hover:text-[#0866ff]" />
              </a>
              <a
                href="https://wa.me/9825821503"
                target="_blank"
                rel="noopener noreferrer"
                title="whatsapp"
                className="transition-all duration-500 hover:-translate-y-2"
              >
                <FaWhatsapp className="text-[#248dec] hover:text-green-600" />
              </a>
              <a
                href="https://github.com/SusilThapa1"
                target="_blank"
                rel="noopener noreferrer"
                title="github"
                className="transition-all duration-500 hover:-translate-y-2"
              >
                <FaGithub className="text-[#248dec] hover:text-gray-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/susilthapa1"
                target="_blank"
                rel="noopener noreferrer"
                title="linkedin"
                className="transition-all duration-500 hover:-translate-y-2"
              >
                <FaLinkedin className="text-[#248dec] hover:text-[#0a66c2]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
