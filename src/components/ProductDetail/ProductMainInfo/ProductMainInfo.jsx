import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faBox } from '@fortawesome/free-solid-svg-icons'

function ProductMainInfo() {
    return (
        <div>
            <p className="fs-4">Gifts For Sisters - Love Tree - I'd Walk Through Fire For You Sister...(Custom Mugs - Christmas Gifts, Birthday Gift For Sister) - Personalized Mug</p>
            <div>
                <span className="text-decoration-line-through fs-5 text-secondary">$24.99 USD</span>
                <span className="fw-bold fs-4 text-danger ps-2">$24.99 USD</span>
            </div>
            <div>
                <p className='fs-6 fw-bold mt-2 mb-5'>HURRY UP! OFFER END IN:</p>
            </div>
            <div className='small'>
                <span>Deliver to </span>
                <span className='fw-bold text-decoration-underline'>United States </span>
                <span>from the United States - </span>
                <span className='text-primary'>Change</span>
            </div>

            <Container className='mt-2'>
                <Row className='small justify-content-start'>
                    <Col className='col-5 bg-secondary bg-opacity-10 rounded p-1'>
                        <span>
                            <Row className='justify-content-start ps-1'>
                                <Col className='col-1 me-2 mt-1'>
                                    <FontAwesomeIcon icon={faTruck} />
                                </Col>
                                <Col className='col-10 my-1'>
                                    <span className='small'>
                                        <div className='fw-bold'>Express Shipping</div>
                                        <div>Get it by Mon, Oct 09</div>
                                    </span>
                                </Col>
                            </Row>
                        </span>
                    </Col>
                    <Col className='col-5 bg-secondary bg-opacity-10 rounded ms-3 p-1'>
                        <span>
                            <Row className='justify-content-start ps-1'>
                                <Col className='col-1 me-2 mt-1'>
                                    <FontAwesomeIcon icon={faBox} />
                                </Col>
                                <Col className='col-10 my-1'>
                                    <span className='small'>
                                        <div className='fw-bold'>Standard Shipping</div>
                                        <div>Get it by Mon, Oct 09</div>
                                    </span>
                                </Col>
                            </Row>
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductMainInfo