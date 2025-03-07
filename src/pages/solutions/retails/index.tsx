import { Hero, IntegratationOption, PaymentForm } from '@/components';
import POSSolutions from '@/components/POSSolutions';
import { ResturantServices } from '@/utils/data';
import Solutions from '@/components/Solutions';

const Resturants = () => {
    return (
        <>
            <Hero
                title='<span class="fw-bold">Retails</span>'
                backgroundImage={'/images/resturant.png'}
                description={
                    "Deliver a fast, seamless, and secure checkout experience with Rapid Payments' retail solutions. Whether you run a boutique, supermarket, or multi-location store, our POS systems and payment solutions help streamline operations and enhance customer satisfaction."
                }
            />

            <IntegratationOption
                title={'Why <span class="fw-bold">Rapid Payments?</span> '}
                data={ResturantServices}
            />

            <POSSolutions
                title={"Commerce 360 <span class='fw-bold'>Options</span> "}
            />


            <Solutions />

            <PaymentForm />

        </>
    );
};

export default Resturants;
