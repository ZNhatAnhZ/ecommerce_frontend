import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';

function ProductOptionChildren(variationEntityList, arrayOfSelectedOptionFromParent, setArrayOfSelectedOptionFromParent) {
    if (variationEntityList == null || variationEntityList.length == 0) return;

    let [currentVariationEntity, setCurrentVariationEntity] = useState(variationEntityList[0]);
    let isShown = arrayOfSelectedOptionFromParent.includes(currentVariationEntity);
    useEffect(() => {
        isShown = arrayOfSelectedOptionFromParent.includes(currentVariationEntity);
        if (isShown == false) {
            //reset selected options to prevent wrong displaying option
            isShown = arrayOfSelectedOptionFromParent.includes(variationEntityList[0]);
            setCurrentVariationEntity(variationEntityList[0]);
        }
    }, [arrayOfSelectedOptionFromParent, currentVariationEntity]);

    return (
        <div key={variationEntityList[0].name}>
            {isShown ? (<div className="mb-2">
                <p className='fs-6 fw-bold mb-1'>{variationEntityList[0].name}</p>
                <Form.Select size="sm" className='bg-secondary bg-opacity-10' onChange={(event) => {
                    const newSelectedVariation = variationEntityList.find((variationEntity) => variationEntity.id == event.target.value);
                    const oldSelectedVariation = currentVariationEntity;
                    setArrayOfSelectedOptionFromParent(removeDependentVariationEntity(addDependentVariationEntity(arrayOfSelectedOptionFromParent, newSelectedVariation), oldSelectedVariation));
                    setCurrentVariationEntity(newSelectedVariation);
                }}>
                    <option key={variationEntityList[0].id} value={variationEntityList[0].id}>{variationEntityList[0].value}</option>
                    {variationEntityList.map((variationEntity => {
                        if (variationEntity !== variationEntityList[0]) {
                            return <option key={variationEntity.id} value={variationEntity.id}>{variationEntity.value}</option>
                        }
                    }))}
                </Form.Select>
            </div>) : null}
            {variationEntityList.map((variationEntity => {
                return ProductOptionChildren(variationEntity.childVariationEntityIndexDtoList, arrayOfSelectedOptionFromParent, setArrayOfSelectedOptionFromParent);
            }))}
        </div>
    )
}

function addDependentVariationEntity(arrayOfSelectedOption, currentVariationEntity) {
    let addingVariations = [...arrayOfSelectedOption];
    if (currentVariationEntity == null || currentVariationEntity.childVariationEntityIndexDtoList == null || currentVariationEntity.childVariationEntityIndexDtoList.lenth <= 0) return addingVariations;
    addingVariations.push(currentVariationEntity);

    addingVariations.push(...addDependentVariationEntity([], currentVariationEntity.childVariationEntityIndexDtoList[0]));
    return addingVariations;
}

function removeDependentVariationEntity(arrayOfSelectedOption, currentVariationEntity) {
    let filteredOutVariations = getAllVariationsFromNestedVariation(currentVariationEntity);
    return arrayOfSelectedOption.filter((element) => !filteredOutVariations.includes(element));
}

function getAllVariationsFromNestedVariation(currentVariationEntity) {
    let filteredOutId = [currentVariationEntity];
    if (currentVariationEntity == null || currentVariationEntity.childVariationEntityIndexDtoList == null || currentVariationEntity.childVariationEntityIndexDtoList.lenth <= 0) return filteredOutId;

    filteredOutId.push(...currentVariationEntity.childVariationEntityIndexDtoList.flatMap((variationEntity) => {
        return getAllVariationsFromNestedVariation(variationEntity);
    }));
    return filteredOutId;
}

function ProductOption(props) {
    let [product, setProduct] = useState(props.product);
    let [arrayOfSelectedOption, setArrayOfSelectedOption] = useState(addDependentVariationEntity([], product.variationEntityIndexDtoSet[0]));

    return (
        <div className='small my-3'>
            {console.log(arrayOfSelectedOption)}
            {ProductOptionChildren(product.variationEntityIndexDtoSet, arrayOfSelectedOption, setArrayOfSelectedOption)}
        </div>
    )
}

export default ProductOption