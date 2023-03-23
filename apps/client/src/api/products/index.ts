import axios from 'axios';
import { SERVER_URL } from '../../config';

class ProductsAPI {
  async getProducts() {
    return await axios
      .get(`${SERVER_URL}/getproducts`)
      .then((res) => res.data.product)
      .catch((err) => console.error(err));
  }
}

export default new ProductsAPI();
