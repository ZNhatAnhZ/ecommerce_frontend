import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

export default function ProductOption(props) {
    let variationEntityList = props.product.variationEntity;
    let [arrayOfSelectedVariationEntity, setArrayOfSelectedVariationEntity] = useState([null]);

    return (
        <div className='small my-3'>
            {renderProductOption({ lastSelectedVariationEntityId: null })}
        </div>
    )

    function renderProductOption({ ...props }) {
        console.log("arrayOfSelectedOption: ", arrayOfSelectedVariationEntity);
        let currentVariationEntityList = variationEntityList.filter((variationEntity) => variationEntity.parentVariationEntityId == props.lastSelectedVariationEntityId);
        
        console.log("currentVariationEntityList: ", currentVariationEntityList);
        if (currentVariationEntityList == null || currentVariationEntityList.length == 0) return;
        let selectedVariationEntityFromArray = currentVariationEntityList.find((element) => arrayOfSelectedVariationEntity.includes(element.id));
        let currentSelectedVaritionEntity = selectedVariationEntityFromArray != null ? selectedVariationEntityFromArray : currentVariationEntityList[0];

        console.log("currentSelectedVaritionEntity: ", currentSelectedVaritionEntity);
        arrayOfSelectedVariationEntity.push(currentSelectedVaritionEntity.id);

        return (
            <div>
                <div className="mb-2">
                    <p className='fs-6 fw-bold mb-1'>{currentSelectedVaritionEntity.name}</p>
                    <Form.Select size="sm" className='bg-secondary bg-opacity-10' onChange={(event) => {
                        updateArrayOfSelectedVariationEntity(currentSelectedVaritionEntity, parseInt(event.target.value));
                        currentSelectedVaritionEntity = currentVariationEntityList.find((e) => e.id == event.target.value);
                        console.log(event.target.value);
                    }}>
                        {currentVariationEntityList.map((variationEntity => {
                            return <option key={variationEntity.id} value={variationEntity.id}>{variationEntity.value}</option>
                        }))}
                    </Form.Select>
                </div>
                {renderProductOption({ lastSelectedVariationEntityId: currentSelectedVaritionEntity.id })}
            </div>
        )
    }

    // dependent variation entity means the childrend or grandchildrend of the current variation entity and so on...
    function getAllDependentVariationEntityIds(currentVariationEntity) {
        let filteredOutId = [currentVariationEntity.id];
        if (currentVariationEntity.childrenVariationEntityIdList.length == 0) return filteredOutId;

        filteredOutId.push(...currentVariationEntity.childrenVariationEntityIdList.flatMap((variationEntityId) => {
            return getAllDependentVariationEntityIds(variationEntityList.find((e) => e.id == variationEntityId));
        }));

        return filteredOutId;
    }

    // add new selected variation entity to the array and remove all the dependent variation entity from the array
    function updateArrayOfSelectedVariationEntity(oldSelectedVaritionEntity, newSelectedVariationEntityId) {
        let filteredOutId = getAllDependentVariationEntityIds(oldSelectedVaritionEntity);
        let updatedArrayOfSelectedVariationEntity = [...arrayOfSelectedVariationEntity.filter((element) => !(filteredOutId.includes(element))), newSelectedVariationEntityId];
        console.log("updatedArrayOfSelectedVariationEntity: ", updatedArrayOfSelectedVariationEntity);
        setArrayOfSelectedVariationEntity(updatedArrayOfSelectedVariationEntity);
    }
}