import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
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
    <div className={clsx(style.footer, 'pt-9')}>
      <Container>
        <div className={clsx(style['border-footer'], style.footerRow, '')}>
          <div
            className={clsx(
              style.borderright,
              style.notInclude,
              style.firstBox,
              ' pe-3 pt-5',
              { 'pb-sm-5': isBigScreen },
            )}
          >
            <img src="/images/logo-dark.png" className="img-fluid" alt="" />

            <div className={clsx('py-5', style.notInclude, style.lastBox)}>
              <div className="mb-3">
                <h4 className="text-white fs-11">Sales</h4>
                <div
                  onClick={() => router.push('tel:012-3456-789')}
                  className={`text-primary-100 cursor-pointer ${style.footerBottomText}  fw-bold`}
                >
                  012-3456-789
                </div>
              </div>
              <div className="mb-3">
                <h4 className="text-white fs-11">Email</h4>
                <div
                  onClick={() => router.push('mailto:sales@rapidpayments.io')}
                  className={`text-primary-100 ${style.footerBottomText} cursor-pointer fw-bold`}
                >
                  sales@rapidpayments.io
                </div>
              </div>
              <div className="mb-3"></div>
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
              <h4 className={`text-primary-100 mb-0 ${style.footerBottomText}`}>
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
              <h4 className={`text-primary-100 mb-0 ${style.footerBottomText}`}>
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
              <h4 className={`text-primary-100 mb-0 ${style.footerBottomText}`}>
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
        <div className="d-flex py-4 flex-column flex-sm-row gap-3 justify-content-between align-items-center">
          <h3 className={`text-white ${style.footerBottomText} mb-0`}>
            ©2025, RapidPayment. All Rights Reserved
          </h3>
          <h6 className={`${style.footerBottomText} text-white`}>
            <Link href={'#!'} className="text-white text-decoration-none">
              {' '}
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link href={'#!'} className="text-white text-decoration-none">
              Terms and Conditions
            </Link>
          </h6>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
