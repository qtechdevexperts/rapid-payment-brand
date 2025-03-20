import { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Offcanvas } from 'react-bootstrap';
import clsx from 'clsx';
import Link from 'next/link';
import { FaLongArrowAltRight, FaArrowLeft } from "react-icons/fa";
import style from "./index.module.scss";
import { useRouter } from 'next/router';
import { RiArrowRightLine } from "react-icons/ri";

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
}

const MegaMenu: React.FC<MegaMenuProps> = ({
    isOpen,
    onClose,
    tabs,
    tabContents,
    currentTab,
    setCurrentTab,
    offcanvasView,
    setOffcanvasView
}) => {
    const router = useRouter();
    const dropdownRef = useRef<HTMLDivElement>(null);
    // We'll use this ref for the list container
    const listWrapperRef = useRef<HTMLUListElement>(null);
    const [containerHeight, setContainerHeight] = useState<number>(0);
    const isTablet = typeof window !== "undefined" ? window.innerWidth < 992 : false;





    // Update height when currentTab or tabContents change
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
            console.log(item)
            if (item?.id !== "business") {
                setContainerHeight(299)
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
                    <div className={clsx(style.anchorTab)}>
                        {tabs?.map((item) => (
                            <div
                                key={item.id}
                                className={clsx(
                                    item.lastTab ? style.lastTab : '',
                                    currentTab === item.id ? style.active : ''
                                )}
                                onMouseEnter={() => handleTabClick(item)}
                                onClick={() => {
                                    handleTabClick(item)
                                    item?.lastTab && router.push(item?.href ?? "")
                                }}
                            >
                                {item.label}
                            </div>
                        ))}
                    </div>
                </Col>
                <Col md={5} className={`pe-0 ${style.border} ${style.centeredComponent} p-3`}>

                    <div
                        className={style.listGroupWrapper}

                        style={{
                            overflow: 'hidden',
                            height: containerHeight,
                            transition: 'height 0.5s ease'
                        }}
                    >
                        <ul className="list-group" ref={listWrapperRef}>
                            {tabContents
                                ?.filter((item) => item.id === currentTab)
                                .map((item, index) => (
                                    <li key={index} className={`list-group-item text-primary-100 border-0`}>
                                        <Link href={item.link || "#!"} className={`${style.megaMenuLink} d-flex gap-2 align-items-center`}>
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
                    <p>
                        Read how our customers have solved their most pressing problems with Worldpay products
                    </p>
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
                            <li
                                key={item.id}
                                className={clsx(
                                    "list-group-item text-primary-100",
                                    item.lastTab ? style.lastTab : style.offcanvasLink,
                                    currentTab === item.id ? style.active : ""
                                )}
                                onClick={() => handleTabClick(item)}
                            >
                                {item.label}
                                <FaLongArrowAltRight color="#4990e2" />
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className={style.offcanvasDetail}>
                    <div className={style.backIcon} onClick={() => setOffcanvasView?.('menu')}>
                        <FaArrowLeft color="#4990e2" /> Back
                    </div>
                    {/* Wrap the list in a container with controlled height for offcanvas detail */}
                    <div
                        className={style.listGroupWrapper}

                        style={{
                            overflow: 'hidden',
                            height: containerHeight,
                            transition: 'height 0.5s ease'
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
                                        <Link href={item.link || "#!"} className={`${style.megaMenuLink} d-flex gap-2 align-items-center`}>
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
                            Read how our customers have solved their most pressing problems with Worldpay products
                        </p>
                    </div>
                </div>
            );
        }
    };

    return (
        <div ref={dropdownRef} className={style.megaDropdown}>
            {/* For desktop view */}
            {isOpen && <div className={clsx(style.megaMenu)}>{renderDesktopContent()}</div>}
            {/* If needed, you can uncomment and use Offcanvas for mobile */}
            {/*
            {isTablet && (
                <Offcanvas
                    show={isOpen}
                    onHide={() => {
                        onClose?.();
                        setOffcanvasView?.('menu');
                    }}
                    placement="end"
                    className={style.offcanvasCustom}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className={`px-0 ${style.offcanvasBody} pt-0`}>
                        {renderOffcanvasContent()}
                    </Offcanvas.Body>
                </Offcanvas>
            )}
            */}
        </div>
    );
};

export default MegaMenu;
