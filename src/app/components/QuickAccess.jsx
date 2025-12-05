import React from "react";

const QuickAccess = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">


        <div className="text-center max-w-2xl mx-auto">
          <button className="px-5 py-1 text-sm bg-teal-700 text-white font-semibold rounded-full mb-4">
            QUICK ACCESS
          </button>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Quick Access to <br />
            <span className="text-teal-600">Care & Services</span>
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Get the medical attention you need with our comprehensive healthcare
            services and easy access points.
          </p>
        </div>


        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">


          <div className="bg-teal-900 text-white p-8 rounded-xl shadow hover:scale-[1.03] transition-transform">
            <div className="text-4xl mb-4">🩺</div>
            <h3 className="text-xl font-semibold">Find a Doctor</h3>
            <p className="text-sm mt-2 opacity-80">
              Expert medical professionals at your service.
            </p>
            <button className="mt-6 text-sm font-semibold flex items-center gap-2 hover:underline">
              Learn More →
            </button>
          </div>


          <div className="bg-green-500 text-white p-8 rounded-xl shadow hover:scale-[1.03] transition-transform">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-semibold">Locate Us</h3>
            <p className="text-sm mt-2 opacity-90">
              Find our hospital location and directions.
            </p>
            <button className="mt-6 text-sm font-semibold flex items-center gap-2 hover:underline">
              Learn More →
            </button>
          </div>


          <div className="bg-blue-600 text-white p-8 rounded-xl shadow hover:scale-[1.03] transition-transform">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold">Book Appointment</h3>
            <p className="text-sm mt-2 opacity-90">
              Schedule your consultation today.
            </p>
            <button className="mt-6 text-sm font-semibold flex items-center gap-2 hover:underline">
              Learn More →
            </button>
          </div>


          <div className="bg-red-500 text-white p-8 rounded-xl shadow hover:scale-[1.03] transition-transform">
            <div className="text-4xl mb-4">🚑</div>
            <h3 className="text-xl font-semibold">Emergency Hotline</h3>

            <p className="text-lg mt-3 font-bold">01902556070</p>
            <p className="text-base font-semibold">09666997997</p>

            <p className="text-xs mt-4 opacity-80">24/7 Medical Support</p>

            <button className="mt-6 text-sm font-semibold flex items-center gap-2 hover:underline">
              Learn More →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
