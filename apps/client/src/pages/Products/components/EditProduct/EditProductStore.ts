import { create } from 'zustand';

interface EditModalState {
  editIsOpen: boolean;
  openEditModal: () => void;
  closeEditModal: () => void;
}

const useEditProductStore = create<EditModalState>((set) => ({
  editIsOpen: false,
  openEditModal: () => set({ editIsOpen: true }),
  closeEditModal: () => set({ editIsOpen: false })
}));

export default useEditProductStore;
