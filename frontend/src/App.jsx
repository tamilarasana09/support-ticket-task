import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import CreateTicket from "./pages/CreateTicket";
import ViewTickets from "./pages/ViewTickets";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateTicket />} />
          <Route path="/tickets" element={<ViewTickets />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
