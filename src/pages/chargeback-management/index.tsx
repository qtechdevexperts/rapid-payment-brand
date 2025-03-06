import {
  Hero,
  IntegratationOption,
  PaymentForm,
  PaymentType,
  RapidPaymentUniversity,
  Services,
} from '@/components';
import { ChargeBackManagement, ChargebackServices } from '@/utils/data';

const OnlinePayments = () => {
  return (
    <>
      <Hero
        title="Chargeback <span class='fw-bold'>Management</span> "
        backgroundImage={'/images/charge-back.png'}
        description={
          '"Minimize chargebacks, win disputes, and protect your revenue with our automated chargeback management system."'
        }
      />

      <IntegratationOption
        title={
          'Why Choose Our  <span class="fw-bold"> Chargeback Management?</span>'
        }
        desc={
          'Our dispute resolution system helps prevent, track, and win chargeback cases, protecting businesses from lost revenue and fraud.'
        }
        data={ChargeBackManagement}
      />

      <Services
        title={
          'Benefits of Using <br /> Rapid <span class="fw-bold">Chargeback Management</span> '
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
