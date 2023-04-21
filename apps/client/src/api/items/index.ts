import { axiosInstance } from '../axios';

class ItemsAPI {
  async getItems() {
    return await axiosInstance
      .get(`/getItemCodes`)
      .then((res) => res.data.product)
      .catch((err) => console.error(err));
  }
}

export default new ItemsAPI();
