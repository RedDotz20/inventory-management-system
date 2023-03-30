import { useQueryClient } from '@tanstack/react-query';

function Order() {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(['productsTable']);
  console.log(data);
  return (
    <div className="w-full flex justify-center items-center align-center">
      <h1 className="text-3xl">Order Page</h1>
    </div>
  );
}

export default Order;
