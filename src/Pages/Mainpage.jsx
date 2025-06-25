import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

const Mainpage = () => {
  return (
    <>
      <Hero />
      <hr className="w-full border border-gray-300" />
      <About />
      <hr className="w-full border border-gray-300" />
      <Skills />
      <hr className="w-full border border-gray-300" />
      <Projects />
      <hr className="w-full border border-gray-300" />
      <Contact />
      <hr className="w-full border border-gray-300" />
    </>
  );
};

export default Mainpage;
