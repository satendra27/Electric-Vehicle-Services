import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import user_img from '../assets/download.png';
import logo from '../assets/logo1.png';
import { toast } from 'react-toastify';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../assets/firebase";
import { getFriendlyError } from '../utils/firebaseErrorMessages';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
  const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    if (currentUser) {
      let finalName = currentUser.displayName || "user";
      let finalPhoto = currentUser.photoURL || user_img;

      try {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserType(data.userType);
          if (data.name) {
            finalName = data.name; // overwrite name with Firestore value
          }
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        toast.error(getFriendlyError(err));
      }

      setUser({
        name: finalName,
        photo: finalPhoto,
      });

    } else {
      setUser(null);
      setUserType(null);
    }
  });

  return () => unsubscribe();
}, []);



   const handleProtectedClick = (path) => {
    if (!user) {
      toast.error("Please login first!");
      navigate("/Login"); // optional: send them to login page
    } else {
      navigate(path);
    }
  };

  const handleLogout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      toast.success("Logged out successfully!");
      // Optional: redirect to home or login page
      navigate("/");
    })
    .catch((error) => {
      toast.error("Error logging out: " + error.message);
    });
};


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
        <button
          onClick={() => handleProtectedClick("/book")}
          className="p-2 bg-blue-800 text-white rounded text-sm"
        >
          Book Now
        </button>
        <i className="fa-regular fa-bell bg-gray-100 p-2 rounded text-sm"></i>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 mr-8">
        <ul className="flex gap-6 items-center">
          {userType === "Service Provider" ? (
  <li className='hover:text-blue-700'><a href="#dashboard">Dashboard</a></li>
) : (
  <li className='hover:text-blue-700'><a href="#services">Services</a></li>
)}
          <li className='hover:text-blue-700'><a href="#HIW">How It Works</a></li>
          <li className='hover:text-blue-700'>About Us</li>
          <li className='hover:text-blue-700'><a href="#footer">Contact</a></li>
          <li>
            <button
              onClick={() => handleProtectedClick("/book")}
              className="p-2 bg-blue-800 text-white rounded text-sm"
            >
              Book Now
            </button>
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
                onClick={()=>setMenuOpen(!menuOpen)}
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
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-md z-10 md:w-[30%] md:left-auto md:right-0">
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
            <li className="hover:text-blue-700 transition md:hidden"><a href="#services">Services</a></li>
            <li className="hover:text-blue-700 transition md:hidden"><a href="#HIW">How It Works</a></li>
            <li className="hover:text-blue-700 transition md:hidden">About Us</li>
            <li className="hover:text-blue-700 transition md:hidden"><a href="#footer">Contact</a></li>
            <li className="hover:text-blue-700 transition" onClick={handleLogout}><a href="">Logout</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
