import React from "react";
import style from "./index.module.scss";
import { Button, Col, Container, Row } from "react-bootstrap";

const PaymentForm = () => {
    return (
        <Container className="py-7" id="ContactForm">
            <Row>
                <Col lg={6}>
                    <h2 className="heading-3 text-capitalize fw-normal">
                        Payment Solutions to <br />{" "}
                        <span className="fw-bold"> help your business</span>{" "}
                    </h2>
                    <h3 className="text-primary-100 heading-4">
                        Let’s Get You Paid—Fast & Secure
                    </h3>
                    <p className="para">
                        Ready to simplify your payments and make them secure? Fill out the
                        form, and our team will customize a payment solution tailored to
                        your business needs.
                    </p>
                    <ul>
                        <li className="text-primary-100 heading-5">
                            Card devices (fixed and mobile)
                        </li>
                        <li className="text-primary-100 heading-5">
                            Electronic Point of Sale solutions
                        </li>
                        <li className="text-primary-100 heading-5">
                            FREE PLACEMENT* on eligible POS systems
                        </li>
                    </ul>

                    <p className="heading-5 fw-medium">
                        Hit us up and let’s make your payments fast, secure, and totally
                        stress-free no headaches, just smooth transactions!
                    </p>
                </Col>
                <Col lg={6} >
                    <Row>
                        <Col md={6}>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label"
                                >
                                    First Name:
                                </label>
                                <input
                                    type="text"
                                    className="form-control py-3"
                                    id="exampleFormControlInput1"
                                />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label"
                                >
                                    Last Name:
                                </label>
                                <input
                                    type="text"
                                    className="form-control py-3"
                                    id="exampleFormControlInput1"
                                />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label"
                                >
                                    Company Name:
                                </label>
                                <input
                                    type="text"
                                    className="form-control py-3"
                                    id="exampleFormControlInput1"
                                />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label"
                                >
                                    Phone Number:
                                </label>
                                <input
                                    type="tel"
                                    className="form-control py-3"
                                    id="exampleFormControlInput1"
                                />
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label"
                                >
                                    Email Address:
                                </label>
                                <input
                                    type="tel"
                                    className="form-control py-3"
                                    id="exampleFormControlInput1"
                                />
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label"
                                >
                                    Your message:
                                </label>
                                <textarea
                                    className="form-control py-3"
                                    id="exampleFormControlInput1"
                                    rows={5}
                                />
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="exampleRadios"
                                    id="exampleRadios1"
                                    defaultValue="option1"
                                />
                                <label className="form-check-label text-gray-2" htmlFor="exampleRadios1">
                                    By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message & data rates may apply. You can reply STOP to opt-out of further messaging.
                                </label>
                            </div>
                        </Col>
                        <Col md={12}>
                            <Button className="btn-feature btn-lg mt-3 px-5">Submit</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default PaymentForm;
