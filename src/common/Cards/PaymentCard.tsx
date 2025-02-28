import React from 'react'
import style from "./index.module.scss"
import clsx from 'clsx'



interface PaymentCardProps {
    title?:string
    description?:string
    icon?:React.ReactNode
}



const PaymentCard = ({title,description,icon}:PaymentCardProps) => {
    return (
        <div className={clsx(style.paymentCard, 'p-4')}>
            <div className={clsx(style.paymentIcon)}>
                {icon}
            </div>
            <h5 className='heading-4 my-3'>{title}</h5>
            <p className='para'>{description}</p>
        </div>
    )
}

export default PaymentCard