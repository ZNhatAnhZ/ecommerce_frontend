import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Pagination from '@mui/material/Pagination';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getAllProducts } from '../../services/productService';
import { CardActionArea } from '@mui/material';

function ProductIndexContainer(props) {
    let [products, setProducts] = useState(props.products);

    return (
        <div>
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
                    {
                        products.content.map(product => {
                            return (
                                <Card key={product.id} className='m-2 p-1' style={{ width: '18rem' }}>
                                    <CardActionArea href={`/products/${product.id}`}>
                                        <Card.Img src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
                                        <Card.Body>
                                            <Card.Title>{product.name}</Card.Title>
                                            <Card.Text>{product.description}</Card.Text>
                                        </Card.Body>
                                    </CardActionArea>
                                </Card>
                            )
                        })
                    }

                </Row>
                <Row className='my-2'>
                    <Pagination count={products.totalPages} sx={{
                        display: "flex",
                        justifyContent: "center"
                    }} onChange={async (event) => {
                        setProducts(await getAllProducts(event.target.innerText - 1));
                    }} />

                </Row>

            </Container>
        </div>
    )
}

export default ProductIndexContainer