import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';
import Paragraph from '../Paragraph';
import style from './index.module.scss';

interface PaymentCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  href?: string;
}

const PaymentCard = ({
  title,
  description,
  icon,
  href = '',
}: PaymentCardProps) => {
  const router = useRouter();

  return (
    <div
      className={clsx(style.paymentCard, 'p-4 cursor-pointer h-100')}
      onClick={() => router.push(href)}
    >
      <div className={clsx(style.paymentIcon)}>{icon}</div>
      <h5 className="my-3">{title}</h5>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default PaymentCard;
