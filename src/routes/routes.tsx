import RootLayout from '@/components/layouts/RootLayout';
import DashboardPage from '@/pages/admin/DashboardPage';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import { createBrowserRouter } from 'react-router-dom';
import * as Auth from '@/pages/index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/login',
        element: <Auth.LoginPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
