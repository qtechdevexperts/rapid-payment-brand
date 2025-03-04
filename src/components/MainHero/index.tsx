import React, { useState } from "react";
import style from "./index.module.scss";
import clsx from "clsx";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import Modal from "@/common/Modal";
import { useMediaQuery } from "react-responsive";
import useResponsive from "@/hooks/useResponsive";

const MainHero = () => {



    const router = useRouter()


    const [contactModal, setContactModal] = useState(false)

    const isLaptop = useMediaQuery({ query: '(max-width: 1400px)' });

    const isLargeScreen = useResponsive({ query: `(min-width:2000px)` })



    return (
        <>
            <section className={clsx(style.mainHero, { "container": isLargeScreen }, "px-sm-4  d-flex flex-column justify-content-center align-items-center")}>
                <div className={`container ${style.container} h-100`}>
                    <Row className="h-100">
                        <Col xl={5} md={12} className="mb-10 h-100 d-flex flex-column justify-content-center align-items-start">
                            <h1 className="heading-1 fw-normal mt-4">
                                Rapid Payments Your Partner in{" "}
                                <span className="fw-bolder"> Payment Success</span>
                            </h1>
                            <p className="para">
                                At <span className="fw-bold">Rapid Payments</span> , we empower
                                businesses of all sizes with flexible, secure, and efficient
                                payment processing solutions.
                            </p>

                            <Row>
                                <Col md={6}>
                                    <div className="d-flex justify-content-start align-items-start gap-2">
                                        <img
                                            src="/images/icons/outline-status-checked-box.png"
                                            alt=""
                                        />
                                        <p className="para">
                                            <span className="text-primary-100">Seamless</span> Payment{" "}
                                            <br /> processing solutions
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="d-flex justify-content-start align-items-start gap-2">
                                        <img
                                            src="/images/icons/outline-status-checked-box.png"
                                            alt=""
                                        />
                                        <p className="para">
                                            <span className="text-primary-100">Secure & Reliable </span>{" "}
                                            Merchant payment Processing
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="d-flex justify-content-start align-items-start gap-2">
                                        <img
                                            src="/images/icons/outline-status-checked-box.png"
                                            alt=""
                                        />
                                        <p className="para">
                                            <span className="text-primary-100">Lower Rates </span>{" "}
                                            Transparent and competitive pricings
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="d-flex justify-content-start align-items-start gap-2">
                                        <img
                                            src="/images/icons/outline-status-checked-box.png"
                                            alt=""
                                        />
                                        <p className="para">
                                            <span className="text-primary-100">POS </span> Streamlined
                                            Hardware & software for businesses
                                        </p>
                                    </div>
                                </Col>
                            </Row>

                            <div className="d-flex flex-column flex-sm-row gap-3 mt-3 justify-content-start align-items-sm-center">
                                <Button onClick={() => setContactModal(true)} className={`  btn-feature `}>Talk To an Expert</Button>
                                <Button onClick={() => router.push('tel:012-3456-789')} className={`  btn-outline-feature `}>Call Us: 012-3456-789</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <Modal
                show={contactModal}
                handleClose={() => setContactModal(false)}
            />

        </>

    );
};

export default MainHero;
