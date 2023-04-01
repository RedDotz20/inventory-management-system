import { create } from 'zustand';

interface SearchState {
  query: string;
  setQuery: (query: string) => void;
}

const useSearchProduct = create<SearchState>((set) => ({
  query: '',
  setQuery: (query: string) => set({ query }),
}));

export default useSearchProduct;
