import IntegrationCard from '@/common/Cards/IntegrationCard';
import { OnlinePaymentService } from '@/utils/data';
import { Col, Row } from 'react-bootstrap';
import style from './index.module.scss';

interface IntegratationOptionProps {
    title?: string;
    data?: OnlinePaymentService[];
    desc?: string;
    defaultColumm?: number;
}

const IntegratationOption = ({
    title,
    data,
    desc = '',
    defaultColumm = 3 as number,
}: IntegratationOptionProps) => {
    return (
        <div className={`container ${style.IntegratationOption} py-7`}>
            <div className="py-5">
                <h2
                    dangerouslySetInnerHTML={{ __html: title || '' }}
                    className="text-capitalize"
                />
                <p className="text-center" dangerouslySetInnerHTML={{ __html: desc }} />
            </div>

            <Row className='gy-3'>
                {data?.map((item, index) => {
                    return (
                        <Col md={defaultColumm}>
                            <IntegrationCard title={item?.title} desc={item?.desc} />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default IntegratationOption;
