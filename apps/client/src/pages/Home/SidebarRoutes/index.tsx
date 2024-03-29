import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ComponentLoader from '../../../components/Loader/ComponentLoader';

const Dashboard = lazy(() => import('../../Dashboard'));
const Items = lazy(() => import('../../Items'));
const Products = lazy(() => import('../../Products'));
const Stocks = lazy(() => import('../../Stocks'));
const Order = lazy(() => import('../../Order'));
const Sales = lazy(() => import('../../Sales'));
const NotFound = lazy(() => import('../../NotFound'));

export default function SidebarRoutes() {
  return (
    <Suspense fallback={<ComponentLoader />}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="items" element={<Items />} />
        <Route path="products" element={<Products />} />
        <Route path="stocks" element={<Stocks />} />
        <Route path="orders" element={<Order />} />
        <Route path="sales" element={<Sales />} />
      </Routes>
    </Suspense>
  );
}
