import { useGetListOrderQuery } from '../../../../hooks/useGetListOrderQuery';
import CardContent from './CardContent';

export default function ProductCards() {
  const { isLoading, isError, data } = useGetListOrderQuery();

  if (isLoading) return <>Loading</>;
  if (isError) return <>Error</>;

  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((productItem, index) => {
          const listItems = productItem;
          console.log(productItem);
          return <CardContent key={index} productItem={listItems} />;
        })}
    </>
  );
}
