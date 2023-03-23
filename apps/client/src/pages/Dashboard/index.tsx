import { useState } from 'react';
import Card from '../../components/Card';

export default function Dashboard() {
  const [productCount, setProductCount] = useState(0);
  const [salesCount, setSalesCount] = useState('100');

  return (
    <div className="w-full flex p-8">
      <div className="flex flex-col w-full">
        <h1 className="text-3xl mb-8">Dashboard Page</h1>
        <div className="flex w-full gap-4">
          <Card
            header="Total Products"
            body={productCount.toString()}
            color="text-blue-500"
            borderColor="border-black"
          />
          <Card
            header="Total Sales"
            body={salesCount}
            color="text-green-500"
            borderColor="border-black"
          />
        </div>
      </div>
    </div>
  );
}
