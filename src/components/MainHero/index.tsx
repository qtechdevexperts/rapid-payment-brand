import Modal from '@/common/Modal';
import Paragraph from '@/common/Paragraph';
import useResponsive from '@/hooks/useResponsive';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import style from './index.module.scss';
import Button from '@/common/Button';
import { ArrowRightIcon, CallIcon, UtilIcon } from '@/utils/Icon';



const MainHero = () => {
  const router = useRouter();

  const [contactModal, setContactModal] = useState(false);

  const isLaptop = useMediaQuery({ query: '(max-width: 1400px)' });

  const isLargeScreen = useResponsive({ query: `(min-width:2000px)` });

  return (
    <>
      <section
        className={clsx(
          style.mainHero,
          { container: isLargeScreen },
          'px-sm-4  d-flex flex-column justify-content-center align-items-center',
        )}
      >
        <div className={`container ${style.container} h-100`}>
          <Row className="h-100">
            <Col
              xl={5}
              md={12}
              className={`mb-10 ${style.heroContentSection} h-100 d-flex flex-column justify-content-center align-items-start`}
            >
              <h2 className=" fw-bold text-secondary-standard text text-1  mt-4">
                Rapid Payments <br className="d-none d-lg-block" /> Your Partner
                in <br className="d-none d-lg-block" />
                <span className="text-primary-standard"> Payment Success</span>
              </h2>
              <Paragraph className="para">
                At <span className="fw-bold">Rapid Payments</span> , we empower
                businesses of all sizes with flexible, secure, and efficient
                payment processing solutions.
              </Paragraph>

              <Row>
                <Col md={12}>
                  <div className="d-flex justify-content-start align-items-center gap-2">
                    <UtilIcon />
                    <Paragraph className={clsx('text-secondary-standard mb-0')}>
                      <span className=" fw-bold">Seamless</span>{' '}
                      Payment  processing solutions
                    </Paragraph>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="d-flex justify-content-start align-items-start gap-2">
                    <UtilIcon />
                    <Paragraph className={clsx(style.heroParagraph)}>
                      <span className="text-primary-100 fw-bold">
                        Secure & Reliable{' '}
                      </span>{' '}
                      Merchant payment Processing
                    </Paragraph>
                  </div>
                </Col>
              </Row>

              <div className="d-flex flex-column flex-sm-row gap-3 mt-3 justify-content-start align-items-sm-center">
                <Button
                  onClick={() => setContactModal(true)}
                  className={` btn btn-feature `}
                  iconRight={<ArrowRightIcon />}
                >
                  Talk To an Expert
                </Button>
                <Button
                  onClick={() => router.push('tel:012-3456-789')}
                  className={` btn btn-outline-feature `}
                  iconLeft={<CallIcon />}
                >
                  Call Us: 012-3456-789
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <Modal show={contactModal} handleClose={() => setContactModal(false)} />
    </>
  );
};

export default MainHero;
