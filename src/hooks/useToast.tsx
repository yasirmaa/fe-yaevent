import { Toast } from '@/components/molecules/Toast/Toast';
import { toast, type ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useToast = () => {
  const options: ToastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const toastSuccess = (title: string, message: string) => {
    toast.success(<Toast title={title} message={message} />, options);
  };

  const toastError = (title: string, message: string) => {
    toast.error(<Toast title={title} message={message} />, options);
  };

  const toastInfo = (title: string, message: string) => {
    toast.info(<Toast title={title} message={message} />, options);
  };

  const toastWarning = (title: string, message: string) => {
    toast.warn(<Toast title={title} message={message} />, options);
  };

  return {
    toastSuccess,
    toastError,
    toastInfo,
    toastWarning,
  };
};

export default useToast;
