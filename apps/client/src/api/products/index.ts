// import { ProductInterface } from '@root/shared/interfaces';
// import { AxiosResponse } from 'axios';
import { axiosInstance } from '../axios';

interface AddProductinterface {
  productName: string;
  brandName: string;
  categoryName: string;
  unitName: string;
}

async function getProducts() {
  return await axiosInstance
    .get(`/getproducts`)
    .then((response) => response.data.product)
    .catch((error) => console.error(error));
}

async function insertProducts(newProducts: AddProductinterface) {
  const response = await axiosInstance.post('/insertproduct', {
    productName: newProducts.productName,
    brandName: newProducts.brandName,
    categoryName: newProducts.categoryName,
    unitName: newProducts.unitName
  });
  return response;
}

async function deleteProducts(id: number) {
  return await axiosInstance
    .delete(`/deleteproduct/?id=${id}`)
    .catch((err) => console.error(err));
}

export { getProducts, insertProducts, deleteProducts };
