import {
  Hero,
  IntegratationOption,
  PaymentForm,
  PaymentType,
  RapidPaymentUniversity,
  Services,
} from '@/components';
import { VirtualServiceProvider, VirtualServices } from '@/utils/data';
import Head from 'next/head';

const OnlinePayments = () => {
  return (
    <>

      <Head>
        <title>Virtual Terminals | Rapid Payments</title>
        <meta
          name="description"
          content="Rapid Payments offers secure and reliable online payment processing solutions for businesses of all sizes.  Accept payments easily and securely through our integrated platform."
        />
      </Head>


      <Hero
        title='Virtual <br /> <span class="fw-bold">Terminals</span>  '
        backgroundImage={'/images/virtual-terminal.png'}
        description={
          '"Process secure payments remotely without the need for <br /> hardware. Perfect for businesses accepting phone, email, <br /> and mail-order payments."'
        }
      />

      <IntegratationOption
        title={'Why Choose Our <span class="fw-bold">Virtual Terminal?</span> '}
        desc={
          "Process payments remotely with <span class='fw-bold text-gray-2'>our secure virtual terminal</span> , allowing businesses to manually enter transactions from any device with internet access."
        }
        data={VirtualServices}
      />

      <Services
        title={
          'Benefits of Using  <br />  Rapid <span class="fw-bold">Payments <br /> Virtual Terminal</span> '
        }
        services={VirtualServiceProvider}
      />

      <PaymentType />

      <RapidPaymentUniversity />

      <PaymentForm />
    </>
  );
};

export default OnlinePayments;
