import Central from "../assets/Central_point.png";
import Khwopa from "../assets/khwopa.png";
import Aryan from "../assets/Aryan_School.png";
const Education = () => {
  const qualifications = [
    {
      image: Aryan,
      name: "Aryan School of Engineering and Management (PU)",
      description:
        "Aryan School of Engineering and Management is a distinguished institution offering quality education in engineering and management. With a focus on practical learning and professional development, it aims to equip students with the skills and knowledge needed to excel in their careers.",
      address: "Mid-Baneshwor, Kathmandu",
      level: "Bachelor",
      grade: "",
      status: "Running",
      year: "",
    },
    {
      image: Khwopa,
      name: "Khwopa Sec. School/College",
      description:
        "Khwopa Secondary School/College is a prestigious educational institution renowned for its commitment to academic excellence and cultural preservation. Operated by Bhaktapur Municipality, it offers quality education at affordable costs, fostering disciplined and socially responsible individuals.",
      address: "Dekocha,Bhaktapur",
      level: "+2",
      grade: "A",
      status: "completed",
      year: "2021",
    },
    {
      image: Central,
      name: "Central Point Sec. Academy",
      description:
        "Central Point Sec. Academy is a well-established school located in Bardibas, Mahottari, dedicated to providing quality education and fostering holistic development.",
      address: "Bardibas,Mahottari",
      level: "10th",
      grade: "B+",
      status: "completed",
      year: "2019",
    },
  ];
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 pb-20 text-sm leading-relaxed text-gray-600 md:text-lg">
      <h1 className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-center text-3xl font-semibold text-transparent">
        My Education
      </h1>
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:flex-row md:gap-10 lg:grid-cols-3">
        {qualifications.map((qualification, index) => (
          <div
            key={index}
            className="group flex h-auto flex-col gap-5 rounded-xl border-2 border-gray-200 bg-transparent p-2 text-left shadow-xl transition-all duration-700 hover:border-blue-300 md:hover:-translate-y-4"
          >
            <img
              src={qualification.image}
              alt={qualification.name}
              className="mx-auto h-32 w-32 rounded-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 md:h-40 md:w-40 md:group-hover:rotate-[360deg] md:group-hover:shadow-lg"
            />
            <h1 className="text-center text-[16px] font-semibold underline md:text-xl">
              {qualification.name}
            </h1>
            <p className="text-justify">{qualification.description}</p>
            <span>Address: {qualification.address}</span>
            <span>Level: {qualification.level}</span>
            <span>Obtained Grade: {qualification.grade}</span>
            <span>Status: {qualification.status}</span>
            <span>Completed Year: {qualification.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
