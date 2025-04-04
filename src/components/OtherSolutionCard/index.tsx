import Paragraph from '@/common/Paragraph';
import Link from 'next/link';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import style from './index.module.scss';
import CtaButton from '@/common/Button/CtaButton';
import { useRouter } from 'next/router';

interface OtherSolutionCardProps {
  title?: string;
  image?: string;
  desc?: string;
  href?: string;
}

interface OtherSolutionProps {
  data?: OtherSolutionCardProps[];
}

const OtherSolutionCard = ({ data }: OtherSolutionProps) => {


  const router = useRouter();


  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="container py-5">
      <h2 className="text text-2 fw-bold mb-md-6 mb-4 text-secondary-standard">
        Check Out Our Other{' '}
        <span className="fw-bold text-primary-standard">Solutions</span>{' '}
      </h2>
      <Row className="gy-4 justify-content-center">
        {data?.map((item, index) => {
          return (
            <Col lg={4} md={6}>
              <div
                className={`card p-3 h-100 position-relative  ${style.OtherSolutionCard}`}
              >
                <img src={item?.image} className="card-img-top" alt="..." />
                <div className="card-body ps-0 d-flex flex-column justify-content-between align-items-start">
                  <div>
                    <h6 className={`text-primary-100 `}>Solutions</h6>
                    <h5 className={`card-title  text-secondary-standard ${style.solutionTitle}`}>
                      {item?.title}
                    </h5>
                  </div>
                  <Paragraph className="" variant="sm">
                    {item?.desc}.
                  </Paragraph>
                  <CtaButton onClick={()=>router.push(item?.href || '#')} className="btn btn-feature  ">
                    Find Out More
                  </CtaButton>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default OtherSolutionCard;
