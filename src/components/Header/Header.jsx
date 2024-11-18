import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/auth/authActions.js'; // Adjust the path to match your file structure
import { clearAuth } from '../../store/auth/authSlice.js';
import RoseImage from './image.png'; // Adjust path as needed

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get user authentication status from Redux store
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      // Dispatch logoutUser async action to handle backend logout
      await dispatch(logoutUser()).unwrap();
      // Clear auth state locally
      dispatch(clearAuth());
      // Redirect to home page after logout
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white bg-opacity-60 text-black shadow-md' : 'bg-black text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-2xl font-bold">
        <img src={RoseImage} alt="Rose Logo" className="h-8 w-8" /> 
          <Link
            to="/"
            className={`${
              isScrolled ? 'text-black' : 'text-red-500'
            } hover:text-red-600 transition-colors duration-300`}
            style={{
              fontFamily: 'Bodoni MT, serif',
              letterSpacing: '0.05em',
            }}
          >
            The Dark Love
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="space-x-6">
            <Link
              to="/"
              className={`${isScrolled ? 'text-black' : 'text-white hover:text-red-500'} transition-colors duration-300`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${isScrolled ? 'text-black' : 'text-white hover:text-red-500'} transition-colors duration-300`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`${isScrolled ? 'text-black' : 'text-white hover:text-red-500'} transition-colors duration-300`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`${isScrolled ? 'text-black' : 'text-white hover:text-red-500'} transition-colors duration-300`}
            >
              Contact
            </Link>
          </nav>

          {/* Conditional Buttons */}
          {user ? (
            <button
              onClick={handleLogout}
              className={`rounded-xl px-4 py-2 ${
                isScrolled ? 'bg-red-500 text-white' : 'bg-red-500 text-white hover:bg-red-600'
              } transition-colors duration-300`}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className={`rounded-xl px-4 py-2 ${
                isScrolled ? 'bg-red-500 text-white' : 'bg-red-500 text-white hover:bg-red-600'
              } transition-colors duration-300`}
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
