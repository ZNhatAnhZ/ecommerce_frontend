import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductFilter from '../components/ProductIndex/ProductFilter';
import ProductIndexContainer from '../components/ProductIndex/ProductIndexContainer';
import { useLoaderData } from 'react-router-dom';

function ProductIndex() {
    const products = useLoaderData();

    return (
        <div>
            <Header></Header>
            <Container fluid className='my-4'>
                <Row>
                    <Col className='col-2'>
                        <ProductFilter></ProductFilter>
                    </Col>
                    <Col className='col-10'>
                        <ProductIndexContainer products={products}></ProductIndexContainer>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div >
    )
}

export default ProductIndex