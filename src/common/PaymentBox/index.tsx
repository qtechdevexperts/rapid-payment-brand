import Button from '@/common/Button';
import { ArrowRightIcon } from '@/utils/Icon';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import style from './index.module.scss';

interface PaymentBoxProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  image?: string;
  showBtn?: boolean;
  onClick?: () => void;
}

const PaymentBox = ({
  title,
  image,
  onClick,
  description,
  className,
  showBtn = false,
  ...props
}: PaymentBoxProps) => {
  return (
    <div className={clsx(style.paymentBox, 'd-flex flex-column')} {...props}>
      <div className={`${style.iconBox}`}>
        <img src={image} alt="service" />
      </div>

      <div className="service-sct">
        <h2>{title}</h2>
        <p>{description}</p>

        <Button
          onClick={onClick}
          className={` btn ${style.btnOutline} `}
          iconRight={<ArrowRightIcon />}
        >
          Explore Now
        </Button>
      </div>
    </div>
  );
};

export default PaymentBox;
