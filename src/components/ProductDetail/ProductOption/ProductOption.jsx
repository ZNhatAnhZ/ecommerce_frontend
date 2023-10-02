import React from 'react'
import Form from 'react-bootstrap/Form';

function ProductOption() {
    return (
        <div className='small my-3'>
            <div className='mb-2'>
                <p className='fs-6 fw-bold mb-1'>Choose a product type</p>
                <Form.Select size="sm" className='bg-secondary bg-opacity-10'>
                    <option>Default select</option>
                </Form.Select>
            </div>
            <div className='mb-2'>
                <p className='fs-6 fw-bold mb-1'>Choose a product type</p>
                <Form.Select size="sm" className='bg-secondary bg-opacity-10'>
                    <option>Default select</option>
                </Form.Select>
            </div>
            <div className='mb-2'>
                <p className='fs-6 fw-bold mb-1'>Choose a product type</p>
                <Form.Select size="sm" className='bg-secondary bg-opacity-10'>
                    <option>Default select</option>
                </Form.Select>
            </div>
        </div>
    )
}

export default ProductOption