import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 dark:bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">
        TicketApp
      </Link>

      <div className="hidden md:flex space-x-4">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "font-bold w-16" : "hover:font-bold w-16"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/create"
          className={({ isActive }) =>
            isActive ? "font-bold w-28" : "hover:font-bold w-28"
          }
        >
          Create Ticket
        </NavLink>
        <NavLink
          to="/tickets"
          className={({ isActive }) =>
            isActive ? "font-bold" : "hover:font-bold"
          }
        > 
          View Tickets
        </NavLink>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <Bars3Icon className="h-6 w-6" /> 
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-600 dark:bg-gray-900 flex flex-col items-center space-y-4 py-4 md:hidden">
          <NavLink
            to="/login"
            className={({ isActive }) =>
            isActive ? "font-bold " : "hover:font-bold "
            }
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/create"
            className={({ isActive }) =>
            isActive ? "font-bold " : "hover:font-bold "
            }
            onClick={() => setIsOpen(false)}
          >
            Create Ticket
          </NavLink>
          <NavLink
            to="/tickets"
            className={({ isActive }) =>
            isActive ? "font-bold" : "hover:font-bold "
            }
            onClick={() => setIsOpen(false)}
          >
            View Tickets
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
