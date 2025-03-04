import Hero from '@/components/ServicesSection/Hero'
import React from 'react'
import style from "./index.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import ProcessingFeeCard from '@/common/Cards/ProcessingFeeCard'
import PaymentForm from '@/components/PaymentForm'

const OurPricing = () => {
    return (
        <>
            <Hero
                title='Our <span class="fw-bold">Pricing</span> '
                backgroundImage={"/images/contact.png"}
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
            />


            <section className='py-10'>
                <Container className='d-flex flex-column justify-content-center align-items-center'>
                    <h2 className='heading-3 fw-normal text-capitalize text-center'>
                        From small businesses to enterprise <br /> empires, we <span className='fw-bold'>lead the way.</span> 
                    </h2>
                    <p className='para max-w-sm-65 text-center mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <img src="/images/pricing.png" className='img-fluid mt-4' alt="" />
            
                </Container>
            </section>



            <section className='py-10'>
                <Container>
                    <h2 className='heading-2 text-center'>Processing Fees</h2>
                    <Row className='mt-7'>
                        <Col md={3}>
                            <ProcessingFeeCard
                                title={'in Person'}
                                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidint ut labore et dolore magna aliqua eiusmod dolor sit.'}
                            />
                        </Col>
                        <Col md={3}>
                            <ProcessingFeeCard
                                title={'Online'}
                                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidint ut labore et dolore magna aliqua eiusmod dolor sit.'}
                            />
                        </Col>
                        <Col md={3}>
                            <ProcessingFeeCard
                                title={'keyed Entry'}
                                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidint ut labore et dolore magna aliqua eiusmod dolor sit.'}
                            />
                        </Col>
                        <Col md={3}>
                            <ProcessingFeeCard
                                title={'Invoices'}
                                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidint ut labore et dolore magna aliqua eiusmod dolor sit.'}
                            />
                        </Col>


                    </Row>
                </Container>
            </section>


            <section className='py-10'>
                <PaymentForm />
            </section>


        </>
    )
}

export default OurPricing