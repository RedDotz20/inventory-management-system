import { axiosInstance } from '../axios';

const getProductListOrder = async () => {
  return await axiosInstance
    .get(`/getProductListOrder`)
    .then((response) => response.data.productLists)
    .catch((error) => console.error(error));
};

export { getProductListOrder };
