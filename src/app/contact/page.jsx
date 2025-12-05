"use client";

export default function DoctorsPage() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Nataliya Aretic",
      specialty: "Gynecologist",
      experience: "15+ Years",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi2EqoUu2sa9VGf_ePEJYd1xXsNsCXigASKg&s",
      description:
        "Expert in pregnancy care, women's health, and gynecological surgery.",
    },
    {
      id: 2,
      name: "Dr. Md. Eric",
      specialty: "Medicine Specialist",
      experience: "20+ Years",
      image:
        "https://img.freepik.com/free-photo/cinematic-portrait-man-working-healthcare-system-having-care-job_23-2151237504.jpg",
      description:
        "Expert in diagnosing complex medical conditions and internal diseases.",
    },
    {
      id: 3,
      name: "Dr. A. Shan",
      specialty: "Cardiologist",
      experience: "18+ Years",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzzwl6OTeV404OvRoIvyyOpPzMcKPegAhkQ&s",
      description: "Heart specialist with experience in cardiac intervention.",
    },
  ];

  return (
    <div className="bg-teal-900 text-white min-h-screen py-20 px-8">
      <h1 className="text-4xl font-bold text-center">Our Doctors</h1>
      <p className="text-center opacity-80">Experienced & Certified Specialists</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
        {doctors.map((doc) => (
          <div key={doc.id} className="bg-white text-black rounded-xl shadow-lg p-6">
            <img
              src={doc.image}
              className="w-40 h-40 object-cover rounded-full mx-auto"
            />
            <h2 className="text-xl font-bold text-center mt-4">{doc.name}</h2>
            <p className="text-center text-gray-700">{doc.specialty}</p>
            <p className="text-center font-semibold mt-2">
              Experience: {doc.experience}
            </p>
            <p className="mt-3 text-sm text-gray-700">{doc.description}</p>


            <button className="w-full bg-teal-600 text-white font-bold py-2 rounded-lg mt-4 hover:bg-teal-700 transition">
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
