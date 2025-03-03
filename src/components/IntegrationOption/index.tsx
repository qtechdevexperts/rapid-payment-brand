import React from 'react'
import style from "./index.module.scss"
import { Col, Row } from 'react-bootstrap'
import IntegrationCard from '@/common/Cards/IntegrationCard'
import { OnlinePaymentService } from '@/utils/data'


interface IntegratationOptionProps {
    title?: String
    data?: OnlinePaymentService[]
}



const IntegratationOption = ({ title, data }: IntegratationOptionProps) => {
    return (
        <div className={`container ${style.IntegratationOption} py-7`}>
            <div className='py-5'>
                <h2 dangerouslySetInnerHTML={{ __html: title || "" }} className='text-capitalize' />
            </div>

            <Row>
                {data?.map((item, index) => {
                    return (
                        <Col md={3}>
                            <IntegrationCard title={item?.title} desc={item?.desc} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default IntegratationOption