import RootLayout from '@/components/layouts/RootLayout';
import { createBrowserRouter } from 'react-router-dom';
import * as All from '@/pages/index';
import * as Admin from '@/pages/admin/index';
import GuestGuard from '@/components/guards/GuestGuard';
import AuthGuard from '@/components/guards/AuthedGuard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <All.HomePage />,
      },
      {
        element: <GuestGuard />,
        children: [
          {
            path: '/login',
            element: <All.LoginPage />,
          },
        ],
      },
      {
        element: <AuthGuard />,
        children: [
          {
            path: '/dashboard',
            element: <Admin.DashboardPage />,
          },
        ],
      },
    ],
    errorElement: <All.NotFoundPage />,
  },
]);
