import Paragraph from '@/common/Paragraph';
import Form from '@/Form';
import { Col, Container, Row } from 'react-bootstrap';
import style from "./index.module.scss"
import Section from '@/common/Section';







interface PaymentFormProps {
  list?: string[]
}






const PaymentForm = ({ list = ['Card devices (fixed and mobile)', 'Electronic Point of Sale solutions', 'Ecommerce solutions', ' FREE PLACEMENT* on eligible POS systems'] }: PaymentFormProps) => {
  return (
    <Section className=''>
      <Container className="" id="ContactForm">
        <Row>
          <Col lg={6}>
            <h2 className={`text-capitalize text text-3  fw-normal`}>
              Payment Solutions to <br />{' '}
              <span className="fw-bold"> help your business</span>{' '}
            </h2>
            <h3 className={`text-primary-100 ${style.subHeading}`}>
              Let’s Get You Paid—Fast & Secure
            </h3>
            <Paragraph className={`${style.paymentParagraph}`}>
              Ready to simplify your payments and make them secure? Fill out the
              form, and our team will customize a payment solution tailored to
              your business needs.
            </Paragraph>
            <ul>
              {
                list?.map((item, index) => {
                  return (
                    <li className={`text-primary-100 my-2 ${style.listHeading}`}>
                      {item}
                    </li>
                  )
                })
              }
            </ul>

            <Paragraph className={`${style.paymentParagraph2} fw-medium`}>
              Hit us up and let’s make your payments fast, secure, and totally
              stress-free no headaches, just smooth transactions!
            </Paragraph>
          </Col>
          <Col lg={6}>
            <Form />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default PaymentForm;
