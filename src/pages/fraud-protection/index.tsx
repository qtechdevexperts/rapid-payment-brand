import {
  Hero,
  IntegratationOption,
  PaymentForm,
  PaymentType,
  RapidPaymentUniversity,
  Services,
} from '@/components';
import { FraudDetection, FraudProtection } from '@/utils/data';

const OnlinePayments = () => {
  return (
    <>
      <Hero
        title='Fraud <br /> <span class="fw-bold"> Protection</span>'
        backgroundImage={'/images/fraud-protection.png'}
        description={
          '"Stay ahead of fraud with AI-powered protection and multi- <br /> layer security solutions."'
        }
      />

      <IntegratationOption
        title={'Why Choose Our <span class="fw-bold">Fraud Protection?</span> '}
        desc={
          "Our fraud detection and prevention tools <span class='text-gray-2 fw-bold'> use real-time risk analysis to protect your business from chargebacks, unauthorized transactions, and financial losses. </span>"
        }
        data={FraudDetection}
      />

      <Services
        title={
          'Benefits of Using <br />  Rapid <span class="fw-bold">Fraud <br /> Protection</span>  '
        }
        services={FraudProtection}
      />

      <PaymentType />

      <RapidPaymentUniversity />

      <PaymentForm />
    </>
  );
};

export default OnlinePayments;
