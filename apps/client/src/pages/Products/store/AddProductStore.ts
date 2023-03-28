import { create } from 'zustand';

type ModalState = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const useAddModalStore = create<ModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export default useAddModalStore;
