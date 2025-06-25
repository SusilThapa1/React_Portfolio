// import proj1 from "../assets/proj1.png";
import video1 from "../assets/paperScissorRock.mp4";
import video2 from "../assets/TourAndTravel.mp4";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import video3 from "../assets/DiceRoll.mp4";
import proj6 from "../assets/proj6.png";
import Button from "./Button";
const Projects = () => {
  const projectImages = [
    {
      name: "Rock Paper Scissor Game",
      // image: proj1,
      video: video1,
      tech: "HTML,CSS,Javascript",
      gitLink: "https://github.com/SusilThapa1/Game",
    },
    {
      name: "Tour and Travels",
      video: video2,
      tech: "React, Tailwind CSS",
      gitLink: "https://github.com/SusilThapa1/TourAndTravelWeb",
    },
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
      video: video3,
      tech: "React , CSS Modules",
      gitLink: "https://github.com/SusilThapa1/Dice_Roll_Game",
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
      className="flex scroll-mt-20 flex-col items-center gap-10 py-10"
    >
      <h1 className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-center text-3xl font-semibold text-transparent">
        My Projects
      </h1>
      <div className="grid w-full grid-cols-1 gap-10 pb-20 md:grid-cols-2 lg:grid-cols-3">
        {projectImages.map((projImg, i) => (
          <div
            key={i}
            className="flex h-auto w-auto flex-col justify-center gap-5 rounded-lg bg-transparent"
          >
            {projImg.image ? (
              <img
                src={projImg.image}
                alt="Project"
                className="object-fit aspect-[9/5] h-auto w-auto rounded-lg"
              />
            ) : (
              <video
                src={projImg.video}
                autoPlay
                loop
                className="object-fit aspect-video h-auto w-auto rounded-lg"
              />
            )}

            <h1 className="text-lg font-semibold md:text-xl">{projImg.name}</h1>
            <p className="text-sm md:text-lg">Tech Stack: {projImg.tech}</p>

            <a href={projImg.gitLink} target="blank">
              <Button text="View Code" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
