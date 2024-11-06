// src/api/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://sua-url-do-backend.com/api', // Ajuste para a URL do backend fornecido
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar o token
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
