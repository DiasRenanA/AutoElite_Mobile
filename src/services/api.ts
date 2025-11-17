import axios from 'axios';
import { getToken } from '../utils/authStorage';

const api = axios.create({
  baseURL: 'https://sua-api.com/v1',
});


api.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;