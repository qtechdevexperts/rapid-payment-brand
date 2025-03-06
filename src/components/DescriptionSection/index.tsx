import Modal from '@/common/Modal';
import useResponsive from '@/hooks/useResponsive';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import style from './index.module.scss';

interface SolutionsTabProps {
  title?: string;
  description?: string;
  list?: string[];
  image?: string;
}

const Solutions = ({
  title,
  description,
  list,
  image = '',
}: SolutionsTabProps) => {
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
        className={clsx(style.solution, 'bg-primary-light rounded-4 my-5')}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container className={` ${isBigScreen ? '' : 'me-lg-0 pe-lg-0'} `}>
          <Row>
            <Col lg={6} className="pb-8">
              <>
                <h2
                  className="heading-3 fw-normal mt-9 text-capitalize"
                  dangerouslySetInnerHTML={{ __html: title || '' }}
                />
                <p className="para">{description}</p>

                <div className="mt-4">
                  {list?.map((item, index) => {
                    return <h6 className="heading-4 mt-3 mb-3">{item} </h6>;
                  })}
                </div>
              </>

              <div className="d-flex flex-column flex-sm-row mt-8 justify-content-start align-items-sm-center gap-3">
                <Button
                  onClick={() => setShowModal(true)}
                  className={`${!isLaptop && 'btn-lg'} btn-feature`}
                >
                  Learn More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal show={isshowModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default Solutions;
