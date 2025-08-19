import React, { useEffect, useState } from "react";
import { getTickets, updateTicketStatus } from "../api/ticketApi";

const ViewTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const data = await getTickets();
      setTickets(data.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleStatusUpdate = async (id, currentStatus) => {
    const nextStatus =
      currentStatus === "Open"
        ? "In Progress"
        : currentStatus === "In Progress"
        ? "Closed"
        : "Closed";
    try {
      await updateTicketStatus(id, nextStatus);
      fetchTickets();
    } catch (err) {
      console.error(err);
    }
  };
  if (loading) return <p className="text-center mt-10">Loading tickets...</p>;
 if (loading) return <p className="text-center mt-10">Loading tickets...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Tickets</h2>
      {tickets.length === 0 ? (
        <p className="text-center text-gray-500">No tickets found.</p>
      ) : (
        tickets.map((ticket) => {
          const formattedDate = new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }).format(new Date(ticket.created_at));

          return (
            <div
              key={ticket.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex justify-between items-start border border-gray-100"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{ticket.title}</h3>
                <p className="text-gray-600 mb-3">{ticket.description}</p>
                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-medium">Priority:</span> {ticket.priority} |
                  <span className="font-medium"> Status:</span> {ticket.status}
                </p>
                <p className="text-sm text-gray-400">Created On: {formattedDate}</p>
              </div>

              {ticket.status !== "Closed" && (
                <button
                  className="ml-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200 shadow"
                  onClick={() => handleStatusUpdate(ticket.id, ticket.status)}
                >
                  Next Status
                </button>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};


export default ViewTickets;
