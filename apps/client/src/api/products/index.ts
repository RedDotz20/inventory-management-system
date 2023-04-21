import { axiosInstance } from '../axios';

class ProductsAPI {
  async getProducts() {
    return await axiosInstance
      .get(`/getproducts`)
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
    return await axiosInstance
      .post(`/insertproduct`, {
        productName: productName,
        brand: brand,
        categoryId: categoryId,
        unitId: unitId,
        price: price
      })
      .catch((err) => console.error(err));
  }

  async deleteProducts(id: number) {
    return await axiosInstance
      .delete(`/deleteproduct/?id=${id}`)
      .catch((err) => console.error(err));
  }
}

export default new ProductsAPI();
