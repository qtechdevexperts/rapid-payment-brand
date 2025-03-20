import MegaMenu from '@/common/MegaMenu';
import styles from '@/common/MegaMenu/index.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { CiMenuBurger } from 'react-icons/ci';
import { FaArrowLeft } from 'react-icons/fa';
import style from './index.module.scss';

const solutionsTabs = [
  { id: 'AcceptPayment', label: 'Accept Payments', lastTab: false, href: '' },
  { id: 'business', label: 'Run Your Business', lastTab: false, href: '' },
  { id: 'pricing', label: 'Pricing', lastTab: true, href: '/our-pricing' },
];

const solutionsContent = [
  {
    id: 'AcceptPayment',
    label: 'Online',
    link: '/online-payments',
  },
  {
    id: 'AcceptPayment',
    label: 'In-Person',
    link: '/in-person-payments',
  },
  {
    id: 'AcceptPayment',
    label: 'OmniChannel',
    link: '/omni-channel-payments',
  },
  {
    id: 'AcceptPayment',
    label: 'Point of Sales Solutions',
    link: '/point-of-sale-solution',
  },
  {
    id: 'business',
    label: 'Payment Gateways',
    link: '/payment-gateways',
  },
  {
    id: 'business',
    label: 'Virtual Terminals',
    link: '/virtual-terminals',
  },
  {
    id: 'business',
    label: 'Fraud Protection',
    link: '/fraud-protection',
  },
  { id: 'business', label: 'Funding', link: '/funding' },
  {
    id: 'business',
    label: 'Chargeback Management',
    link: '/chargeback-management',
  },
  {
    id: 'business',
    label: 'Reporting',
    link: '/reporting-and-analytics',
  },
  {
    id: 'business',
    label: 'Billing and Invoicing',
    link: '/billing-and-invoicing',
  },
];

const whoWeServeTabs = [
  { id: 'type', label: 'By business type', lastTab: false, href: '' },
  { id: 'industries', label: 'By industry', lastTab: false, href: '' },
  { id: 'partnertype', label: 'By partner type', lastTab: false, href: '' },
];

const whoWeServeContent = [
  { id: 'type', label: 'Small Business', link: '/smb' },
  {
    id: 'type',
    label: 'Enterprise',
    link: '/enterprise-solution',
  },
  { id: 'industries', label: 'Retail', link: '/retail' },
  { id: 'industries', label: 'Restaurant', link: '/restaurant' },
  {
    id: 'industries',
    label: 'Professional Services',
    link: '/professional-services',
  },
  { id: 'industries', label: 'Ecommerce', link: '/ecommerce' },
  {
    id: 'partnertype',
    label: 'Referral Partners',
    link: '/referral-partners',
  },
];

const megaMenuDataMap = {
  solutions: { tabs: solutionsTabs, tabContents: solutionsContent },
  whoWeServe: { tabs: whoWeServeTabs, tabContents: whoWeServeContent },
};

const Header = () => {
  const router = useRouter();
  const [activeMegaMenu, setActiveMegaMenu] = useState<
    null | keyof typeof megaMenuDataMap
  >(null);

  const [currentTab, setCurrentTab] = useState<string | null>(null);
  const [lastMenu, setLastMenu] = useState(false);
  const [mobileCanvas, setOffcanvasView] = useState(false);

  // For mobile offcanvas inner navigation:
  const [mobileActiveMain, setMobileActiveMain] = useState<string | null>(null);
  const [mobileActiveSub, setMobileActiveSub] = useState<string | null>(null);

  const [clipPathPosition, setClipPathPosition] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (
    menuId: keyof typeof megaMenuDataMap,
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    setActiveMegaMenu(menuId);
    console.log('This is Menu ID:', menuId);
    console.log(megaMenuDataMap[menuId].tabs);

    if (!currentTab || currentTab !== megaMenuDataMap[menuId].tabs[0].id) {
      setCurrentTab(megaMenuDataMap[menuId].tabs[0].id);
    }

    if (navRef.current) {
      const linkRect = (
        event.currentTarget.querySelector('a') as HTMLAnchorElement
      )?.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();

      if (linkRect) {
        setClipPathPosition(linkRect.left - navRect.left + linkRect.width / 2);
      }
    }
  };

  useEffect(() => {
    if (router && router.events) {
      const handleRouteChange = () => {
        setOffcanvasView(false);
        setLastMenu(false);
      };
      router.events.on('routeChangeStart', handleRouteChange);
      return () => {
        router.events.off('routeChangeStart', handleRouteChange);
      };
    }
  }, [router.events]);

  const handleMouseLeave = () => {
    setActiveMegaMenu(null);
  };

  useEffect(() => {
    const updateClipPathPosition = () => {
      if (!navRef.current) return;

      const activeLink = navRef.current.querySelector(
        '.navItem .active',
      ) as HTMLAnchorElement;
      if (activeLink) {
        const linkRect = activeLink.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();
        setClipPathPosition(linkRect.left - navRect.left + linkRect.width / 2);
      }
    };

    updateClipPathPosition();
    window.addEventListener('resize', updateClipPathPosition);
    return () => window.removeEventListener('resize', updateClipPathPosition);
  }, [router.pathname]);

  const handleCloseDialog = () => {
    setLastMenu(false);
    setOffcanvasView(false);
    console.log(lastMenu);
  };

  const handleOpenSub = (key: string) => {
    console.log(key);
    setLastMenu(true);
    setMobileActiveSub(key);
  };

  return (
    <div className={style.headerWrapper}>
      <Navbar expand="lg" className="py-3">
        <Container>
          <Link href="/" className="navbar-brand">
            <img src="/images/logo.png" className="img-fluid" alt="Logo" />
          </Link>
          {/* Remove default Bootstrap Toggle and use custom hamburger */}
          <CiMenuBurger
            onClick={() => {
              setOffcanvasView(!mobileCanvas);
              // Reset mobile inner navigation when opening mobile menu
              setMobileActiveMain(null);
              setMobileActiveSub(null);
            }}
            size={30}
            className={style.menuBar}
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              ref={navRef}
              className="m-auto gap-md-4 position-relative gap-1"
            >
              <div
                className={`${style.navItem} navItem`}
                onMouseEnter={(e) => handleMouseEnter('solutions', e)}
              >
                <Link
                  href="#!"
                  className={`${style.dropdownToggle} ${activeMegaMenu === 'solutions' ? `${style.active} active` : ''} text-decoration-none mb-0`}
                >
                  Solutions
                </Link>
              </div>
              <div
                className={style.navItem}
                onMouseEnter={(e) => handleMouseEnter('whoWeServe', e)}
              >
                <Link
                  href="#!"
                  className={`${style.dropdownToggle} text-decoration-none`}
                >
                  Who We Serve
                </Link>
              </div>

              <div className={style.navItem} onMouseEnter={handleMouseLeave}>
                <Link
                  href="/who-we-are"
                  className={`${style.dropdownToggle} text-decoration-none`}
                >
                  Who we Are
                </Link>
              </div>
              <div className={style.navItem} onMouseEnter={handleMouseLeave}>
                <Link
                  href="/integrated-partners"
                  className={`${style.dropdownToggle} text-decoration-none`}
                >
                  Integrated Partner
                </Link>
              </div>

              {activeMegaMenu && (
                <div
                  className={style.triangleIndicator}
                  style={{
                    left: `${clipPathPosition && clipPathPosition - 10}px`,
                  }}
                >
                  <div className={style.innerSection}></div>
                </div>
              )}
            </Nav>
            <Button
              className="btn-feature"
              onClick={() => router.push('/contact')}
            >
              Contact Us
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Desktop MegaMenu */}
      {activeMegaMenu && !mobileCanvas && (
        <div className={style.megaMenuContainer}>
          <Container>
            <MegaMenu
              isOpen={true}
              onClose={handleMouseLeave}
              tabs={megaMenuDataMap[activeMegaMenu].tabs}
              tabContents={megaMenuDataMap[activeMegaMenu].tabContents}
              currentTab={currentTab ?? undefined}
              setCurrentTab={setCurrentTab}
              offcanvasView="menu" // not used on desktop
              setOffcanvasView={() => {}}
            />
          </Container>
        </div>
      )}

      <Offcanvas
        show={mobileCanvas}
        onHide={handleCloseDialog}
        className={style.mobileOffcanvas}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={clsx(style.mainOffcanvasTile)}>
            RapidPayments
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-0">
          {/* {mobileActiveMain === null ? ( */}

          <ul className={`list-group px-0 ps-0 ${style.tabList}  `}>
            <li
              className={clsx(
                'list-group-item  text-primary-100 d-flex justify-content-start align-items-center gap-3',
                styles.mainListItem,
              )}
              onClick={() => setMobileActiveMain('solutions')}
            >
              Solutions
            </li>
            <li
              className={clsx(
                'list-group-item  text-primary-100 d-flex justify-content-start align-items-center gap-3',
                styles.mainListItem,
              )}
              onClick={() => setMobileActiveMain('whoWeServe')}
            >
              Who We Serve
            </li>
            <li
              className={clsx(
                'list-group-item  text-primary-100 d-flex justify-content-start align-items-center gap-3',
                styles.mainListItem,
              )}
              onClick={() => router.push('/who-we-are/')}
            >
              Who We Are
            </li>

            <li
              className={clsx(
                'list-group-item  text-primary-100 d-flex justify-content-start align-items-center gap-3',
                styles.mainListItem,
              )}
              onClick={() => router.push('/integrated-partners/')}
            >
              Integrated Partners
            </li>
          </ul>

          <ul
            className={`list-group px-0 ps-0 ${styles.subMenu} ${mobileActiveMain && styles.active}`}
          >
            <li
              className={clsx(
                'list-group-item border-top-0 px-3 pb-3 text-black d-flex justify-content-start align-items-center gap-3',
                style.subMenuTitle,
              )}
              onClick={() => setMobileActiveMain(null)}
            >
              <FaArrowLeft />{' '}
              {mobileActiveMain === 'solutions' ? 'Solutions' : 'Who We Serve'}
            </li>
            {megaMenuDataMap[
              mobileActiveMain as keyof typeof megaMenuDataMap
            ]?.tabs.map((tab) => (
              <li
                key={tab.id}
                className={clsx(
                  'list-group-item  text-primary-100 d-flex justify-content-start align-items-center gap-3',
                  styles.mainListItem,
                )}
                onClick={() => handleOpenSub(tab.id)}
              >
                {tab.label}
              </li>
            ))}
          </ul>

          <ul
            className={clsx(
              styles.subMenu2,
              'pl-0',
              `${lastMenu && styles.innerLinks}`,
            )}
            style={{
              paddingLeft: '0px',
              transition: 'all 0.5s ease-in-out',
            }}
          >
            <li
              className={clsx(
                'list-group-item px-3 pb-3 text-black d-flex justify-content-start align-items-center gap-3',
                styles.subMenuTitle,
              )}
              onClick={() => setLastMenu(false)}
            >
              <FaArrowLeft />{' '}
              {
                megaMenuDataMap[
                  mobileActiveMain as keyof typeof megaMenuDataMap
                ]?.tabs.find((tab) => tab.id === mobileActiveSub)?.label
              }
            </li>
            {mobileActiveMain &&
              mobileActiveMain in megaMenuDataMap &&
              megaMenuDataMap[
                mobileActiveMain as keyof typeof megaMenuDataMap
              ].tabContents
                .filter((item) => item.id === mobileActiveSub)
                .map((item, index) => (
                  <li
                    key={index}
                    className={`list-group-item  px-3  text-primary-100 ${styles.mainListItem}`}
                  >
                    <Link
                      href={item.link || '#!'}
                      className={clsx(
                        style.megaMenuLink,
                        'd-flex gap-2 align-items-center text-decoration-none',
                      )}
                    >
                      <span className="text-primary-100">{item.label}</span>
                    </Link>
                  </li>
                ))}
          </ul>

          {/* // ) : mobileActiveMain && mobileActiveSub === null ? (

      
          // ) : mobileActiveMain && mobileActiveSub && (

          //   <ul className={clsx(styles.subMenu, 'pl-0', { active: mobileActiveMain !== null })} style={{
          //     left: mobileActiveMain ? "0px" : "-100%",
          //     paddingLeft: "0px",
          //     transition: "all 0.5s ease-in-out"
          //   }}>
          //     <li
          //       className={clsx(
          //         "list-group-item px-3 pb-3 text-black d-flex justify-content-start align-items-center gap-3",
          //         styles.subMenuTitle
          //       )}
          //       onClick={() => setMobileActiveSub(null)}
          //     >
          //       <FaArrowLeft /> {megaMenuDataMap[mobileActiveMain as keyof typeof megaMenuDataMap].tabs.find(tab => tab.id === mobileActiveSub)?.label}
          //     </li>
          //     {mobileActiveMain && mobileActiveMain in megaMenuDataMap && megaMenuDataMap[mobileActiveMain as keyof typeof megaMenuDataMap].tabContents
          //       .filter((item) => item.id === mobileActiveSub)
          //       .map((item, index) => (
          //         <li key={index} className={`list-group-item  px-3  text-primary-100 ${styles.mainListItem}`}>
          //           <Link href={item.link || "#!"} className={clsx(style.megaMenuLink, "d-flex gap-2 align-items-center text-decoration-none")}>
          //             <span className="text-primary-100">{item.label}</span>
          //           </Link>
          //         </li>
          //       ))}
          //   </ul>
          )} */}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Header;
