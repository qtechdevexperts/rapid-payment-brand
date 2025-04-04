import { Hero, IntegratationOption, PaymentForm } from '@/components';
import POSSolutions from '@/components/POSSolutions';
import Solutions from '@/components/Solutions';
import { ResturantServices, whoWeServePosData } from '@/utils/data';
import Head from 'next/head';

const Resturants = () => {
  return (
    <>
      <Head>
        <title>Ecommerce | Rapid Payments</title>
        <meta name="description" content="" />
      </Head>

      <Hero
        title='<span class="fw-bold text-secondary-standard">eCommerce</span>'
        backgroundImage={'/images/ecommerce-banner.png'}
        description={
          'Power your online store with seamless and secure payment processing. Rapid Payments ensures a smooth checkout experience, helping you increase conversions and grow your business effortlessly. Accept payments with ease, enhance security, and provide customers with a hassle-free shopping experience. With reliable support and easy integration, managing transactions has never been simpler. Simplify your payments and boost your sales today.'
        }
      />

      <IntegratationOption
        title={
          '<Why class="text-secondary-standard"> Why </span> <span class="fw-bold text-primary-standard">Rapid Payments?</span> '
        }
        data={ResturantServices}
      />

      <POSSolutions
        title={
          "<Commerce class='text-secondary-standard'> Commerce 360 </span> <span class='fw-bold text-primary-standard'>Options</span> "
        }
        pos={whoWeServePosData}
      />

      <Solutions />

      <PaymentForm
        list={[
          'Card devices (fixed and mobile)',
          'Electronic Point of Sale solutions',
          'Ecommerce solutions',
          ' FREE PLACEMENT* on eligible POS systems',
        ]}
      />
    </>
  );
};

export default Resturants;
