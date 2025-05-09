import Button from '@/common/Button';
import useResponsive from '@/hooks/useResponsive';
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
        slidesToShow: 1.4,
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

const RapidPaymentForSolutions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      title: 'Ecommerce',
      imgSrc: '/images/industries/ecommerce.png',
      desc: 'Secure your online transactions with a dedicated merchant account and reliable payment processing. Accept credit and debit cards with ease while protecting your business from fraud and chargebacks.',
      href: '/ecommerce/',
    },
    {
      title: 'Professional Services',
      imgSrc: '/images/industries/professional-services.png',
      desc: 'Get paid on time with custom invoicing, recurring billing, and seamless card payment acceptance. Our merchant accounts and POS solutions help service professionals simplify transactions and improve cash flow.',
      href: '/professional-services/',
    },
  ];

  const router = useRouter();

  const totalSlides = slides.length;
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  const isBigScreen = useResponsive({ query: '(min-width: 1921px)' });

  return (
    <section
      className={clsx(
        style.RapidPayment,
        ' container p-sm-4 p-3 mt-8 rounded-3 ',
      )}
    >
      <div className={clsx({ container: isBigScreen })}>
        <div className="row">
          <div className="col-xl-8">
            <h4
              className={`text text-3 fw-bold text-capitalize text-secondary-standard`}
            >
              At Rapid Payment, We <br className="d-none d-lg-block" />{' '}
              Understand{' '}
              <span className="fw-bold text-primary-standard">
                your Industry
              </span>{' '}
            </h4>
          </div>
          <div className="col-xl-4">
            <p className="max-w-xxl-100">
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
                <div className="px-1">
                  <div
                    key={index}
                    className={clsx(style.paymentUniversityCard)}
                  >
                    <div className="card p-sm-3 p-1 border-0 rounded-4 ">
                      <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                          <div className="card-body">
                            <h5
                              className={` ${style.cardTitle}  card-title heading-4 text-secondary-standard fw-bold`}
                            >
                              {slide.title}
                            </h5>
                            <p className="card-text para my-4">{slide?.desc}</p>
                            <Button
                              onClick={() => router.push(slide.href)}
                              className={`btn btn-feature  px-sm-5`}
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
    </section>
  );
};

export default RapidPaymentForSolutions;
