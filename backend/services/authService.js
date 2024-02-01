import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

export const authenticate = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/authenticate`, {
      name: username,
      password
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};