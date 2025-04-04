import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { RiArrowRightLine } from 'react-icons/ri';
import style from './index.module.scss';
import CtaButton from '../Button/CtaButton';

interface TabItem {
  id: string;
  label: string;
  href: string;
  lastTab?: boolean;
}

interface TabContentItem {
  id: string;
  label: string;
  link?: string;
}

interface MegaMenuProps {
  isOpen?: boolean;
  onClose?: () => void;
  tabs?: TabItem[];
  tabContents?: TabContentItem[];
  currentTab?: string;
  setCurrentTab?: (tab: string) => void;
  offcanvasView?: 'menu' | 'detail';
  setOffcanvasView?: (view: 'menu' | 'detail') => void;
  onMouseLeave?: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  isOpen,
  onClose,
  onMouseLeave,
  tabs,
  tabContents,
  currentTab,
  setCurrentTab,
  offcanvasView,
  setOffcanvasView,
}) => {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const listWrapperRef = useRef<HTMLUListElement>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const isTablet =
    typeof window !== 'undefined' ? window.innerWidth < 992 : false;

  useEffect(() => {
    if (listWrapperRef.current) {
      const computedStyle = window.getComputedStyle(listWrapperRef.current);
      const minH = parseInt(computedStyle.minHeight, 10) || 0;

      setContainerHeight(minH);

      setTimeout(() => {
        if (listWrapperRef.current) {
          const fullHeight = listWrapperRef.current.scrollHeight;
          setContainerHeight(fullHeight);
        }
      }, 50);
    }
  }, [currentTab, tabContents]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      !isTablet &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      setOffcanvasView
    ) {
      onClose?.();
      setOffcanvasView?.('menu');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isTablet]);

  useEffect(() => {
    if (router && router.events) {
      const handleRouteChange = () => {
        onClose?.();
        setOffcanvasView?.('menu');
      };
      router.events.on('routeChangeStart', handleRouteChange);
      return () => {
        router.events.off('routeChangeStart', handleRouteChange);
      };
    }
  }, [router.events]);

  const handleTabClick = (item: TabItem) => {
    if (!item.lastTab) {
      console.log(item);
      if (item?.id !== 'business') {
        setContainerHeight(100);
      }
      setCurrentTab?.(item.id);
      if (isTablet) {
        setOffcanvasView?.('detail');
      }
    }
  };

  const renderDesktopContent = () => (
    <Container className="px-0">
      <Row>
        <Col md={3} className={`${style.border} pe-0 position-relative`}>
          <div className={clsx(style.anchorTab,)}>
            {tabs?.map((item) =>
              item.lastTab ? (
                <CtaButton
                  key={item.id}
                  className={style.lastTab}
                  onClick={() => router.push(item.href ?? '/our-pricing')}
                >
                  {item.label}
                </CtaButton>
              ) : (

                <div
                  key={item.id}
                  className={clsx(
                    currentTab === item.id ? style.active : '',
                    `${currentTab === item?.id && style.activeLabel}`
                  )}
                  onMouseEnter={() => handleTabClick(item)}
                  onClick={() => handleTabClick(item)}
                >
                  {item.label}
                </div>
              )
            )}
          </div>
        </Col>
        <Col
          md={5}
          className={`pe-0 ${style.border} ${style.centeredComponent} p-3`}
        >
          <div
            className={style.listGroupWrapper}
            style={{
              overflow: 'hidden',
              height: containerHeight,
              transition: 'height 0.5s ease',
            }}
          >
            <ul className="list-group" ref={listWrapperRef}>
              {tabContents
                ?.filter((item) => item.id === currentTab)
                .map((item, index) => (
                  <li
                    key={index}
                    className={`list-group-item mb-0 pb-0 text-primary-100 border-0`}
                  >
                    <Link
                      href={item.link || '#!'}
                      className={`${style.megaMenuLink} d-flex gap-2 align-items-center`}
                    >
                      <span className="text-primary-100">{item.label}</span>
                      <RiArrowRightLine color="#4990e2" />
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </Col>
        <Col md={4} className={`p-4 ${style.lastComponent}`}>
          <img src="/images/icon/Favicon.svg" alt="" />
          <h4 className={`mt-3 ${style.RapidHeading}`}>Rapid Payment</h4>
        </Col>
      </Row>
    </Container>
  );


  const renderOffcanvasContent = () => {
    if (offcanvasView === 'menu') {
      return (
        <div className={style.offcanvasMenu}>
          <ul className={`list-group ${style.tabList}`}>
            {tabs?.map((item) => (
              item.lastTab ? (
                <li key={item.id} className={clsx('list-group-item text-primary-100')}>
                  <CtaButton className={style.buttonClass} onClick={() => router.push('/our-pricing')}>
                    {item.label}
                    <FaLongArrowAltRight color="#4990e2" />
                  </CtaButton>
                </li>
              ) : (
                <li
                  key={item.id}
                  className={clsx(
                    'list-group-item text-primary-100',
                    style.offcanvasLink,
                    currentTab === item.id ? style.active : ''
                  )}
                  onClick={() => handleTabClick(item)}
                >
                  {item.label}
                  <FaLongArrowAltRight color="#4990e2" />
                </li>
              )
            ))}

          </ul>
        </div>
      );
    } else {
      return (
        <div className={style.offcanvasDetail}>
          <div
            className={style.backIcon}
            onClick={() => setOffcanvasView?.('menu')}
          >
            <FaArrowLeft color="#4990e2" /> Back
          </div>
          {/* Wrap the list in a container with controlled height for offcanvas detail */}
          <div
            className={style.listGroupWrapper}
            style={{
              overflow: 'hidden',
              height: containerHeight,
              transition: 'height 0.5s ease',
            }}
          >
            <ul className="list-group" ref={listWrapperRef}>
              {tabContents
                ?.filter((item) => item.id === currentTab)
                .map((item, index) => (
                  <li
                    key={index}
                    className={`list-group-item text-primary-100 border-0 animatedItem`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Link
                      href={item.link || '#!'}
                      className={`${style.megaMenuLink} d-flex gap-2 align-items-center`}
                    >
                      <span className="text-primary-100">{item.label}</span>
                      <RiArrowRightLine color="#4990e2" />
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className={`${style.lastComponent} ${style.body}`}>
            <img src="/images/icon/Favicon.svg" alt="" />
            <h4 className={`mt-3 ${style.RapidHeading}`}>Rapid Payment</h4>
            <p>
              Read how our customers have solved their most pressing problems
              with Worldpay products
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      ref={dropdownRef}
      onMouseLeave={onMouseLeave}
      className={style.megaDropdown}
    >
      {isOpen && (
        <div className={clsx(style.megaMenu)}>{renderDesktopContent()}</div>
      )}
    </div>
  );
};

export default MegaMenu;
