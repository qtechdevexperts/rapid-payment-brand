import Modal from '@/common/Modal';
import useResponsive from '@/hooks/useResponsive';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import style from './index.module.scss';

interface HeroProps {
  title?: string;
  backgroundImage?: String;
  description?: String;
  isShowContact?: boolean;
  isHideAllButton?: boolean;
}

const Hero = ({
  title,
  backgroundImage,
  isShowContact = false,
  isHideAllButton = false,
  description = ' Rapid Payments, a trusted merchant service provider, partners                                with top payment processors to deliver secure, seamless, and                                scalable online payment solutions. Whether you operate an                                eCommerce store, subscription service, or professional business,                                our solutions ensure smooth transactions, fraud protection, and                                quick payouts.',
}: HeroProps) => {
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
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={`container ${style.container} h-100`}>
          <Row className="h-100">
            <Col
              lg={5}
              md={12}
              className="mb-10 h-100 d-flex flex-column justify-content-center align-items-start"
            >
              <h1
                className="heading-1 fw-normal mt-4 text-capitalize"
                dangerouslySetInnerHTML={{ __html: title || '' }} // Handling undefined title
              />
              <p
                className="para"
                dangerouslySetInnerHTML={{ __html: description || '' }}
              />

              {!isHideAllButton && (
                <div className="d-flex flex-column flex-sm-row gap-3 mt-3 justify-content-start align-items-sm-center">
                  <Button
                    onClick={() => setContactModal(true)}
                    className={`${isLaptop ? '' : 'btn-lg'} btn-feature`}
                  >
                    Talk To an Expert
                  </Button>
                  {!isShowContact && (
                    <>
                      <Button
                        onClick={() => router.push('tel:012-3456-789')}
                        className={`${isLaptop ? '' : 'btn-lg'} btn-outline-feature`}
                      >
                        Call Us: 012-3456-789
                      </Button>
                    </>
                  )}
                </div>
              )}
            </Col>
          </Row>
        </div>
      </section>

      <Modal show={contactModal} handleClose={() => setContactModal(false)} />
    </>
  );
};

export default Hero;
