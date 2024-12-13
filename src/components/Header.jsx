import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 text-white">
     
      <div className="logo">
        <img src="../../public/i.jpg" alt="Logo" className="h-16 w-16  rounded"/>
        
      </div>

      <div className="lg:hidden flex items-center space-x-4">
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center  space-y-1 w-8 h-8"
        >
          <span className="w-full h-1 bg-cyan-800"></span>
          <span className="w-full h-1 bg-cyan-800"></span>
          <span className="w-full h-1 bg-cyan-800"></span>
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transform transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`bg-gray-800 p-6 rounded-lg space-y-4 text-center w-60 transform transition-all duration-300 ${
            isOpen ? 'scale-100' : 'scale-95'
          }`}
          onClick={(e) => e.stopPropagation()} 
        >
        
          <ul>
          <li>
            <NavLink  className="block text-white py-2 hover:text-gray-400" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="block text-white py-2 hover:text-gray-400" to="/about">A propos</NavLink>
          </li>
          <li>
            <NavLink className="block text-white py-2 hover:text-gray-400" to="/reservation">Reservation</NavLink>
          </li>
          <li>
            <NavLink className="block text-white py-2 hover:text-gray-400" to="/contact">Contact</NavLink>
          </li>
        </ul>
        </div>
      </div>

   
      <nav className="hidden lg:flex items-center space-x-8">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">A propos</NavLink>
          </li>
          <li>
            <NavLink to="/reservation">Reservation</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        {/* <a href="#" className="text-white hover:text-gray-400">Home</a>
        <a href="#" className="text-white hover:text-gray-400">About</a>
        <a href="#" className="text-white hover:text-gray-400">Services</a>
        <a href="#" className="text-white hover:text-gray-400">Contact</a> */}
      </nav>
    </header>
  );
};

export default Header;
