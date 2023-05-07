import { create } from 'zustand';

interface SearchState {
  query: string;
  setQuery: (query: string) => void;
}

const useSearchCard = create<SearchState>((set) => ({
  query: '',
  setQuery: (query: string) => set({ query })
}));

export default useSearchCard;
