import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import Loader from '../utils/Loader';

const Home = lazy(() => import('../../Home'));
const Dashboard = lazy(() => import('../../Dashboard'));
const Products = lazy(() => import('../../Products'));
const Order = lazy(() => import('../../Order'));
const Sales = lazy(() => import('../../Sales'));
const NotFound = lazy(() => import('../../NotFound'));

export default function SidebarRoutes() {
  return (
    <Suspense fallback={'loading ...'}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="home" element={<Home />} />
        <Route path="orders" element={<Order />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="sales" element={<Sales />} />
      </Routes>
    </Suspense>
  );
}
