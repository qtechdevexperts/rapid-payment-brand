import { Hero, IntegratationOption, PaymentForm } from '@/components';
import POSSolutions from '@/components/POSSolutions';
import Solutions from '@/components/Solutions';
import { ResturantServices, whoWeServePosData } from '@/utils/data';
import Head from 'next/head';

const Resturants = () => {
  return (
    <>
      <Head>
        <title>Professional Services | Rapid Payments</title>
        <meta name="description" content="" />
      </Head>

      <Hero
        title='<span class="text-secondary-standard fw-bold"> Professional </span> <br /> <span class="fw-bold text-primary-standard">Services</span> '
        backgroundImage={'/images/professional-image.png'}
        description={
          'Whether you’re a consultant, lawyer, accountant, or service provider, Rapid Payments makes it easy to accept payments securely and efficiently. Get paid faster and manage transactions seamlessly with our tailored payment solutions.'
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
          '<Commerce class="text-secondary-standard"> Commerce 360 </span> <span class="fw-bold text-primary-standard">Options</span>'
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
