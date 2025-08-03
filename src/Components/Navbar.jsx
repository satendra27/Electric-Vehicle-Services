import React, { useState } from 'react';
import user_img from '../assets/download.png';
import logo from '../assets/logo1.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-3 border-b border-gray-300 relative">
      <div className="ml-4 sm:ml-6 flex items-center">
  <img
    src={logo}
    alt="Company Logo"
    className="h-8 sm:h-9 md:h-9 lg:h-10 w-auto object-contain"
  />
</div>


      {/* Small screen buttons and hamburger */}
      <div className="flex items-center gap-4 md:hidden mr-4">

        <button className="p-2 bg-blue-800 text-white rounded text-sm">Book Now</button>

        <i className="fa-regular fa-bell bg-gray-100 p-2 rounded text-sm"></i>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-6 mr-8">
        <ul className="flex gap-6 items-center">
          <li>Services</li>
          <li>Partners</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>
            <button className="p-2 bg-blue-800 text-white rounded">Book Now</button>
          </li>
          <li>
            <i className="fa-regular fa-bell bg-gray-100 p-2 rounded"></i>
          </li>
          <li>
            <img
              src={user_img}
              alt="user"
              className="h-[34px] border border-gray-400 rounded-full p-[2px]"
            />
          </li>
        </ul>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-md md:hidden z-10">
          <ul className="flex flex-col p-4 gap-4 text-gray-800">

            {/* User Info */}
            <li className="flex items-center gap-3 border-b border-gray-200 pb-3">
              <img
                src={user_img}
                alt="user"
                className="h-10 w-10 border border-gray-400 rounded-full p-[2px]"
              />
              <div>
                <p className="font-medium text-sm">Satendra Baghel</p>
                <p className="text-xs text-gray-500">View Profile</p>
              </div>
            </li>

            {/* Navigation Links */}
            <li className="hover:text-blue-700 transition">Services</li>
            <li className="hover:text-blue-700 transition">Partners</li>
            <li className="hover:text-blue-700 transition">About Us</li>
            <li className="hover:text-blue-700 transition">Contact</li>
          </ul>
        </div>

      )}
    </div>
  );
};

export default Navbar;
