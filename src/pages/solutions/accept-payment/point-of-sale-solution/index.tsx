import { Hero, IntegratationOption, PaymentForm, RapidPaymentUniversity } from '@/components';
import POSSolutions from '@/components/POSSolutions';
import { ResturantServices } from '@/utils/data';
import Solutions from '@/components/Solutions';
import DescriptionSection from '@/components/DescriptionSection';
import Head from 'next/head';



const slides = [
    {
        title: 'Smart Point Of Sales',
        imgSrc: '/images/smart-point-of-sale.png',
        desc: 'Upgrade your business with a modern, intuitive POS system that supports contactless, chip, and mobile payments, while also managing inventory and sales insights seamlessly.',
    },
    {
        title: 'Smart Terminal',
        imgSrc: '/images/smart-point-of-sale.png',
        desc: 'Experience fast, secure, and all-in-one smart terminals designed for on-the-go and in-store transactions, ensuring flexibility and ease of use.',
    },

];




const Resturants = () => {
    return (
        <>

            <Head>
                <title>Point of Sale Solutions | Rapid Payments</title>
                <meta
                    name="description"
                    content="Rapid Payments offers secure and reliable online payment processing solutions for businesses of all sizes.  Accept payments easily and securely through our integrated platform."
                />
            </Head>



            <Hero
                title="The Perfect <span class='fw-bold'>point of sale solution,</span>  Tailored For You"
                backgroundImage={'/images/point-of-sale-solution.png'}
                description={
                    "At Rapid Payments, we’ve partnered with top POS providers to ensure you get the best system for your business needs. Whether you run a restaurant, retail store, or service business, we’ll match you with a secure, reliable, and feature-rich POS system designed to streamline transactions and enhance customer experience."
                }
            />



            <DescriptionSection
                title={
                    'Get Started with the <br /> Perfect POS – <span class="fw-bold">Sign Up Today!</span> '
                }
                description={
                    'Get the right POS system for your business with Rapid Payments. We’ve partnered with top POS providers to bring you a seamless, secure, and efficient point-of-sale experience.'
                }
                list={[
                    'Flexible Pricing Options',
                    'No Setup fee.*',
                    'Free terminal Placement* ',
                ]}
                image="/images/enterpise-banner-1.png"
            />



            <POSSolutions

                pos={slides}

            />


            <RapidPaymentUniversity />

            <PaymentForm />


        </>
    );
};

export default Resturants;
