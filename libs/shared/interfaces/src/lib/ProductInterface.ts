// export interface ProductInterface {
//   rowNumber: number;
//   productId: number;
//   productName: string;
//   inventory: number;
//   brand: string;
//   categoryName: string;
//   unitName: string;
//   [key: string]: number | string;
// }
export interface ProductInterface {
  productId: number;
  productName: string;
  variants: string;
  brandName: string;
  categoryName: string;
  unitName: string;
  [key: string]: number | string;
}
