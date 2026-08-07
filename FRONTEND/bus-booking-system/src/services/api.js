import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: token } : {};
};

// Auth API calls
export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
};

// Bus API calls
export const busAPI = {
  getAllBuses: () => api.get('/buses'),
  getBusById: (id) => api.get(`/buses/${id}`),
};

// Booking API calls
export const bookingAPI = {
  createBooking: (data) => api.post('/bookings', data, { headers: getAuthHeaders() }),
  getUserBookings: (userId) => api.get(`/bookings/${userId}`, { headers: getAuthHeaders() }),
};

// Admin API calls
export const adminAPI = {
  getOverview: () => api.get('/admin/overview', { headers: getAuthHeaders() }),
};

export default api;
