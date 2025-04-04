import { Hero, IntegratationOption, PaymentForm } from '@/components';
import POSSolutions from '@/components/POSSolutions';
import Solutions from '@/components/Solutions';
import { ResturantServices, whoWeServePosData } from '@/utils/data';
import Head from 'next/head';

const Resturants = () => {
  return (
    <>
      <Head>
        <title>Retail | Rapid Payments</title>
        <meta name="description" content="" />
      </Head>

      <Hero
        title='<span class="fw-bold text-secondary-standard">Retails</span>'
        backgroundImage={'/images/retail.png'}
        description={
          "Deliver a fast, seamless, and secure checkout experience with Rapid Payments' retail solutions. Whether you run a boutique, supermarket, or multi-location store, our POS systems and payment solutions help streamline operations and enhance customer satisfaction."
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
          "<span class='fw-bold text-primary-standard'> POS Solutions </span> <for class='text-secondary-standard'> for Every Business </span>"
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
