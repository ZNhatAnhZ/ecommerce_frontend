import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ProductImageContainer from '../components/ProductDetail/ImageArea/ProductImageContainer'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import ProductMainInfo from '../components/ProductDetail/ProductMainInfo/ProductMainInfo'
import ProductOption from '../components/ProductDetail/ProductOption/ProductOption'
import PurchasingArea from '../components/ProductDetail/PurchasingArea/PurchasingArea'
import { useLoaderData } from 'react-router-dom';

function ProductDetail() {
    const product = useLoaderData();

    return (
        <div>
            <Header></Header>
            <Container className='mt-5'>
                <Row className='justify-content-center'>
                    <Col className='col-6'>
                        <ProductImageContainer></ProductImageContainer>
                    </Col>
                    <Col className='col-5 p-0'>
                        <Row>
                            <ProductMainInfo product={product}></ProductMainInfo>
                        </Row>
                        <Row>
                            <ProductOption product={product}></ProductOption>
                        </Row>
                        <Row>
                            <PurchasingArea {...product}></PurchasingArea>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default ProductDetail