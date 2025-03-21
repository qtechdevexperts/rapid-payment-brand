import Modal from '@/common/Modal';
import Paragraph from '@/common/Paragraph';
import useResponsive from '@/hooks/useResponsive';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
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

const SolutionForInnerPages = () => {
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
            <Col lg={6} className="pb-xxl-8 pb-5">
              <div>
                <h2 className="text text-2 fw-normal mt-xxl-9 mt-4">
                  Big Solutions for <br />
                  <span className="fw-bold">Small Businesses</span>
                </h2>
                <Paragraph className="max-w-sm-65">
                  Smoothly running a small business is challenging, we simplify
                  payments with proven payment processing solutions. Whether
                  in-store, online, or on the go, our secure, fast, and flexible
                  solutions let you focus on business growth and succeed.
                </Paragraph>

                <div className="mt-4">
                  <LinkTag
                    href="/online-payments/"
                    className="heading-4 d-block text-reset text-decoration-none mt-sm-3 mt-2 mb-3"
                  >
                    Online Payments
                  </LinkTag>
                  <LinkTag
                    href="/in-person-payments/"
                    className="heading-4 d-block text-reset text-decoration-none mt-sm-3 mt-2 mb-3"
                  >
                    In-Person Payments
                  </LinkTag>
                  <LinkTag
                    href="/point-of-sale-solution/"
                    className="heading-4 d-block text-reset text-decoration-none mt-sm-3 mt-2 mb-3"
                  >
                    Point of sales Solutions
                  </LinkTag>
                </div>
              </div>

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
              <div>
                <img
                  src="/images/solution-image-right.png"
                  className={`img-fluid object-cover h-100`}
                  alt="Solutions"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal show={isshowModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default SolutionForInnerPages;
