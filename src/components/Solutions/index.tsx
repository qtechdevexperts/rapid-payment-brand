import Button from '@/common/Button';
import Modal from '@/common/Modal';
import Paragraph from '@/common/Paragraph';
import useResponsive from '@/hooks/useResponsive';
import { ArrowRightIcon, CallIcon } from '@/utils/Icon';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import LinkTag from '../LinkTag';
import style from './index.module.scss';

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
              <div className={`${style.carouselTab} d-flex justify-content-start gap-2 align-items-center`}>
                <div>
                  <Button
                    className={clsx(
                      'px-md-5 px-sm-3 btn py-md-3 py-2 me-2 w-100',
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
                      'px-md-5 px-sm-3 btn py-md-3 py-2 me-2 w-100',
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
              </div>

              {currentTab === 'small-business' ? (
                <>
                  <h2
                    className={` text fw-bold text-secondary-standard text-2  mt-large-9 mt-4 mt-lg-6`}
                  >
                    Big Solutions for <br />
                    <span className="text-primary-standard">
                      Small Businesses
                    </span>
                  </h2>
                  <Paragraph className="max-w-sm-70">
                    Smoothly running a small business is challenging, we
                    simplify payments with proven payment processing solutions.
                    Whether in-store, online, or on the go, our secure, fast,
                    and flexible solutions let you focus on business growth and
                    succeed.
                  </Paragraph>

                  <div className="mt-4">
                    <LinkTag
                      href="/online-payments/"
                      className="heading-4 d-block text-reset text-secondary-standard text-decoration-none mt-sm-3 mt-1 mb-sm-3 mb-sm-1"
                    >
                      Online Payments
                    </LinkTag>
                    <LinkTag
                      href="/in-person-payments/"
                      className="heading-4 d-block text-reset text-secondary-standard text-decoration-none mt-sm-3 mt-1 mb-sm-3 mb-sm-1"
                    >
                      In-Person Payments
                    </LinkTag>
                    <LinkTag
                      href="/point-of-sale-solution/"
                      className="heading-4 d-block text-reset text-secondary-standard text-decoration-none mt-sm-3 mt-1 mb-sm-3 mb-sm-1"
                    >
                      Point of sales Solutions
                    </LinkTag>
                  </div>
                </>
              ) : (
                <>
                  <h2
                    className={`text  text-secondary-standard  fw-bold text-2  mt-large-9 mt-4 mt-lg-6`}
                  >
                    Enterprise <br />{' '}
                    <span className="text-primary-standard">
                      Payment Solutions
                    </span>
                  </h2>
                  <Paragraph className="max-w-lg-70">
                    Power your business with scalable, secure, and seamless{' '}
                    <br />
                    payment processing designed for high-volume transactions.{' '}
                    <br />
                    Our enterprise-grade payment processing services ensure
                    reliability <br /> speed, and efficiency across all sales
                    channels.
                  </Paragraph>

                  <div className="mt-4">

                    <LinkTag
                      href={'/in-person-payments/'}
                      className="heading-4 d-block text-reset text-secondary-standard text-decoration-none mt-sm-3 mt-1 mb-sm-3 mb-1"
                    >
                      In Person
                    </LinkTag>

                    <LinkTag
                      href={'/online-payments/'}
                      className="heading-4 d-block text-reset text-secondary-standard text-decoration-none mt-sm-3 mt-1 mb-sm-3 mb-1"
                    >
                      Online
                    </LinkTag>

                    <LinkTag
                      href={'/omni-channel-payments/'}
                      className="heading-4 d-block text-reset text-secondary-standard text-decoration-none mt-sm-3 mt-1 mb-sm-3 mb-1"
                    >
                      Omnichannel
                    </LinkTag>
                  </div>
                </>
              )}

              <div className="d-flex flex-column flex-sm-row mt-sm-8 mt-4 justify-content-start align-items-sm-center gap-3">
                <Button
                  onClick={() => setShowModal(true)}
                  className={`${!isLaptop && 'btn-lg'} btn btn-feature`}
                  iconRight={<ArrowRightIcon color="#FFF" />}
                >
                  Talk To an Expert
                </Button>
                <Button
                  onClick={() => router.push('tel:888-562-4060')}
                  className={`${!isLaptop && 'btn-lg'} btn btn-outline-feature`}
                  iconLeft={<CallIcon />}
                >
                  Call Us: 888-562-4060
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
