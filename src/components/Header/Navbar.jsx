// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu toggle

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Update the URL with the search query
    const url = new URL(window.location);
    url.searchParams.set('search', query);
    window.history.pushState({}, '', url);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">QuickCart</div>

        {/* Search Section
        <div className="flex items-center space-x-2">
          <select className="border border-gray-300 rounded-md p-2 text-gray-600">
            <option hidden>All Categories</option>
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
            <option value="Sports">Sports</option>
            <option value="Beauty">Beauty</option>
          </select>
          <input
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleSearch}
            className="border border-gray-300 rounded-md p-2 w-64"
          />
          <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Search</button>
        </div> */}

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden flex items-center space-x-4">
          <button onClick={toggleMenu} className="text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex space-x-9 uppercase font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
            }
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-4 py-4 bg-gray-50">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
