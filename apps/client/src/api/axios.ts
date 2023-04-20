import axios from 'axios';
import { SERVER_URL } from './config';
const accessToken = localStorage.getItem('access_token');

export default axios.create({
  baseURL: SERVER_URL
});

export const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
  // withCredentials: true
});
