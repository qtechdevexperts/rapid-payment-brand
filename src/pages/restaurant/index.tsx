import { Hero, IntegratationOption, PaymentForm } from '@/components';
import POSSolutions from '@/components/POSSolutions';
import Solutions from '@/components/Solutions';
import { ResturantServices, whoWeServePosData } from '@/utils/data';
import Head from 'next/head';

const Resturants = () => {
  return (
    <>
      <Head>
        <title>Resturants | Rapid Payments</title>
        <meta name="description" content="" />
      </Head>

      <Hero
        title='<span class="fw-bold text-secondary-standard">Restaurants</span>'
        backgroundImage={'/images/resturant.png'}
        description={
          "Deliver fast, secure, and efficient payments with Rapid Payments' restaurant POS solutions. From quick-service eateries to fine dining, we provide customized payment systems that keep your business running smoothly."
        }
      />

      <IntegratationOption
        title={
          '<Why class="text-secondary-standard"> Why </span> <span class="fw-bold text-primary-standard">Rapid Payments?</span> '
        }
        data={ResturantServices}
      />

      <POSSolutions pos={whoWeServePosData} />
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
