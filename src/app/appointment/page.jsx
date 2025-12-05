"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

export default function AppointmentPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <AppointmentContent />
    </Suspense>
  );
}

function AppointmentContent() {
  const params = useSearchParams();

  const doctor = {
    id: params.get("id"),
    name: params.get("name"),
    specialty: params.get("specialty"),
    experience: params.get("experience"),
    image: params.get("image"),
    description: params.get("description"),
  };

  if (!doctor.id) {
    return (
      <div className="p-10 text-center text-red-500 text-lg">
        No doctor data received.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md text-center">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-32 h-32 rounded-full mx-auto object-cover"
        />

        <h2 className="text-2xl font-bold mt-4">{doctor.name}</h2>
        <p className="text-gray-600">{doctor.specialty}</p>

        <div className="mt-4 text-left">
          <h3 className="font-semibold">Experience:</h3>
          <p>{doctor.experience}</p>

          <h3 className="font-semibold mt-3">About:</h3>
          <p>{doctor.description}</p>
        </div>

        <button className="mt-6 bg-teal-700 text-white px-6 py-2 rounded-lg w-full hover:bg-teal-800">
          Confirm Appointment
        </button>
      </div>
    </div>
  );
}
