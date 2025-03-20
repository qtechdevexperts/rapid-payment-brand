import clsx from 'clsx';
import { useRouter } from 'next/router';
import style from './index.module.scss';
import Paragraph from '../Paragraph';
import { useEffect, useRef, useState } from 'react';

interface IntegrationCardProps {
  title?: String;
  desc?: String;
}

const IntegrationCard = ({ desc, title }: IntegrationCardProps) => {
  const router = useRouter();


  const paragraphRef = useRef<HTMLDivElement>(null);
  const [formattedDesc, setFormattedDesc] = useState(desc);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1500) {
        setFormattedDesc(desc?.replace(/<br\s*\/?>/gi, ' '));
      } else {
        setFormattedDesc(desc);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [desc]);





  return (
    <div
      className={clsx(style.IntegratationCard, {
        'align-items-start p-4': router.pathname.includes('referral-partner'),
      })}
    >


      <div className='d-flex flex-column justify-content-around align-items-center gap-2'>
        <div className='d-flex flex-column justify-content-center align-items-center gap-2'>
          <div
            className={clsx(
              style.integrationIcon,
              'd-flex justify-content-center align-items-center',
            )}
          >
            <img src="/images/icon/diamond-icon.png" alt="" />
          </div>
          <h3
            dangerouslySetInnerHTML={{ __html: title || '' }}
            className={` text-capitalize mt-2 ${style.integrationCardHeading} ${router.pathname.includes('referral-partner') ? 'text-start' : 'text-center'}`}
          />
        </div>
      </div>
      <Paragraph
        className={` ${router.pathname.includes('referral-partner') ? 'text-start' : 'text-center'} max-w-sm-90  para`}
        ref={paragraphRef}
        dangerouslySetInnerHTML={{ __html: desc || '' }}
      />
    </div>
  );
};

export default IntegrationCard;
