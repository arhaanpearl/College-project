export default function ServicesPage() {
  const services = [
    { title: "ICU Service", desc: "24/7 critical care with advanced monitoring." },
    { title: "CCU Service", desc: "Cardiac care for emergency heart patients." },
    { title: "Ambulance", desc: "Fast, reliable ambulance support." },
    { title: "Diagnostic Lab", desc: "Modern lab with accurate testing." },
    { title: "Pharmacy", desc: "All medicines available in one place." },
  ];

  return (
    <div className="bg-white min-h-screen py-20 px-8">
      <h1 className="text-4xl font-bold text-center text-teal-700">Our Services</h1>
      <p className="text-center text-gray-600">Professional & Reliable Medical Service</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
        {services.map((service, i) => (
          <div key={i} className="p-6 rounded-xl shadow-lg bg-teal-600 text-white">
            <h2 className="text-xl font-bold">{service.title}</h2>
            <p className="opacity-90 mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
