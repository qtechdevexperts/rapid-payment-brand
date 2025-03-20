import PaymentCard from '@/common/Cards/PaymentCard';
import Paragraph from '@/common/Paragraph';
import { Col, Container, Row } from 'react-bootstrap';

const PaymentType = () => {
  return (
    <Container className="py-md-9 py-3 overflow-x-hidden">
      <Row>
        <Col lg={8}>
          <h4 className=" text text-3 fw-normal">
            At <span className="fw-bold">Rapid Payment</span> , Accept <br />{' '}
            Payments Anytime, Anywhere
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
          <PaymentCard
            title="Online Payments"
            description="Secure virtual terminal payment processing for cards, wallets & more."
            href="/online-payments/"
            icon={
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.2213 16.7775L15.936 23.2099L14.4897 23.3254C12.4728 23.4864 10.8259 25.0025 10.499 26.9992C9.74546 31.6011 9.74546 36.2949 10.499 40.8967C10.8259 42.8934 12.4728 44.4095 14.4897 44.5705L17.6066 44.8194C22.5277 45.2122 27.4724 45.2122 32.3935 44.8194L35.5104 44.5705C37.5273 44.4095 39.1742 42.8934 39.5011 40.8967C40.2546 36.2949 40.2546 31.6011 39.5011 26.9992C39.1742 25.0025 37.5273 23.4864 35.5104 23.3254L34.0639 23.2099L34.7786 16.7775C34.8629 16.0192 34.8629 15.2539 34.7786 14.4956L34.7312 14.0688C34.2281 9.54087 30.6685 5.95825 26.1439 5.42595C25.3839 5.33653 24.616 5.33653 23.8559 5.42595C19.3314 5.95825 15.7718 9.54087 15.2687 14.0688L15.2213 14.4956C15.137 15.2539 15.137 16.0192 15.2213 16.7775ZM25.7788 8.52955C25.2613 8.46867 24.7385 8.46867 24.2211 8.52955C21.1406 8.89195 18.7171 11.3311 18.3746 14.4139L18.3271 14.8407C18.2684 15.3697 18.2684 15.9035 18.3271 16.4324L19.0538 22.9724C23.0138 22.7184 26.986 22.7184 30.9461 22.9724L31.6727 16.4324C31.7315 15.9035 31.7315 15.3697 31.6727 14.8407L31.6253 14.4139C31.2828 11.3311 28.8593 8.89195 25.7788 8.52955ZM25 30.823C23.2741 30.823 21.875 32.2221 21.875 33.948C21.875 35.6739 23.2741 37.073 25 37.073C26.7259 37.073 28.125 35.6739 28.125 33.948C28.125 32.2221 26.7259 30.823 25 30.823Z"
                    fill="#fff"
                  />
                </svg>
              </>
            }
          />
        </Col>
        <Col lg={4} md={6}>
          <PaymentCard
            title="In-Person Payments"
            description="Smart POS, mobile readers & contactless terminals for speed & convenience."
            href="/in-person-payments/"
            icon={
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                >
                  <path
                    d="M25 8.42725C20.6853 8.42725 17.1875 11.925 17.1875 16.2397C17.1875 20.5545 20.6853 24.0522 25 24.0522C29.3147 24.0522 32.8125 20.5545 32.8125 16.2397C32.8125 11.925 29.3147 8.42725 25 8.42725Z"
                    fill="white"
                  />
                  <path
                    d="M16.6667 28.2189C12.352 28.2189 8.85419 31.7167 8.85419 36.0314V38.507C8.85419 40.0762 9.99144 41.4142 11.5402 41.6671C20.4544 43.1225 29.5456 43.1225 38.4599 41.6671C40.0086 41.4142 41.1459 40.0762 41.1459 38.507V36.0314C41.1459 31.7167 37.6481 28.2189 33.3334 28.2189H32.6232C32.2389 28.2189 31.8569 28.2797 31.4915 28.399L29.6884 28.9878C26.642 29.9825 23.3581 29.9825 20.3117 28.9878L18.5085 28.399C18.1431 28.2797 17.7612 28.2189 17.3768 28.2189H16.6667Z"
                    fill="white"
                  />
                </svg>
              </>
            }
          />
        </Col>
        <Col lg={4} md={6}>
          <PaymentCard
            title="Omnichannel Payments"
            description="Seamlessly integrate online, in-store & mobile transactions"
            href="/omni-channel-payments/"
            icon={
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                >
                  <path
                    d="M5.32087 34.0748C5.12058 34.4703 5.19261 34.9493 5.50036 35.2684C5.80812 35.5875 6.28416 35.6769 6.6867 35.4911L11.8937 33.0879C16.2699 31.0681 21.0456 30.1441 25.8131 30.3615C25.8697 31.8924 25.9537 33.4226 26.0652 34.9513L26.2078 36.9075C26.2943 38.0943 27.6176 38.7577 28.6203 38.117C32.9723 35.3361 36.7558 31.7529 39.769 27.5583L40.7277 26.2237C40.9886 25.8605 40.9886 25.3714 40.7277 25.0082L39.769 23.6736C36.7558 19.479 32.9723 15.8958 28.6203 13.1149C27.6176 12.4742 26.2943 13.1376 26.2078 14.3244L26.0652 16.2805C25.9695 17.5927 25.8941 18.906 25.8388 20.22H24.499C17.0387 20.22 10.2122 24.4151 6.84196 31.0708L5.32087 34.0748Z"
                    fill="white"
                  />
                </svg>
              </>
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentType;
