import { Hero, IntegratationOption, PaymentForm } from '@/components';
import POSSolutions from '@/components/POSSolutions';
import { ResturantServices, whoWeServePosData } from '@/utils/data';
import Solutions from '@/components/Solutions';
import Head from 'next/head';



const Resturants = () => {
    return (
        <>

            <Head>
                <title>Ecommerce | Rapid Payments</title>
                <meta
                    name="description"
                    content=""
                />
            </Head>


            <Hero
                title='<span class="fw-bold">eCommerce</span>'
                backgroundImage={'/images/resturant.png'}
                description={
                    "Power your online store with seamless and secure payment processing. Rapid Payments ensures a smooth checkout experience, helping you increase conversions and grow your business effortlessly. Accept payments with ease, enhance security, and provide customers with a hassle-free shopping experience. With reliable support and easy integration, managing transactions has never been simpler. Simplify your payments and boost your sales today."
                }
            />

            <IntegratationOption
                title={'Why <span class="fw-bold">Rapid Payments?</span> '}
                data={ResturantServices}
            />


            <POSSolutions
                title={"Commerce 360 <span class='fw-bold'>Options</span> "}
                pos={whoWeServePosData}
            />

            <Solutions />


            <PaymentForm

                list={[
                    "Card devices (fixed and mobile)",
                    "Electronic Point of Sale solutions",
                    "Ecommerce solutions",
                    " FREE PLACEMENT* on eligible POS systems"
                ]}
            />

        </>
    );
};

export default Resturants;
