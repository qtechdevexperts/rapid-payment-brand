import Button from '@/common/Button';
import { ArrowRightIcon } from '@/utils/Icon';
import clsx from 'clsx';
import router from 'next/router';
import { HTMLAttributes } from 'react';
import style from './index.module.scss';

interface PaymentBoxProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  image?: string;
  showBtn?: boolean;
}

const PaymentBox = ({
  title,
  image,
  description,
  className,
  showBtn = false,
  ...props
}: PaymentBoxProps) => {
  return (
    <div className={clsx(style.paymentBox, 'd-flex flex-column')} {...props}>
      <img src={image} alt="service" />

      <div className="service-sct">
        <h2>{title}</h2>
        <p>{description}</p>
        {showBtn && (
          <Button
            onClick={() => router.reload()}
            className={` btn btn-outline-feature `}
            iconRight={<ArrowRightIcon />}
          >
            Explore Now
          </Button>
        )}
      </div>
    </div>
  );
};

export default PaymentBox;
