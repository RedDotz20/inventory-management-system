import Modal from '../../../../components/Modal';

type ModalProps = { closeModal: () => void; isOpen?: boolean };

function AddProductModal({ closeModal, isOpen }: ModalProps) {
  return (
    <Modal
      handleClose={closeModal}
      className="h-[30rem] w-[50rem] bg-white p-8 mx-8 rounded-lg flex flex-col items-center "
    >
      <h1 className="">This is the add product Modal</h1>
      <button onClick={closeModal} className="">
        CLOSE MODAL
      </button>
    </Modal>
  );
}

export default AddProductModal;
