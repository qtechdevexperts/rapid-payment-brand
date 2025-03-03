import IntegratationOption from "@/components/IntegrationOption";
import OtherSolutionCard from "@/components/OtherSolutionCard";
import PaymentForm from "@/components/PaymentForm";
import RapidPaymentUniversity from "@/components/RapidPaymentUniversity";
import Hero from "@/components/ServicesSection/Hero";
import Solutions from "@/components/Solutions";
import { OnlinePaymentServices } from "@/utils/data";
import React from "react";

const OnlinePayments = () => {
  return (
    <>
      <Hero
        title='Online <br /> <span class="fw-bold">Payments</span> '
        backgroundImage={"/images/online-payment.png"}
      />

      <IntegratationOption
        title={'Your Integration <span class="fw-bold">Options</span> '}
        data={OnlinePaymentServices}
      />

      <Hero
        title='start taking  <br /> payments for your <br /> <span class="fw-bold">small business!</span> '
        backgroundImage={"/images/online-payment-1.png"}
        description="Rapid Payments is a leading merchant service provider partnered with top payment processors and payment gateways to help small businesses accept payments quickly, securely, and seamlessly.
With our easy-to-use payment solutions, you can process transactions in-store, online, or on the go without hassle. Whether you need a POS system, virtual terminal, or online checkout, we’ve got you covered.
Power your small business with Rapid Payments.
"
isShowContact
      />

      <OtherSolutionCard />

      <Solutions />

      <RapidPaymentUniversity />

      <PaymentForm />
    </>
  );
};

export default OnlinePayments;
