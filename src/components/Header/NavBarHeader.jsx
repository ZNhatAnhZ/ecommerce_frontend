import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Badge from 'react-bootstrap/Badge';

const NavBarHeader = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Nav className="m-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Navbar.Brand className="m-auto" href="#home">Navbar</Navbar.Brand>
                <Nav className="m-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Button variant="outline-dark" className='border-0'>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <Badge pill bg="danger" style={{ fontSize: 0.6 + "em", position: "relative", top: -0.7 + "em", right: 0.8 + "em" }}>2</Badge>
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBarHeader