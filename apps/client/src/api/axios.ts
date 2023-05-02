import axios from 'axios';
import { BASE_URL } from './config';
const accessToken = localStorage.getItem('accessToken');

const axiosInstance = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // const customError: CustomAxiosError = error;
    // customError.isAxiosError = true;
    return Promise.reject(error);
  }
);

const authAxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
});

authAxiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

authAxiosInstance.interceptors.response.use(
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

export { axiosInstance, authAxiosInstance };
