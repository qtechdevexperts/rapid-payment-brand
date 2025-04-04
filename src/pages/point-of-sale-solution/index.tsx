import { Hero, PaymentForm, RapidPaymentUniversity } from '@/components';
import DescriptionSection from '@/components/DescriptionSection';
import POSSolutions from '@/components/POSSolutions';
import Head from 'next/head';

const slides = [
  {
    title: 'Smart Terminal',
    imgSrc: '/images/smart-point-of-sale.png',
    desc: 'Upgrade your business with a modern, intuitive POS system that supports contactless, chip, and mobile payments, while also managing inventory and sales insights seamlessly.',
  },
  {
    title: 'Terminal',
    imgSrc: '/images/smart-point-of-sale.png',
    desc: 'Experience fast, secure, and all-in-one smart terminals designed for on-the-go and in-store transactions, ensuring flexibility and ease of use.',
  },
  {
    title: 'Mobile Readers',
    imgSrc: '/images/smart-point-of-sale.png',
    desc: 'Experience fast, secure, and all-in-one smart terminals designed for on-the-go and in-store transactions, ensuring flexibility and ease of use.',
  },
];

const Resturants = () => {
  return (
    <>
      <Head>
        <title>Point of Sale Solutions | Rapid Payments</title>
        <meta name="description" content="." />
      </Head>

      <Hero
        title=" <span class ='text-secondary-standard fw-bold'> The Perfect </span> <span class='fw-bold text-primary-standard'>point <br /> of sale solution<br /></span>  <span class='text-secondary-standard fw-bold'>Tailored For You</span> "
        backgroundImage={'/images/point-of-sale-solution.png'}
        headingCss={'text-capitalize'}
        description={
          'At Rapid Payments, we’ve partnered with top POS providers to ensure you get the best system for your business needs. Whether you run a restaurant, retail store, or service business, we’ll match you with a secure, reliable, and feature-rich POS system designed to streamline transactions and enhance customer experience.'
        }
      />

      <DescriptionSection
        title={
          '<span class="text-secondary-standard fw-bold"> Get Started with the </span> <br />  <span class="text-secondary-standard fw-bold">Perfect POS</span>   – <span class="fw-bold text-primary-standard">Sign Up <br /> Today!</span> '
        }
        description={
          'Get the right POS system for your business with Rapid Payments. We’ve partnered with top POS providers to bring you a seamless, secure, and efficient point-of-sale experience.'
        }
        list={[
          'Flexible Pricing Options',
          'No Setup fee.*',
          'Free terminal Placement* ',
        ]}
        image="/images/enterpise-banner-1.png"
      />

      <POSSolutions pos={slides} />

      <RapidPaymentUniversity />

      <PaymentForm />
    </>
  );
};

export default Resturants;
