"use client";
import { useState } from "react";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "ICU",
      tag: "Intensive Care Unit",
      img: "https://media.istockphoto.com/id/1466268284/photo/nurse-and-doctor-using-medical-ventilator-on-female-patient-while-cardiopulmonary.jpg?s=612x612&w=0&k=20&c=VuaBeqPY639IqCaP3RgcrS9PK3v6dfuQ6uJ_g-CqSpo=",
      short:
        "Intensive Care Unit providing critical care for life-threatening conditions with advanced monitoring systems...",
      full: `Our ICU provides round-the-clock care for critically ill patients.
• Continuous cardiac and respiratory monitoring  
• Ventilator support  
• Highly trained critical care specialists  
• Advanced life-support systems  
Ideal for patients requiring complex medical attention.`,
    },
    {
      id: 2,
      title: "CCU",
      tag: "Cardiac Care Unit",
      img: "https://www.shutterstock.com/image-photo/nurses-intensive-care-unit-hospital-600nw-2261068617.jpg",
      short:
        "Coronary Care Unit specialized in treating heart conditions with state-of-the-art cardiac monitoring...",
      full: `Our CCU is dedicated to patients with severe cardiac conditions.  
• 24/7 ECG & heart monitoring  
• Specialized cardiologists  
• Emergency cardiac intervention  
• Advanced cardiac life-support systems`,
    },
    {
      id: 3,
      title: "Echo",
      tag: "Pediatric Echo",
      img: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2021/12/echocardiogram-doctor-patient-thumb.jpg",
      short:
        "We evaluate the structure and function of your child's heart without pain or radiation...",
      full: `Pediatric Echo service provides a detailed heart examination.  
• Non-invasive ultrasound  
• No radiation exposure  
• Real-time heart function analysis  
• Suitable for children and adults`,
    },
  ];

  return (
    <section className="w-full py-20 bg-teal-900 container mx-auto px-12">

      <div className="text-center text-white mb-12">
        <button className="px-5 py-1 bg-white/20 text-sm font-semibold rounded-full">
          OUR SERVICES
        </button>

        <h2 className="text-4xl font-bold mt-4">Comprehensive</h2>
        <h2 className="text-4xl font-bold text-gray-300">
          Healthcare Solutions
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {services.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition"
          >

            <div className="relative">
              <img src={item.img} alt={item.title} className="h-60 w-full" />
              <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs px-3 py-1 rounded-full">
                {item.tag}
              </span>

              <span className="absolute top-3 right-3 bg-white/80 p-2 rounded-full text-gray-700">
                ❤️
              </span>

              <h3 className="absolute bottom-3 left-3 text-xl text-white font-bold drop-shadow-lg">
                {item.title}
              </h3>
            </div>


            <div className="p-6">
              <p className="text-gray-600 mb-6">{item.short}</p>

              <button
                onClick={() => setSelectedService(item)}
                className="px-5 py-2 bg-teal-900 text-white rounded-full text-sm flex items-center gap-2"
              >
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-xl"
              onClick={() => setSelectedService(null)}
            >
              ✖
            </button>

            <img
              src={selectedService.img}
              alt={selectedService.title}
              className="w-full h-56 object-cover rounded-lg"
            />

            <h2 className="text-2xl font-bold mt-4">
              {selectedService.title}
            </h2>
            <p className="text-gray-700 mt-3 whitespace-pre-line">
              {selectedService.full}
            </p>

            <button
              onClick={() => setSelectedService(null)}
              className="mt-6 px-5 py-2 bg-teal-700 text-white rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
