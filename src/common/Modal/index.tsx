import Form2 from '@/Form/Form2';
import { Modal as ReactModal } from 'react-bootstrap';
import style from "./index.module.scss"
import { RxCross2 } from "react-icons/rx";



interface ModalProps {
  show?: boolean;
  handleClose?: () => void;
}

const Modal = ({ handleClose, show }: ModalProps) => {
  return (
    <ReactModal className='' show={show} size="lg" centered onHide={handleClose}>
      <ReactModal.Body className="p-large-5 p-sm-4 position-relative ">
        <div onClick={handleClose} className={`${style.modalIcon}`}>
          <RxCross2 color='#1a2e5b' />
        </div>
        <Form2 onCloseModal={handleClose} />
      </ReactModal.Body>
    </ReactModal>
  );
};

export default Modal;
