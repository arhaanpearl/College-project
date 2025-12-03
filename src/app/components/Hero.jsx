import React from 'react';

const Hero = () => {
    return (
        <div className='pt-5 conatiner mx-auto px-12'>
           <div className='flex items-center justify-between gap-5'>
            <div>
                <p className='pb-3 text-3xl font-semibold'>Find & Book <span className='text-teal-600'>Appointment</span> <br />  With Your Favourite  <span className='text-teal-600'>Doctors</span></p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet sequi alias at quos enim saepe? Qui quaerat harum a ipsum eaque voluptatum, mollitia praesentium quam, ducimus eveniet odit repellat nostrum.</p>

            </div>
            <div>
                <img className='w-380 rounded-3xl' src="https://www.mua.edu/uploads/sites/10/2023/02/istock-482499394.webp" alt="" />
            </div>
            </div> 
            <button className='px-5 py-3 border rounded-md bg-teal-700 text-white font-semibold cursor-pointer hovar:scale-105 transition-all ease-in-out'>Explore Now</button>
              
        </div>
    );
};

export default Hero;