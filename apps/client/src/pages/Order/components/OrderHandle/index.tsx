import { Button, ButtonGroup } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { Suspense, lazy, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import useBuyNowStore from './OrderModalStore';

const BuyNow = lazy(() => import('./BuyNow'));

function OrderHandle({
  itemData,
  itemQuantity,
  isAvailable,
  selectedVariant
}: any) {
  const { buyNowIsOpen, openbuyNowModal, closebuyNowModal } = useBuyNowStore();
  const [loading, setIsLoading] = useState(false);

  const handleBuyNow = async () => {
    setIsLoading(true);
    await import('./BuyNow');
    setIsLoading(false);
    openbuyNowModal();
  };

  return (
    <>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {buyNowIsOpen && (
          <Suspense>
            <BuyNow
              itemData={itemData}
              selectedVariant={selectedVariant}
              itemQuantity={itemQuantity}
              closeModal={closebuyNowModal}
            />
          </Suspense>
        )}
      </AnimatePresence>

      <ButtonGroup spacing="2" mt={4}>
        <Button
          isDisabled={!isAvailable() || !selectedVariant}
          leftIcon={<AiOutlineShoppingCart />}
          variant="ghost"
          colorScheme="orange"
        >
          Add to cart
        </Button>
        <Button
          isDisabled={!isAvailable() || !selectedVariant}
          isLoading={loading}
          variant="solid"
          colorScheme="orange"
          onClick={() => handleBuyNow()}
        >
          Buy now
        </Button>
      </ButtonGroup>
    </>
  );
}

export default OrderHandle;
