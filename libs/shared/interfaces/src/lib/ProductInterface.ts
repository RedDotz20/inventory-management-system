export interface ProductInterface {
  rowNumber: number;
  productId: number;
  productName: string;
  inventory: number;
  brand: string;
  categoryName: string;
  unitName: string;
  [key: string]: number | string;
}
