import clsx from 'clsx';
import style from './index.module.scss';
import Paragraph from '@/common/Paragraph';

interface ProcessingFeeCardProps {
  title?: String;
  description?: String;
}

const ProcessingFeeCard = ({ description, title }: ProcessingFeeCardProps) => {
  return (
    <div className={clsx(style.ProcessingFeeCard, 'p-sm-4 p-3')}>
      <h2 className={`${clsx("text-capitalize", style.processingHeader)}`}>{title}</h2>
      <Paragraph >{description}</Paragraph>
      <h4 className={`text-primary-100 ${style.processingBottom}`}>Contact us For <br /> Custom Price</h4>
    </div>
  );
};

export default ProcessingFeeCard;
