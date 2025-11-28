import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { getAuth, signOut } from "firebase/auth";
import userLogo from '../assets/user.png';

const auth = getAuth();

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => setShowConfirm(true);
  const confirmLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setShowConfirm(false);
      })
      .catch(err => console.log(err));
  };
  const cancelLogout = () => setShowConfirm(false);

  return (
    <div className="relative">
      <div className="navbar bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white shadow-lg">

        {/* LEFT SIDE */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white text-black rounded-box mt-3 w-52 p-2 shadow z-50">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/profile">My Profile</Link></li>
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost text-xl">
            <img
              src="https://i.ibb.co/bj1KsQWC/5927d01e3ca8aa989e76fddff7e6adf8.jpg"
              alt="logo"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </Link>
        </div>

        {/* CENTER MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link className="hover:text-yellow-300 transition-colors duration-300" to="/">Home</Link></li>
            <li><Link className="hover:text-yellow-300 transition-colors duration-300" to="/services">Services</Link></li>
            <li><Link className="hover:text-yellow-300 transition-colors duration-300" to="/profile">My Profile</Link></li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-end flex items-center gap-3">

          {/* USER IMAGE + HOVER NAME */}
          {user ? (
            <div className="flex items-center gap-3 relative">

              {/* USER PHOTO with LEFT SIDE hover name */}
              <div className="relative group">
                <img
                  src={user.photoURL ? user.photoURL : userLogo}
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover cursor-pointer"
                />

                {/* Tooltip Name (LEFT SIDE) */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-24 
                  bg-black text-white text-xs px-2 py-1 rounded 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 whitespace-nowrap z-50">
                  {user.displayName ? user.displayName : "User"}
                </div>
              </div>

              {/* LOGOUT BUTTON */}
              <button
                onClick={handleLogout}
                className="btn bg-red-500 hover:bg-red-600 text-white transition-colors btn-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              {/* DEFAULT USER ICON */}
              <img
                src={userLogo}
                alt="guest user"
                className="w-10 h-10 rounded-full border-2 border-white"
              />

              {/* LOGIN BUTTON */}
              <Link
                to="/login"
                className="btn bg-yellow-400 text-black hover:bg-yellow-500 transition-colors"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>

      {/* LOGOUT CONFIRM MODAL */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-lg font-semibold mb-4">Are you sure you want to logout?</h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmLogout}
                className="btn bg-red-500 hover:bg-red-600 text-white transition-colors"
              >
                Yes
              </button>
              <button
                onClick={cancelLogout}
                className="btn btn-outline text-black border-black hover:bg-gray-100 transition-colors"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar;
