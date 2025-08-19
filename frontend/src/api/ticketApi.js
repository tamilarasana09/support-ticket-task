import axios from "axios";
import { BASE_URL } from "../constants";

// Create a ticket
export const createTicket = async (ticketData) => {
  try {
    const response = await axios.post(`${BASE_URL}/tickets`, ticketData);
    return response.data;
  } catch (error) {
    console.error("Error creating ticket:", error);
    throw error;
  }
};

// Get all tickets
export const getTickets = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tickets`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw error;
  }
};

// Update ticket status
export const updateTicketStatus = async (id, status) => {
  try {
    const response = await axios.put(`${BASE_URL}/tickets/${id}`, { status });
    return response.data;
  } catch (error) {
    console.error("Error updating ticket:", error);
    throw error;
  }
};
