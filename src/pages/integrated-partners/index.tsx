import React from 'react'
import style from "./index.module.scss"
import Hero from '@/components/ServicesSection/Hero'
import PaymentForm from '@/components/PaymentForm'
import { Col, Row } from 'react-bootstrap'

const Integrated = () => {
    return (
        <>
            <Hero
                title='Integrated <span class="fw-bold">Partners</span>'
                backgroundImage={"/images/integrated-partners.png"}
                description={'Have questions or need assistance? Our payment experts are here to help! Whether you’re looking for a custom payment solution, a powerful POS system, or partnership opportunities, we’re just a message away.'}  
            />

          

            <section className="container py-8">
                <h2 className='text-capitalize heading-2 text-center text-primary-100'>processing Platforms Partners</h2>
                <div className='d-flex mt-6 flex-wrap align-items-center gap-5'>
                    <img src="/images/partners/1.png" className='img-fluid' alt="" />
                    <img src="/images/partners/2.png" className='img-fluid' alt="" />
                    <img src="/images/partners/3.png" className='img-fluid' alt="" />
                    <img src="/images/partners/4.png" className='img-fluid' alt="" />
                    <img src="/images/partners/5.png" className='img-fluid' alt="" />
                </div>
            </section>


            <section className="container py-8">
                <h2 className='text-capitalize heading-2 text-center text-primary-100'>Gateway Partners</h2>
                <div className='d-flex mt-6 flex-wrap justify-content-center align-items-center gap-5'>
                    <img src="/images/partners/1.png" className='img-fluid' alt="" />
                    <img src="/images/partners/3.png" className='img-fluid' alt="" />
                    <img src="/images/partners/4.png" className='img-fluid' alt="" />
                </div>
            </section>


            
            <section className="container py-8">
                <h2 className='text-capitalize heading-2 text-center text-primary-100'>Equipment Partners</h2>
                <div className='d-flex mt-6 flex-wrap align-items-center gap-5'>
                    <img src="/images/partners/1.png" className='img-fluid' alt="" />
                    <img src="/images/partners/2.png" className='img-fluid' alt="" />
                    <img src="/images/partners/3.png" className='img-fluid' alt="" />
                    <img src="/images/partners/4.png" className='img-fluid' alt="" />
                    <img src="/images/partners/5.png" className='img-fluid' alt="" />
                </div>
            </section>

            



        </>
    )
}

export default Integrated