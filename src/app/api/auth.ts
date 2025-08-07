import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

export const signUp = async (userData: {
  name: string;
  email: string;
  password: string;
  userType: string;
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Signup failed');
    } else {
      throw new Error('Network error. Please try again.');
    }
  }
};

export const checkEmailAvailability = async (email: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/auth/check-email?email=${email}`);
    return response.data.available;
  } catch (error) {
    console.error('Error checking email:', error);
    return false;
  }
};