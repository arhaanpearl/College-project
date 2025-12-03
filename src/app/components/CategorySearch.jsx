import { Input } from '@/components/ui/input';
import React from 'react';

const CategorySearch = () => {
    return (
        <div className='pt-10 '>
            <div className='pb-5 items-center flex flex-col container mx-auto px-12 bg-gray-100'>
                <h2 className='font-semibold text-3xl tracking-wide'>Search <span className='text-teal-600'>Doctors</span></h2>
            <h2 className='text-gray-400 text-xl pb-2'>Search Your Doctor and Book Appointment in one click</h2>
         <label className="input bg-gray-200">
  <svg className="h-[1em] opacity-50 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle  cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>

            </div>
        </div>
    );
};

export default CategorySearch;