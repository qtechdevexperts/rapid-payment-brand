import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
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

  const navItems = [
    { id: 'information-collection', label: 'Information Collection' },
    { id: 'information-use', label: 'Use of Information' },
    { id: 'information-sharing', label: 'Information Sharing' },
    { id: 'data-security', label: 'Data Security' },
    { id: 'user-rights', label: 'Your Rights' },
    { id: 'cookies', label: 'Cookies Policy' },
    { id: 'policy-changes', label: 'Policy Changes' },
    { id: 'contact', label: 'Contact Us' },
  ];

  // Function to handle smooth scroll when clicking nav links
  const scrollToSection = (
    sectionId: string,
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        top: (section as HTMLElement).offsetTop - 100, // Adjust for better positioning
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div>
      <div
        className={clsx(
          style.heroSection,
          'd-flex flex-column justify-content-center align-items-center',
        )}
      >
        <h1 className="text-secondary-standard">Privacy Policy</h1>
      </div>

      <Container className="py-6">
        <h2 className="heading-4 mb-3 content-page-heading fw-bold text-secondary-standard text-uppercase">
          Privacy Policy
        </h2>

        <div className="my-4">
          <p className="para mb-1">
            <strong>Effective Date:</strong> January 1, 2025
          </p>
          <p className="para">
            <strong>Last Updated:</strong> January 1, 2025
          </p>
        </div>


        <div>
          <p className="para">
            At Rapid Payments, we are deeply committed to maintaining the
            privacy, confidentiality, and security of all personal and business
            information entrusted to us by our clients. As a Merchant Service
            Provider that integrates with global Payment Gateways, Payment
            Processors, and Point-of-Sale (POS) equipment providers, we
            understand the critical importance of protecting sensitive data. We
            collect only essential information required to deliver our services
            efficiently, process transactions, and support customer needs. Under
            no circumstances do we sell, rent, or distribute client information
            to third parties for commercial or marketing purposes. Our data
            handling policies are designed to ensure full compliance with
            applicable privacy laws, including the General Data Protection
            Regulation (GDPR), California Consumer Privacy Act (CCPA), and other
            relevant U.S. and international data protection frameworks.
          </p>

          <h3 className="heading-5 text-uppercase text-secondary-standard ">
            Information Collection
          </h3>
          <p className="para">
            We collect personal and business information from clients through
            various channels including, but not limited to, contact forms on our
            website, email correspondence, phone calls, onboarding forms,
            merchant application forms, and software integrations. During
            onboarding, we require detailed information to establish and
            maintain your account. This information includes, but is not limited
            to, the business owner's name, company name, physical address, email
            address, phone number, tax identification number, banking details
            for fund settlement, payment volume expectations, and other
            compliance-related documentation.
          </p>
          <p className="para">
            To ensure successful provisioning of our services, we also collect
            operational data through virtual terminals, APIs, and POS systems.
            This may include transaction data, terminal IDs, location data,
            device usage logs, and user activities on our platform.
            Additionally, we collect certain optional data to better tailor our
            services, such as your preferred communication methods or
            industry-specific needs.
          </p>
          <p className="para">
            Technical data is automatically captured when you visit our website
            or utilize our cloud-based systems. This includes, but is not
            limited to, your IP address, browser type and version, device
            operating system, time zone setting, and information on how you
            interact with our web pages. We may use cookies and analytics tools
            such as Google Analytics to enhance user experience and measure
            system performance.
          </p>
          <h3 className="heading-5 text-uppercase text-secondary-standard ">
            Usage of Collected Information
          </h3>
          <p className="para">
            The information we collect is fundamental to delivering secure and
            customized payment services to your business. Primarily, we use the
            data to create, verify, and manage merchant accounts, enable
            processing of payments through integrated gateway systems, install
            and manage POS terminals, deliver technical support, and conduct
            identity verification as part of our regulatory compliance measures.
          </p>
          <p className="para">
            The data also supports service improvements, fraud detection,
            chargeback mitigation, reporting capabilities, and customer
            relationship management. It enables us to communicate transaction
            statuses, funding timelines, technical notices, system maintenance
            alerts, and service updates. Furthermore, the information you
            provide helps us develop a deeper understanding of your business
            model, which we use to suggest relevant tools or enhancements that
            optimize your operations and payment strategy.
          </p>
          <p className="para">
            From time to time, we may also use your information for internal
            auditing, data analytics, and research purposes to improve the
            overall performance of our solutions. These insights allow us to
            identify usage trends, enhance user experience, and detect anomalies
            that may suggest abuse or security risks.
          </p>
          <h3 className="heading-5 text-uppercase text-secondary-standard ">
            Data Sharing or Disclosure of Personal Information
          </h3>
          <p className="para">
            Rapid Payments operates in partnership with several third-party
            providers including payment processors, gateway partners, risk
            management services, and equipment vendors. While we may share
            certain information with these entities to enable provisioning of
            services and support, we do so under strict data use agreements that
            prohibit misuse or unauthorized disclosure of your information.
          </p>
          <p className="para">
            Any phone numbers and SMS consent data collected for communications
            such as onboarding notifications, transaction alerts, or updates
            will never be shared with unaffiliated third parties under any
            circumstances. We do not sell or trade such data for marketing
            purposes. If you have provided express consent to receive SMS
            communications, those messages will be limited to relevant
            operational topics such as account updates, billing reminders,
            security notifications, and compliance alerts.
          </p>
          <p className="para">
            We may engage third-party vendors to support business operations,
            such as customer service tools, CRM software, billing processors, or
            cloud service providers. These vendors are contractually bound to
            handle your information in accordance with our privacy policies and
            for no other purpose than to support Rapid Payments’ operations.
          </p>
          <p className="para">
            In rare and legally required circumstances, we may disclose personal
            or business information to law enforcement agencies, government
            officials, or other regulatory bodies. This may occur if mandated by
            court order, subpoena, legal process, or applicable law. We will
            notify you of such disclosures when possible, unless legally
            prohibited from doing so.
          </p>
          <h3 className="heading-5 text-uppercase text-secondary-standard ">
            Privacy of Payments
          </h3>
          <p className="para">
            At Rapid Payments, the privacy and integrity of your financial data
            is a top priority. We use industry-standard encryption technologies,
            such as Secure Sockets Layer (SSL) and Transport Layer Security
            (TLS), to safeguard payment data during transmission. This includes
            all cardholder information, transaction records, and billing
            details. Our payment gateways and virtual terminals are PCI-DSS
            compliant, and we only partner with processors who meet or exceed
            industry security standards.
          </p>
          <p className="para">
            Your sensitive billing data is never stored on local servers or
            unsecured environments. All transaction activity is tokenized and
            encrypted to prevent unauthorized access or exposure. Our
            infrastructure includes network firewalls, access controls, and
            intrusion detection systems to ensure comprehensive protection
            against data breaches. At no time is your payment information sold
            or disclosed to third parties for non-operational purposes.
          </p>
          <h3 className="heading-5 text-uppercase text-secondary-standard ">
            Confidentiality
          </h3>
          <p className="para">
            Confidentiality is central to our client relationships, and we take
            extensive steps to preserve the privacy of all personal and business
            data shared with us. All client data, including contact information,
            financial records, and transaction histories, is stored in secure
            systems accessible only by authorized personnel under strict access
            control protocols. Our employees and affiliates are trained on data
            protection and bound by confidentiality agreements.
          </p>
          <p className="para">
            We use your information solely to support the delivery of our
            services and ensure operational transparency. We do not publish,
            disclose, or broadcast your confidential data to any third party
            without your consent, except where we are legally obligated. Your
            information is never shared with competitors or outside marketing
            agencies. Any data shared for performance analytics is anonymized
            and aggregated to avoid exposure of personally identifiable
            information.
          </p>
          <h3 className="heading-5 text-uppercase text-secondary-standard ">
            Amendments
          </h3>
          <p className="para">
            Rapid Payments reserves the right to revise or update this Privacy
            Policy at any time to reflect changes in our data practices,
            technology infrastructure, legal obligations, or regulatory
            requirements. All amendments will be posted on our official website
            with a clear indication of the effective date. Whenever material
            changes are made, we will notify you via email or platform
            notifications. Continued use of our services after an update
            constitutes your acceptance of the revised policy. We encourage all
            users to periodically review our Privacy Policy to stay informed
            about how their information is protected.
          </p>
          <h3 className="heading-5 text-uppercase text-secondary-standard ">
            Conditions of Information Disclosure
          </h3>
          <p className="para">
            Although protecting your privacy is a core principle at Rapid
            Payments, there are limited scenarios in which disclosure of
            information may be required. If compelled by legal authorities—such
            as a subpoena, court order, or legal investigation—we may be
            obligated to disclose certain data. In such cases, we will attempt
            to notify you, unless we are prohibited by law from doing so.
            Disclosures may also occur if necessary to protect our rights,
            investigate fraud, ensure security, or comply with industry
            regulations such as those imposed by banking institutions and
            payment networks
          </p>
          <p className="para">
            Our preference is always to resolve issues confidentially and
            without disclosing any private information, but in the rare event
            that disclosure becomes legally necessary, we act in strict
            accordance with applicable laws and due process.
          </p>
          <h3 className="heading-5 text-uppercase text-secondary-standard ">
            Contact Us
          </h3>
          <p className="para">
            If you have questions, concerns, or feedback regarding this Privacy
            Policy or the way we handle your data, please do not hesitate to
            contact us. You may reach us via our website’s contact form or
            directly through email at{' '}
            <a href="mailto:privacy@rapidpayments.com">
              privacy@rapidpayments.com
            </a>
            . Our team is committed to addressing your inquiries promptly and
            transparently. We take your privacy seriously and welcome the
            opportunity to answer any questions you may have about how we manage
            your personal and business information.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
