import CtaButton from '@/common/Button/CtaButton';
import Modal from '@/common/Modal';
import { HTMLAttributes, useState } from 'react';
import { Button } from 'react-bootstrap';

interface TalkToAnExpertButtonProps extends HTMLAttributes<HTMLElement> {
  text?: string;
  className?: string;
  onClick?: () => void;
}

const TalkToAnExpertButton = ({
  text,
  onClick,
  className,
  ...props
}: TalkToAnExpertButtonProps) => {
  const [contactModal, setContactModal] = useState(false);

  return (
    <>
      <CtaButton
        onClick={() => setContactModal(true)}
        className={className}
        {...props}
      >
        {text}
      </CtaButton>
      <Modal show={contactModal} handleClose={() => setContactModal(false)} />
    </>
  );
};

export default TalkToAnExpertButton;
