import React from "react";

const Hero = () => {
  return (
    <section className="pt-10 container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">


        <div className="md:w-1/2">
          <p className="pb-3 text-2xl md:text-4xl font-semibold leading-snug">
            Find & Book{" "}
            <span className="text-teal-600">Appointment</span> <br />
            With Your Favourite{" "}
            <span className="text-teal-600">Doctors</span>
          </p>

          <p className="text-gray-600 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi
            alias at quos enim saepe? Qui quaerat harum a ipsum eaque voluptatum
            mollitia praesentium quam, ducimus eveniet odit repellat nostrum.
          </p>


          <button className="mt-6 px-6 py-3 border rounded-md bg-teal-700 text-white font-semibold cursor-pointer hover:scale-105 transition-all ease-in-out">
            Explore Now
          </button>
        </div>


        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-sm md:max-w-lg rounded-3xl object-cover"
            src="https://www.mua.edu/uploads/sites/10/2023/02/istock-482499394.webp"
            alt="doctor"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
