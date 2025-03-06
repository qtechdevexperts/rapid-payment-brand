import {
  Hero,
  IntegratationOption,
  OtherSolutionCard,
  PaymentForm,
  RapidPaymentUniversity,
  Solutions,
} from '@/components';
import { OnlinePaymentServices } from '@/utils/data';

const OnlinePayments = () => {
  return (
    <>
      <Hero
        title='Online <br /> <span class="fw-bold">Payments</span> '
        backgroundImage={'/images/online-payment.png'}
      />

      <IntegratationOption
        title={'Your Integration <span class="fw-bold">Options</span> '}
        data={OnlinePaymentServices}
      />

      <Hero
        title='start taking  <br /> payments for your <br /> <span class="fw-bold">small business!</span> '
        backgroundImage={'/images/online-payment-1.png'}
        description="Rapid Payments is a leading merchant service provider partnered with top payment processors and payment gateways to help small businesses accept payments quickly, securely, and seamlessly.
With our easy-to-use payment solutions, you can process transactions in-store, online, or on the go without hassle. Whether you need a POS system, virtual terminal, or online checkout, we’ve got you covered.
Power your small business with Rapid Payments.
"
        isShowContact
      />

      <OtherSolutionCard />

      <Solutions />

      <RapidPaymentUniversity />

      <PaymentForm />
    </>
  );
};

export default OnlinePayments;
