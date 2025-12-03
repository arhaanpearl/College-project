"use client";
import { useState } from "react";

export default function Page() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Mst. Nataliya Aretic",
      specialty: "Gynecology Specialist",
      experience: "15+ Years",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi2EqoUu2sa9VGf_ePEJYd1xXsNsCXigASKg&s",
      description: "Specialist in women’s health, pregnancy care, and gynecological surgery."
    },
    {
      id: 2,
      name: "Dr. Md. Eric",
      specialty: "Medicine Specialist",
      experience: "20+ Years",
      image: "https://img.freepik.com/free-photo/cinematic-portrait-man-working-healthcare-system-having-care-job_23-2151237504.jpg?semt=ais_hybrid&w=740&q=80",
      description: "Expert in internal medicine and complex disease diagnosis."
    },
    {
      id: 3,
      name: "Dr. A. Shan",
      specialty: "Cardiology Specialist",
      experience: "18+ Years",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzzwl6OTeV404OvRoIvyyOpPzMcKPegAhkQ&s",
      description: "Heart specialist with expertise in cardiac care & intervention."
    },
    {
      id: 4,
      name: "Dr. Md. Aaaaa",
      specialty: "Orthopedic Specialist",
      experience: "17+ Years",
      image: "https://i.pinimg.com/736x/4a/31/77/4a317738cffad436d1d584a3edac891e.jpg",
      description: "Specialist in bone, joint, and sports injuries treatment."
    }
  ];

  const [index, setIndex] = useState(0);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % doctors.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + doctors.length) % doctors.length);

  return (
    <div className="bg-teal-900 text-white min-h-screen py-16 container mx-auto px-12">
      <h2 className="text-4xl font-bold text-center">Meet The Experts</h2>
      <p className="text-lg text-center opacity-80">Who Care For You</p>

      <div className="flex items-center justify-center gap-4 mt-10">
        <button onClick={prevSlide} className="text-3xl px-3">◀</button>

        <div className="bg-white text-black shadow-lg rounded-xl p-5 w-72 text-center">
          <img
            src={doctors[index].image}
            className="w-32 h-32 mx-auto rounded-full object-cover"
          />
          <h3 className="text-lg font-semibold mt-4">{doctors[index].name}</h3>
          <p className="text-sm text-gray-600">{doctors[index].specialty}</p>

          <button
            onClick={() => setSelectedDoctor(doctors[index])}
            className="mt-4 bg-teal-700 text-white px-4 py-2 rounded-lg"
          >
            View Profile
          </button>
        </div>

        <button onClick={nextSlide} className="text-3xl px-3">▶</button>
      </div>

      {/* Doctor Profile Popup Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96 text-black">
            <button
              onClick={() => setSelectedDoctor(null)}
              className="float-right text-xl text-red-600"
            >
              ✖
            </button>

            <img
              src={selectedDoctor.image}
              className="w-32 h-32 mx-auto rounded-full object-cover mt-4"
            />

            <h2 className="text-2xl font-bold text-center mt-3">
              {selectedDoctor.name}
            </h2>
            <p className="text-center text-gray-600">
              {selectedDoctor.specialty}
            </p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">Experience:</h3>
              <p>{selectedDoctor.experience}</p>

              <h3 className="text-lg font-semibold mt-4">About:</h3>
              <p>{selectedDoctor.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
