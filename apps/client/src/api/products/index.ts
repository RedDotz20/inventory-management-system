import axios from 'axios';
import { SERVER_URL } from '../config';

class ProductsAPI {
  async getProducts() {
    return await axios
      .get(`${SERVER_URL}/getproducts`)
      .then((res) => res.data.product)
      .catch((err) => console.error(err));
  }

  async insertProducts(
    productName: string,
    brand: string,
    categoryId: string,
    unitId: number,
    price: number
  ) {
    return await axios
      .post(`${SERVER_URL}/insertproduct`, {
        productName: productName,
        brand: brand,
        categoryId: categoryId,
        unitId: unitId,
        price: price
      })
      .catch((err) => console.error(err));
  }

  async deleteProducts(id: number) {
    return await axios
      .delete(`${SERVER_URL}/deleteproduct/?id=${id}`)
      .catch((err) => console.error(err));
  }
}

export default new ProductsAPI();
