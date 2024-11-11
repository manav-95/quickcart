import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItems = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'text-blue-600 font-semibold' // Active style
          : 'text-gray-800 hover:text-blue-600'
      }
    >
      {label}
    </NavLink>
  );
};

export default NavItems;