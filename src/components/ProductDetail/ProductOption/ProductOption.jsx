import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import {useDispatch} from "react-redux";
import {ProductOptionSlice} from "../../../redux/ProductOptionSlice.jsx";

// this function uses a set to keep track of the selected variation entities
// it will rerender the whole tree if the selected variation entities is changed
// by default, left most variation entity of each level will be selected 
export default function ProductOption(props) {
    const dispatch = useDispatch();
    const variationEntityList = props.variationEntity;
    // add null to the set to allow root variation entity to be rendered
    // const a = initializeSetOfSelectedVariationEntity({ lastSelectedVariationEntityId: null });
    // console.log("a", a);
    const [setOfSelectedVariationEntity, setSetOfSelectedVariationEntity] = useState(new Set(generateSetOfSelectedVariationEntity({ lastSelectedVariationEntityId: null })));

    return (
        <div className='small my-3'>
            {renderProductOption({ lastSelectedVariationEntityId: null })}
        </div>
    )

    // recursive function to render the variation entity tree
    function renderProductOption({ ...props }) {
        console.log("arrayOfSelectedOption: ", setOfSelectedVariationEntity);

        //children variation entities of the selected variation entity in the upper level
        let validVariationEntitiesForCurrentLevel = variationEntityList.filter((variationEntity) => variationEntity.parentVariationEntityId === props.lastSelectedVariationEntityId);
        console.log("validVariationEntitiesForCurrentLevel: ", validVariationEntitiesForCurrentLevel);
        // if reached the end of the variation entity tree, done rendering
        if (validVariationEntitiesForCurrentLevel == null || validVariationEntitiesForCurrentLevel.length === 0) {
            dispatch(ProductOptionSlice.actions.setSetOfSelectedVariationEntity(new Set(setOfSelectedVariationEntity)));
            return;
        }
        
        // if the selected variation is not set before, choose the first one from the current level valid list
        let currentSelectedVariationEntity = validVariationEntitiesForCurrentLevel.find((element) => setOfSelectedVariationEntity.has(element.id));
        console.log("currentSelectedVariationEntity: ", currentSelectedVariationEntity);

        return (
            <div>
                <div className="mb-2">
                    <p className='fs-6 fw-bold mb-1'>{currentSelectedVariationEntity.name}</p>
                    <Form.Select size="sm" className='bg-secondary bg-opacity-10' onChange={(event) => {
                        updateSetOfSelectedVariationEntity(currentSelectedVariationEntity, parseInt(event.target.value));
                        currentSelectedVariationEntity = validVariationEntitiesForCurrentLevel.find((e) => e.id === event.target.value);
                    }}>
                        {validVariationEntitiesForCurrentLevel.map((variationEntity => {
                            return <option key={variationEntity.id} value={variationEntity.id}>{variationEntity.value}</option>
                        }))}
                    </Form.Select>
                </div>
                {renderProductOption({ lastSelectedVariationEntityId: currentSelectedVariationEntity.id })}
            </div>
        )
    }

    // dependent variation entity means the children or grandchildren of the current variation entity and so on...
    function getAllDependentVariationEntityIds(currentVariationEntity) {
        let filteredOutId = [currentVariationEntity.id];
        if (currentVariationEntity.childrenVariationEntityIdList.length === 0) return filteredOutId;

        filteredOutId.push(...currentVariationEntity.childrenVariationEntityIdList.flatMap((variationEntityId) => {
            return getAllDependentVariationEntityIds(variationEntityList.find((e) => e.id === variationEntityId));
        }));

        return filteredOutId;
    }

    // remove all the dependent variation entity from the array and add new selected variation entity to the array
    function updateSetOfSelectedVariationEntity(oldSelectedVariationEntity, newSelectedVariationEntityId) {
        let filteredOutId = getAllDependentVariationEntityIds(oldSelectedVariationEntity);
        let updatedArrayOfSelectedVariationEntity = [...[...setOfSelectedVariationEntity].filter((element) => !(filteredOutId.includes(element))), newSelectedVariationEntityId];
        updatedArrayOfSelectedVariationEntity.push(...generateSetOfSelectedVariationEntity({ lastSelectedVariationEntityId: newSelectedVariationEntityId }));
        console.log("updatedArrayOfSelectedVariationEntity: ", updatedArrayOfSelectedVariationEntity);
        dispatch(ProductOptionSlice.actions.setSetOfSelectedVariationEntity(new Set(updatedArrayOfSelectedVariationEntity)));
        setSetOfSelectedVariationEntity(new Set(updatedArrayOfSelectedVariationEntity));
    }

    // choose the first one from the current level valid list (choose the left most variation entity of each level by default)
    function generateSetOfSelectedVariationEntity({...props}) {
        let validVariationEntitiesForCurrentLevel = variationEntityList.filter((variationEntity) => variationEntity.parentVariationEntityId === props.lastSelectedVariationEntityId);
        console.log("validVariationEntitiesForCurrentLevel(initialization): ", validVariationEntitiesForCurrentLevel);

        // if reached the end of the variation entity tree, done rendering
        if (validVariationEntitiesForCurrentLevel == null || validVariationEntitiesForCurrentLevel.length === 0) {
            return [];
        }

        console.log("first validVariationEntitiesForCurrentLevel: ", validVariationEntitiesForCurrentLevel[0]);
        return [validVariationEntitiesForCurrentLevel[0].id, ...generateSetOfSelectedVariationEntity({lastSelectedVariationEntityId: validVariationEntitiesForCurrentLevel[0].id})];
    }
}