import Paragraph from '@/common/Paragraph';
import { Hero, PaymentForm, ProcessingFeeCard } from '@/components';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import style from "./index.module.scss"
import Section from '@/common/Section';

const OurPricing = () => {
  return (
    <>

      <Head>
        <title>Our Pricing | Rapid Payments</title> {/* Add the title tag */}
        <meta
          name="description"
          content=""
        /> {/* Add a meta description */}
      </Head>



      <Hero
        title='Our <span class="fw-bold">Pricing</span> '
        backgroundImage={'/images/our-pricing.png'}
        description={
          'We provide flexible and transparent pricing tailored to your business needs. Through our partnerships with leading payment processors, gateways, and POS providers, we ensure seamless transactions and a reliable payment experience. Our solutions are designed to enhance efficiency, security, and convenience for businesses of all sizes.'
        }
      />

      <section className="py-10">
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="text text-2 fw-normal text-capitalize text-center">
            From small businesses to enterprise <br className='d-none d-sm-block' /> empires, we{' '}
            <span className="fw-bold">lead the way.</span>
          </h2>
          <Paragraph className=" max-w-lg-65 text-center mx-auto">
            We empower businesses of all sizes with cutting-edge payment solutions, seamless integrations, and reliable support. Whether you're just starting out or scaling to new heights, our expertise and partnerships with top payment processors, gateways, and POS providers ensure a smooth and secure transaction experience.

          </Paragraph>

          <img src="/images/pricing.png" className="img-fluid mt-4" alt="" />
        </Container>
      </section>

      <Section className="">
        <Container>
          <h2 className={`text-center fw-bold mb-5 mb-sm-5 text text-2`}>Processing Fees</h2>
          <Row className=" gy-4">
            <Col lg={3} sm={6}>
              <ProcessingFeeCard
                title={'In Person'}
                description={
                  'Accept payments with ease using our advanced POS systems and card readers. Perfect for retail stores, restaurants, and service businesses.'
                }
              />
            </Col>
            <Col lg={3} sm={6}>
              <ProcessingFeeCard
                title={'Online'}
                description={
                  'Seamlessly process payments through your website or e-commerce store with our secure payment gateway integrations.'
                }
              />
            </Col>
            <Col lg={3} sm={6}>
              <ProcessingFeeCard
                title={'keyed Entry'}
                description={
                  'Manually enter card details for remote transactions, phone orders, or businesses without physical card readers.'
                }
              />
            </Col>
            <Col lg={3} sm={6}>
              <ProcessingFeeCard
                title={'Invoices'}
                description={
                  'Send professional invoices and receive payments effortlessly with our invoicing solutions, making it simple for your clients to pay.'
                }
              />
            </Col>
          </Row>
        </Container>
      </Section>

      <section className="py-10">
        <PaymentForm />
      </section>
    </>
  );
};

export default OurPricing;
