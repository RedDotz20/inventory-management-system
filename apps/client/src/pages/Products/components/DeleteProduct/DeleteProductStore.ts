import { create } from 'zustand';

interface DeleteModalState {
  deleteIsOpen: boolean;
  openDeleteModal: () => void;
  closeDeleteModal: () => void;
}

interface DeleteIdState {
  deleteId: number;
  setDeleteId: (id: number) => void;
}

export const useDeleteId = create<DeleteIdState>((set) => ({
  deleteId: 0,
  setDeleteId: (id) => set({ deleteId: id })
}));

export const useDeleteProductStore = create<DeleteModalState>((set) => ({
  deleteIsOpen: false,
  openDeleteModal: () => set({ deleteIsOpen: true }),
  closeDeleteModal: () => set({ deleteIsOpen: false })
}));
