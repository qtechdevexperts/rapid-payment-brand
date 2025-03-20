import { Hero, PaymentType, RapidPaymentForSolutions, RapidPaymentUniversity, Services } from '@/components'
import SolutionForInnerPages from '@/components/SolutionForInnerPages'
import { services } from '@/utils/data'
import React from 'react'

const WhoWeAre = () => {
    return (
        <>
            <Hero
                title='Who We <span class="fw-bold">Are</span>'
                backgroundImage={'/images/who-we-are.png'}
                description={
                    'Rapid Payments, a trusted merchant service provider, partners with top payment processors to deliver secure, seamless, and scalable online payment solutions. Whether you operate an eCommerce store, subscription service, or professional business, our solutions ensure smooth transactions, fraud protection, and quick payouts.'
                }
                discriptionClass={'max-w-sm-80'}
            />


            <SolutionForInnerPages />

            <Services services={services} />

            <PaymentType />


            <div className='mb-0 mb-sm-5'>
                <RapidPaymentForSolutions />
            </div>



        </>
    )
}

export default WhoWeAre