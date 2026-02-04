import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import user_img from "../assets/download.png";
import logo from "../assets/logo1.png";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  const profileRef = useRef(null); // 🔥 for outside click

  /* 🔔 FETCH NOTIFICATION COUNT ONLY */
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const getNotifications = async () => {
      try {
        const res = await fetch(
          "https://electric-vehicle-services.onrender.com/api/auth/notifications",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const data = await res.json();
        setNotifications(Array.isArray(data) ? data : []);
      } catch {
        setNotifications([]);
      }
    };

    getNotifications();
    const interval = setInterval(getNotifications, 5000);

    return () => clearInterval(interval);
  }, []);

  /* ❌ CLOSE PROFILE DROPDOWN ON OUTSIDE CLICK */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProtectedClick = (path) => {
    if (!user) {
      toast.warning("Please log in to continue");
      navigate("/login");
      return;
    }
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out successfully!");
    navigate("/");
    setProfileDropdown(false);
    setMenuOpen(false);
  };

  return (
    <div className="flex justify-between items-center p-3 border-b border-gray-300 relative">
      
      {/* Logo */}
      <Link to="/" className="ml-4 sm:ml-6 flex items-center">
        <img src={logo} alt="Company Logo" className="h-8 sm:h-9 lg:h-10" />
      </Link>

      {/* Mobile Buttons */}
      <div className="flex items-center gap-4 md:hidden mr-4">
        <button
          onClick={() => handleProtectedClick("/book")}
          className="p-2 bg-blue-800 text-white rounded text-sm"
        >
          Book Now
        </button>

        {/* 🔔 Notification Bell */}
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/notifications")}
        >
          <i className="fa-regular fa-bell bg-gray-100 p-2 rounded"></i>
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1 rounded-full">
              {notifications.length}
            </span>
          )}
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 mr-8">
        <ul className="flex gap-6 items-center">
          <li><Link to="/">Home</Link></li>
          <li><a href="#services">Services</a></li>
          <li><button onClick={() => handleProtectedClick("/my-bookings")}>My Bookings</button></li>
          <li><button onClick={() => handleProtectedClick("/help")}>Help</button></li>

          <li>
            <button
              onClick={() => handleProtectedClick("/book")}
              className="p-2 bg-blue-800 text-white rounded text-sm"
            >
              Book Now
            </button>
          </li>

          {/* 🔔 Notification Bell */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/notifications")}
          >
            <i className="fa-regular fa-bell bg-gray-100 p-2 rounded"></i>
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1 rounded-full">
                {notifications.length}
              </span>
            )}
          </div>

          {/* 👤 Profile */}
          {user ? (
            <li className="relative" ref={profileRef}>
              <img
                src={user?.photo || user_img}
                alt="user"
                className="
  h-[34px] w-[34px]
  rounded-full
  border p-[2px]
  object-cover
  cursor-pointer
  border-blue-500
  transition
"

                onClick={() => setProfileDropdown(!profileDropdown)}
              />

              {profileDropdown && (
                <div className="absolute right-0 top-[42px] bg-white shadow-lg rounded-md w-40 py-2 z-20">
                  <p className="px-4 pt-2 pb-1 font-semibold">{user?.name}</p>
                  <p className="px-4 text-xs text-gray-500">Customer</p>
                  <hr />
                  <button onClick={() => navigate("/profile")} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">Profile</button>
                  <button onClick={() => navigate("/my-bookings")} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">My Bookings</button>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600">Logout</button>
                </div>
              )}
            </li>
          ) : (
            <li>
              <Link to="/login" className="p-2 border border-blue-800 rounded text-sm">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-md z-10">
          <ul className="flex flex-col p-4 gap-4">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><button onClick={() => handleProtectedClick("/my-bookings")}>My Bookings</button></li>
            <li><button onClick={() => handleProtectedClick("/help")}>Help</button></li>
            {user ? (
              <li onClick={handleLogout} className="text-red-600 cursor-pointer">Logout</li>
            ) : (
              <li><Link to="/login">Login</Link></li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
