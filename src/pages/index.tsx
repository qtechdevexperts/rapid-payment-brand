import MainHero from '@/components/MainHero';
import PaymentForm from '@/components/PaymentForm';
import PaymentType from '@/components/PaymentType';
import RapidPaymentUniversity from '@/components/RapidPaymentUniversity';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import useResponsive from '@/hooks/useResponsive';
import { services } from '@/utils/data';

const Home = () => {
  const isLaptop = useResponsive({ query: '(min-width: 2000px)' });

  return (
    <>
      <MainHero />
      {/* <LogoSlider /> */}
      <Solutions />

      <section className={`wrapper ${isLaptop && 'container'}`}>
        <Services services={services} />
        <PaymentType />
      </section>
      <RapidPaymentUniversity />
      <PaymentForm />
    </>
  );
};

export default Home;
