import axios from 'axios';
import { SERVER_URL } from '../../config';

class ItemsAPI {
  async getItems() {
    return await axios
      .get(`${SERVER_URL}/getItemCodes`)
      .then((res) => res.data.product)
      .catch((err) => console.error(err));
  }
}

export default new ItemsAPI();
