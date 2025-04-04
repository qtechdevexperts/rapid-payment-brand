import clsx from 'clsx';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import style from './index.module.scss';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('information-collection');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id]'); // ✅ Correct selector
      let currentActiveSection = '';

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).clientHeight;
        const buffer = 200; // Buffer for early activation

        if (
          window.scrollY >= sectionTop - buffer &&
          window.scrollY < sectionTop + sectionHeight - buffer
        ) {
          currentActiveSection = section.getAttribute('id') || '';
        }
      });

      if (currentActiveSection && currentActiveSection !== activeSection) {
        setActiveSection(currentActiveSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  return (
    <>
      <Head>
        <title>Terms And Condition</title>
      </Head>

      <div
        className={clsx(
          style.heroSection,
          'd-flex flex-column justify-content-center align-items-center',
        )}
      >
        <h1 className="text-secondary-standard">Terms And Condition</h1>
      </div>

      <Container className="py-6">
        <h2 className="heading-4 mb-3 content-page-heading fw-bold text-secondary-standard text-uppercase">
          Terms And Condition
        </h2>

        <div className="my-4">
          <p className="para mb-1">
            <strong>Effective Date:</strong> March 4, 2025
          </p>
          <p className="para">
            <strong>Last Updated:</strong> March 4, 2025
          </p>
        </div>

        <div>
          <p className="para">
            Welcome to Rapid Payments. By accessing or subscribing to our
            services, you agree to comply with and be bound by the following
            Terms and Conditions. These terms govern your use of all services
            offered by Rapid Payments, including payment gateway access, virtual
            terminals, fraud prevention tools, chargeback management systems,
            point-of-sale hardware, and all associated software or support
            systems. Please read these Terms carefully before using our
            services. If you do not agree with any part of these terms, you must
            not use our services.
          </p>

          <h3 className="heading-5 text-secondary-standard text-uppercase">
            Subscription and Payment Terms
          </h3>
          <p className="para">
            All services provided by Rapid Payments are offered on a
            subscription or service-fee basis, with options for both
            month-to-month and fixed-term contracts. Upon onboarding, you will
            be required to choose a service plan and agree to a corresponding
            pricing structure. Payment is due in advance and will be charged
            automatically to your designated method of payment, which may
            include credit/debit card, ACH transfer, or other approved methods.
            By entering into an agreement with Rapid Payments, you authorize
            recurring billing as per your selected plan.
          </p>
          <p className="para">
            Rapid Payments provides payment processing services through
            integrated partnerships with industry-recognized payment processors
            and gateways. Some hardware and software services may be leased as
            part of bundled packages, in which case lease terms may range from
            12, 24, 36, or 48 months. All lease agreements are non-cancellable
            for the full term unless otherwise expressly agreed to in writing.
            Invoices must be settled within the time specified; failure to do so
            may result in late fees, service suspension, or contract
            termination. All payments are non-refundable except where required
            by law.
          </p>
          <h3 className="heading-5 text-secondary-standard text-uppercase">
            Service Access and Usage Restrictions
          </h3>
          <p className="para">
            Upon successful subscription and account verification, you will be
            granted a limited, non-exclusive, non-transferable, and revocable
            license to access and use Rapid Payments’ services, systems, and
            applications. This license remains valid only while your account is
            in good standing and is subject to your continued compliance with
            these Terms and any applicable policies.
          </p>
          <p className="para">
            You are strictly prohibited from attempting to reverse engineer,
            disassemble, decompile, or otherwise derive the source code of any
            software made available to you. You may not use our systems to
            transmit unlawful, harmful, threatening, abusive, or fraudulent
            content. The services may not be used for any purposes that violate
            local, state, federal, or international laws or regulations. Any
            unauthorized use of our software, integrations, or data
            infrastructure may lead to the suspension or permanent termination
            of your access to our platform, and may also subject you to civil or
            criminal liability.
          </p>
          <h3 className="heading-5 text-secondary-standard text-uppercase">
            Data Privacy and Security
          </h3>
          <p className="para">
            We take the security and privacy of your data seriously. Rapid
            Payments collects, processes, and stores personal and business
            information in accordance with our Privacy Policy, which complies
            with relevant data protection laws, including but not limited to the
            GDPR and CCPA. By using our services, you consent to our collection
            and use of your information as described in our Privacy Policy.
          </p>
          <p className="para">
            While we deploy industry-standard safeguards to protect your
            data—including encryption, multi-factor authentication, and
            restricted access control—you are ultimately responsible for
            maintaining the confidentiality of your account credentials, user
            access rights, and other login information. Any action taken from
            your account will be assumed to be authorized unless proven
            otherwise. You agree to immediately notify us of any breach or
            unauthorized use of your account.
          </p>
          <h3 className="heading-5 text-secondary-standard text-uppercase">
            Communication and Notifications
          </h3>
          <p className="para">
            By subscribing to Rapid Payments’ services, you consent to receive
            business-related communications from us, which may include
            transactional alerts, billing updates, compliance notifications, and
            marketing messages. Communications may be delivered via email, SMS,
            phone calls, or through in-app messaging. You may manage your
            communication preferences from within your user dashboard, except
            for certain service-critical notifications that are mandatory.
          </p>
          <p className="para">
            For SMS communications, message and data rates may apply depending
            on your mobile provider. You may opt out of marketing messages by
            following the instructions in the message, such as replying “STOP.”
            For assistance with SMS or other communication preferences, you may
            contact our support team directly. Communication history and
            preferences will be stored in accordance with our Privacy Policy and
            applicable telecom regulations such as the TCPA.
          </p>
          <h3 className="heading-5 text-secondary-standard text-uppercase">
            Hardware Leasing and Installation Terms
          </h3>
          <p className="para">
            Rapid Payments offers POS terminals, smart readers, and other
            hardware under lease agreements. Hardware leases are governed by
            independent lease terms, which may range from 12 to 48 months. These
            lease contracts are non-cancellable unless otherwise specified and
            are enforceable for the full duration of the lease term. Ownership
            of the hardware remains with Rapid Payments or its leasing partners
            throughout the term unless a separate buyout or purchase clause is
            exercised.
          </p>
          <p className="para">
            We offer free installation services for POS equipment in select
            cases, subject to eligibility criteria. Customers are responsible
            for ensuring their location meets all technical requirements for
            installation, including electrical, internet, and network
            compatibility. Failure to comply with these requirements may result
            in installation delays or additional service charges.
          </p>
          <h3 className="heading-5 text-secondary-standard text-uppercase">
            Service Availability and Support
          </h3>
          <p className="para">
            We aim to provide uninterrupted access to our services and
            platforms. However, service uptime is dependent on multiple external
            factors, including network availability, third-party processor
            uptime, and other variables beyond our control. As such, Rapid
            Payments does not guarantee 100% service availability. Scheduled
            maintenance, emergency updates, or third-party service outages may
            result in temporary disruptions.
          </p>
          <p className="para">
            Customer support is available during standard business hours via
            phone, email, and live chat. Our dedicated support team is committed
            to addressing inquiries promptly, but response times may vary
            depending on the nature of your issue. For faster resolution, users
            are encouraged to submit tickets through their account dashboards.
            For mission-critical issues, after-hours escalation procedures may
            be available to enterprise clients.
          </p>
          <h3 className="heading-5 text-secondary-standard text-uppercase">
            Termination and Suspension
          </h3>
          <p className="para">
            Rapid Payments reserves the right to suspend or terminate your
            access to services at any time for reasons including, but not
            limited to, non-payment, breach of these Terms, violation of
            applicable laws, or conduct that may cause legal liability or
            reputational harm to Rapid Payments or its partners. In cases of
            delinquent accounts, services may be suspended after a grace period,
            and accounts may be referred to collections.
          </p>
          <p className="para">
            Upon termination of your subscription, whether voluntary or
            involuntary, your access to all features, tools, and data will be
            revoked. Data associated with your account may be deleted after 30
            calendar days unless otherwise agreed in writing. It is your
            responsibility to download or export your data prior to termination.
            Termination does not relieve you of any outstanding payment
            obligations, including early termination fees on leased equipment.
          </p>
          <h3 className="heading-5 text-secondary-standard text-uppercase">
            Indemnification and Limitation of Liability
          </h3>
          <p className="para">
            You agree to indemnify, defend, and hold harmless Rapid Payments,
            its affiliates, directors, officers, employees, and partners from
            any and all claims, damages, liabilities, costs, and
            expenses—including attorney fees—arising out of or related to your
            use of the services, your violation of these Terms, or your
            infringement of any rights of a third party.
          </p>
          <p className="para">
            To the maximum extent permitted by law, Rapid Payments’ total
            liability for any claims arising from or related to your use of the
            services will be limited to the total amount paid by you to Rapid
            Payments during the twelve (12) months preceding the claim. Under no
            circumstances shall Rapid Payments be liable for any indirect,
            incidental, special, consequential, or punitive damages, including
            loss of profits, data, or business opportunities.
          </p>
          <h3 className="heading-5 text-secondary-standard text-uppercase">
            Compliance with Laws and Regulations
          </h3>
          <p className="para">
            You agree to use our services in compliance with all applicable
            local, state, federal, and international laws and regulations. This
            includes, but is not limited to, compliance with the Payment Card
            Industry Data Security Standard (PCI DSS), anti-money laundering
            (AML) laws, and consumer protection laws. You are solely responsible
            for ensuring that your business operations and customer interactions
            meet all relevant legal requirements
          </p>
          <p className="para">
            Additionally, in utilizing our services for marketing or
            communication purposes, you agree to adhere to the guidelines
            established under the CAN-SPAM Act, the Telephone Consumer
            Protection Act (TCPA), and other applicable privacy and
            communication laws. Rapid Payments shall not be held responsible for
            any non-compliance issues arising from your use of the service.
          </p>
          <h3 className="heading-5 text-secondary-standard text-uppercase">
            Changes to Terms
          </h3>
          <p className="para">
            We reserve the right to amend or update these Terms and Conditions
            at any time, with or without notice. Updated versions of the Terms
            will be posted on our website and will supersede all previous
            versions. Your continued use of the services after any changes
            constitutes your acceptance of the revised Terms. We recommend
            reviewing these Terms periodically to stay informed of any changes.
          </p>
          <h3 className="heading-5 text-secondary-standard text-uppercase">
            Notices and Contact Information
          </h3>
          <p className="para">
            All notices or communications required under these Terms shall be
            made in writing and directed to Rapid Payments at [insert contact
            email or mailing address]. Notices sent to you will be delivered via
            the contact details on file in your account settings. It is your
            responsibility to ensure that your contact information remains
            current and accurate throughout the duration of your relationship
            with us.
          </p>
          <h3 className="heading-5 text-secondary-standard text-uppercase">
            Governing Law and Jurisdiction
          </h3>
          <p className="para">
            These Terms and Conditions are governed by and construed in
            accordance with the laws of the State of  United
            States, without regard to its conflict of law provisions. Any legal
            disputes or proceedings arising out of or relating to these Terms
            shall be brought exclusively in the state or federal courts located
            within that jurisdiction. You consent to the personal jurisdiction
            and venue of these courts.
          </p>
          <p className="para">
            If you have any questions or concerns about these Terms, please
            contact us at{' '}
            <a href="mailto:support@rapidpayments.com">
              support@rapidpayments.com
            </a>
            .
          </p>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
