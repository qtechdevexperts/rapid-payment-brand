import LogoSlider from '@/components/LogoSlider'
import MainHero from '@/components/MainHero'
import PaymentForm from '@/components/PaymentForm'
import PaymentType from '@/components/PaymentType'
import RapidPaymentUniversity from '@/components/RapidPaymentUniversity'
import Services from '@/components/Services'
import Solutions from '@/components/Solutions'
import React from 'react'

const Home = () => {
  return (
    <>
      <MainHero />
      {/* <LogoSlider /> */}
      <Solutions />

      <section className='wrapper'>
        <Services />
        <PaymentType />
      </section>
      <RapidPaymentUniversity />
      <PaymentForm />
    </>
  )
}

export default Home