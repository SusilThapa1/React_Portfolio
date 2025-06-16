import React from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import proj5 from "../assets/proj5.png";
import proj6 from "../assets/proj6.png";
import Button from "./Button";
const Projects = () => {
  const projectImages = [
    {
      name: "Rock Paper Scissor Game",
      image: proj1,
      tech: "HTML,CSS,Javascript",
      gitLink: "",
    },
    { name: "Hotel and Resort", image: proj2, tech: "HTML,CSS", gitLink: "" },
    {
      name: "Personal Portfolio",
      image: proj3,
      tech: "HTML,Tailwind CSS",
      gitLink: "https://github.com/SusilThapa1/-Portfolio.git",
    },
    {
      name: "Firebase Contact App",
      image: proj4,
      tech: "React , CSS Modules",
      gitLink: "https://github.com/SusilThapa1/Firebase_Contact.git",
    },
    {
      name: "Dice Game",
      image: proj5,
      tech: "React , CSS Modules",
      gitLink: "",
    },
    {
      name: "Dummy Products",
      image: proj6,
      tech: "Next.js, Taiwind CSS",
      gitLink: "https://github.com/SusilThapa1/Dummy-Project.git",
    },
  ];

  return (
    <div
      id="projects"
      className="flex flex-col items-center gap-10 pt-20 text-gray-300"
    >
      <h1 className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-center text-3xl font-semibold text-transparent">
        My Projects
      </h1>
      <div className="grid w-full grid-cols-1 gap-10 pb-20 md:grid-cols-2 lg:grid-cols-3">
        {projectImages.map((projImg, i) => (
          <div
            key={i}
            className="flex h-auto w-auto flex-col justify-center gap-5 rounded-lg bg-transparent"
          >
            <img
              src={projImg.image}
              alt="Project"
              className="object-fit aspect-[9/5] h-auto w-auto rounded-lg"
            />
            <h1 className="text-lg font-semibold md:text-xl">{projImg.name}</h1>
            <p className="text-sm md:text-lg">
              Technologies used: {projImg.tech}
            </p>

            <a href={projImg.gitLink} target="blank">
              <Button text="View Code" bg="bg-cyan-400" />
            </a>
          </div>
        ))}
      </div>
      <hr className="w-full border border-gray-500" />
    </div>
  );
};

export default Projects;
