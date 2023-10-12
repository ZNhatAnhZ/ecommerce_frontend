import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faBox } from '@fortawesome/free-solid-svg-icons'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Image = () => {
    return <img
        className="object-fit-contain rounded"
        src="https://cms.gossby.com/resource/template/core/image/catalog/campaign/type/preview/mug/11oz/white/front.png"
        style={{ height: "18em", width: "18em", alignSelf: "flex-end" }}
    ></img>
}

function ProductDisplayArea() {
    let [cartQuantity, setCartQuantity] = useState(1);

    return (
        <div>
            <h4 className='mb-3 fw-bold'>Shopping Cart</h4>
            <Container className='border rounded mb-3'>
                <Row className='m-2'>
                    <Col className='col-1 m-0 p-0'>
                        <FontAwesomeIcon icon={faTruck} />
                    </Col>
                    <Col className='col-11 m-0 p-0 justify-content-start'>
                        <p className='fw-bold text-dark mb-0'>Shipping to: United States <span className='text-secondary text-decoration-underline ms-1'>Change</span></p>
                        <p className='text-dark mb-0'>The items in your cart are eligible for: <span className='fw-bold ms-1'>Standard Shipping, Express Shipping</span></p>
                        <small className='text-secondary mb-0'>More information on estimated delivery dates and pricing is available at checkout.</small>
                    </Col>
                </Row>
            </Container>
            <Container className='border rounded m-0'>
                <Row>
                    <Col>
                        <div className='position-relative d-inline-block'>
                            <Image>
                            </Image>
                            <Badge className="px-3 position-absolute shadow translate-middle badge rounded-pill bg-white text-dark fs-6 fw-normal" style={{
                                left: "14%",
                                top: "90%",
                            }}>
                                Front
                            </Badge>
                        </div>
                    </Col>
                    <Col>
                        <div className='position-relative d-inline-block'>
                            <Image>
                            </Image>
                            <Badge className="px-3 position-absolute shadow translate-middle badge rounded-pill bg-white text-dark fs-6 fw-normal" style={{
                                left: "14%",
                                top: "90%",
                            }}>
                                Back
                            </Badge>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <p className='mb-1'>
                        Best Friends Gifts - We'll Be Friends Until We're Old And Senile, Then We'll Be New Best Friends (Custom Mugs - Christmas, Birthday Gifts For Best Friends, Sisters)
                    </p>
                    <small className='text-secondary'>
                        Product type: Ceramic Mug White 11 oz
                    </small>
                    <Row className='justify-content-start ps-1'>
                        <Col className='col-1 px-0 pt-2 d-flex justify-content-end'>
                            <FontAwesomeIcon icon={faBox} />
                        </Col>
                        <Col className='col-11 my-1 small'>
                            <div>Delivery</div>
                            <div>
                                <small className='text-secondary'>Standard Shipping: Estimated by Oct 20</small>
                            </div>
                            <div>
                                <small className='text-secondary'>Express Shipping: Estimated by Oct 16</small>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span className='d-flex my-3'>
                                <Button style={{
                                    lineHeight: "1em"
                                }} variant='light' onClick={() => setCartQuantity(cartQuantity - 1)} className='py-0'>
                                    <div className='fs-1'>-</div>
                                </Button>
                                <Form.Control className='mx-2 border-0 d-flex' style={{
                                    maxWidth: "2em",
                                }} value={cartQuantity} />
                                <Button style={{
                                    lineHeight: "1em"
                                }} variant="light" onClick={() => setCartQuantity(cartQuantity + 1)} className='fs-3 py-2'>
                                    <div className='d-inline-block'>+</div>
                                </Button>
                            </span>
                        </Col>
                        <Col>
                            <div className='d-flex my-4 justify-content-end fw-bold'>$13.99 USD</div>
                        </Col>
                    </Row>
                    <hr class="border-secondary" />
                    <Row className='d-flex justify-content-start mb-3'>
                        <Col className='col-2'>
                            <div className='text-decoration-underline'>Edit Item</div>
                        </Col>
                        <Col className='col-1'>
                            <div className='text-decoration-underline'>Remove</div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}

export default ProductDisplayArea