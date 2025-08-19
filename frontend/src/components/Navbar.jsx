import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">TicketApp</div>
      <div className="space-x-4">
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/create" className="hover:underline">Create Ticket</Link>
        <Link to="/tickets" className="hover:underline">View Tickets</Link>
      </div>
    </nav>
  );
};

export default Navbar;
