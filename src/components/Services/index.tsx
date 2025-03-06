import Modal from '@/common/Modal';
import { ServiceProps } from '@/utils/data';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import style from './index.module.scss';
import ServiceCard from './ServiceCard';

interface ServicesProps {
  title?: string;
  desc?: string;
  services?: ServiceProps[];
}

const Services = ({
  title = 'Rapid Payments <br /> Elevate Your Business <br />  <span className="fw-bold">Next-Level</span> <br />  <span className="fw-bold"> Merchant</span> Services',
  services,
}: ServicesProps) => {
  const router = useRouter();
  const [isshowModalModal, setShowModal] = useState(false);
  const isLaptop = useMediaQuery({ query: '(max-width: 1400px)' });

  return (
    <div className={clsx(style.rapidbackground)}>
      <Container className="py-md-7 py-2">
        <Row className="gy-3">
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-start flex-col flex-column"
          >
            <div>
              <h2
                className={`heading-large fw-normal ${style.fontSizeHeading}`}
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className="para fw-normal">
                At Rapid Payments, we do more than just payment <br />
                processing—we empower businesses with innovative <br />
                solutions that drive efficiency, increase revenue, and <br />
                enhance customer experience.
              </p>
            </div>

            <Button
              onClick={() => setShowModal(true)}
              className={`btn btn-feature ${!isLaptop && 'btn-lg'} mt-4`}
            >
              Talk to An Expert
            </Button>
          </Col>

          {/* Services Section */}
          <Col lg={6}>
            <Row className="gy-4">
              {services?.map((service, index) => (
                <Col key={index} md={6}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Modal show={isshowModalModal} handleClose={() => setShowModal(false)} />
    </div>
  );
};

export default Services;
