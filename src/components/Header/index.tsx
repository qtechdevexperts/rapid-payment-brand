import { useRouter } from "next/router";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    const router = useRouter();

    return (
        <Navbar expand="lg" className="py-3">
            <Container>
                <Navbar.Brand href="#home" rel="nofollow">
                    <img src="/images/logo.png" className="img-fluid" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto gap-md-4 gap-1">
                        <Nav.Link href="#home" rel="nofollow">Solutions</Nav.Link>
                        <Nav.Link href="#link" rel="nofollow">Who We Serve</Nav.Link>
                        <Nav.Link href="#link" rel="nofollow">Who We Are</Nav.Link>
                        <Nav.Link href="#link" rel="nofollow">Integrated Partners</Nav.Link>
                    </Nav>
                    <Button className="btn-feature " onClick={() => router.push("/contact")}>
                        Contact Us
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;