import axios from 'axios';
import { getToken } from '../utils/storage'; // Ajuste o caminho se necessário

// Use a URL da sua API
const api = axios.create({
  baseURL: 'http://localhost:3001', 
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