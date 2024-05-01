import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';

function ProductOptionChildren(variationEntityList, arrayOfSelectedOptionFromParent, setArrayOfSelectedOptionFromParent) {
    if (variationEntityList == null || variationEntityList.length == 0) return;

    let reducedVariationEntityList = [];
    variationEntityList.sort((a, b) => a.name.localeCompare(b.name)).forEach(element => {
        if (reducedVariationEntityList.length != 0 && reducedVariationEntityList[reducedVariationEntityList.length - 1][0].name == element.name) {
            reducedVariationEntityList[reducedVariationEntityList.length - 1].push(element);
        } else {
            reducedVariationEntityList.push([element]);
        }
    });
    let [currentVariationEntity, setCurrentVariationEntity] = useState(reducedVariationEntityList[0][0]);
    let isShown = arrayOfSelectedOptionFromParent.includes(currentVariationEntity);
    useEffect(() => {
        isShown = arrayOfSelectedOptionFromParent.includes(currentVariationEntity);
        if (isShown == false) {
            //reset selected options to prevent wrong displaying option
            isShown = arrayOfSelectedOptionFromParent.includes(reducedVariationEntityList[0][0]);
            setCurrentVariationEntity(reducedVariationEntityList[0][0]);
        }
    }, [arrayOfSelectedOptionFromParent, currentVariationEntity]);

    console.log(reducedVariationEntityList);

    return (
        // this key is wrong
        <div>
            {isShown ? reducedVariationEntityList.map(arrayOfVariations => {
                <div className="mb-2">
                    <p className='fs-6 fw-bold mb-1'>{arrayOfVariations[0].name}</p>
                    <Form.Select size="sm" className='bg-secondary bg-opacity-10' onChange={(event) => {
                        const newSelectedVariation = arrayOfVariations.find((variationEntity) => variationEntity.id == event.target.value);
                        const oldSelectedVariation = currentVariationEntity;

                        setArrayOfSelectedOptionFromParent(removeDependentVariationEntity(addDependentVariationEntity(arrayOfSelectedOptionFromParent, newSelectedVariation), oldSelectedVariation));
                        setCurrentVariationEntity(newSelectedVariation);
                    }}>
                        <option key={arrayOfVariations[0].id} value={arrayOfVariations[0].id}>{arrayOfVariations[0].value}</option>
                        {arrayOfVariations.map((variationEntity => {
                            if (variationEntity !== arrayOfVariations[0]) {
                                return <option key={variationEntity.id} value={variationEntity.id}>{variationEntity.value}</option>
                            }
                        }))}
                    </Form.Select>
                </div>
            }) : null}
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