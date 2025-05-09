import {
  Hero,
  IntegratationOption,
  PaymentForm,
  PaymentType,
  RapidPaymentUniversity,
  Services,
} from '@/components';
import { BilingAndInvoiceManagement, BillingInvoice } from '@/utils/data';
import Head from 'next/head';

const OnlinePayments = () => {
  return (
    <>
      <Head>
        <title>Billing And Invoice | Rapid Payments</title>
        <meta name="description" content="" />
      </Head>

      <Hero
        title="<Billing class='text-secondary-standard fw-bold'> Billing </span> <br /> <span class='fw-bold text-primary-standard'>& Invoicing</span> "
        backgroundImage={'/images/biling.png'}
        description={
          '"Automate billing and invoicing for seamless customer payments."'
        }
        discriptionClass={'max-w-sm-65'}
      />

      <IntegratationOption
        title={
          '<Why class="text-secondary-standard"> Why Choose Our </span> <span class="fw-bold text-primary-standard">Billing & Invoicing Solution?</span> '
        }
        desc={
          'Eliminate manual billing errors and streamline your invoicing with automation to ensure on-time payments and better customer experience.'
        }
        data={BilingAndInvoiceManagement}
      />

      <Services
        title={
          'Benefits of Using <br />  Rapid <span class="fw-bold">Billing & <br /> Invoicing</span> '
        }
        services={BillingInvoice}
      />

      <PaymentType />

      <RapidPaymentUniversity />

      <PaymentForm />
    </>
  );
};

export default OnlinePayments;
