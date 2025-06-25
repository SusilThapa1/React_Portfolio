const Education = () => {
  const qualifications = [
    {
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
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:flex-row lg:grid-cols-3">
        {qualifications.map((qualification, index) => (
          <div
            key={index}
            className="flex h-auto flex-col gap-5 rounded-xl border-2 border-gray-200 bg-transparent p-2 text-left shadow-xl transition-all duration-500 hover:border-blue-300 md:hover:-translate-y-4"
          >
            <h2 className="text-center text-[16px] font-semibold underline md:text-xl">
              {qualification.name}
            </h2>
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
