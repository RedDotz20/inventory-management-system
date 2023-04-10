import { create } from 'zustand';

interface LoginSuccessAlertType {
  isLoginSuccessful: boolean;
  openLoginSuccess: () => void;
  closeLoginSuccess: () => void;
}

const useLoginSuccessAlert = create<LoginSuccessAlertType>((set) => ({
  isLoginSuccessful: false,
  openLoginSuccess: () => set({ isLoginSuccessful: true }),
  closeLoginSuccess: () => set({ isLoginSuccessful: false })
}));

export default useLoginSuccessAlert;
