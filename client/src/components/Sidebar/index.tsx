import { lazy } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Layout from './Layout';

const Dashboard = lazy(() => import('../../pages/Dashboard'));
const Products = lazy(() => import('../../pages/Products'));
const Order = lazy(() => import('../../pages/Order'));
const Sales = lazy(() => import('../../pages/Sales'));
const Login = lazy(() => import('../../pages/Login'));

const isAuthenticated = !!localStorage.getItem('token');
const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Navigate
        to={isAuthenticated ? '/home/dashboard' : '/login'}
        replace={true} //? Set as Default Route
      />
    ),
  },
  {
    index: true,
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      { index: true, path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <Products /> },
      { path: 'orders', element: <Order /> },
      { path: 'sales', element: <Sales /> },
    ],
  },
  {
    path: '*',
    element: <h1>Page Not Found</h1>,
  },
];

export default function AppRoutes() {
  return useRoutes(routes);
}
