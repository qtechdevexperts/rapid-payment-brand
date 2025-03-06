import {
  Hero,
  IntegratationOption,
  PaymentForm,
  PaymentType,
  RapidPaymentUniversity,
  Services,
} from '@/components';
import { ChargebackServices, ReportingAnaylytics } from '@/utils/data';

const OnlinePayments = () => {
  return (
    <>
      <Hero
        title="Reporting & <span class='fw-bold'>Analytics</span> "
        backgroundImage={'/images/reporting.png'}
        description={
          '"Gain full visibility into your payments with detailed, real-time <br /> reporting and analytics."'
        }
      />

      <IntegratationOption
        title={
          'Why Choose Our <span class="fw-bold">Payment Reporting?</span> '
        }
        desc={
          'Get instant access to transaction data, trends, and business insights to make smarter financial decisions.'
        }
        data={ReportingAnaylytics}
      />

      <Services
        title={
          'Benefits of Using <br /> Rapid  <span class="fw-bold"> Reporting & <br /> Analytics</span>'
        }
        services={ChargebackServices}
      />

      <PaymentType />

      <RapidPaymentUniversity />

      <PaymentForm />
    </>
  );
};

export default OnlinePayments;
