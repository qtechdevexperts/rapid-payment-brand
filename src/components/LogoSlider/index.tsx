import clsx from 'clsx';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import style from './index.module.scss';

const LogoSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="py-5 pe-lg-0 me-lg-0 overflow-hidden">
      <Row>
        <Col lg={4}>
          <h4 className="heading-5">
            Rapid Payments is partnered with Top Payment Processors, Gateways
            And POS Solution Providers.
          </h4>
        </Col>
        <Col lg={8}>
          <Slider
            {...settings}
            className={clsx('LogoSlider', style.LogoSlider)}
          >
            <div className="px-1">
              <img
                src="/images/logos/logo-ipsum.png"
                className="img-fluid w-100"
                alt=""
              />
            </div>
            <div className="px-1">
              <img
                src="/images/logos/logo-ipsum-university.png"
                className="img-fluid  w-100"
                alt=""
              />
            </div>
            <div className="px-1">
              <img
                src="/images/logos/logo-ipsum-foundation.png"
                className="img-fluid w-100"
                alt=""
              />
            </div>
            <div className="px-1">
              <img
                src="/images/logos/logo-ipsuim-shadow.png"
                className="img-fluid w-100"
                alt=""
              />
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default LogoSlider;
