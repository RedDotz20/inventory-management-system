import { create } from 'zustand';

interface LoginFailedAlertType {
  isLoginFailed: boolean;
  openLoginFailed: () => void;
  closeLoginFailed: () => void;
}

const useLoginFailedAlert = create<LoginFailedAlertType>((set) => ({
  isLoginFailed: false,
  openLoginFailed: () => set({ isLoginFailed: true }),
  closeLoginFailed: () => set({ isLoginFailed: false })
}));

export default useLoginFailedAlert;
