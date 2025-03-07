import {
  EmpactFullPayment,
  Hero,
  PaymentForm,
  RapidPaymentForSolutions,
} from '@/components';
import DescriptionSection from '@/components/DescriptionSection';

const OnlinePayments = () => {
  return (
    <>
      <Hero
        title='Enterprise <br /> <span class="fw-bold">Payment Solutions</span>  <br /> Built for Scale'
        backgroundImage={'/images/enterprise.png'}
        description={
          'At Rapid Payments, we provide scalable, secure, and efficient payment solutions tailored for enterprises handling high transaction volumes. With our partnerships with top payment processors, gateways, and POS providers, we deliver seamless integrations, advanced security, and real-time analytics to power your business.'
        }
      />

      <RapidPaymentForSolutions />

      <DescriptionSection
        title={
          'Want to start taking payments for your <br /> <span class="fw-bold">small business?</span> '
        }
        description={
          'Get paid quickly, securely, and hassle-free with Rapid Payments. Whether you need in-store, online, or mobile payment solutions, we’ve got you covered.'
        }
        list={[
          'Flexible Pricing Options',
          'No Setup fee.*',
          'Free terminal Placement* ',
        ]}
        image="/images/enterpise-banner-1.png"
      />

      <EmpactFullPayment />

      <PaymentForm />
    </>
  );
};

export default OnlinePayments;
