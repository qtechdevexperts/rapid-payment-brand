import Paragraph from '@/common/Paragraph';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import styles from './index.module.scss';

interface IntegratationCardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  desc?: string;
}

const IntegrationCard2 = ({ desc, title }: IntegratationCardProps) => {
  return (
    <div className={clsx(styles.card1)}>
      <div className="d-flex flex-column gap-3 justify-content-start align-items-start">
        <div className={clsx(styles.diamondIcon)}>
          <img src="/images/icon/diamond-icon.png" alt="" />
        </div>
        <h3 dangerouslySetInnerHTML={{ __html: title || '' }} />
      </div>
      <Paragraph>{desc}</Paragraph>
    </div>
  );
};

export default IntegrationCard2;
