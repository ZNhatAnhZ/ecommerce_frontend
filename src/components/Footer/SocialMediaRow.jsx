import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCcAmex } from '@fortawesome/free-brands-svg-icons'
import { faCcDiscover } from '@fortawesome/free-brands-svg-icons'
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons'
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons'

function SocialMediaRow() {
    return (
        <Navbar bg="light" data-bs-theme="light" className='justify-content-center'>
            <Container className='justify-content-center mx-0'>
                <Row className='w-100 justify-content-center mx-0'>
                    <Col className='col-5'>
                        <Nav className="m-auto justify-content-around">
                            <Nav.Link href="#home">
                                <FontAwesomeIcon icon={faSquareFacebook} size='2xl' />
                            </Nav.Link>
                            <Nav.Link href="#features">
                                <FontAwesomeIcon icon={faFacebookMessenger} size='2xl' />
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <FontAwesomeIcon icon={faTwitter} size='2xl' />
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <FontAwesomeIcon icon={faYoutube} size='2xl' />
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <FontAwesomeIcon icon={faInstagram} size='2xl' />
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <FontAwesomeIcon icon={faPinterest} size='2xl' />
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col className='col-1 d-flex justify-content-center'>
                        <div className="vr"></div>
                    </Col>
                    <Col className='col-5'>
                        <Nav className="m-auto justify-content-around">
                            <Nav.Link href="#home">
                                <FontAwesomeIcon icon={faCcPaypal} size='2xl' />
                            </Nav.Link>
                            <Nav.Link href="#features">
                                <FontAwesomeIcon icon={faCcVisa} size='2xl' />
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <FontAwesomeIcon icon={faCcMastercard} size='2xl' />
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <FontAwesomeIcon icon={faCcDiscover} size='2xl' />
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <FontAwesomeIcon icon={faCcAmex} size='2xl' />
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}

export default SocialMediaRow