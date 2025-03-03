import IntegratationOption from "@/components/IntegrationOption";
import OtherSolutionCard from "@/components/OtherSolutionCard";
import PaymentForm from "@/components/PaymentForm";
import RapidPaymentUniversity from "@/components/RapidPaymentUniversity";
import Hero from "@/components/ServicesSection/Hero";
import Solutions from "@/components/Solutions";
import { InpersonPaymentService, OnlinePaymentServices } from "@/utils/data";
import React from "react";

const OnlinePayments = () => {
  return (
    <>
      <Hero
        title='In-Person <br /> <span class="fw-bold">Payments</span> '
        backgroundImage={"/images/in-person-payment.png"}
        description={'Accept credit, debit, contactless, cash, and checks effortlessly with Rapid Payments. Our trusted POS solutions, powered by top providers, ensure fast, secure, and seamless transactions for your business.Streamline your checkout process, reduce costs, and deliver a smooth payment experience for every customer.'}
      />

      <IntegratationOption
        title={'Fast, secure and flexible In-Person <br /> <span class="fw-bold">payment solutions​</span> '}
        data={InpersonPaymentService}
      />

      <Hero
        title='Get Paid Anywhere, Anytime with Seamless <span class="fw-bold">In-Person Payments!</span> '
        backgroundImage={"/images/online-payment-1.png"}
        description="Make transactions seamless with secure, fast, and flexible in-person payment solutions from Rapid Payments. Whether you run a retail store, restaurant, or service-based business, we provide POS systems, mobile payment solutions, and contactless terminals tailored to your needs.
Accept payments your way: credit, debit, contactless, and more ensuring smooth and secure checkouts for every customer..
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
