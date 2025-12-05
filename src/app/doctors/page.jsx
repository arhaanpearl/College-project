"use client";
import Link from "next/link";
import { doctors } from "@/app/data/doctors";

export default function DoctorsPage() {
  return (
    <div className="bg-teal-900 text-white min-h-screen py-16 container mx-auto px-12">
      <h2 className="text-4xl font-bold text-center">Meet The Experts</h2>
      <p className="text-lg text-center opacity-80">Who Care For You</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white text-black shadow-lg rounded-xl p-5 text-center"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-32 h-32 mx-auto rounded-full object-cover"
            />

            <h3 className="text-lg font-semibold mt-4">{doctor.name}</h3>
            <p className="text-sm text-gray-600">{doctor.specialty}</p>
            <p className="text-gray-500 mt-1">{doctor.experience}</p>
            <p className="mt-3 text-sm text-gray-700">
              {doctor.description.substring(0, 80)}...
            </p>

            <Link
              href={{
                pathname: "/appointment",
                query: {
                  id: doctor.id,
                  name: doctor.name,
                  specialty: doctor.specialty,
                  experience: doctor.experience,
                  image: doctor.image,
                  description: doctor.description,
                },
              }}
            >
              <button className="mt-5 bg-teal-700 text-white px-5 py-2 rounded-lg w-full hover:bg-teal-800">
                Book Appointment
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
