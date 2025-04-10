import { Hero, PaymentForm } from '@/components';
import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Rapid Payments - Get in Touch</title>
        <meta name="description" content="" />
      </Head>

      <Hero
        title='<span class= "text-secondary-standard fw-bold"> Contact </span> <span class="fw-bold text-primary-standard">Rapid <br /> Payments</span> '
        backgroundImage={'/images/contact.png'}
        description={
          'Have questions or need assistance? Our payment experts are here to help! Whether you’re looking for a custom payment solution, a powerful POS system, or partnership opportunities, we’re just a message away.'
        }
        isHideAllButton
      />

      <section className="py-3">
        <PaymentForm />
      </section>
    </>
  );
};

export default Contact;
