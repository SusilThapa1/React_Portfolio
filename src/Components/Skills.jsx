import {
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const icons = [
    { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-[#4198ca]" />, name: "CSS3" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaGithub className="" />, name: "GitHub" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
    { icon: <FaReact className="text-cyan-400" />, name: "React" },
    { icon: <SiNextdotjs className="text-gray-900" />, name: "Next.js" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-400" />, name: "Express.js" },
    { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  ];

  return (
    <div
      id="skills"
      className="flex w-full scroll-mt-16 flex-col items-center justify-center gap-8 py-10"
    >
      <div className="flex w-full flex-col items-center justify-center gap-6 text-center">
        <h1 className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-3xl font-semibold text-transparent">
          My Skills
        </h1>
        <p className="text-justify text-sm leading-relaxed text-gray-600 md:text-lg">
          I'm learning to build full-stack web applications using the MERN
          stack. I’ve been working with React and Tailwind CSS to create clean
          and responsive user interfaces.On the backend, I’ve been working with
          Node.js, Express, and MongoDB to build basic APIs and server-side
          functionality. I also use GitHub for version control and follow modern
          development practices as I continue to grow as a developer.
        </p>
      </div>

      <div className="grid w-full grid-cols-2 gap-6 p-5 pb-20 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {icons.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-gray-100 p-5 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-300"
          >
            <div className="text-6xl">{item.icon}</div>
            <h1 className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-center text-sm font-medium transition-all duration-500 group-hover:text-transparent md:text-lg">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
