import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchBar() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col col-lg-8">
                    <InputGroup size="lg">
                        <InputGroup.Text id="basic-addon1" className='bg-white'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#143a7b", }} />
                        </InputGroup.Text>
                        <Form.Control
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </div>
            </div>
        </div>
    )
}

export default SearchBar