import Container from 'react-bootstrap/esm/Container'
import ProductDisplayArea from '../components/CartIndex/ProductDisplayArea'
import OrderSumaryArea from '../components/CartIndex/OrderSumaryArea'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

function CartIndex() {
  return (
    <div>
      <Header></Header>
      <Container className='mt-3'>
        <Row className='justify-content-center'>
          <Col className='col-6 p-0 me-2'>
            <ProductDisplayArea></ProductDisplayArea>
          </Col>
          <Col className='col-4 p-0 ms-2'>
            <OrderSumaryArea></OrderSumaryArea>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default CartIndex