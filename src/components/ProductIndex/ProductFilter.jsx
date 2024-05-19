import Form from 'react-bootstrap/Form';

function ProductFilter() {
    return (
        <div>
            <h4 className='mb-3'>Filters</h4>
            <Form>
                {
                    (() => {
                        let temp = [];
                        for (let index = 0; index < 10; index++) {
                            temp.push(<Form.Check
                                type={"radio"}
                                id={`default-${"radio"}`}
                                label={`default ${"radio"}`}
                                className='pb-1'
                            />)
                        }
                        return temp;
                    })()
                }
            </Form>
        </div>
    )
}

export default ProductFilter