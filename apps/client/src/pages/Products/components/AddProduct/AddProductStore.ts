import { create } from 'zustand';

interface AddModalState {
  addIsOpen: boolean;
  openAddModal: () => void;
  closeAddModal: () => void;
}

const useAddProductStore = create<AddModalState>((set) => ({
  addIsOpen: false,
  openAddModal: () => set({ addIsOpen: true }),
  closeAddModal: () => set({ addIsOpen: false }),
}));

export default useAddProductStore;
