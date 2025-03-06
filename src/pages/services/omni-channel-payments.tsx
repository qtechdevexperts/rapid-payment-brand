import {
  Hero,
  IntegratationOption,
  OtherSolutionCard,
  PaymentForm,
  RapidPaymentUniversity,
  Solutions,
} from '@/components';
import { OmniChannelService } from '@/utils/data';

const OnlinePayments = () => {
  return (
    <>
      <Hero
        title='Omnichannel<br /> <span class="fw-bold">Payments</span> '
        backgroundImage={'/images/omni-channel.png'}
        description={
          'Rapid Payments, a leading merchant service provider, partners with top payment processors, gateways, and POS providers to deliver a truly unified payment experience. Accept payments in-store, online, or via mobile with a seamless and secure solution that connects all sales channels.'
        }
      />

      <IntegratationOption
        title={
          'Fast, secure and flexible In-Person <br /> <span class="fw-bold">payment solutions​</span> '
        }
        data={OmniChannelService}
      />

      <Hero
        title='Start Accepting Payments & Grow Your <span class="fw-bold">Small Business Today!</span> '
        backgroundImage={'/images/online-payment-1.png'}
        description="Accept payments anywhere, anytime with Rapid Payments' omnichannel solutions. Whether in-store, online, or on the go, we provide a unified payment experience that keeps your business connected and your customers happy . <br />
With integrated POS systems, secure online checkouts, and mobile payment options, you can offer a consistent and frictionless transaction process across all channels. <br />
<span class='fw-bold'>One platform. Every payment method. Limitless growth.</span> 
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
