import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Container from 'react-bootstrap/esm/Container'
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faBox } from '@fortawesome/free-solid-svg-icons'

const Image = () => {
  return <img
    className="object-fit-contain rounded"
    src="https://cms.gossby.com/resource/template/core/image/catalog/campaign/type/preview/mug/11oz/white/front.png"
    style={{ height: "12em", width: "12em" }}
  ></img>
}

function OrderSumary() {
  return (
    <Row className='justify-content-between'>
      <Col className='col-6'>
        <h4 className='mb-3 fw-bold'>Order Sumary</h4>
      </Col>
      <Col className='col-3'>
        <div className='text-decoration-underline text-end'>Edit Cart</div>
      </Col>
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
            </Col>
          </Row>
          <Row className='d-flex my-2 pe-0 justify-content-end'>
            <div className='text-end'>
              <span className='text-secondary'>3 pcs x </span>
              <span className='fw-bold'>$13.99 USD</span>
            </div>
          </Row>
        </Row>
      </Container>
      <hr class="border-secondary my-3 mt-4" style={{ borderTop: "dashed 1px" }} />
      <Container className='justify-content-between'>
        <Row>
          <Col className='col-6 p-0'>
            <div>Subtotal: (11 items)</div>
          </Col>
          <Col className='col-6 p-0 text-end'>
            <div>$153.89 USD</div>
          </Col>
        </Row>
      </Container>
      <Container className='justify-content-betweenmt-2'>
        <Row>
          <Col className='col-6 p-0'>
            <div>Shipping:</div>
          </Col>
          <Col className='col-6 p-0 text-end'>
            <div>$49.98 USD</div>
          </Col>
        </Row>
      </Container>
      <hr class="border-secondary my-3" style={{ borderTop: "dashed 1px" }} />
      <Container className='justify-content-between'>
        <Row>
          <Col className='col-6 p-0'>
            <h5 className='fw-bold'>Total:</h5>
          </Col>
          <Col className='col-6 p-0 text-end'>
            <h5 className='fw-bold'>$203.87 USD</h5>
          </Col>
        </Row>
      </Container>
    </Row >
  )
}

export default OrderSumary