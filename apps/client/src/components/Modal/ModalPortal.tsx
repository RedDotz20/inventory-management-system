import React from 'react';
import ReactDOM from 'react-dom';

type ModalPortalProps = { children: React.ReactNode };

function ModalPortal({ children }: ModalPortalProps) {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;
  return ReactDOM.createPortal(children, modalRoot);
}

export default ModalPortal;
