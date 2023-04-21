import axios from 'axios';
import { BASE_URL } from './config';
const accessToken = localStorage.getItem('accessToken');

export default axios.create({
  baseURL: BASE_URL
});

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    const newAccessToken = response.headers['accessToken'];
    if (newAccessToken) {
      localStorage.setItem('accessToken', newAccessToken);
      axiosInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${newAccessToken}`;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
