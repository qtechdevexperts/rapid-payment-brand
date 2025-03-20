import { Hero } from '@/components';
import Head from 'next/head';
import style from './index.module.scss';

const Integrated = () => {
  return (
    <>
      <Head>
        <title>Integrated Partners | Rapid Payments</title>
        <meta name="description" content="" />
      </Head>

      <Hero
        title='Integrated <span class="fw-bold">Partners</span>'
        backgroundImage={'/images/integrated-partners.png'}
        description={
          'Need assistance or have questions? Our payment experts are here to support you! Whether you&apos;re seeking a custom payment solution, a robust POS system, or strategic partnership opportunities, we’re just a message away. Let’s work together to power seamless transactions for your business.'
        }
      />

      <section className="container py-8">
        <h2 className="text-capitalize  text-3 text-center text-primary-100">
          processing Platforms Partners
        </h2>
        <div className={`row gap-4 justify-content-center mt-sm-5`}>
          <div className="col-md-2">
            <img src="/images/partners/1.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-2">
            <img src="/images/partners/2.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-2">
            <img src="/images/partners/3.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-2">
            <img src="/images/partners/4.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-2">
            <img src="/images/partners/5.png" className="img-fluid" alt="" />
          </div>
        </div>
      </section>

      <section className="container py-8">
        <h2 className="text-capitalize  text-3 text-center text-primary-100">
          Gateway Partners
        </h2>
        <div className={`row justify-content-center  mt-6   `}>
          <div className="col-md-3">
            <img src="/images/partners/1.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-3">
            <img src="/images/partners/3.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-3">
            <img src="/images/partners/4.png" className="img-fluid" alt="" />
          </div>
        </div>
      </section>

      <section className="container py-8">
        <h2 className="text-capitalize text-3 text-center text-primary-100">
          Equipment Partners
        </h2>
        <div className={` ${style.processinggrid} mt-6 `}>
          <div className="">
            <img src="/images/partners/1.png" className="img-fluid" alt="" />
          </div>
          <div className="">
            <img src="/images/partners/2.png" className="img-fluid" alt="" />
          </div>
          <div className="">
            <img src="/images/partners/3.png" className="img-fluid" alt="" />
          </div>
          <div className="">
            <img src="/images/partners/4.png" className="img-fluid" alt="" />
          </div>
          <div className="">
            <img src="/images/partners/5.png" className="img-fluid" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Integrated;
