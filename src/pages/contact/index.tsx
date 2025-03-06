import { Hero, PaymentForm } from '@/components';

const Contact = () => {
  return (
    <>
      <Hero
        title='Contact <span class="fw-bold">Rapid Payments</span> '
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
