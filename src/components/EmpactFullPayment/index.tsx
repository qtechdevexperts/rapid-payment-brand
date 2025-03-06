import useResponsive from '@/hooks/useResponsive';
import clsx from 'clsx';
import { useState } from 'react';
import Slider from 'react-slick';
import style from './index.module.scss';

const slickSettings = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,

  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const EmpactFullPayment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Retail',
      imgSrc: '/images/industries/Retail.png',
      desc: 'Simplify in-store payments with secure merchant account services and advanced POS solutions. Accept credit and debit card payments seamlessly while managing inventory, transactions, and customer insights efficiently.',
    },
    {
      title: 'Restaurant',
      imgSrc: '/images/industries/resturant.png',
      desc: 'Enhance service speed with our restaurant-focused POS systems and merchant accounts. Accept card payments at the counter, tableside, or via mobile terminals, manage tips and tabs, and streamline operations effortlessly.',
    },
    {
      title: 'eCommerce',
      imgSrc: '/images/industries/ecommerce.png',
      desc: 'Secure your online transactions with a dedicated merchant account and reliable payment processing. Accept credit and debit cards with ease while protecting your business from fraud and chargebacks.',
    },
    {
      title: 'Professional Services',
      imgSrc: '/images/industries/professional-services.png',
      desc: 'Get paid on time with custom invoicing, recurring billing, and seamless card payment acceptance. Our merchant accounts and POS solutions help service professionals simplify transactions and improve cash flow.',
    },
  ];

  const totalSlides = slides.length;
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  const isBigScreen = useResponsive({ query: '(min-width: 1921px)' });

  return (
    <section
      className={clsx(style.RapidPayment, 'container p-sm-4 p-3 rounded-3 ')}
    >
      <div className={clsx({ container: isBigScreen })}>
        <div className="row">
          <div className="col-md-8">
            <div className={`badge  ${style.badge}`}>
              <h6 className="mb-0">Products</h6>
            </div>
            <h4 className="heading-3 fw-normal text-capitalize">
              Rapid Payment <br />{' '}
              <span className="fw-bold">Impactful Tech</span>{' '}
            </h4>
          </div>
          <div className="col-md-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <Slider
              {...slickSettings}
              afterChange={(index) => setCurrentSlide(index)}
              className="rapid-payment-slider solution-slider"
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
                            <h5 className="card-title heading-4 text-black-1 fw-bold">
                              {slide.title}
                            </h5>
                            <p className="card-text para my-4">
                              Enhance service speed with our restaurant-focused
                              POS systems and merchant accounts. Accept card
                              payments at the counter, tableside, or via mobile
                              terminals, manage tips and tabs, and streamline
                              operations effortlessly.
                            </p>
                            <button
                              className={`btn btn-feature ${
                                !isBigScreen && 'btn-lg'
                              } px-sm-5 py-2`}
                            >
                              Get Started
                            </button>
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

export default EmpactFullPayment;
