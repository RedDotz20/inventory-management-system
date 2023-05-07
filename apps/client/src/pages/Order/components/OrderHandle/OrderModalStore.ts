import { create } from 'zustand';

interface OrderModalState {
  buyNowIsOpen: boolean;
  openbuyNowModal: () => void;
  closebuyNowModal: () => void;
}

const useBuyNowStore = create<OrderModalState>((set) => ({
  buyNowIsOpen: false,
  openbuyNowModal: () => set({ buyNowIsOpen: true }),
  closebuyNowModal: () => set({ buyNowIsOpen: false })
}));

export default useBuyNowStore;
