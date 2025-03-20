import {
  Hero,
  IntegratationOption,
  PaymentForm,
  PaymentType,
  RapidPaymentUniversity,
  Services,
} from '@/components';
import { ChargeBackManagement, ChargebackServices } from '@/utils/data';
import Head from 'next/head';

const OnlinePayments = () => {
  return (
    <>


      <Head>
        <title>Charge Back Management | Rapid Payments</title>
        <meta
          name="description"
          content=""
        />
      </Head>



      <Hero
        title="Chargeback <span class='fw-bold'>Management</span> "
        backgroundImage={'/images/charge-back.png'}
        description={
          '"Minimize chargebacks, win disputes, and protect your revenue with our automated chargeback management system."'
        }
        discriptionClass={'max-w-md-70 max-w-sm-80'}
      />


      <IntegratationOption
        title={
          'Why Choose Our  <span class="fw-bold"> Chargeback  Management?</span>'
        }
        desc={
          'Our dispute resolution system helps prevent, track, and win chargeback cases, protecting businesses from lost revenue and fraud.'
        }
        data={ChargeBackManagement}
      />

      <Services
        title={
          'Benefits of Using <br /> Rapid <span class="fw-bold">Chargeback <br /> Management</span> '
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
