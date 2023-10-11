import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { PayPalScriptProvider, PayPalMessages } from "@paypal/react-paypal-js";

function OrderSumaryArea() {
  return (
    <div>
      <h4 className='mb-3 fw-bold'>Order Summary</h4>
      <Container className='border rounded mb-3'>
        <Row className='m-0 py-3'>
          <p className='fw-bold text-dark mb-1'>Promotional Codes & Discounts</p>
          <InputGroup className="mb-3">
            <Form.Control type="text" placeholder="Enter your Promo Code" />
            <Button>Apply</Button>
          </InputGroup>
          <Row>
            <Col>
              <small className='text-secondary mb-0'>Subtotal: (11 items)</small>
            </Col>
            <Col className='text-end p-0'>
              <small className='text-secondary mb-0'>$153.89 USD</small>
            </Col>
          </Row>
          <hr class="border-secondary" />
          <Row className='fw-bold'>
            <Col>
              <small className='mb-0'>Total:</small>
            </Col>
            <Col className='text-end p-0'>
              <small className='mb-0'>$153.89 USD</small>
            </Col>
          </Row>
          <Row>
            <small className='text-center'>Shipping and tax will be calculated at checkout.</small>
          </Row>
          <Row className='m-0 pt-3'>
            <Button variant="danger" size="lg">
              <p className='fw-bold m-0 py-1'>Secure Checkout</p>
            </Button>
          </Row>
        </Row>
      </Container>
      <div className='border rounded d-flex justify-content-center py-3'>
        <PayPalScriptProvider options={{
          clientId: "test",
          components: "messages",
        }}>
          <PayPalMessages />
        </PayPalScriptProvider>
      </div>
    </div >
  )
}

export default OrderSumaryArea