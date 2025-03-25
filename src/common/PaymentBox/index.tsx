import React, { HTMLAttributes } from 'react'
import style from "./index.module.scss"
import clsx from 'clsx'




interface PaymentBoxProps extends HTMLAttributes<HTMLDivElement> {
    title?: string
    description?: string
    image?: string
}


const PaymentBox = ({ title, image, description, className, ...props }: PaymentBoxProps) => {
    return (
        <div className={clsx(style.paymentBox, 'd-flex flex-column')} {...props}>

            <img src={image} alt="service" />

            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default PaymentBox