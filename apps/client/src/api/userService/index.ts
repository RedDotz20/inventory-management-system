import axios, { AxiosError } from 'axios';
import loginInterface from './types';
import { SERVER_URL } from '../../config';

class UserService {
  async login(values: loginInterface) {
    try {
      const response = await axios.post(`${SERVER_URL}/login`, {
        username: values.username,
        password: values.password
      });

      localStorage.setItem('token', response.data.token);
      console.log('isAuthenticated', !!localStorage.getItem('token'));

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const response = (error as AxiosError).response;
        if (response && response.status === 404) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
      throw error;
    }
  }

  async logout(): Promise<void> {
    axios
      .post(`${SERVER_URL}/logout`, null, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .then((res) => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      })
      .catch((err) => console.error(err));
  }
}

export default new UserService();
