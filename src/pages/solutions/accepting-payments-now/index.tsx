import { Hero, PaymentForm, RapidPaymentUniversity } from '@/components';
import DescriptionSection from '@/components/DescriptionSection';
import PointofSaleCard from '@/components/PointofSaleCard';
import Head from 'next/head';
import { Container, Row } from 'react-bootstrap';

const Resturants = () => {
  return (
    <>
      <Head>
        <title>Resturants | Rapid Payments</title>
        <meta name="description" content="" />
      </Head>

      <Hero
        title="Start Accepting <span class='fw-bold'>Payments Now</span> "
        backgroundImage={'/images/resturant.png'}
        description={
          'Get your business up and running with fast, secure, and hassle-free payment processing. Whether you need POS systems, mobile payments, or online checkouts, we provide a seamless solution tailored to your business needs.'
        }
      />

      <DescriptionSection
        title={
          'Get Started with the <br /> Perfect POS – <span class="fw-bold">Sign Up Today!</span> '
        }
        description={
          'Get the right POS system for your business with Rapid Payments. We’ve partnered with top POS providers to bring you a seamless, secure, and efficient point-of-sale experience.'
        }
        list={[
          'Flexible Pricing Options',
          'No Setup fee.*',
          'Free terminal Placement* ',
        ]}
        image="/images/enterpise-banner-1.png"
      />

      <Container>
        <Row className="gy-3">
          {[...Array(4)].map((item, index) => {
            return (
              <div className="col-md-4">
                <PointofSaleCard
                  title={'Point of Sale Solutions'}
                  desc={
                    'Streamline your operations with feature-rich POS systems designed for efficiency, security, and seamless transactions—ideal for retail, restaurants, and service businesses.'
                  }
                />
              </div>
            );
          })}
        </Row>
      </Container>

      <RapidPaymentUniversity />

      <PaymentForm />
    </>
  );
};

export default Resturants;
