import Modal from '../../../../components/Modal';
import Backdrop from '../../../../components/Backdrop';

type ModalProps = { closeModal: () => void; isOpen?: boolean };

function DeleteProductContent({ closeModal }: ModalProps) {
  return (
    <>
      <h1 className="">This is the DELETE product Modal</h1>
      <button onClick={closeModal} className="">
        CLOSE MODAL
      </button>
    </>
  );
}

function DeleteProductModal({ closeModal }: ModalProps) {
  return (
    <Backdrop
      onClick={closeModal}
      style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
    >
      <Modal
        handleClose={closeModal}
        className="h-[30rem] w-[50rem] bg-white p-8 mx-8 rounded-lg flex flex-col items-center"
      >
        <DeleteProductContent closeModal={closeModal} />
      </Modal>
    </Backdrop>
  );
}

export default DeleteProductModal;
