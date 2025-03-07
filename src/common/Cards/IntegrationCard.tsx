import clsx from 'clsx';
import { useRouter } from 'next/router';
import style from './index.module.scss';

interface IntegrationCardProps {
  title?: String;
  desc?: String;
}

const IntegrationCard = ({ desc, title }: IntegrationCardProps) => {
  const router = useRouter();

  return (
    <div
      className={clsx(style.IntegratationCard, 'p-2', {
        'align-items-start p-4': router.pathname.includes('referral-partner'),
      })}
    >
      <div
        className={clsx(
          style.integrationIcon,
          'd-flex justify-content-center align-items-center',
        )}
      >
        <img src="/images/icon/diamond-icon.png" alt="" />
      </div>
      <h2
        dangerouslySetInnerHTML={{ __html: title || '' }}
        className={`fs-17 text-capitalize ${router.pathname.includes('referral-partner') ? 'text-start' : 'text-center'}`}
      />
      <p
        className={` ${router.pathname.includes('referral-partner') ? 'text-start' : 'text-center'}  para`}
        dangerouslySetInnerHTML={{ __html: desc || '' }}
      />
    </div>
  );
};

export default IntegrationCard;
