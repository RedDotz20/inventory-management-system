import { useQueryClient } from '@tanstack/react-query';
import { Select } from '@chakra-ui/react';
import Backdrop from '../../../../components/Backdrop';
import Modal from '../../../../components/Modal';

import { ProductInterface } from '@root/shared/interfaces';

type ModalProps = { closeModal: () => void; isOpen?: boolean };

function AddProductContent({ closeModal }: ModalProps) {
  const queryClient = useQueryClient(),
    data = queryClient.getQueryData<ProductInterface>(['productsTable']);

  const categories = () => {
    const categoryNames =
      Array.isArray(data) && data.map((prod) => prod.categoryName);
    return Array.from(new Set(categoryNames || []));
  };

  return (
    <>
      <h1 className="">This is the ADD product Modal</h1>
      <Select placeholder="Select Category">
        {categories().map((category, index) => {
          return (
            <option key={index} value={category}>
              {`${index + 1}. ${category}`}
            </option>
          );
        })}
      </Select>
      <button onClick={closeModal} className="">
        CLOSE MODAL
      </button>
    </>
  );
}

function AddProductModal({ closeModal, isOpen }: ModalProps) {
  return (
    <Backdrop
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={closeModal}
    >
      <Modal
        handleClose={closeModal}
        className="h-[30rem] w-[50rem] bg-white p-8 mx-8 rounded-lg flex flex-col items-center"
      >
        <AddProductContent closeModal={closeModal} />
      </Modal>
    </Backdrop>
  );
}

export default AddProductModal;
