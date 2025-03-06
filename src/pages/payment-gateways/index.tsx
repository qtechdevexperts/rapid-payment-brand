import {
  Hero,
  IntegratationOption,
  PaymentForm,
  PaymentType,
  RapidPaymentUniversity,
  Services,
} from '@/components';
import { PaymentGatewaysServices, PaymentServices } from '@/utils/data';

const OnlinePayments = () => {
  return (
    <>
      <Hero
        title='Payment <br /> <span class="fw-bold">Gateways</span> '
        backgroundImage={'/images/payment-gateways.png'}
        description={
          '"Partnered with leading US payment processors, our gateway solutions offer seamless transactions, enhanced security, and full control over your payments."'
        }
      />

      <IntegratationOption
        title={'Why Choose Our <span class="fw-bold">Payment Gateway?</span> '}
        desc={
          'Our advanced payment gateway gives you a fast, secure, and fully integrated way to accept payments online, in-store, and via mobile.'
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
