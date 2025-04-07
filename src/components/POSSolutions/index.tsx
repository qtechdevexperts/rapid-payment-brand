import Button from '@/common/Button';
import Paragraph from '@/common/Paragraph';
import useResponsive from '@/hooks/useResponsive';
import clsx from 'clsx';
import { useState } from 'react';
import Slider from 'react-slick';
import style from './index.module.scss';
import Modal from '@/common/Modal';

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
        slidesToShow: 1.8,
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
  title?: String;
  pos?: {
    title: string;
    imgSrc: string;
    desc: string;
  }[];
}

const RapidPaymentForSolutions = ({
  pos,
  title = " <span class='fw-bold text-primary-standard'>POS Solutions</span>  <span class='text-secondary-standard'> for Every Business </span>",
}: RapidPaymentForSolutionsProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = pos?.length ?? 0;
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  const isBigScreen = useResponsive({ query: '(min-width: 1921px)' });


  const [isShowModal, setShowModal] = useState(false)



  return (
    <>
      <section
        className={clsx(
          style.RapidPayment,
          ' container p-sm-4 p-3 mt-8 rounded-3 ',
        )}
      >
        <div className={clsx({ container: isBigScreen })}>
          <div className="row">
            <div className="col-md-8">
              <h4
                className={` text text-3 fw-bold text-capitalize`}
                dangerouslySetInnerHTML={{ __html: title || '' }}
              />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12">
              <Slider
                {...slickSettings}
                afterChange={(index) => setCurrentSlide(index)}
                className="rapid-payment-slider"
              >
                {pos?.map((slide, index) => (
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
                                className={`card-title ${style.cardHeading} text-secondary-standard fw-bold`}
                              >
                                {slide.title}
                              </h5>
                              <Paragraph className="card-text para my-4">
                                {slide?.desc}
                              </Paragraph>
                              <Button onClick={() => setShowModal(true)} className={`btn btn-feature  px-sm-5 py-2`}>
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

      <Modal show={isShowModal} handleClose={() => setShowModal(false)} />

    </>

  );
};

export default RapidPaymentForSolutions;
