import Button from '@/common/Button';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import style from './index.module.scss';

const Footer = () => {
  const [acceptPaymentFooter, setPaymentFooter] = useState<boolean>(false);
  const [buisnessFooter, setBuisnessFooter] = useState<boolean>(false);
  const [whoWeServe, setWhoWeServe] = useState<boolean>(false);

  const isBigScreen = useMediaQuery({ query: '(min-width: 1500px)' });

  const router = useRouter();

  return (
    <div className={clsx(style.footer, '')}>
      <Container>
        <Row>
          <Col lg="12">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <img src="/images/logo-dark.png" className={`img-fluid ${style.footerLogo}`} alt="" />

              <Button
                onClick={() => router.push('/contact')}
                className={`btn-feature  mt-3  px-2 contact`}
              >
                Contact Us
              </Button>
            </div>
          </Col>
        </Row>
        <div className={clsx(style['border-footer'], style.footerRow, '')}>
          <div
            className={clsx(
              style.borderright,
              style.notInclude,
              style.firstBox,
              ' pe-3',
              { 'pb-sm-5': isBigScreen },
            )}
          >
            <div className={clsx('pt-5', style.notInclude, style.lastBox)}>
              <h2 className={`footer-lbl`}>Sales:</h2>
              <div className="mb-3">
                <div>{/* <FaPhone size={16} color="#1C2630" /> */}</div>
                <Link
                  href={'tel:888-562-4060'}
                  onClick={() => router.push('tel:888-562-4060')}
                  className={`text-white cursor-pointer ${style.footerLink} text-decoration-none  fw-reguler`}
                >
                  888-562-4060
                  {/* 888-562-4060 */}
                </Link>
              </div>
              <h2 className={`footer-lbl`}>Email:</h2>
              <div className="mb-3">
                <div>{/* <TfiEmail size={16} color="#1c2630" /> */}</div>
                <Link
                  href={'mailto:sales@rapidpayments.io'}
                  onClick={() => router.push('mailto:sales@rapidpayments.io')}
                  className={`text-white cursor-pointer ${style.footerLink} text-decoration-none fw-reguler`}
                >
                  sales@rapidpayments.io
                </Link>
              </div>
              <div className="mb-3"></div>
            </div>

            <div className={clsx(style.socialIcon, 'pb-3 pt-4')}>
              <h2 className={``}>Social:</h2>
              <div className="d-flex justify-content-start align-items-center gap-2">
                {/* <Link href={'#!'} className={`${style.iconBox} `}>
                <img src="/images/facbook.png" alt="" />
                  <FaFacebook size={16} color='#FF1F3E' />
                </Link> */}
                <Link
                  href={'#!'}
                  className={`${style.socialIcon} ${style.icon3}`}
                >
                  <img src="/images/facbook.png" alt="" />
                  {/* <FaFacebook size={16} color='#FF1F3E' /> */}
                </Link>
                <Link
                  href={'#!'}
                  className={`${style.socialIcon} ${style.icon3}`}
                >
                  <img src="/images/instagrames.png" alt="" />
                  {/* <SiTrustpilot size={16} color='#FF1F3E' /> */}
                </Link>
                <Link
                  href={'#!'}
                  className={`${style.socialIcon} ${style.icon3}`}
                >
                  <img src="/images/twitter.png" alt="" />
                  {/* <SiTrustpilot size={16} color='#FF1F3E' /> */}
                </Link>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              style.borderright,
              style.notInclude,
              style.secondBox,
              ' pt-sm-5  ps-sm-4 p-2',
              { 'pb-sm-5': isBigScreen },
            )}
          >
            <div
              className={`d-flex justify-content-between align-items-center ${style.footerAccordian}`}
            >
              <h4 className={`text-white-100 mb-0 ${style.footerBottomText}`}>
                Accept Payments
              </h4>
              <div
                className={`${style.accordianIcon}`}
                onClick={() => setPaymentFooter(!acceptPaymentFooter)}
              >
                {acceptPaymentFooter ? (
                  <FaLongArrowAltUp
                    color="#4990E2"
                    size={15}
                    className={`${style.accordianIcon}`}
                  />
                ) : (
                  <FaLongArrowAltDown
                    color="#4990E2"
                    className={`${style.accordianIcon}`}
                  />
                )}
              </div>
            </div>
            <ul
              className={`ps-0 ${style.accordianContent} ${acceptPaymentFooter && style.active}`}
            >
              <li className="my-3">
                <Link
                  href={'/online-payments'}
                  className={`text-white ${style.footerLink} text-decoration-none `}
                >
                  Online
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href={'/in-person-payments'}
                  className={`text-white  ${style.footerLink} text-decoration-none `}
                >
                  In-Person
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href={'/omni-channel-payments'}
                  className={`text-white ${style.footerLink} text-decoration-none `}
                >
                  OmniChannel
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href={'/point-of-sale-solution'}
                  className={`text-white ${style.footerLink} text-decoration-none `}
                >
                  Point of Sales
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={clsx(
              style.borderright,
              style.notInclude,
              style.thirdBox,
              ' py-5 ps-sm-4 p-2',
            )}
          >
            <div
              className={`d-flex justify-content-between align-items-center ${style.footerAccordian}`}
            >
              <h4 className={`text-white-100 mb-0 ${style.footerBottomText}`}>
                Run Your Buinsess
              </h4>
              <div
                className={`${style.accordianIcon}`}
                onClick={() => setBuisnessFooter(!buisnessFooter)}
              >
                {buisnessFooter ? (
                  <FaLongArrowAltUp
                    color="#4990E2"
                    size={15}
                    className={`${style.accordianIcon}`}
                  />
                ) : (
                  <FaLongArrowAltDown
                    color="#4990E2"
                    className={`${style.accordianIcon}`}
                  />
                )}
              </div>
            </div>
            <ul
              className={` ps-0  ${style.accordianContent} ${buisnessFooter && style.active}`}
            >
              <li className="my-3">
                <Link
                  href={'/payment-gateways'}
                  className={`text-white ${style.footerLink} text-decoration-none `}
                >
                  Payment Gateways
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href={'/virtual-terminals'}
                  className={`text-white ${style.footerLink} text-decoration-none `}
                >
                  Virtual Terminals
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href={'/fraud-protection'}
                  className={`text-white ${style.footerLink} text-decoration-none `}
                >
                  Fraud Protection
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href={'/funding'}
                  className={`text-white ${style.footerLink} text-decoration-none `}
                >
                  Funding
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href={'/chargeback-management'}
                  className={`text-white ${style.footerLink} text-decoration-none `}
                >
                  Chargeback Management
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={clsx(
              style.notInclude,
              style.secondLast,
              ' py-5 ps-sm-4 p-2',
            )}
          >
            <div
              className={`d-flex justify-content-between align-items-center ${style.footerAccordian}`}
            >
              <h4 className={`text-white-100 mb-0 ${style.footerBottomText}`}>
                Who we Serve
              </h4>
              <div
                className={`${style.accordianIcon}`}
                onClick={() => setWhoWeServe(!whoWeServe)}
              >
                {whoWeServe ? (
                  <FaLongArrowAltUp
                    color="#4990E2"
                    size={15}
                    className={`${style.accordianIcon}`}
                  />
                ) : (
                  <FaLongArrowAltDown
                    color="#4990E2"
                    className={`${style.accordianIcon}`}
                  />
                )}
              </div>
            </div>
            <ul
              className={` ps-0  ${style.accordianContent} ${whoWeServe && style.active}`}
            >
              <li className="my-3">
                <Link
                  href={'/smb'}
                  className={`text-white ${style.footerLink} text-decoration-none `}
                >
                  Small Business
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href={'/enterprise-solution'}
                  className={`text-white ${style.footerLink} text-decoration-none `}
                >
                  Enterprise
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href={'/retail'}
                  className={`text-white ${style.footerLink} text-decoration-none `}
                >
                  Retail
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href={'/restaurant'}
                  className={`text-white ${style.footerLink} text-decoration-none `}
                >
                  Restaurant
                </Link>
              </li>
              {/* <li className="my-3">
                <Link
                  href={''}
                  className={`text-white ${style.footerLink} text-decoration-none `}
                >
                  Professional Services
                </Link>
              </li> */}
              <li className="my-3">
                <Link
                  href={'/referral-partners'}
                  className={`text-white ${style.footerLink} text-decoration-none `}
                >
                  Refferal Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex py-4 flex-column flex-sm-row gap-3 justify-content-between align-items-center copyright">
          <h3 className={`text-white ${style.footerLink} mb-0`}>
            ©2025, RapidPayment. All Rights Reserved
          </h3>
          <h6 className={`${style.footerLink} text-white `}>
            <Link
              href={'/privacy-policy'}
              className={`text-white ${style.notForHover} text-decoration-none`}
            >
              {' '}
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link
              href={'/terms-and-condition'}
              className={`text-white ${style.notForHover} text-decoration-none`}
            >
              Terms and Conditions
            </Link>
          </h6>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
