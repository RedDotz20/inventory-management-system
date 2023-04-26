import { ProductInterface } from '@root/shared/interfaces';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/products';

export function useProductsQuery() {
  return useQuery<ProductInterface[], Error>({
    queryKey: ['productsTable'],
    queryFn: getProducts
  });
}
