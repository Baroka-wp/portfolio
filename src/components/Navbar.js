import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FaHamburger } from 'react-icons/fa';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <nav className="navBar">
      <button
        type="button"
        onClick={handleToggle}
      >
        {navbarOpen ? <AiOutlineClose /> : <FaHamburger />}
      </button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <li>
          <NavLink
            to="/"
            onClick={handleToggle}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experiences"
            onClick={handleToggle}
          >
            Experiences
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/achivements"
            onClick={handleToggle}
          >
            Achivements
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={handleToggle}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            onClick={handleToggle}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
