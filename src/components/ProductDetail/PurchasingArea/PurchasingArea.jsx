import Button from 'react-bootstrap/Button';
import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { PayPalScriptProvider, PayPalMessages } from "@paypal/react-paypal-js";

function PurchasingArea() {
    return (
        <div className='me-4'>
            <Row className='px-3'>
                <Button variant="info" size="lg">
                    <p className='fw-bold m-0 py-1'>Add To Cart</p>
                </Button>
            </Row>

            <Row className='px-3'>
                <div className='small mt-4'>
                    <ul>
                        <li>Shipping calculated at checkout</li>
                        <li>Import Duty and GST/VAT of your country not included</li>
                        <li>Need Help? Chat with us</li>
                    </ul>
                </div>

                <div className='border border-secondary rounded d-flex justify-content-center py-3'>
                    <PayPalScriptProvider options={{
                        clientId: "test",
                        components: "messages",
                    }}>
                        <PayPalMessages />
                    </PayPalScriptProvider>
                </div>
            </Row>
        </div>

    )
}

export default PurchasingArea