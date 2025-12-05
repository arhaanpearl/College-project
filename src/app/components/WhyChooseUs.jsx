"use client";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function WhyChooseUs() {
  const pages = [
    [
      "Department of Gynaecology",
      "Department of Neonatology",
      "Department of Ophthalmology",
      "Department of Intensive Care",
      "Department of Endocrinology",
      "Department of Hematology",
      "Department of Neuromedicine",
      "Department of Internal Medicine",
      "Department of Physical Medicine",
      "Department of Hepatobiliary",
      "Department of Gastroenterology",
      "Department of Radiology and Imaging",
    ],
    [
      "Department of Surgery",
      "Department of Orthopaedics",
      "Department of Dermatology",
      "Department of Cardiology",
      "Department of ENT",
      "Department of Oncology",
      "Department of Psychiatry",
      "Department of Dental",
      "Department of Nephrology",
      "Department of Urology",
      "Department of Pediatrics",
      "Department of Respiratory Medicine",
    ],
  ];

  const [page, setPage] = useState(0);

  const nextPage = () => page < pages.length - 1 && setPage(page + 1);
  const prevPage = () => page > 0 && setPage(page - 1);

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <section className="w-full py-16 bg-white">

        {/* HEADING */}
        <div className="text-center mb-12">
          <button className="px-5 py-1 bg-teal-700 text-white text-sm rounded-full">
            WHY CHOOSE US
          </button>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Why Choose
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold text-teal-700">
            ARP Medical College Hospital Ltd
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            At ARP Medical College Hospital Ltd, we combine advanced medical technology
            with compassionate care to deliver the highest standards in healthcare and education.
          </p>
        </div>

        {/* MAIN RESPONSIVE SECTION */}
        <div className="mt-14 flex flex-col lg:flex-row gap-8 items-stretch">

          {/* IMAGE CARD */}
          <div className="lg:w-1/2 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative">
              <img
                className="w-full h-72 md:h-96 object-cover"
                src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg"
                alt="Hospital"
              />
              <span className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-sm text-teal-700 font-semibold shadow">
                World Class Care
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900">ARP Hospital</h3>
              <p className="text-gray-500 text-sm">
                Best Hospital in North West New York
              </p>
            </div>
          </div>

          {/* SPECIALITIES PANEL */}
          <div className="lg:w-1/2 bg-teal-700 rounded-xl p-6 flex flex-col">

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Our Specialities
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-grow">
              {pages[page].map((item, index) => (
                <div
                  key={index}
                  className="border border-teal-300 rounded-lg p-4 bg-teal-600 text-center text-white hover:bg-teal-500 cursor-pointer transition"
                >
                  <div className="text-2xl mb-2">💠</div>
                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex items-center gap-4 mt-8 justify-center">

              <button
                onClick={prevPage}
                disabled={page === 0}
                className={`p-2 rounded-full border border-teal-300 transition ${page === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-teal-600"}`}
              >
                <FiChevronLeft size={20} className="text-white" />
              </button>

              <button
                onClick={nextPage}
                disabled={page === pages.length - 1}
                className={`p-2 rounded-full border border-teal-300 transition ${page === pages.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-teal-600"}`}
              >
                <FiChevronRight size={20} className="text-white" />
              </button>

              {/* DOTS */}
              <div className="flex gap-2 ml-4">
                {pages.map((_, i) => (
                  <div
                    key={i}
                    className={`h-3 w-3 rounded-full ${i === page ? "bg-white" : "bg-teal-300"}`}
                  ></div>
                ))}
              </div>

              <span className="text-sm text-teal-300 ml-4">
                {page + 1} of {pages.length}
              </span>
            </div>

            <div className="mt-10 text-center">
              <button className="px-6 py-2 bg-white text-teal-700 rounded-full hover:scale-105 transition">
                View All Specialities →
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
