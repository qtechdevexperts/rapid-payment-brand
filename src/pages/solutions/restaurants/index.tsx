import { Hero, IntegratationOption, PaymentForm } from '@/components';
import POSSolutions from '@/components/POSSolutions';
import { ResturantServices } from '@/utils/data';
import Solutions from '@/components/Solutions';

const Resturants = () => {
    return (
        <>
            <Hero
                title='<span class="fw-bold">Restaurants</span>'
                backgroundImage={'/images/resturant.png'}
                description={
                    "Deliver fast, secure, and efficient payments with Rapid Payments' restaurant POS solutions. From quick-service eateries to fine dining, we provide customized payment systems that keep your business running smoothly."
                }
            />

            <IntegratationOption
                title={'Why <span class="fw-bold">Rapid Payments?</span> '}
                data={ResturantServices}
            />

            <POSSolutions />
            <Solutions />

            <PaymentForm />

        </>
    );
};

export default Resturants;
