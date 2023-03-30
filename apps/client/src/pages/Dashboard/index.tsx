import { useState } from 'react';
import { Heading } from '@chakra-ui/react';
import Card from '../../components/Card';

export default function Dashboard() {
  const [productCount, setProductCount] = useState(0);
  const [salesCount, setSalesCount] = useState('100');

  return (
    <div className="flex flex-col w-full p-8">
      <Heading as="h1" size="lg" mb={8}>
        Dashboard
      </Heading>
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
  );
}
