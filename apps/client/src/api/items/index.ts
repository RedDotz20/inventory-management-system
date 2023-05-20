import { axiosInstance } from '../axios';

interface ItemsInterface {
  item_code: string;
  variant: string;
  price: string;
  productName: string;
  brandName: string;
}

export async function getItems() {
  return await axiosInstance
    .get(`/getItemCodes`)
    .then((response) => response.data.product)
    .catch((error) => console.error(error));
}

export async function insertItems(newItems: ItemsInterface) {
  const response = await axiosInstance
    .post('/insertItem', {
      itemCode: newItems.item_code,
      variant: newItems.variant,
      price: parseInt(newItems.price),
      productName: newItems.productName,
      brandName: newItems.brandName
    })
    .catch((error) => console.error(error));
  return response;
}
