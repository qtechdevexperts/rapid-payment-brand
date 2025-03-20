import Modal from '@/common/Modal';
import { ServiceProps } from '@/utils/data';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import style from './index.module.scss';
import ServiceCard from './ServiceCard';
import Paragraph from '@/common/Paragraph';
import Section from '@/common/Section';

interface ServicesProps {
  title?: string;
  desc?: string;
  services?: ServiceProps[];
}

const Services = ({
  title = 'Rapid Payments  <br /> Elevate Your Business <br /> with <b>Next-Level  <br /> Merchant</b>  Services',
  services,
}: ServicesProps) => {
  const router = useRouter();
  const [isshowModalModal, setShowModal] = useState(false);
  const isLaptop = useMediaQuery({ query: '(max-width: 1400px)' });

  return (
    <Section className={clsx(style.rapidbackground)}>
      <Container className="">
        <Row className="gy-3">
          <Col
            xl={6}
            className="d-flex justify-content-center align-items-start flex-col flex-column"
          >
            <div>
              <h2
                className={`text text-3 fw-normal ${style.fontSizeHeading}`}
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <Paragraph className="para fw-normal max-w-sm-70">
                At  <span className='text-light fw-bold'>Rapid Payments</span> , we do more than just payment <br />
                processing—we empower businesses with innovative <br />
                solutions that drive efficiency, increase revenue, and <br />
                enhance customer experience.
              </Paragraph>
            </div>

            <Button
              onClick={() => setShowModal(true)}
              className={`btn btn-feature ${!isLaptop && 'btn-lg'} mt-4`}
            >
              Talk to An Expert
            </Button>
          </Col>

          {/* Services Section */}
          <Col xl={6}>
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
    </Section>
  );
};

export default Services;
