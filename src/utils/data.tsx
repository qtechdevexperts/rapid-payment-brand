export interface OnlinePaymentService {
    title?: string;
    desc?: string;
}

export const OnlinePaymentServices: OnlinePaymentService[] = [
    {
        title: "Payment Gateway",
        desc: "Seamlessly connect to our secure payment gateway, giving you full control over your checkout experience while ensuring fast, reliable, and secure transactions."
    },
    {
        title: "Hosted Checkout",
        desc: "Your website, our checkout. No coding, no stress just a secure, professional, and user-friendly payment experience. Ideal for businesses looking for a quick, plug-and-play solution."
    },
    {
        title: "Virtual Terminal",
        desc: "Accept payments from any device by manually entering card details — no additional hardware needed. Perfect for phone orders and remote billing."
    },
    {
        title: "Invoicing",
        desc: "Effortlessly send invoices via email, SMS, or QR code, allowing customers to pay online anytime. A hassle-free, professional solution for businesses looking to streamline payments."
    },
];



export const InpersonPaymentService: OnlinePaymentService[] = [
    {
        title: "Advanced Payment Technology",
        desc: "Leverage the latest POS systems, payment gateways, and smart terminals to streamline transactions and improve customer experience."
    },
    {
        title: "Accept Payments Your Way",
        desc: "Give customers the flexibility to pay with credit, debit, contactless, and mobile wallets, ensuring seamless checkouts."
    },
    {
        title: "Industry-Specific <br /> Solutions",
        desc: "Whether you run a retail store, restaurant, or service business, our customized payment solutions cater to your unique needs."
    },
    {
        title: "Boost Efficiency & <br />  Speed",
        desc: "Minimize wait times and keep transactions moving smoothly with fast, secure, and user-friendly payment terminals."
    },
]

export const OmniChannelService: OnlinePaymentService[] = [
    {
        title: "Smart Device Management",
        desc: "Remotely oversee and update your POS terminals, deploy software enhancements, and integrate marketing features effortlessly."
    },
    {
        title: "Cross-Channel  Tokenization",
        desc: "Securely store cardholder data across multiple channels, reducing fraud risk while improving customer insights and shopping behavior analysis"
    },
    {
        title: "Unified Reporting Dashboard",
        desc: "Gain full visibility into transactions with a centralized, real-time dashboard that consolidates sales data from all payment channels."
    },
    {
        title: "Advanced Security & Compliance",
        desc: "Protect transactions with P2PE-certified encryption and robust authentication tools, ensuring secure payments and reduced chargeback risks."
    },
]