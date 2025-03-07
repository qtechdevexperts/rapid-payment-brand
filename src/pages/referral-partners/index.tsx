import { Hero, IntegratationOption } from '@/components';
import DescriptionSection from '@/components/DescriptionSection';
import { ReferePartners } from '@/utils/data';

const OnlinePayments = () => {
  return (
    <>
      <Hero
        title='Referral  <br /> <span class="fw-bold">Partners</span> '
        backgroundImage={'/images/referel.png'}
        description={
          'Earn competitive commissions while helping businesses access fast, secure, and seamless payment solutions. As a Rapid Payments Referral Partner, you’ll get the tools and support needed to maximize your earnings and expand your network.'
        }
      />

      <IntegratationOption
        title={'Why Partner with <span class="fw-bold">Rapid Payments?</span> '}
        data={ReferePartners}
        defaultColumm={4}
      />

      <DescriptionSection
        title={
          'Want to start taking payments for your <br /> <span class="fw-bold">small business?</span> '
        }
        description={
          'Get paid quickly, securely, and hassle-free with Rapid Payments. Whether you need in-store, online, or mobile payment solutions, we’ve got you covered.'
        }
        list={[
          'Flexible Pricing Options',
          'No Setup fee.*',
          'Free terminal Placement* ',
        ]}
        image="/images/enterpise-banner-1.png"
      />
    </>
  );
};

export default OnlinePayments;
