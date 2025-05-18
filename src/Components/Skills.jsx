import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/javascript.png";
import githubIcon from "../assets/git-hub-icon.png";
import reactIcon from "../assets/react.png";
import nextIcon from "../assets/nextjs.svg";

const Skills = () => {
  const icons = [
    { image: htmlIcon, name: "HTML5", percentage: "95%" },
    { image: cssIcon, name: "CSS3", percentage: "85%" },
    { image: jsIcon, name: "JavaScript", percentage: "80%" },
    { image: githubIcon, name: "GitHub", percentage: "50%" },
    { image: reactIcon, name: "React", percentage: "75%" },
    { image: nextIcon, name: "Next.js", percentage: "50%" },
  ];
  return (
    <div
      id="skills"
      className="flex w-full flex-col items-center justify-center gap-5 pt-16 text-gray-300"
    >
      <div className="flex w-full flex-col items-center justify-center gap-10 px-3 text-justify md:w-[80%] md:text-center">
        <h1 className="text-center text-5xl font-semibold text-cyan-400">
          My Skills
        </h1>
        <p>
          I have skills in React/Next.js, Tailwind CSS and basic knowledge of
          version control systems (git/github) with experience in building
          frontend applications. I am also familiar with creating dynamic UI
          components, managing state, and integrating modals for interactive
          features. My expertise extends to developing user-friendly web apps
          and implementing modern design principles for optimal user
          experiences.
        </p>
      </div>
      <div className="grid h-auto w-full grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center gap-5 rounded-lg bg-[#303031] p-4"
          >
            <div className="flex items-center justify-center gap-4">
              <img
                src={icon.image}
                alt={icon.name}
                className="h-12 w-12 rounded-full"
              />
              <h1>{icon.name}</h1>
            </div>
            <div className="h-3 w-full rounded-full bg-transparent">
              <div
                className={`relative h-3 rounded-full bg-cyan-400 group-hover:animate-progress`}
                style={{ maxWidth: icon.percentage }}
              >
                <span className="absolute -right-5 -top-5">
                  {icon.percentage}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
