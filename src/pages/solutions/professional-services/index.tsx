import { Hero, IntegratationOption, PaymentForm } from '@/components';
import POSSolutions from '@/components/POSSolutions';
import { ResturantServices } from '@/utils/data';
import Solutions from '@/components/Solutions';

const Resturants = () => {
    return (
        <>
            <Hero
                title='Professional <span class="fw-bold">Services</span> '
                backgroundImage={'/images/resturant.png'}
                description={
                    "Whether you’re a consultant, lawyer, accountant, or service provider, Rapid Payments makes it easy to accept payments securely and efficiently. Get paid faster and manage transactions seamlessly with our tailored payment solutions."
                }
            />

            <IntegratationOption
                title={'Why <span class="fw-bold">Rapid Payments?</span> '}
                data={ResturantServices}
            />

            <POSSolutions title={'Commerce 360  <span class="fw-bold">Options</span>'} />
            <Solutions />

            <PaymentForm />

        </>
    );
};

export default Resturants;
