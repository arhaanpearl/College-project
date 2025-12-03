"use client";
import { Link } from "lucide-react";
import { FiPhone, FiMail, FiSearch, FiShoppingBag, FiMapPin } from "react-icons/fi";
import { FaStaffSnake } from "react-icons/fa6";


export default function Header() {
  return (
    <header className="w-full">
      <div className="w-full bg-white py-4 border-b flex items-center justify-between px-6 xl:px-20">
        <div className="flex items-center gap-2">
          
         <FaStaffSnake className="text-teal-800 text-2xl" />
         <FaStaffSnake className="text-teal-800 text-2xl" />
         
          
          <div>
            <h2 className="text-2xl font-bold text-teal-600 ">ARP</h2>
            <p className="text-xs text-gray-500 tracking-wider">BEST FOR MEDICAL</p>
          </div>
        </div>


        <div className="flex items-center gap-8 text-gray-700 text-sm ">

          <div className="flex items-center gap-2">
            <FiPhone className="text-teal-800 text-xl" />
            <div>
              <p className="text-xs text-gray-500">Number :</p>
              <p className="font-semibold">+880123456789</p>
            </div>
          </div>


          <div className="flex items-center gap-2">
            <FiMail className="text-teal-800 text-xl" />
            <div>
              <p className="text-xs text-gray-500">Email :</p>
              <p className="font-semibold">arp@gmail.com</p>
            </div>
          </div>


          <div className="flex items-center gap-2">
            <FiMapPin className="text-teal-800 text-xl" />
            <div>
              <p className="text-xs text-gray-500">Address :</p>
              <p className="font-semibold">12 North West New York 100</p>
            </div>
          </div>
        </div>
      </div>


      
      <div className="w-full bg-teal-700  py-4 px-6 xl:px-20 flex items-center justify-between">

        <nav className="flex items-center gap-8 text-white font-semibold ">
          <a className="hover:text-gray-300" href="#">Home</a>
          <a className="hover:text-gray-300" href="#">Doctors</a>
          <a className="hover:text-gray-300" href="#">Services</a>
          <a className="hover:text-gray-300" href="#">Why US</a>
          <a className="hover:text-gray-300" href="#">Contract US</a>
        </nav>


        <div className="flex items-center gap-4">

          <div className="bg-gray-200 rounded-full flex items-center px-4 py-2 w-72">
            <FiSearch className="text-teal-700 text-xl" />
            <input
              type="text"
              placeholder="search here"
              className="ml-2 bg-transparent text-black placeholder-black outline-none w-full"
            />
          </div>


          <div className="relative">
            <FiShoppingBag className="text-white text-2xl cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
              2
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
