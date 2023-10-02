import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import SideThumbnail from './SideThumbnail';
import MainThumbnail from './MainThumbnail';

function ProductImageContainer() {
    return (
        <Container>
            <Row className='justify-content-end'>
                <Col className='col-3 p-0'>
                    <SideThumbnail></SideThumbnail>
                </Col>
                <Col className='col-9 p-0'>
                    <MainThumbnail></MainThumbnail>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductImageContainer