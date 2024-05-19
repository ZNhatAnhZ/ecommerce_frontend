import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import CheckoutInfo from '../components/Checkout/CheckoutInfo'
import OrderSumary from '../components/Checkout/OrderSumary'

const Image = () => {
    return <img
        className="object-fit-contain rounded"
        src="https://9prints-bucket-data-sync-efs.s3.us-east-2.amazonaws.com/8/storage/setting/314.DPJFK630f2f30e1c04.svg"
        style={{ width: "7em", alignSelf: "flex-end" }}
    />
}

export default function Checkout() {
    return (
        <div>
            <div className='py-3 d-flex justify-content-center shadow'>
                <Image></Image>
            </div>
            <div className='py-3 d-flex justify-content-center'>
                <p>Your order will be reserved for 00:00 minutes</p>
            </div>
            <Container>
                <Row className='justify-content-center'>
                    <Col className='col-5 me-4'>
                        <CheckoutInfo></CheckoutInfo>
                    </Col>
                    <Col className='col-4 ms-4'>
                        <OrderSumary></OrderSumary>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}