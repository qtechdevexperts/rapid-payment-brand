import TalkToAnExpertButton from '@/components/TalkToAnExpertButton';
import { useRouter } from 'next/router';
import React from 'react';
import { Card } from 'react-bootstrap';
import style from './index.module.scss';

interface PointOfSaleCard2Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  image?: string;
  href?: string;
  solutionBadge?: string;
  isShowSolution?: boolean;
  onProductClick?: () => void;
}

const PointOfSaleCard2 = ({
  title,
  description,
  solutionBadge = 'Solutions',
  href = '',
  image,
  isShowSolution = false,
  onProductClick,
  ...props
}: PointOfSaleCard2Props) => {
  const router = useRouter();

  return (
    <Card className="p-sm-4 p-2 mb-2 h-100">
      <Card.Img variant="top" src={image} />
      <Card.Body className="ps-0">
        {!isShowSolution && (
          <h5 className="badge bg-primary-100">{solutionBadge}</h5>
        )}
        <div className="d-flex flex-column justify-content-start align-items-start">
          <Card.Title className="text text-4">{title}</Card.Title>
          <Card.Text
            className={`text-light ${style.text} `}
            style={{ fontWeight: 300 }}
          >
            {description}
          </Card.Text>
          <div className="d-flex h-100 justify-content-start align-items-center gap-3">
            <TalkToAnExpertButton
              text="Talk to Expert"
              className="btn btn-feature"
            />
            <button
              onClick={onProductClick}
              className="btn btn-outline-feature"
            >
              Product Details
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PointOfSaleCard2;
