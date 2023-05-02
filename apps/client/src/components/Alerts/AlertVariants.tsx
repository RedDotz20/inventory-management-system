import { toast, ToastOptions } from 'react-toastify';

const options: ToastOptions = {
  position: 'top-right',
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored'
};

const successAlert = (success: string) => toast.success(success, options);
const errorAlert = (error: string) => toast.error(error, options);
const infoAlert = (info: string) => toast.info(info, options);

export { successAlert, errorAlert, infoAlert };
