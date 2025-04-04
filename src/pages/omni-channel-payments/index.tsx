import {
  Hero,
  IntegratationOption,
  OtherSolutionCard,
  PaymentForm,
  RapidPaymentForSolutions,
} from '@/components';
import Solutions from '@/components/Solutions';
import { OmniChannelService } from '@/utils/data';
import Head from 'next/head';

const SolutionArray = [
  {
    image: '/images/solution/1.png',
    title: 'Point Of Sale Solutions',
    desc: 'From mobile card readers to full-featured POS terminals, we ensure you get the right solution to accept payments quickly, securely, and effortlessly',
    href: '/point-of-sale-solution/',
  },
  {
    image: '/images/solution/online-payments.png',
    title: 'Online Payments',
    desc: 'Accept secure online payments with ease. Our payment gateway, hosted checkout, and invoicing solutions ensure a frictionless customer experience while keeping transactions fast and secure',
    href: '/online-payments/',
  },

  {
    image: '/images/solution/3.png',
    title: 'Omnichannel Payments',
    desc: 'Unify your payment experience with seamless integration across online, in-store, and mobile channels. Provide customers with a  consistent, secure, and flexible payment process',
    href: '/omni-channel-payments/',
  },
];

const OnlinePayments = () => {
  return (
    <>
      <Head>
        <title>Omni Channel Payment | Rapid Payments</title>
        <meta name="description" content="" />
      </Head>

      <Hero
        title='<Omnichannel class ="text-secondary-standard fw-bold"> Omnichannel </span> <br /> <span class="fw-bold text-primary-standard">Payments</span> '
        backgroundImage={'/images/omni-channel.png'}
        description={
          'Rapid Payments, a leading merchant service provider, partners with top payment processors, gateways, and POS providers to deliver a truly unified payment experience. Accept payments in-store, online, or via mobile with a seamless and secure solution that connects all sales channels.'
        }
      />

      <IntegratationOption
        title={
          ' <Your class="text-secondary-standard fw-bold"> Your Integration </span> <span class="fw-bold text-primary-standard">Options</span> '
        }
        data={OmniChannelService}
      />

      <Hero
        title='<span class="text-secondary-standard fw-bold"> Start Accepting Payments & Grow Your </span> <span class="fw-bold text-primary-standard">Small Business Today!</span> '
        backgroundImage={'/images/omni-channel-accept-payment.png'}
        description="Accept payments anywhere, anytime with Rapid Payments' omnichannel solutions. Whether in-store, online, or on the go, we provide a unified payment experience that keeps your business connected and your customers happy . <br />

<p class='mb-1 mt-1'>
With integrated POS systems, secure online checkouts, and mobile payment options, you can offer a consistent and frictionless transaction process across all channels.
</p>


<br />
<span class='fw-bold text-gray-1'>One platform. Every payment method. Limitless growth.</span> 
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
