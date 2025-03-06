import Form from '@/Form';
import { Col, Container, Row } from 'react-bootstrap';

const PaymentForm = () => {
  return (
    <Container className="py-7" id="ContactForm">
      <Row>
        <Col lg={6}>
          <h2 className="heading-3 text-capitalize fw-normal">
            Payment Solutions to <br />{' '}
            <span className="fw-bold"> help your business</span>{' '}
          </h2>
          <h3 className="text-primary-100 heading-4">
            Let’s Get You Paid—Fast & Secure
          </h3>
          <p className="para">
            Ready to simplify your payments and make them secure? Fill out the
            form, and our team will customize a payment solution tailored to
            your business needs.
          </p>
          <ul>
            <li className="text-primary-100 heading-5">
              Card devices (fixed and mobile)
            </li>
            <li className="text-primary-100 heading-5">
              Electronic Point of Sale solutions
            </li>
            <li className="text-primary-100 heading-5">
              FREE PLACEMENT* on eligible POS systems
            </li>
          </ul>

          <p className="heading-5 fw-medium">
            Hit us up and let’s make your payments fast, secure, and totally
            stress-free no headaches, just smooth transactions!
          </p>
        </Col>
        <Col lg={6}>
          <Form />
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentForm;
