import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ServiceCard from "./ServiceCard";
import { useRouter } from "next/router";
import Modal from "@/common/Modal";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";
import style from "./index.module.scss"


const Services = () => {



    const router = useRouter()


    const [isshowModalModal, setShowModal] = useState(false)
    const isLaptop = useMediaQuery({ query: "(max-width: 1400px)" });



    return (
        <div className={clsx(style.rapidbackground)}>
            <Container className="py-md-7 py-2">
                <Row className="gy-3">
                    <Col lg={6} className="d-flex justify-content-center align-items-start flex-col flex-column">
                        <div className="">

                            <h2 className={`heading-large fw-normal ${style.fontSizeHeading}`}>
                                Rapid Payments <br /> Elevate Your Business <br /> th{" "}
                                <span className="fw-bold">Next-Level</span> <br />{" "}
                                <span className="fw-bold"> Merchant</span>
                                Services
                            </h2>
                            <p className="para">
                                At Rapid Payments, we do more than just payment <br />
                                processing—we empower businesses with innovative <br />
                                solutions that drive efficiency, increase revenue, and <br />
                                enhance customer experience.
                            </p>
                        </div>

                        <Button onClick={() => setShowModal(true)} className={`btn btn-feature ${!isLaptop && "btn-lg"}  mt-4`}>Talk to An Expert</Button>
                    </Col>
                    <Col lg={6}>
                        <Row className="gy-4 ">
                            <Col md={6}>
                                <ServiceCard title="Lower Rates" description="Save more with transparent, competitive pricing and zero hidden fees. Our cost-effective solutions help maximize your profits effortlessly." />
                            </Col>
                            <Col md={6}>
                                <ServiceCard title="Faster Onboarding" description="Get quick approvals and start processing payments without delays. Our experts handle the setup so you can focus on growing your business." />
                            </Col>
                            <Col md={6}>
                                <ServiceCard title="Enhanced Security" description="Safeguard every transaction with PCI-compliant security and fraud prevention. Enjoy real-time monitoring and chargeback protection for peace of mind." />
                            </Col>
                            <Col md={6}>
                                <ServiceCard title="Customizable Features" description="Tailor your payment processing with recurring billing, multi-currency support, and advanced reporting. We adapt to your unique business needs." />
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
            <Modal
                show={isshowModalModal}
                handleClose={() => setShowModal(false)}
            />

        </div>

    );
};

export default Services;
