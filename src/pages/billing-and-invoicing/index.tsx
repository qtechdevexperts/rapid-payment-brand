import {
  Hero,
  IntegratationOption,
  PaymentForm,
  PaymentType,
  RapidPaymentUniversity,
  Services,
} from '@/components';
import { BilingAndInvoiceManagement, BillingInvoice, ChargeBackManagement, ChargebackServices } from '@/utils/data';

const OnlinePayments = () => {
  return (
    <>
      <Hero
        title="Billing <br /> <span class='fw-bold'>& Invoicing</span> "
        backgroundImage={'/images/charge-back.png'}
        description={
          '"Automate billing and invoicing for seamless customer payments."'
        }
      />

      <IntegratationOption
        title={
          'Why Choose Our <span class="fw-bold">Billing & Invoicing Solution?</span> '
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
