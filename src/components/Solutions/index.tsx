import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import style from "./index.module.scss";
import clsx from "clsx";
import { useRouter } from "next/router";
import Modal from "@/common/Modal";

const Solutions = () => {
  const [currentTab, setCurrentTab] = useState("small-business");

  const router = useRouter();


  const [isshowModal, setShowModal] = useState<boolean>(false)


  const handleTabClick = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <>
      <section
        className={clsx(style.solution, "bg-primary-light rounded-4 my-5")}
      >
        <Container className="me-lg-0 pe-lg-0">
          <Row>
            {/* Left Column - Tab Buttons & Content */}
            <Col lg={6} className="pb-8">
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-start align-items-sm-center">
                {/* Small Business Tab */}
                <Button
                  className={clsx(
                    "btn-lg px-md-5 px-3 py-md-3 py-2",
                    currentTab === "small-business"
                      ? "btn-feature"
                      : "btn-outline-feature"
                  )}
                  onClick={() => handleTabClick("small-business")}
                >
                  Small Business
                </Button>

                {/* Enterprises Tab */}
                <Button
                  className={clsx(
                    "btn-lg px-md-5 px-3 py-md-3 py-2",
                    currentTab === "enterprises"
                      ? "btn-feature"
                      : "btn-outline-feature"
                  )}
                  onClick={() => handleTabClick("enterprises")}
                >
                  Enterprises
                </Button>
              </div>

              {/* Dynamic Content */}
              {currentTab === "small-business" ? (
                <>
                  <h2 className="heading-2 fw-normal mt-9">
                    Big Solutions for <br />
                    <span className="fw-bold">Small Businesses</span>
                  </h2>
                  <p className="para">
                    Smoothly running a small business is challenging, we simplify
                    payments with proven payment processing solutions. Whether
                    in-store, online, or on the go, our secure, fast, and flexible
                    solutions let you focus on business growth and succeed.
                  </p>

                  <div className="mt-4">
                    <h6 className="heading-4 mt-3 mb-3">
                      Online Payments{" "}
                      <img
                        src="/images/icons/outline-interface-arrow-right.png"
                        alt=""
                      />
                    </h6>
                    <h6 className="heading-4 mt-3 mb-3">
                      In-Person Payments{" "}
                      <img
                        src="/images/icons/outline-interface-arrow-right.png"
                        alt=""
                      />
                    </h6>
                    <h6 className="heading-4 mt-3 mb-3">
                      Point of sales Solutions{" "}
                      <img
                        src="/images/icons/outline-interface-arrow-right.png"
                        alt=""
                      />
                    </h6>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="heading-2 fw-normal mt-9">
                    Enterprise Payment <br />
                    <span className="fw-bold">Solutions</span>
                  </h2>
                  <p className="para">
                    Power your business with scalable, secure, and seamless
                    payment processing designed for high-volume transactions. Our
                    enterprise-grade payment processing services ensure
                    reliability, speed, and efficiency across all sales channels.
                  </p>

                  <div className="mt-4">
                    <h6 className="heading-4 mt-3 mb-3">
                      In Person{" "}
                      <img
                        src="/images/icons/outline-interface-arrow-right.png"
                        alt=""
                      />
                    </h6>
                    <h6 className="heading-4 mt-3 mb-3">
                      Online
                      <img
                        src="/images/icons/outline-interface-arrow-right.png"
                        alt=""
                      />
                    </h6>
                    <h6 className="heading-4 mt-3 mb-3">
                      Omnichannel
                      <img
                        src="/images/icons/outline-interface-arrow-right.png"
                        alt=""
                      />
                    </h6>
                  </div>
                </>
              )}

              <div className="d-flex flex-column flex-sm-row mt-8 justify-content-start align-items-sm-center gap-3">
                <Button
                  onClick={() => setShowModal(true)}
                  className="btn-lg btn-feature"
                >
                  Talk to Sales
                </Button>
                <Button
                  onClick={() => router.push("tel:012-3456-789")}
                  className="btn-lg btn-outline-feature"
                >
                  Call Us: 012-3456-789
                </Button>
              </div>
            </Col>

            {/* Right Column - Image */}
            <Col lg={6}>
              {currentTab == "small-business" ? (
                <>
                  <img
                    src="/images/solution-image-right.png"
                    className="img-fluid h-100"
                    alt="Solutions"
                  />
                </>
              ) : (
                <>
                  <img
                    src="/images/Enterprises.png"
                    className="img-fluid h-100"
                    alt="Solutions"
                  />
                </>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      <Modal
        show={isshowModal}
        handleClose={() => setShowModal(false)}
      />

    </>

  );
};

export default Solutions;
