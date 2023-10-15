import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

function ProductOptionChildren(variationEntityList, isShown) {
    if (variationEntityList == null || variationEntityList.length == 0) return;

    let [currentVariationEntity, setCurrentVariationEntity] = useState(variationEntityList[0]);

    return (
        <div key={variationEntityList[0].name}>
            <div className={`mb-2 ${isShown ? '' : 'd-none'}`}>
                <p className='fs-6 fw-bold mb-1'>{variationEntityList[0].name}</p>
                <Form.Select size="sm" className='bg-secondary bg-opacity-10' onChange={(event) => {
                    setCurrentVariationEntity(variationEntityList.find((variationEntity) => variationEntity.id == event.target.value));
                }}>
                    <option key={variationEntityList[0].id} value={variationEntityList[0].id}>{variationEntityList[0].value}</option>
                    {variationEntityList.map((variationEntity => {
                        if (variationEntity !== variationEntityList[0]) {
                            return <option key={variationEntity.id} value={variationEntity.id}>{variationEntity.value}</option>
                        }
                    }))}
                </Form.Select>
            </div>
            {variationEntityList.map((variationEntity => {
                console.log("running  " + variationEntity.name);
                return ProductOptionChildren(variationEntity.childVariationEntityIndexDtoList, currentVariationEntity === variationEntity);
            }))}
        </div>
    )
}

function ProductOption(props) {
    let [product, setProduct] = useState(props.product);

    return (
        <div className='small my-3'>
            {/* <div className='mb-2'>
                <p className='fs-6 fw-bold mb-1'>Choose a product type</p>
                <Form.Select size="sm" className='bg-secondary bg-opacity-10'>
                    <option>Default select</option>
                </Form.Select>
            </div> */}
            {ProductOptionChildren(product.variationEntityIndexDtoSet, { isShown: true })}
        </div>
    )
}

export default ProductOption