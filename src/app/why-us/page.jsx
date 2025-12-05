export default function WhyUsPage() {
  const reasons = [
    "Experienced Doctors",
    "24/7 Emergency Support",
    "Affordable Treatment",
    "Modern Equipment",
    "Best Diagnostic Lab",
    "Patient-Centered Care",
  ];

  return (
    <div className="bg-teal-900 text-white min-h-screen py-20 px-8">
      <h1 className="text-4xl font-bold text-center">Why Choose Us?</h1>
      <p className="text-center opacity-80">Your Health is Our Priority</p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
        {reasons.map((item, i) => (
          <li key={i} className="bg-white text-black p-6 rounded-xl shadow-lg">
            ✔ {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
