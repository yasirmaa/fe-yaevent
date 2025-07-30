import RootLayout from '@/components/layouts/RootLayout';
import { createBrowserRouter } from 'react-router-dom';
import * as All from '@/pages/index';
import * as Admin from '@/pages/admin/index';
import * as User from '@/pages/user/index';
import GuestGuard from '@/components/guards/GuestGuard';
import AuthedGuard from '@/components/guards/AuthedGuard';
import AdminGuard from '@/components/guards/AdminGuard';

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
        path: '/event/:eventId',
        element: <User.DetailPage />,
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
        element: <AuthedGuard />,
        children: [
          {
            path: '/checkout/:eventId',
            element: <User.CheckOutPage />,
          },
        ],
      },
      {
        element: <AdminGuard />,
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
