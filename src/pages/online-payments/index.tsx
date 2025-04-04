import {
  Hero,
  IntegratationOption,
  OtherSolutionCard,
  PaymentForm,
  RapidPaymentForSolutions,
} from '@/components';
import Solutions from '@/components/Solutions';
import { OnlinePaymentServices } from '@/utils/data';
import Head from 'next/head';

const SolutionArray = [
  {
    image: '/images/solution/1.png',
    title: 'Point Of Sale Solutions',
    desc: 'From mobile card readers to full-featured POS terminals, we ensure you get the right solution to accept payments quickly, securely, and effortlessly.',
    href: '/point-of-sale-solution/',
  },
  {
    image: '/images/solution/2.png',
    title: 'In Person Payments',
    desc: 'From retail stores to restaurants, accept payments anywhere, anytime with mobile card readers, wireless terminals, and countertop solutions that integrate effortlessly into your business.',
    href: '/in-person-payments/',
  },

  {
    image: '/images/solution/3.png',
    title: 'Omnichannel Payments',
    desc: 'Unify your payment experience with seamless integration across online, in-store, and mobile channels. Provide customers with a  consistent, secure, and flexible payment process.',
    href: '/omni-channel-payments/',
  },
];

const OnlinePayments = () => {
  return (
    <>
      <Head>
        <title>Online Payment | Rapid Payments</title>
        <meta name="description" content="" />
      </Head>

      <Hero
        title='<span class="text-secondary-standard fw-bold"> Online </span> <br /> <span class="fw-bold text-primary-standard">Payments</span> '
        backgroundImage={'/images/online-bg.png'}
      />

      <IntegratationOption
        title={
          '<span class="text-secondary-standard fw-bold"> Your Integration </span> <span class="fw-bold text-primary-standard">Options</span> '
        }
        data={OnlinePaymentServices}
      />

      <Hero
        title='<span class="text-secondary-standard fw-bold"> Start taking  <br /> payments for your </span> <br /> <span class="fw-bold text-primary-standard">small business!</span> '
        headingCss="text-capitalize"
        backgroundImage={'/images/online-payment-1.png'}
        description="Rapid Payments is a leading merchant service provider partnered with top payment processors and payment gateways to help small businesses accept payments quickly, securely, and seamlessly.
With our easy-to-use payment solutions, you can process transactions in-store, online, or on the go without hassle. Whether you need a POS system, virtual terminal, or online checkout, we’ve got you covered. <br />
<p class='fw-bold text-gray-1'>Power your small business with Rapid Payments.</p>
"
        isShowContact
      />

      <OtherSolutionCard data={SolutionArray} />

      <Solutions />

      <RapidPaymentForSolutions />

      <PaymentForm />
    </>
  );
};

export default OnlinePayments;
