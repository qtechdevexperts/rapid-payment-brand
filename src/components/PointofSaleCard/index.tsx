import React from 'react'
import style from "./index.module.scss"
import { Button, Card } from 'react-bootstrap'
import Paragraph from '@/common/Paragraph'


interface PointofSaleCardProps {
    title?: String
    desc?: String
}


const PointofSaleCard = ({ title, desc }: PointofSaleCardProps) => {
    return (
        <Card className='p-3'>
            <Card.Img variant="top" src="/images/point-of-sale-card.png" />
            <Card.Body>
                <div className='badge bg-primary-100'>Solutions</div>
                <Card.Title className='fs-xxl-17 my-2 text-dark'>{title}</Card.Title>
                <Paragraph className='text-gray-100'>
                    {desc}
                </Paragraph>
                <div className='d-flex align-items-center gap-3'>
                    <Button className='btn btn-feature'>Talk to an expert</Button>
                    <Button className='btn btn-outline-feature'>Talk to an expert</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default PointofSaleCard