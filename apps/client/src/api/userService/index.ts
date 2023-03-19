import axios from 'axios';
import loginInterface from './types';

const SERVER_URL = `http://localhost:3000`;

class UserService {
  async login(values: loginInterface) {
    try {
      return await axios
        .post(`${SERVER_URL}/login`, {
          username: values.username,
          password: values.password,
        })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          console.log('isAuthenticated', !!localStorage.getItem('token'));
          return response.data;
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(error);
    }
  }

  async logout(): Promise<void> {
    axios
      .post(`${SERVER_URL}/logout`, null, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((res) => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      })
      .catch((err) => console.error(err));
  }
}

export default new UserService();
