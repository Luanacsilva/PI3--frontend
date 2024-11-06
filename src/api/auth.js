// src/api/auth.js

import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = async (username, password) => {
  try {
    const response = await api.post('/auth/login', { username, password }); // Rota ajustada
    const { token } = response.data;

    // Armazena o token
    await AsyncStorage.setItem('token', token);

    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao fazer login';
  }
};

export const logout = async () => {
  try {
    await AsyncStorage.removeItem('token');
    return true;
  } catch (error) {
    throw 'Erro ao fazer logout';
  }
};

export const isAuthenticated = async () => {
  const token = await AsyncStorage.getItem('token');
  return !!token;
};
