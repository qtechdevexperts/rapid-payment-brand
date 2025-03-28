import {
  Hero,
  IntegratationOption,
  PaymentForm,
  PaymentType,
  RapidPaymentUniversity,
  Services,
} from '@/components';
import { PaymentGatewaysServices, PaymentServices } from '@/utils/data';
import Head from 'next/head';

const OnlinePayments = () => {
  return (
    <>
      <Head>
        <title>Payment Gateways | Rapid Payments</title>
        <meta name="description" content="" />
      </Head>

      <Hero
        title='<Payment class="text-secondary-standard"> Payment </s<br /> <span class="fw-bold text-primary-standard">Gateways</span> '
        backgroundImage={'/images/payment-gateways.png'}
        
        description={
          '"Partnered with leading US payment processors, our gateway solutions offer seamless transactions, enhanced security, and full control over your payments."'
        }
      />

      <IntegratationOption
        title={'<span class="text-secondary-standard">Why Choose Our </span> <span class="text-primary-standard fw-bold">Payment Gateway?</span> '}
        desc={
          'Our advanced payment gateway gives you a <span class="fw-bold">fast, secure, and fully integrated</span>  way to accept payments online, in-store, and via mobile.'
        }
        data={PaymentGatewaysServices}
      />

      <Services
        title={
          'Benefits of Using <br />  Rapid <span class="fw-bold"> Payments <br /> Gateway</span> '
        }
        services={PaymentServices}
      />

      <PaymentType />

      <RapidPaymentUniversity />

      <PaymentForm />
    </>
  );
};

export default OnlinePayments;
