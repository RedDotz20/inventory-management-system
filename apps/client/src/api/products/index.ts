import axios from 'axios';

const SERVER_URL = `http://localhost:3000`;

class ProductsAPI {
  async getProducts() {
    return await axios
      .get(`${SERVER_URL}/getproducts`)
      .then((res) => res.data.product)
      .catch((err) => console.error(err));
  }
}

export default new ProductsAPI();
