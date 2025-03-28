import Paragraph from '@/common/Paragraph';
import PaymentBox from '@/common/PaymentBox';
import { Col, Container, Row } from 'react-bootstrap';

const PaymentType = ({ showBtn }: { showBtn?: boolean }) => {
  return (
    <Container className="py-md-9 py-3 overflow-x-hidden">
      <Row>
        <Col lg={8}>
          <h4 className=" text fw-bold text-3 text-secondary-standard">
            At <span className="">Rapid Payment</span> ,
            <span className="text-primary-standard">
              Accept <br /> Payments
            </span>{' '}
            Anytime, Anywhere
          </h4>
        </Col>
        <Col lg={4}>
          <Paragraph>
            We offer secure, efficient, and scalable payment solutions designed
            to streamline transactions, reduce costs, and support your business
            growth.
          </Paragraph>
        </Col>
      </Row>

      <Row className="mt-5 gy-3 gy-lg-0 justify-content-center">
        <Col lg={4} md={6}>
          <PaymentBox
            showBtn={showBtn}
            title="Online Payments"
            description="Secure virtual terminal payment processing for cards, wallets & more."
            image="/images/online-3.png"
          />
        </Col>
        <Col lg={4} md={6}>
          <PaymentBox
            showBtn={showBtn}
            title="In-Person Payments"
            description="Smart POS, mobile readers & contactless terminals for speed & convenience."
            image="/images/online-2.png"
          />
        </Col>
        <Col lg={4} md={6}>
          <PaymentBox
            showBtn={showBtn}
            title="Omnichannel Payments"
            description="Seamlessly integrate online, in-store & mobile transactions"
            image="/images/online-1.png"
          />
        </Col>
      </Row>

      {/* <div className='d-flex flex-column flex-lg-row gap-2 justify-content-between align-items-lg-center mt-5'>
        <Button className='btn btn-feature' iconRight={<ArrowRightIcon />}>
          Explore Embedded Payment
        </Button>
        <Button className='btn  btn-outline-feature' iconRight={<ArrowRightIcon color='#1A2E5B' />}>
          Explore Embedded Payment
        </Button>

      </div> */}
    </Container>
  );
};

export default PaymentType;
