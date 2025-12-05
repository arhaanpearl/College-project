import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white pt-16">
      {/* Callback Request Section */}
      <div className="flex justify-center mb-16 px-4">
        <div className="bg-white text-black w-full max-w-md rounded-xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-teal-800">
            Need Assistance?
          </h2>
          <p className="text-gray-600 mt-2">Request a Callback</p>
          <div className="mt-6 space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-teal-600 outline-none"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-teal-600 outline-none"
            />
            <button className="bg-teal-700 hover:bg-teal-800 transition-all text-white w-full py-2 rounded-md font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Footer Main Section */}
      <div className="bg-teal-800 pt-12 pb-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">

          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-3 border-b border-teal-700 pb-1">About ARP</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              ARP Medical College Hospital Ltd is dedicated to providing comprehensive healthcare 
              services with state-of-the-art medical facilities and compassionate care.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mt-2">
              Located in New York, we serve the community with excellence in medical education and patient care.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-3 border-b border-teal-700 pb-1">Contact Information</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold">Address:</span> 12 North West, New York 100
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mt-2">
              <span className="font-semibold">Hotline:</span> 09666-878787
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mt-2">
              <span className="font-semibold">Mobile:</span> 0179000000
            </p>
          </div>

          {/* Emergency */}
          <div>
            <h3 className="font-semibold text-lg mb-3 border-b border-teal-700 pb-1">Emergency Services</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold">Hospital Info:</span><br />
              0190000000, 0179000000
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mt-2">
              <span className="font-semibold">Ambulance Service:</span><br />
              0190000000, 0179000000
            </p>
          </div>

          {/* Updates */}
          <div>
            <h3 className="font-semibold text-lg mb-3 border-b border-teal-700 pb-1">Latest Updates</h3>
            <p className="bg-teal-700 text-white text-xs p-2 rounded mb-3">
              বিশ্ব ডায়াবেটিস দিবস উপলক্ষে সেমিনার আয়োজনের মাধ্যমে রোগীদের মধ্যে সচেতনতা তৈরির উদ্যোগ নেওয়া হয়েছে
            </p>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>World Blood Cancer Day 2025</li>
              <li>We’re Hiring at ARP Hospital</li>
              <li>Sister Concern of ARP Medical College</li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-teal-700 pt-6 text-center text-gray-300 text-sm">
          <p>© 2025 ARP Medical College Hospital Ltd | All Rights Reserved.</p>
          <div className="flex justify-center gap-6 mt-3 text-xs">
            <a href="#" className="hover:underline">Patient Portal</a>
            <a href="#" className="hover:underline">Medical Services</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
