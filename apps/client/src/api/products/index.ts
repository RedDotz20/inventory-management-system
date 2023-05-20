import { axiosInstance } from '../axios';

interface Productinterface {
  productName: string;
  brandName: string;
  categoryName: string;
  unitName: string;
  productId?: number;
}

export async function getProducts() {
  return await axiosInstance
    .get(`/getproducts`)
    .then((response) => response.data.product)
    .catch((error) => console.error(error));
}

export async function insertProducts(newProducts: Productinterface) {
  const response = await axiosInstance
    .post('/insertproduct', {
      productName: newProducts.productName,
      brandName: newProducts.brandName,
      categoryName: newProducts.categoryName,
      unitName: newProducts.unitName
    })
    .catch((error) => console.error(error));
  return response;
}

export async function editProducts(modifyProducts: Productinterface) {
  const response = await axiosInstance
    .put('/editproduct', {
      productName: modifyProducts.productName,
      brandName: modifyProducts.brandName,
      categoryName: modifyProducts.categoryName,
      unitName: modifyProducts.unitName,
      productId: modifyProducts.productId
    })
    .catch((error) => console.error(error));
  return response;
}

export async function deleteProducts(id: number) {
  return await axiosInstance
    .delete(`/deleteproduct/?id=${id}`)
    .catch((err) => console.error(err));
}
