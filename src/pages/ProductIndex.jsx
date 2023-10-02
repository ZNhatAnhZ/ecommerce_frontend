import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ProductFilter from '../components/ProductIndex/ProductFilter';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Pagination from '@mui/material/Pagination';

function ProductIndex() {
    return (
        <div>
            <Header></Header>
            <Container fluid className='my-4'>
                <Row>
                    <Col className='col-2'>
                        <ProductFilter></ProductFilter>
                    </Col>
                    <Col className='col-10'>
                        <h4 className='mb-3 text-center'>Filters</h4>
                        <div className='d-flex justify-content-end'>
                            <Dropdown className='bg-transparent'>
                                <Dropdown.Toggle id="dropdown-basic" className='bg-transparent text-dark border-0'>
                                    Sort by : Most Relevant
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <Container fluid className='mt-3'>
                            <Row>
                                {(() => {
                                    let temp = [];
                                    for (let i = 0; i < 12; i++) {
                                        temp.push(
                                            <Card className='m-2 p-1' style={{ width: '18rem' }}>
                                                <Card.Img src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
                                                <Card.Body>
                                                    <Card.Title>Card Title</Card.Title>
                                                    <Card.Text>
                                                        Some quick example text to build on the card title and make up the
                                                        bulk of the card's content.
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        )
                                    }
                                    return temp;
                                })()}

                            </Row>
                            <Row className='my-2'>
                                <Pagination count={10} sx={{
                                    display: "flex",
                                    justifyContent: "center"
                                }} />

                            </Row>

                        </Container>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div >
    )
}

export default ProductIndex