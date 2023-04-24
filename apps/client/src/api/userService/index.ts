import { AxiosError } from 'axios';
import { axiosInstance } from '../axios';
import { loginInterface } from './types';

async function loginService(values: loginInterface) {
  try {
    const response = await axiosInstance.post(`/login`, {
      username: values.username,
      password: values.password
    });

    const { accessToken } = response.data;
    localStorage.setItem('accessToken', accessToken);

    return response;
  } catch (error) {
    if ((error as AxiosError).isAxiosError) {
      const response = (error as AxiosError).response;
      if (response && response.status === 404) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
    throw error;
  }
}

async function logoutService() {
  try {
    const response = axiosInstance.post(`/logout`, { withCredentials: true });
    return response;
  } catch (error) {
    if ((error as AxiosError).isAxiosError) {
      const response = (error as AxiosError).response;
      if (response && response.status === 404) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
    throw error;
  }
}

export { loginService, logoutService };
