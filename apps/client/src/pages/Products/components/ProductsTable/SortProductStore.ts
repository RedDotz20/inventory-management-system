import { ProductInterface } from '@root/shared/interfaces';
import { create } from 'zustand';

interface SortState {
  products: ProductInterface[] | [];
  sortOrder: boolean | ((state: boolean) => boolean);
  columnToSort: string;
  setProducts: (products: ProductInterface[] | []) => void;
  setSortOrder: (sortOrder: boolean | ((state: boolean) => boolean)) => void;
  setColumnToSort: (columnToSort: string) => void;
}

const useSortProduct = create<SortState>((set) => ({
  products: [],
  sortOrder: false,
  columnToSort: 'productId',
  setProducts: (state: ProductInterface[] | []) => set({ products: state }),
  setSortOrder: () => set((state) => ({ sortOrder: !state.sortOrder })),
  setColumnToSort: (columnToSort: string) => set({ columnToSort })
}));

export default useSortProduct;
