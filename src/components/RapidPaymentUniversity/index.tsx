import Button from '@/common/Button';
import Paragraph from '@/common/Paragraph';
import Section from '@/common/Section';
import useResponsive from '@/hooks/useResponsive';
import { ArrowRightIcon } from '@/utils/Icon';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Slider from 'react-slick';
import style from './index.module.scss';

const slickSettings = {
  infinite: false,
  slidesToShow: 1.7,
  slidesToScroll: 1,
  dots: false,

  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const RapidPaymentUniversity = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const router = useRouter();

  const slides = [
    {
      title: 'Retail',
      imgSrc: '/images/industries/Retail.png',
      desc: 'Simplify in-store payments with secure merchant account services and advanced POS solutions. Accept credit and debit card payments seamlessly while managing inventory, transactions, and customer insights efficiently.',
      href: '/retail/',
    },
    {
      title: 'Restaurant',
      imgSrc: '/images/industries/resturant.png',
      desc: 'Enhance service speed with our restaurant-focused POS systems and merchant accounts. Accept card payments at the counter, tableside, or via mobile terminals, manage tips and tabs, and streamline operations effortlessly.',
      href: '/restaurant/',
    },
    {
      title: 'eCommerce',
      imgSrc: '/images/industries/ecommerce.png',
      desc: 'Secure your online transactions with a dedicated merchant account and reliable payment processing. Accept credit and debit cards with ease while protecting your business from fraud and chargebacks.',
      href: '#!',
    },
    {
      title: 'Professional Services',
      imgSrc: '/images/industries/professional-services.png',
      desc: 'Get paid on time with custom invoicing, recurring billing, and seamless card payment acceptance. Our merchant accounts and POS solutions help service professionals simplify transactions and improve cash flow.',
      href: '/professional-services/',
    },
  ];

  const totalSlides = slides.length;
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  const isBigScreen = useResponsive({ query: '(min-width: 1921px)' });

  return (
    <Section
      className={clsx(
        style.RapidPayment,
        ' p-xl-8 p-md-7 container p-3 rounded-3 ',
      )}
    >
      <div className={clsx('')}>
        <div className="row">
          <div className="col-lg-8">
            <h4 className="text text-secondary-standard fw-bold text-3 text-capitalize">
              At Rapid Payment,
              <span className="text-primary-standard">
                We <br /> Understand{' '}
              </span>
              <span className="">your Industry</span>{' '}
            </h4>
          </div>
          <div className="col-lg-4">
            <p>
              No matter where or how you do business—whether through a physical
              location or a digital platform—we offer fast, secure, and flexible
              payment options for every business.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <Slider
              {...slickSettings}
              afterChange={(index) => setCurrentSlide(index)}
              className="rapid-payment-slider"
            >
              {slides.map((slide, index) => (
                <div className="px-1 h-100">
                  <div
                    key={index}
                    className={clsx(style.paymentUniversityCard)}
                  >
                    <div className="card p-sm-3 p-1 border-0 rounded-4 ">
                      <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                          <div className="card-body">
                            <h5
                              className={`card-title ${style.CardTitle} text-secondary-standard  text-capitalize heading-4 text-black-1 fw-bold`}
                            >
                              {slide.title}
                            </h5>
                            <Paragraph className="card-text para my-4">
                              {slide?.desc}
                            </Paragraph>


                            <Button
                              iconRight={<ArrowRightIcon />}
                              onClick={() => router.push(slide.href)}
                              className="btn btn-feature"
                            >
                              Get Started
                            </Button>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src={slide.imgSrc}
                            className="img-fluid w-100"
                            alt={slide.title}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="progress mt-4" style={{ height: '8px' }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${progress}%`,
              backgroundColor: '#4990E2',
              transition: 'width 0.5s ease',
            }}
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      </div>
    </Section>
  );
};

export default RapidPaymentUniversity;
