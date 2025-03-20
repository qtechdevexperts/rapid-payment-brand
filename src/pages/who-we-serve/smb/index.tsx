import PointofSaleCard from '@/common/Cards/PointofSaleCard'
import PointOfSaleCard2 from '@/common/Cards/PointOfSaleCard2'
import { Hero, OtherSolutionCard, PaymentForm, RapidPaymentForSolutions, RapidPaymentUniversity } from '@/components'
import DescriptionSection from '@/components/DescriptionSection'
import SaleCard from '@/components/SaleCard'
import Head from 'next/head'
import React from 'react'

const SMB = () => {
    return (
        <>

            <Head>
                <title>Small Business Solutions | Rapid Payments</title>
                <meta
                    name="description"
                    content=""
                />
            </Head>



            <Hero
                title='Start Accepting <span class="fw-bold">Payments Now</span> '
                backgroundImage={'/images/smb-product.png'}
                description={
                    "Get your business up and running with fast, secure, and hassle-free payment processing. Whether you need POS systems, mobile payments, or online checkouts, we provide a seamless solution tailored to your business needs."
                }
            />


            <div className='container py-sm-8 mt-10'>
                <div className="row gy-4">
                    <div className="col-md-6">
                        <PointOfSaleCard2
                            image='/images/smb/point-1.png'
                            title='Point of Sale Solutions'
                            description='Streamline your operations with feature-rich POS systems designed for efficiency, security, and seamless transactions—ideal for retail, restaurants, and service businesses.'
                        />
                    </div>
                    <div className="col-md-6">
                        <PointOfSaleCard2
                            image='/images/smb/point-2.png'
                            title='Smart Point of sale'
                            description='Upgrade to a modern, intuitive POS system that accepts EMV chip, contactless, and mobile payments while offering inventory tracking and business insights.'
                            solutionBadge="Product"
                        />
                    </div>
                    <div className="col-md-6">
                        <PointOfSaleCard2
                            image='/images/smb/point-3.png'
                            title='Smart Point of sale'
                            description='Enjoy flexibility with all-in-one smart terminals that allow fast, secure, and mobile transactions, keeping your business running smoothly anywhere.'
                            isShowSolution
                        />
                    </div>
                    <div className="col-md-6">
                        <PointOfSaleCard2
                            image='/images/smb/mobile-reader.png'
                            title='Mobile readers'
                            description='Turn any device into a payment powerhouse with compact, wireless mobile readers—perfect for on-the-go businesses and remote transactions.'
                            isShowSolution
                        />
                    </div>



                </div>
            </div>


            <DescriptionSection
                title={
                    'Want to start taking payments for your <br /> <span class="fw-bold">small business?</span> '
                }
                description={
                    'Get paid quickly, securely, and hassle-free with Rapid Payments. Whether you need in-store, online, or mobile payment solutions, we’ve got you covered.'
                }
                list={[
                    'Flexible Pricing Options',
                    'No Setup fee.*',
                    'Free terminal Placement* ',
                ]}
                image="/images/enterpise-banner-2.png"
            />


            <RapidPaymentForSolutions />

            <PaymentForm />




        </>
    )
}

export default SMB