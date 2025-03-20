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
        title='Professional <br /> <span class="fw-bold">Services</span> '
        backgroundImage={'/images/professional-image.png'}
        description={
          'Whether you’re a consultant, lawyer, accountant, or service provider, Rapid Payments makes it easy to accept payments securely and efficiently. Get paid faster and manage transactions seamlessly with our tailored payment solutions.'
        }
      />

      <IntegratationOption
        title={'Why <span class="fw-bold">Rapid Payments?</span> '}
        data={ResturantServices}
      />

      <POSSolutions
        title={'Commerce 360  <span class="fw-bold">Options</span>'}
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
