import React, { useState } from "react";
import style from "./index.module.scss";
import clsx from "clsx";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";


const Footer = () => {



    const [acceptPaymentFooter, setPaymentFooter] = useState<boolean>(false);
    const [buisnessFooter, setBuisnessFooter] = useState<boolean>(false);
    const [whoWeServe, setWhoWeServe] = useState<boolean>(false);




    const router = useRouter();

    return (
        <div className={clsx(style.footer, "pt-9")}>
            <Container>
                <div className={clsx(style["border-footer"], style.footerRow, "")}>
                    <div className={clsx(style.borderright, style.notInclude, style.firstBox, 'py-sm-5 pe-3')}>
                        <img src="/images/logo-dark.png" className="img-fluid" alt="" />

                        <p className="para fs-9 text-white my-md-5 my-1">
                            Rapid Payments empowers businesses to accept payments effortlessly
                            online, in-store, or on the go with secure processing, robust
                            fraud protection, and lightning-fast funding. Our seamless
                            solutions ensure smooth transactions, enhanced security, and
                            uninterrupted cash flow to keep your business running at full
                            speed.
                        </p>
                    </div>
                    <div className={clsx(style.borderright, style.notInclude, style.secondBox, ' py-5 ps-sm-4 p-2')}>
                        <div className={`d-flex justify-content-between align-items-center ${style.footerAccordian}`}>
                            <h4 className="text-primary-100 mb-0">Accept Payments</h4>
                            <div className={`${style.accordianIcon}`} onClick={() => setPaymentFooter(!acceptPaymentFooter)}>
                                {
                                    acceptPaymentFooter ? <FaLongArrowAltUp color="#4990E2" size={15}   className={`${style.accordianIcon}`} /> : <FaLongArrowAltDown color="#4990E2" className={`${style.accordianIcon}`} />
                                }

                            </div>
                        </div>
                        <ul className={`ps-0 ${style.accordianContent} ${acceptPaymentFooter && style.active}`}>
                            <li className="my-3">
                                <Link
                                    href={"#!"}
                                    className="text-white fs-11 text-decoration-none "
                                >
                                    Online
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link
                                    href={"#!"}
                                    className="text-white  fs-11 text-decoration-none "
                                >
                                    In-Person
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link
                                    href={"#!"}
                                    className="text-white fs-11 text-decoration-none "
                                >
                                    OmniChannel
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link
                                    href={"#!"}
                                    className="text-white fs-11 text-decoration-none "
                                >
                                    Point of Sales
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className={clsx(style.borderright, style.notInclude, style.thirdBox, ' py-5 ps-sm-4 p-2' )}>
                        <div className={`d-flex justify-content-between align-items-center ${style.footerAccordian}`}>
                            <h4 className="text-primary-100 mb-0">Run Your Buinsess</h4>
                            <div className={`${style.accordianIcon}`} onClick={() => setBuisnessFooter(!buisnessFooter)}>
                                {
                                    buisnessFooter ? <FaLongArrowAltUp color="#4990E2" size={15}   className={`${style.accordianIcon}`} /> : <FaLongArrowAltDown color="#4990E2" className={`${style.accordianIcon}`} />
                                }

                            </div>
                        </div>
                        <ul className={` ps-0  ${style.accordianContent} ${buisnessFooter && style.active}`}>
                            <li className="my-3">
                                <Link
                                    href={"#!"}
                                    className="text-white fs-11 text-decoration-none "
                                >
                                    Payment Gateways
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link
                                    href={"#!"}
                                    className="text-white fs-11 text-decoration-none "
                                >
                                    Virtual Terminals
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link
                                    href={"#!"}
                                    className="text-white fs-11 text-decoration-none "
                                >
                                    Fraud Protection
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link
                                    href={"#!"}
                                    className="text-white fs-11 text-decoration-none "
                                >
                                    Funding
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link
                                    href={"#!"}
                                    className="text-white fs-11 text-decoration-none "
                                >
                                    Chargeback Management
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className={clsx(style.borderright, style.notInclude, style.secondLast, ' py-5 ps-sm-4 p-2')}>
                        <div className={`d-flex justify-content-between align-items-center ${style.footerAccordian}`}>
                            <h4 className="text-primary-100 mb-0">Who we Serve</h4>
                            <div className={`${style.accordianIcon}`} onClick={() => setWhoWeServe(!whoWeServe)}>
                                {
                                    whoWeServe ? <FaLongArrowAltUp color="#4990E2" size={15}   className={`${style.accordianIcon}`} /> : <FaLongArrowAltDown color="#4990E2" className={`${style.accordianIcon}`} />
                                }

                            </div>
                        </div>
                        <ul className={` ps-0  ${style.accordianContent} ${whoWeServe && style.active}`}>
                            <li className="my-3">
                                <Link
                                    href={"#!"}
                                    className="text-white fs-11 text-decoration-none "
                                >
                                    Payment Gateways
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link
                                    href={"#!"}
                                    className="text-white fs-11 text-decoration-none "
                                >
                                    Virtual Terminals
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link
                                    href={"#!"}
                                    className="text-white fs-11 text-decoration-none "
                                >
                                    Fraud Protection
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link
                                    href={"#!"}
                                    className="text-white fs-11 text-decoration-none "
                                >
                                    Funding
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link
                                    href={"#!"}
                                    className="text-white fs-11 text-decoration-none "
                                >
                                    Chargeback Management
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className={clsx('ps-xxl-5 ps-sm-4 ps-2 py-5', style.notInclude, style.lastBox)}>
                        <div className="mb-3">
                            <h4 className="text-white fs-11">Sales</h4>
                            <div onClick={() => router.push("tel:012-3456-789")} className="text-primary-100 cursor-pointer fs-13 fw-bold">012-3456-789</div>
                        </div>
                        <div className="mb-3">
                            <h4 className="text-white fs-11">Email</h4>
                            <div onClick={() => router.push("mailto:sales@rapidpayments.io")} className="text-primary-100 cursor-pointer fs-13 fw-bold">sales@rapidpayments.io</div>
                        </div>
                        <div className="mb-3">
                            {/* <h4 className="text-white fs-13">Social Links:</h4>
                            <div className="d-flex justify-content-start align-items-center gap-3">
                                <div className={clsx(style.icon, 'd-flex justify-content-center align-items-center')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4877 4.24277C11.4723 3.2582 12.8076 2.70508 14.2 2.70508H16.9C17.3142 2.70508 17.65 3.04086 17.65 3.45508V7.05508C17.65 7.46929 17.3142 7.80508 16.9 7.80508H14.2C14.1602 7.80508 14.1221 7.82088 14.0939 7.84901C14.0658 7.87714 14.05 7.9153 14.05 7.95508V9.90508H16.9C17.131 9.90508 17.349 10.0115 17.4912 10.1935C17.6333 10.3756 17.6836 10.6129 17.6276 10.837L16.7276 14.437C16.6441 14.7709 16.3442 15.0051 16 15.0051H14.05V21.4551C14.05 21.8693 13.7142 22.2051 13.3 22.2051H9.7C9.28579 22.2051 8.95 21.8693 8.95 21.4551V15.0051H7C6.58579 15.0051 6.25 14.6693 6.25 14.2551V10.6551C6.25 10.2409 6.58579 9.90508 7 9.90508H8.95V7.95508C8.95 6.56269 9.50312 5.22733 10.4877 4.24277ZM14.2 4.20508C13.2054 4.20508 12.2516 4.60017 11.5483 5.30343C10.8451 6.00669 10.45 6.96052 10.45 7.95508V10.6551C10.45 11.0693 10.1142 11.4051 9.7 11.4051H7.75V13.5051H9.7C10.1142 13.5051 10.45 13.8409 10.45 14.2551V20.7051H12.55V14.2551C12.55 13.8409 12.8858 13.5051 13.3 13.5051H15.4144L15.9394 11.4051H13.3C12.8858 11.4051 12.55 11.0693 12.55 10.6551V7.95508C12.55 7.51747 12.7238 7.09779 13.0333 6.78835C13.3427 6.47892 13.7624 6.30508 14.2 6.30508H16.15V4.20508H14.2Z" fill="white" />
                                    </svg>
                                </div>
                                <div className={clsx(style.icon, 'd-flex justify-content-center align-items-center')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M15.9999 7.45512C15.9999 6.90284 16.4477 6.45512 16.9999 6.45512C17.5522 6.45512 17.9999 6.90284 17.9999 7.45512C17.9999 8.00741 17.5522 8.45512 16.9999 8.45512C16.4477 8.45512 15.9999 8.00741 15.9999 7.45512Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 7.70512C9.37659 7.70512 7.24994 9.83177 7.24994 12.4551C7.24994 15.0785 9.37659 17.2051 11.9999 17.2051C14.6233 17.2051 16.7499 15.0785 16.7499 12.4551C16.7499 9.83177 14.6233 7.70512 11.9999 7.70512ZM8.74994 12.4551C8.74994 10.6602 10.205 9.20512 11.9999 9.20512C13.7949 9.20512 15.2499 10.6602 15.2499 12.4551C15.2499 14.25 13.7949 15.7051 11.9999 15.7051C10.205 15.7051 8.74994 14.25 8.74994 12.4551Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2582 3.28814C13.7916 2.9007 10.2083 2.9007 6.74171 3.28814C4.72965 3.51302 3.10532 5.09803 2.86876 7.12055C2.45423 10.6649 2.45423 14.2454 2.86876 17.7897C3.10532 19.8122 4.72965 21.3972 6.74171 21.6221C10.2083 22.0095 13.7916 22.0095 17.2582 21.6221C19.2702 21.3972 20.8946 19.8122 21.1311 17.7897C21.5457 14.2454 21.5457 10.6649 21.1311 7.12055C20.8946 5.09803 19.2703 3.51302 17.2582 3.28814ZM6.90832 4.77886C10.2642 4.40379 13.7357 4.40379 17.0916 4.77886C18.4217 4.92752 19.4872 5.97713 19.6413 7.29481C20.0423 10.7233 20.0423 14.1869 19.6413 17.6154C19.4872 18.9331 18.4217 19.9827 17.0916 20.1314C13.7357 20.5065 10.2642 20.5065 6.90832 20.1314C5.57821 19.9827 4.51272 18.9331 4.35861 17.6154C3.95761 14.1869 3.95761 10.7233 4.35861 7.29481C4.51272 5.97713 5.57821 4.92752 6.90832 4.77886Z" fill="white" />
                                    </svg>
                                </div>
                                <div className={clsx(style.icon, 'd-flex justify-content-center align-items-center')}>
                                    <img src="/images/icons/twitter.png" alt="" />
                                </div>

                                <div className={clsx(style.icon, 'd-flex justify-content-center align-items-center')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1.70508C3.48122 1.70508 2.25 2.9363 2.25 4.45508C2.25 5.97386 3.48122 7.20508 5 7.20508C6.51878 7.20508 7.75 5.97386 7.75 4.45508C7.75 2.9363 6.51878 1.70508 5 1.70508ZM3.75 4.45508C3.75 3.76472 4.30964 3.20508 5 3.20508C5.69036 3.20508 6.25 3.76472 6.25 4.45508C6.25 5.14543 5.69036 5.70508 5 5.70508C4.30964 5.70508 3.75 5.14543 3.75 4.45508Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 8.45508C2.25 8.04086 2.58579 7.70508 3 7.70508H7C7.41421 7.70508 7.75 8.04086 7.75 8.45508V21.4551C7.75 21.8693 7.41421 22.2051 7 22.2051H3C2.58579 22.2051 2.25 21.8693 2.25 21.4551V8.45508ZM3.75 9.20508V20.7051H6.25V9.20508H3.75Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 8.45508C9.25 8.04086 9.58579 7.70508 10 7.70508H14C14.4142 7.70508 14.75 8.04086 14.75 8.45508V8.8891L15.1853 8.70256C15.9336 8.38184 16.7339 8.18072 17.5433 8.10714C20.3182 7.85488 22.75 10.0355 22.75 12.8353V21.4551C22.75 21.8693 22.4142 22.2051 22 22.2051H18C17.5858 22.2051 17.25 21.8693 17.25 21.4551V14.4551C17.25 14.1236 17.1183 13.8056 16.8839 13.5712C16.6495 13.3368 16.3315 13.2051 16 13.2051C15.6685 13.2051 15.3505 13.3368 15.1161 13.5712C14.8817 13.8056 14.75 14.1236 14.75 14.4551V21.4551C14.75 21.8693 14.4142 22.2051 14 22.2051H10C9.58579 22.2051 9.25 21.8693 9.25 21.4551V8.45508ZM10.75 9.20508V20.7051H13.25V14.4551C13.25 13.7257 13.5397 13.0263 14.0555 12.5105C14.5712 11.9948 15.2707 11.7051 16 11.7051C16.7293 11.7051 17.4288 11.9948 17.9445 12.5105C18.4603 13.0263 18.75 13.7257 18.75 14.4551V20.7051H21.25V12.8353C21.25 10.9309 19.589 9.42735 17.6791 9.60098C17.025 9.66044 16.3784 9.82315 15.7762 10.0813L14.2954 10.7159C14.0637 10.8152 13.7976 10.7914 13.5871 10.6526C13.3767 10.5139 13.25 10.2786 13.25 10.0265V9.20508H10.75Z" fill="white" />
                                    </svg>
                                </div>


                            </div> */}
                        </div>


                    </div>

                </div>
                <div className="d-flex py-4 flex-column flex-sm-row gap-3 justify-content-between align-items-center">
                    <h3 className="text-white fs-9 fs-xl-13 mb-0">©2025, RapidPayment. All Rights Reserved</h3>
                    <h6 className=" fs-9 fs-xl-13 text-white">
                        <Link href={'#!'} className="text-white text-decoration-none"> Privacy Policy</Link>  | <Link href={'#!'} className="text-white text-decoration-none">Terms and Conditions</Link>
                    </h6>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
