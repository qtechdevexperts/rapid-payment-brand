import { Col, Row } from 'react-bootstrap';
import style from './index.module.scss';

const OtherSolutionCard = () => {
  return (
    <div className="container py-5">
      <h2 className="heading-2 fw-normal mb-md-6 mb-4">
        Check Out Our Other <span className="fw-bold">Solutions</span>{' '}
      </h2>
      <Row>
        <Col md={4}>
          <div
            className={`card p-3 h-100 position-relative  ${style.OtherSolutionCard}`}
          >
            <img
              src="/images/solution/1.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body ps-0">
              <h6 className="text-primary-100">Solutions</h6>
              <h5 className="card-title heading-4">Point Of Sale Solutions</h5>
              <p className="card-text">
                From mobile card readers to full-featured POS terminals, we
                ensure you get the right solution to accept payments quickly,
                securely, and effortlessly.
              </p>
              <a href="#" className="btn btn-feature  ">
                Find Out More
              </a>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div
            className={`card p-3 h-100 position-relative  ${style.OtherSolutionCard}`}
          >
            <img
              src="/images/solution/2.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body ps-0">
              <h6 className="text-primary-100">Solutions</h6>
              <h5 className="card-title heading-4">Online Payments</h5>
              <p className="card-text">
                Accept secure online payments with ease. Our payment gateway,
                hosted checkout, and invoicing solutions ensure a frictionless
                customer experience while keeping transactions fast and secure.
              </p>
              <a href="#" className="btn btn-feature">
                Find Out More
              </a>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div
            className={`card p-3 h-100 position-relative  ${style.OtherSolutionCard}`}
          >
            <img
              src="/images/solution/3.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body ps-0">
              <h6 className="text-primary-100">Solutions</h6>
              <h5 className="card-title heading-4">Omnichannel Payments</h5>
              <p className="card-text">
                Unify your payment experience with seamless integration across
                online, in-store, and mobile channels. Provide customers with a
                consistent, secure, and flexible payment process.
              </p>
              <a href="#" className="btn btn-feature">
                Find Out More
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OtherSolutionCard;
