import { Hero, IntegratationOption, PaymentForm, RapidPaymentUniversity } from '@/components';
import POSSolutions from '@/components/POSSolutions';
import { ResturantServices } from '@/utils/data';
import Solutions from '@/components/Solutions';
import DescriptionSection from '@/components/DescriptionSection';

const Resturants = () => {
    return (
        <>
            <Hero
                title="The Perfect <span class='fw-bold'>point of sale solution,</span>  Tailored For You"
                backgroundImage={'/images/resturant.png'}
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



            <POSSolutions />


            <RapidPaymentUniversity />

            <PaymentForm />


        </>
    );
};

export default Resturants;
