import { Hero } from '@/components';
import Head from 'next/head';
import style from "./index.module.scss"

const Integrated = () => {
  return (
    <>

      <Head>
        <title>Integrated Partners | Rapid Payments</title>
        <meta
          name="description"
          content=""
        />
      </Head>



      <Hero
        title='Integrated <span class="fw-bold">Partners</span>'
        backgroundImage={'/images/integrated-partners.png'}
        description={
          'Have questions or need assistance? Our payment experts are here to help! Whether you’re looking for a custom payment solution, a powerful POS system, or partnership opportunities, we’re just a message away.'
        }
      />

      <section className="container py-8">
        <h2 className="text-capitalize heading-3 text-center text-primary-100">
          processing Platforms Partners
        </h2>
        <div className={` ${style.processinggrid} gap-4 justify-content-center mt-sm-5`}>
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

      <section className="container py-8">
        <h2 className="text-capitalize heading-2 text-center text-primary-100">
          Gateway Partners
        </h2>
        <div className={`${style.gatewayGrid}  mt-6   gap-5`}>
          <div className="">
            <img src="/images/partners/1.png" className="img-fluid" alt="" />
          </div>
          <div className="">
            <img src="/images/partners/3.png" className="img-fluid" alt="" />
          </div>
          <div className="">
            <img src="/images/partners/4.png" className="img-fluid" alt="" />
          </div>
        </div>
      </section>

      <section className="container py-8">
        <h2 className="text-capitalize heading-2 text-center text-primary-100">
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
