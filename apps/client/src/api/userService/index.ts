// import Cookies from 'js-cookie';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import axios from '../axios';
import { BASE_URL } from '../config';
import loginInterface from './types';
class UserService {
  async login(values: loginInterface) {
    try {
      const response = await axios.post(
        `/login`,
        {
          username: values.username,
          password: values.password
        }
        // { withCredentials: true }
      );

      console.log(BASE_URL);

      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);

      console.log(response.data);

      return response;
    } catch (error) {
      console.error(error);
      // if (axios.isAxiosError(error)) {
      //   const response = (error as AxiosError).response;
      //   if (response && response.status === 404) {
      //     await new Promise((resolve) => setTimeout(resolve, 1000));
      //   }
      // }
      throw error;
    }
  }

  async getNewAccessToken() {
    try {
      const response = await axios.post(`/refreshToken`);
      const newAccessToken = response.data.accessToken;
      localStorage.setItem('accessToken', newAccessToken);
      return newAccessToken;
    } catch (error) {
      console.error(error);
      // if (axios.isAxiosError(error)) {
      //   const response = (error as AxiosError).response;
      //   if (response && response.status === 404) {
      //     await new Promise((resolve) => setTimeout(resolve, 1000));
      //   }
      // }
      throw error;
    }
  }

  async logout() {
    try {
      const response = axios.post(`/logout`, { withCredentials: true });
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async getProtectedData() {
    let accessToken = localStorage.getItem('accessToken') as string;

    // Check if access token is expired
    const tokenExpiration = jwtDecode<JwtPayload>(accessToken).exp;
    const currentTime = Math.floor(Date.now() / 1000);
    if (tokenExpiration && tokenExpiration < currentTime) {
      accessToken = await this.getNewAccessToken();
    }

    try {
      const response = await axios.get(`${BASE_URL}/protectedData`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // window.location.href = '/login';
  // localStorage.removeItem('token');
}

export default new UserService();
