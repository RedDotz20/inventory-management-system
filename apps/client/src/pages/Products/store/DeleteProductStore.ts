import { create } from 'zustand';

interface DeleteModalState {
  deleteIsOpen: boolean;
  openDeleteModal: () => void;
  closeDeleteModal: () => void;
}

const useDeleteProductStore = create<DeleteModalState>((set) => ({
  deleteIsOpen: false,
  openDeleteModal: () => set({ deleteIsOpen: true }),
  closeDeleteModal: () => set({ deleteIsOpen: false }),
}));

export default useDeleteProductStore;
