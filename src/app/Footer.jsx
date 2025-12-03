import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="bg-teal-900 text-white min-h-screen container mx-auto">


      <div className="flex justify-center pt-2 bg-teal-800">
        <div className="bg-white text-black w-[420px] rounded-xl shadow-xl p-6 text-center">
          <h2 className="text-xl font-semibold text-teal-800">
            Could not find what you are looking for?
          </h2>

          <p className="text-sm text-gray-600 mt-1">Request a Callback</p>

          <div className="mt-4 space-y-3">
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

            <button className="bg-teal-700 cursor-pointer text-white w-full py-2 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>


      <div className="bg-teal-800 pt-12 pb-6">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">


          <div>
            <h3 className="font-semibold text-lg mb-2">About ARP</h3>
            <p className="text-sm opacity-90">
              ARP Medical College Hospital Ltd is dedicated to providing comprehensive healthcare 
              services with state-of-the-art medical facilities and compassionate care.
            </p>

            <p className="text-sm opacity-90 mt-2">
              Located in New York, we serve the community with excellence in medical education and patient care.
            </p>
          </div>


          <div>
            <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
            <p className="text-sm opacity-90">
              <span className="font-semibold">Address:</span><br />
             12 North West New York 100
            </p>

            <p className="mt-2 text-sm opacity-90">
              <span className="font-semibold">Hotline:</span><br />
              09666-878787
            </p>

            <p className="mt-2 text-sm opacity-90">
              <span className="font-semibold">Mobile:</span><br />
              0179000000
            </p>
          </div>


          <div>
            <h3 className="font-semibold text-lg mb-2">Emergency Services</h3>

            <p className="text-sm opacity-90">
              <span className="font-semibold">Hospital Information:</span><br />
              0190000000<br />
              0179000000
            </p>

            <p className="mt-2 text-sm opacity-90">
              <span className="font-semibold">Ambulance Service:</span><br />
              0190000000<br />
              0179000000
            </p>
          </div>


          <div>
            <h3 className="font-semibold text-lg mb-2">Latest Updates</h3>

            <p className="bg-teal-600 text-white text-xs p-2 rounded mb-2">
              বিশ্ব ডায়াবেটিস দিবস উপলক্ষে সেমিনার আয়োজনের মাধ্যমে রোগীদের মধ্যে সচেতনতা তৈরির উদ্যোগ নেওয়া হয়েছে
            </p>

            <ul className="text-sm opacity-90 space-y-1">
              <li>World Blood Cancer Day 2025</li>
              <li>We’re Hiring at ARP Hospital</li>
              <li>Sister Concern of ARP Medical College</li>
            </ul>
          </div>
        </div>


        <div className="text-center mt-10 opacity-70 text-sm">
          © 2025 ARP Medical College Hospital Ltd | All Rights Reserved.
        </div>

        <div className="flex justify-center gap-6 mt-3 opacity-80 text-xs">
          <a href="#">Patient Portal</a>
          <a href="#">Medical Services</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
      </div>

    </div>
        </div>
    );
};

export default Footer;