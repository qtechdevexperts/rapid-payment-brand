import IntegrationCard from '@/common/Cards/IntegrationCard';
import Paragraph from '@/common/Paragraph';
import { OnlinePaymentService } from '@/utils/data';
import { Col, Row } from 'react-bootstrap';
import style from './index.module.scss';

interface IntegratationOptionProps {
  title?: string;
  data?: OnlinePaymentService[];
  desc?: string;
  defaultColumm?: number;
  headingClass?: string;
}

const IntegratationOption = ({
  title,
  data,
  desc = '',
  headingClass = '',
  defaultColumm = 3 as number,
}: IntegratationOptionProps) => {
  return (
    <div className={`container ${style.IntegratationOption} py-sm-7`}>
      <div className={`py-5 ${style.firstBox}`}>
        <h2
          dangerouslySetInnerHTML={{ __html: title || '' }}
          className="text-capitalize text text-1"
        />
        <Paragraph
          className="text-center"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </div>

      <Row className="gy-3">
        {data?.map((item, index) => {
          return (
            <Col md={'6'} lg={3}>
              <IntegrationCard title={item?.title} desc={item?.desc} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default IntegratationOption;
