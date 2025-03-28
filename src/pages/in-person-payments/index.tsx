import {
  Hero,
  IntegratationOption,
  OtherSolutionCard,
  PaymentForm,
  RapidPaymentForSolutions,
} from '@/components';
import Solutions from '@/components/Solutions';
import { InpersonPaymentService } from '@/utils/data';
import Head from 'next/head';

const SolutionArray = [
  {
    image: '/images/solution/1.png',
    title: 'Point Of Sale Solutions',
    desc: 'From mobile card readers to full-featured POS terminals, we ensure you get the right solution to accept payments quickly, securely, and effortlessly.',
    href: '/point-of-sale-solution/',
  },
  {
    image: '/images/solution/online-payments.png',
    title: 'Online Payments',
    desc: 'Accept secure online payments with ease. Our payment gateway, hosted checkout, and invoicing solutions ensure a frictionless customer experience while keeping transactions fast and secure.',
    href: '/online-payments/',
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
        <title>In Person Payment | Rapid Payments</title>
        <meta name="description" content="" />
      </Head>

      <Hero
        title='<span class="text-secondary-standard"> In-Person </span> <br /> <span class="fw-bold text-primary-standard">Payments</span> '
        backgroundImage={'/images/in-person-2.png'}
        description={
          'Accept credit, debit, contactless, cash, and checks effortlessly with Rapid Payments. Our trusted POS solutions, powered by top providers, ensure fast, secure, and seamless transactions for your business.Streamline your checkout process, reduce costs, and deliver a smooth payment experience for every customer.'
        }
      />

      <IntegratationOption
        title={
          '<Fast, class="text-secondary-standard">Fast, secure and flexible In-Person </span> <br /> <span class="fw-bold text-primary-standard">payment solutions​</span> '
        }
        data={InpersonPaymentService}
      />

      <Hero
        title='<span class="text-secondary-standard"> Get Paid Anywhere, <br class="d-none d-lg-block" /> Anytime with Seamless </span> <br  class="d-none d-lg-block" /> <span class="fw-bold text-primary-standard">In-Person Payments!</span> '
        backgroundImage={'/images/in-person-payment.png'}
        description="Make transactions seamless with secure, fast, and flexible in-person payment solutions from Rapid Payments. Whether you run a retail store, restaurant, or service-based business, we provide POS systems, mobile payment solutions, and contactless terminals tailored to your needs.
Accept payments your way: credit, debit, contactless, and more ensuring smooth and secure checkouts for every customer..
"
        isShowContact
      />

      <OtherSolutionCard data={SolutionArray} />

      <Solutions />

      {/* <RapidPaymentUniversity /> */}

      <RapidPaymentForSolutions />

      <PaymentForm />
    </>
  );
};

export default OnlinePayments;
