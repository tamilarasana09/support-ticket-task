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