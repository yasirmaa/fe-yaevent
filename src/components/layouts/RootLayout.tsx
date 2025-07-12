import { useAuth } from '@/hooks/useAuth';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default RootLayout;
