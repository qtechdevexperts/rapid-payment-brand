import Form from '@/Form';
import { Modal as ReactModal } from 'react-bootstrap';

interface ModalProps {
  show?: boolean;
  handleClose?: () => void;
}

const Modal = ({ handleClose, show }: ModalProps) => {
  return (
    <ReactModal show={show} size="lg" centered onHide={handleClose}>
      <ReactModal.Body className="p-xxl-5 p-sm-4 ">
        <Form onCloseModal={handleClose} />
      </ReactModal.Body>
    </ReactModal>
  );
};

export default Modal;
