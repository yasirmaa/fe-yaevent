import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
  return (
    <div>
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default RootLayout;
