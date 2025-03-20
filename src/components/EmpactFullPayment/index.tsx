import Paragraph from '@/common/Paragraph';
import useResponsive from '@/hooks/useResponsive';
import clsx from 'clsx';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import style from './index.module.scss';

const slickSettings = {
  infinite: false,
  slidesToShow: 1.8,
  slidesToScroll: 1,
  dots: false,

  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
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

const EmpactFullPayment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const slides = [
    {
      title: 'Online',
      imgSrc: '/images/industries/online.png',
      desc: 'Accept secure online payments with ease. Our payment gateway, hosted checkout, and invoicing solutions ensure a frictionless customer experience while keeping transactions fast and secure.',
      href: '/solutions/accept-payment/online-payments/',
    },
    {
      title: 'In-store Payments',
      imgSrc: '/images/industries/in-store.png',
      desc: 'From retail stores to restaurants, accept payments anywhere, anytime with mobile card readers, wireless terminals, and countertop solutions that integrate effortlessly into your business.',
      href: '/solutions/accept-payment/in-person-payments/',
    },
    {
      title: 'Omnichannel Payments',
      imgSrc: '/images/industries/omni-channel.png',
      desc: 'Rapid Payments, a leading merchant service provider, partners with top payment processors, gateways, and POS providers to deliver a truly unified payment experience. Accept payments in-store, online, or via mobile with a seamless and secure solution that connects all sales channels.',
      href: '/solutions/accept-payment/omni-channel-payments/',
    },
    {
      title: 'Point Of Sale Solutions',
      imgSrc: '/images/POS.png',
      desc: 'At Rapid Payments, we’ve partnered with top POS providers to ensure you get the best system for your business needs. Whether you run a restaurant, retail store, or service business, we’ll match you with a secure, reliable, and feature-rich POS system designed to streamline transactions and enhance customer experience.',
      href: '/solutions/accept-payment/point-of-sale-solution/',
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
          <div className="col-xl-8">
            <div className={`badge  ${style.badge}`}>
              <h6 className="mb-0">Products</h6>
            </div>
            <h4 className="heading-3 fw-normal text-capitalize">
              Rapid Payment <br />{' '}
              <span className="fw-bold">Impactful Tech</span>{' '}
            </h4>
          </div>
          <div className="col-xl-4">
            <p className="max-w-xxl-100 max-w-md-90">
              We power seamless transactions with cutting-edge payment solutions
              designed to meet the needs of modern businesses. Whether you
              operate online or in-store, our technology ensures speed,
              security, and convenience.
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
                            <h5
                              className={`card-title ${style.empactTitle}  text-black-1 fw-bold`}
                            >
                              {slide.title}
                            </h5>
                            <Paragraph className="card-text para my-2">
                              {slide.desc}
                            </Paragraph>
                            <Link
                              href={slide.href}
                              className={`btn btn-feature ${
                                !isBigScreen && 'btn-lg'
                              } px-sm-5 py-2`}
                            >
                              Get Started
                            </Link>
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
