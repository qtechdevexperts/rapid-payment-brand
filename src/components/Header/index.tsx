import { useRouter } from "next/router";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {


    const router = useRouter();


    return (
        <Navbar expand="lg" className="py-3">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="/images/logo.png" className="img-fluid" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto gap-sm-4 gap-1">
                        <Nav.Link href="#home">Solutions</Nav.Link>
                        <Nav.Link href="#link">Who We Serve</Nav.Link>
                        <Nav.Link href="#link">Who We Are</Nav.Link>
                        <Nav.Link href="#link">Integrated Partners</Nav.Link>
                    </Nav>
                    <Button className="btn-feature btn-lg" onClick={()=>router.push("#ContactForm")} > Contact Us</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
