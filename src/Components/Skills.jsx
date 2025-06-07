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
    { icon: <FaGithub className="text-gray-300" />, name: "GitHub" },
    { icon: <FaReact className="text-cyan-400" />, name: "React" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-400" />, name: "Express.js" },
    { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
  ];

  return (
    <div
      id="skills"
      className="flex w-full flex-col items-center justify-center gap-8 pt-24 text-gray-300"
    >
      <div className="flex w-full flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-3xl font-semibold text-cyan-500">My Skills</h1>
        <p className="text-justify leading-relaxed text-gray-400 md:text-lg">
          I specialize in building full-stack web applications using the MERN
          stack. I have strong experience with React, Next.js, and Tailwind CSS
          for crafting modern, responsive UIs, and I’m well-versed in backend
          development using Node.js, Express, and MongoDB. I also use GitHub for
          version control and follow modern development practices.
        </p>
      </div>

      <div className="grid w-full grid-cols-2 gap-6 p-5 pb-24 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {icons.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-gray-800 p-5 shadow-lg transition-all duration-500 hover:scale-105 hover:border-cyan-500"
          >
            <div className="text-6xl">{item.icon}</div>
            <h1 className="text-sm font-medium text-gray-200 group-hover:text-cyan-400 md:text-lg">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
      <hr className="w-full border border-gray-500" />
    </div>
  );
};

export default Skills;

// import htmlIcon from "../assets/html.png";
// import cssIcon from "../assets/css.png";
// import jsIcon from "../assets/javascript.png";
// import githubIcon from "../assets/git-hub-icon.png";
// import reactIcon from "../assets/react.png";
// import nextIcon from "../assets/nextjs.svg";

// const Skills = () => {
//   const icons = [
//     { image: htmlIcon, name: "HTML5", percentage: "95%" },
//     { image: cssIcon, name: "CSS3", percentage: "85%" },
//     { image: jsIcon, name: "JavaScript", percentage: "80%" },
//     { image: githubIcon, name: "GitHub", percentage: "50%" },
//     { image: reactIcon, name: "React", percentage: "75%" },
//     { image: nextIcon, name: "Next.js", percentage: "50%" },
//   ];
//   return (
//     <div
//       id="skills"
//       className="flex w-full flex-col items-center justify-center gap-5 pt-24 text-gray-300"
//     >
//       <div className="flex w-full flex-col items-center justify-center gap-10 text-justify md:text-center">
//         <h1 className="text-center text-5xl font-semibold text-cyan-500">
//           My Skills
//         </h1>
//         <p>
//           I have skills in React/Next.js, Tailwind CSS and basic knowledge of
//           version control systems (git/github) with experience in building
//           frontend applications. I am also familiar with creating dynamic UI
//           components, managing state, and integrating modals for interactive
//           features. My expertise extends to developing user-friendly web apps
//           and implementing modern design principles for optimal user
//           experiences.
//         </p>
//       </div>
//       <div className="grid h-auto w-full grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3">
//         {icons.map((icon, index) => (
//           <div
//             key={index}
//             className="group flex flex-col items-center justify-center gap-5 rounded-lg border-2 border-gray-800 bg-transparent px-10 py-4 shadow-xl"
//           >
//             <div className="flex items-center justify-center gap-4">
//               <img
//                 src={icon.image}
//                 alt={icon.name}
//                 className="h-12 w-12 rounded-full"
//               />
//               <h1>{icon.name}</h1>
//             </div>
//             <div className="h-3 w-full rounded-full bg-transparent">
//               <div
//                 className={`relative h-3 rounded-full bg-cyan-500 group-hover:animate-progress`}
//                 style={{ maxWidth: icon.percentage }}
//               >
//                 <span className="absolute -right-10 -top-2">
//                   {icon.percentage}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;
