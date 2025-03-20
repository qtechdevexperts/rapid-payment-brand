import Modal from '@/common/Modal';
import useResponsive from '@/hooks/useResponsive';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import style from './index.module.scss';
import LinkTag from '../LinkTag';
import Paragraph from '@/common/Paragraph';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 464,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const Solutions = () => {
  const [currentTab, setCurrentTab] = useState('small-business');

  const router = useRouter();

  const [isshowModal, setShowModal] = useState<boolean>(false);

  const isBigScreen = useResponsive({ query: '(min-width: 1921px)' });
  const isLaptop = useResponsive({ query: '(max-width: 1400px)' });

  const handleTabClick = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <>
      <section
        className={clsx(
          style.solution,
          { container: isBigScreen },
          'bg-primary-light rounded-4 my-5',
        )}
      >
        <Container
          className={` ${isBigScreen ? '' : 'me-lg-0 pe-lg-0'} ${style.SolutionContainer} `}
        >
          <Row>
            <Col lg={6} className={`  ${style.leftSide} pb-3`}>
              <div className={`${style.carouselTab}`}>
                <Slider {...sliderSettings}>
                  <div>
                    <Button
                      className={clsx(

                        'px-md-5 px-sm-3 py-md-3 py-2 me-2 w-100',
                        { 'btn-lg': !isLaptop },
                        currentTab === 'small-business'
                          ? 'btn-feature'
                          : 'btn-outline-feature',
                      )}
                      onClick={() => handleTabClick('small-business')}
                    >
                      Small Business
                    </Button>
                  </div>

                  <div>
                    <Button
                      className={clsx(
                        'px-md-5 px-sm-3 py-md-3 py-2 me-2 w-100',
                        { 'btn-lg': !isLaptop },
                        currentTab === 'enterprises'
                          ? 'btn-feature'
                          : 'btn-outline-feature',
                      )}
                      onClick={() => handleTabClick('enterprises')}
                    >
                      Enterprises
                    </Button>
                  </div>
                </Slider>
              </div>

              <div
                className={`d-flex ${style.solutinTabButton}  gap-3 justify-content-start align-items-sm-center`}
              >
                <Button
                  className={clsx(
                    'px-md-5 px-3 py-md-3 py-2',
                    { 'btn-lg': !isLaptop },
                    currentTab === 'small-business'
                      ? 'btn-feature'
                      : 'btn-outline-feature',
                  )}
                  onClick={() => handleTabClick('small-business')}
                >
                  Small Business
                </Button>

                {/* Enterprises Tab */}
                <Button
                  className={clsx(
                    'px-md-5 px-3 py-md-3 py-2',
                    { 'btn-lg': !isLaptop },
                    currentTab === 'enterprises'
                      ? 'btn-feature'
                      : 'btn-outline-feature',
                  )}
                  onClick={() => handleTabClick('enterprises')}
                >
                  Enterprises
                </Button>
                {/* Small Business Tab */}
              </div>

              {/* Dynamic Content */}
              {currentTab === 'small-business' ? (
                <>
                  <h2 className="heading-2 fw-normal mt-xxl-9 mt-4">
                    Big Solutions for <br />
                    <span className="fw-bold">Small Businesses</span>
                  </h2>
                  <Paragraph className='max-w-sm-70'>
                    Smoothly running a small business is challenging, we
                    simplify payments with proven payment processing solutions.
                    Whether in-store, online, or on the go, our secure, fast,
                    and flexible solutions let you focus on business growth and
                    succeed.
                  </Paragraph>

                  <div className="mt-4">
                    <LinkTag
                      href='/solutions/accept-payment/online-payments/'
                      className="heading-4 d-block text-reset text-decoration-none mt-3 mb-3">
                      Online Payments
                    </LinkTag>
                    <LinkTag
                      href='/solutions/accept-payment/in-person-payments/'
                      className="heading-4 d-block text-reset text-decoration-none mt-3 mb-3">
                      In-Person Payments
                    </LinkTag>
                    <LinkTag
                      href='/solutions/accept-payment/point-of-sale-solution/'
                      className="heading-4 d-block text-reset text-decoration-none mt-3 mb-3">
                      Point of sales Solutions
                    </LinkTag>


                  </div>
                </>
              ) : (
                <>
                  <h2 className="heading-2 fw-normal mt-9">
                    Enterprise Payment <br />
                    <span className="fw-bold">Solutions</span>
                  </h2>
                  <Paragraph >
                    Power your business with scalable, secure, and seamless
                    payment processing designed for high-volume transactions.
                    Our enterprise-grade payment processing services ensure
                    reliability, speed, and efficiency across all sales
                    channels.
                  </Paragraph>

                  <div className="mt-4">
                    {/* <Link
                      href={'/solutions/accept-payment/in-person-payments/'}
                      className="heading-4 d-block text-reset text-decoration-none mt-3 mb-3"
                    >
                      In Person{' '}
                      <img
                        src="/images/icons/outline-interface-arrow-right.png"
                        alt=""
                      />
                    </Link> */}
                    <LinkTag
                      href={'/solutions/accept-payment/in-person-payments/'}
                      className="heading-4 d-block text-reset text-decoration-none mt-3 mb-3"
                    >
                      In Person
                    </LinkTag>

                    <LinkTag
                      href={'/solutions/accept-payment/online-payments/'}
                      className="heading-4 d-block text-reset text-decoration-none mt-3 mb-3"
                    >
                      Online
                    </LinkTag>


                    <LinkTag
                      href={'/solutions/accept-payment/omni-channel-payments/'}
                      className="heading-4 d-block text-reset text-decoration-none mt-3 mb-3"

                    >

                      Omnichannel
                    </LinkTag>

                  </div>
                </>
              )}

              <div className="d-flex flex-column flex-sm-row mt-8 justify-content-start align-items-sm-center gap-3">
                <Button
                  onClick={() => setShowModal(true)}
                  className={`${!isLaptop && 'btn-lg'} btn-feature`}
                >
                  Talk to Sales
                </Button>
                <Button
                  onClick={() => router.push('tel:012-3456-789')}
                  className={`${!isLaptop && 'btn-lg'} btn-outline-feature`}
                >
                  Call Us: 012-3456-789
                </Button>
              </div>
            </Col>

            {/* Right Column - Image */}
            <Col lg={6}>
              {currentTab == 'small-business' ? (
                <>
                  <img
                    src="/images/solution-image-right.png"
                    className={`img-fluid object-cover h-100`}
                    alt="Solutions"
                  />
                </>
              ) : (
                <>
                  <img
                    src="/images/Enterprises.png"
                    className={`img-fluid object-cover h-100`}
                    alt="Solutions"
                  />
                </>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      <Modal show={isshowModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default Solutions;
