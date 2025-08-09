import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import user_img from '../assets/download.png';
import logo from '../assets/logo1.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       setUser({
  //         name: currentUser.displayName || "User",
  //         photo: currentUser.photoURL || user_img
  //       });
  //     } else {
  //       setUser(null);
  //     }
  //   });
  // }, []);

  return (
    <div className="flex justify-between items-center p-3 border-b border-gray-300 relative">
      {/* Logo */}
      <div className="ml-4 sm:ml-6 flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Company Logo"
            className="h-8 sm:h-9 lg:h-10 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Small screen buttons */}
      <div className="flex items-center gap-4 md:hidden mr-4">
        <Link to="/book" className="p-2 bg-blue-800 text-white rounded text-sm">
          Book Now
        </Link>
        <i className="fa-regular fa-bell bg-gray-100 p-2 rounded text-sm"></i>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 mr-8">
        <ul className="flex gap-6 items-center">
          <li><a href="#services">Services</a></li>
          <li><a href="#HIW">How It Works</a></li>
          <li>About Us</li>
          <li><a href="#footer">Contact</a></li>
          <li>
            <Link to="/book" className="p-2 bg-blue-800 text-white rounded text-sm">
              Book Now
            </Link>
          </li>
          <li>
            <i className="fa-regular fa-bell bg-gray-100 p-2 rounded"></i>
          </li>
          {user ? (
            <li>
              <img
                src={user.photo}
                alt="user"
                className="h-[34px] border border-gray-400 rounded-full p-[2px]"
              />
            </li>
          ) : (
            <li>
              <Link
                to="/login"
                className="p-2 border border-blue-800 text-blue-800 rounded text-sm hover:bg-blue-800 hover:text-white transition"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-md md:hidden z-10">
          <ul className="flex flex-col p-4 gap-4 text-gray-800">
            {user ? (
              <li className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <img
                  src={user.photo}
                  alt="user"
                  className="h-10 w-10 border border-gray-400 rounded-full p-[2px]"
                />
                <div>
                  <p className="font-medium text-sm">{user.name}</p>
                  <p className="text-xs text-gray-500">View Profile</p>
                </div>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="p-2 border border-blue-800 text-blue-800 rounded text-sm hover:bg-blue-800 hover:text-white transition"
                >
                  Login
                </Link>
              </li>
            )}
            <li className="hover:text-blue-700 transition"><a href="#services">Services</a></li>
            <li className="hover:text-blue-700 transition"><a href="#HIW">How It Works</a></li>
            <li className="hover:text-blue-700 transition">About Us</li>
            <li className="hover:text-blue-700 transition"><a href="#footer">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
