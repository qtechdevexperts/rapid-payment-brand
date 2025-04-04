import {
  Hero,
  IntegratationOption,
  PaymentForm,
  PaymentType,
  RapidPaymentUniversity,
  Services,
} from '@/components';
import { ReportingAnalytics, ReportingAnaylytics } from '@/utils/data';
import Head from 'next/head';

const OnlinePayments = () => {
  return (
    <>
      <Head>
        <title>Reporting And Anayltics | Rapid Payments</title>
        <meta name="description" content="" />
      </Head>

      <Hero
        title="<span class='text-secondary-standard fw-bold'> Reporting & </span> <br /> <span class='fw-bold text-primary-standard'>Analytics</span> "
        backgroundImage={'/images/reporting.png'}
        description={
          '"Gain full visibility into your payments with detailed, real-time <br class="d-none d-md-block" /> reporting and analytics."'
        }
      />

      <IntegratationOption
        title={
          '<Why class="text-secondary-standard"> Why Choose Our </span><span class="fw-bold text-primary-standard">Payment Reporting?</span> '
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
        services={ReportingAnalytics}
      />

      <PaymentType />

      <RapidPaymentUniversity />

      <PaymentForm />
    </>
  );
};

export default OnlinePayments;
