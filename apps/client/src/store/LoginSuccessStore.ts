import { create } from 'zustand';

interface LoginSuccessAlertType {
  isLoginSuccessful: boolean;
  openAlert: () => void;
  closeAlert: () => void;
}

const useLoginSuccessAlert = create<LoginSuccessAlertType>((set) => ({
  isLoginSuccessful: false,
  openAlert: () => set({ isLoginSuccessful: true }),
  closeAlert: () => set({ isLoginSuccessful: false })
}));

export default useLoginSuccessAlert;
