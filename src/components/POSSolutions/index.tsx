import useResponsive from '@/hooks/useResponsive';
import clsx from 'clsx';
import { useState } from 'react';
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


interface RapidPaymentForSolutionsProps {
    title?: String
}


const RapidPaymentForSolutions = ({ title = " <span className='fw-bold'>POS Solutions</span>    for Every Business" }: RapidPaymentForSolutionsProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: 'Smart Point Of Sales',
            imgSrc: '/images/smart-point-of-sale.png',
            desc: 'Upgrade your business with a modern, intuitive POS system that supports contactless, chip, and mobile payments, while also managing inventory and sales insights seamlessly.',
        },
        {
            title: 'Smart Terminal',
            imgSrc: '/images/smart-point-of-sale.png',
            desc: 'Experience fast, secure, and all-in-one smart terminals designed for on-the-go and in-store transactions, ensuring flexibility and ease of use.',
        },

    ];

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
                    <div className="col-md-8">
                        <h4 className="heading-3 fw-normal text-capitalize" dangerouslySetInnerHTML={{ __html: title || "" }} />
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
                                                        <button className={`btn btn-feature  px-sm-5 py-2`}>
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

export default RapidPaymentForSolutions;
