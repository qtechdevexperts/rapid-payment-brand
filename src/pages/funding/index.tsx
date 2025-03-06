import {
  Hero,
  IntegratationOption,
  PaymentForm,
  PaymentType,
  RapidPaymentUniversity,
  Services,
} from '@/components';
import { FundingServices, FundingServicesComponent } from '@/utils/data';

const OnlinePayments = () => {
  return (
    <>
      <Hero
        title='<span class="fw-bold">Funding</span>'
        backgroundImage={'/images/funding.png'}
        description={
          '"Get faster access to your revenue with next-day and same-<br/>day settlement options."'
        }
      />

      <IntegratationOption
        title={
          'Why Choose Our <span class="fw-bold">Funding Solutions?</span> '
        }
        desc={
          "With Rapid Payments' quick funding solutions, you no longer have to wait days for your money to clear. Get paid when you need it."
        }
        data={FundingServices}
      />

      <Services
        title={
          'Benefits of Using <br /> Rapid  <span class="fw-bold">Payments <br /> Funding</span> '
        }
        services={FundingServicesComponent}
      />

      <PaymentType />

      <RapidPaymentUniversity />

      <PaymentForm />
    </>
  );
};

export default OnlinePayments;
