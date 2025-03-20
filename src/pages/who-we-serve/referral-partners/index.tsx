import IntegrationCard2 from '@/common/Cards/IntegrationCard2';
import { Hero, IntegratationOption } from '@/components';
import DescriptionSection from '@/components/DescriptionSection';
import { ReferePartners } from '@/utils/data';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';

const OnlinePayments = () => {
  return (
    <>

      <Head>
        <title>Referral Partners | Rapid Payments</title>
        <meta
          name="description"
          content=""
        />
      </Head>



      <Hero
        title='Referral  <br /> <span class="fw-bold">Partners</span> '
        backgroundImage={'/images/referel.png'}
        description={
          'Earn competitive commissions while helping businesses access fast, secure, and seamless payment solutions. As a Rapid Payments Referral Partner, you’ll get the tools and support needed to maximize your earnings and expand your network.'
        }
      />

      {/* <IntegratationOption
        title={'Why Partner with <span class="fw-bold">Rapid Payments?</span> '}
        data={ReferePartners}
        defaultColumm={4}

      /> */}

      <section className='py-8'>
        <Container>
          <h2 className='heading-2 text-center'>Why Partner with <span className="fw-bold">Rapid Payments?</span></h2>
          <Row className='gy-4 mt-lg-8 mt-sm-6'>
            <Col lg={4} md={6}>
              <IntegrationCard2
                title='Lucrative Commissions'
                desc='Get paid for every successful referral.'
              />
            </Col>
            <Col lg={4} md={6}>
              <IntegrationCard2
                title='Cutting Edge <br /> Payment Solutions'
                desc='Offer businesses POS, payment processing, and merchant services they can trust.'
              />
            </Col>
            <Col lg={4} md={6}>
              <IntegrationCard2
                title='Marketing & Sales Support'
                desc='Access resources to help you close more deals effortlessly.'
              />
            </Col>
            <Col lg={4} md={6}>
              <IntegrationCard2
                title='Seamless Onboarding'
                desc='Our experts handle the setup, ensuring a smooth transition for your referrals.'
              />
            </Col>
            <Col lg={4} md={6}>
              <IntegrationCard2
                title='Dedicated Partner Portal'
                desc='Track leads, commissions, and performance in real-time.'
              />
            </Col>

            <Col lg={4} md={6}>
              <IntegrationCard2
                title='Expand Your Network'
                desc=' Connect with growing businesses and increase your earning potential.'
              />
            </Col>



          </Row>
        </Container>
      </section>

      <DescriptionSection
        title={
          'Want to start taking payments for your <br /> <span class="fw-bold">small business?</span> '
        }
        description={
          'Empower your business with fast, secure, and reliable payment solutions from Rapid Payments. Whether you&apos;re a small business, professional service, or enterprise, we provide seamless payment processing, POS solutions, and next-day funding to keep your business moving forward.'
        }

        image="/images/enterpise-banner-1.png"
      />
    </>
  );
};

export default OnlinePayments;
