import { create } from 'zustand';

interface SortState {
  sortOrder: boolean | ((state: boolean) => boolean);
  columnToSort: string;
  setSortOrder: (sortOrder: boolean | ((state: boolean) => boolean)) => void;
  setColumnToSort: (columnToSort: string) => void;
}

const useSortItem = create<SortState>((set) => ({
  sortOrder: false,
  columnToSort: 'item_code_id',
  setSortOrder: () => set((state) => ({ sortOrder: !state.sortOrder })),
  setColumnToSort: (columnToSort: string) => set({ columnToSort })
}));

export default useSortItem;
