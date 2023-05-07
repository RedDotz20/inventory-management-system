import { useQuery } from '@tanstack/react-query';
import { getProductListOrder } from '../api/orders';

interface ListOrderInterface {
  productName: string;
  brand: string;
  item_code_ids: string[];
  item_codes: string[];
  variants: string[];
  prices: number[];
  stockQuantities: number[];
}

export function useGetListOrderQuery() {
  return useQuery<ListOrderInterface[], Error>({
    queryKey: ['listProductOrder'],
    queryFn: getProductListOrder
  });
}
// interface ListOrderInterface {
//   productName: string;
//   brand: string;
//   item_code_ids: string;
//   item_codes: string;
//   variants: string;
//   prices: string;
//   stockQuantities: string;
// }

// export function useGetListOrderQuery() {
//   return useQuery<ListOrderInterface[], Error>({
//     queryKey: ['listProductOrder'],
//     queryFn: getProductListOrder
//   });
// }
