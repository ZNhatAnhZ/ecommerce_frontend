import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';
import { PayPalScriptProvider, PayPalMessages } from "@paypal/react-paypal-js";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../../../services/CartService.jsx";
import {CartSlice} from "../../../redux/CartSlice.jsx";

export default function PurchasingArea(props) {
    const dispatch = useDispatch();
    const productOptions = useSelector(state => state.productOption.setOfSelectedVariationEntity);
    const user = useSelector(state => state.authentication.user);

    return (
        <div className='me-4'>
            <Row className='px-3'>
                <Button variant="info" size="lg" onClick={() => triggerAddingCart(user, props, productOptions)}>
                    <p className='fw-bold m-0 py-1'>Add To Cart</p>
                </Button>
            </Row>

            <Row className='px-3'>
                <div className='small mt-4'>
                    <ul>
                        <li>Shipping calculated at checkout</li>
                        <li>Import Duty and GST/VAT of your country not included</li>
                        <li>Need Help? Chat with us</li>
                    </ul>
                </div>

                <div className='border border-secondary rounded d-flex justify-content-center py-3'>
                    <PayPalScriptProvider options={{
                        clientId: "test",
                        components: "messages",
                    }}>
                        <PayPalMessages />
                    </PayPalScriptProvider>
                </div>
            </Row>
        </div>

    )

    async function triggerAddingCart() {
        console.log("productDetails", props);
        console.log("productOptions", productOptions);
        let newCart;
        if (user != null) {
            newCart = await addItemToCart(user.id, props, productOptions, 1);
        } else {
            let cart = JSON.parse(localStorage.getItem("cart"));
            if (cart == null) {
                newCart = {
                    data: {
                        content: [{
                            quantity: 1,
                            variationEntityIdSet: [...productOptions].filter(item => item != null),
                            productId: props.id
                        }],
                        totalElements: 1
                    }
                };
            } else {
                let noNullValueProductOption = [...productOptions].filter(item => item != null);
                let isInserted = false;
                cart.data.content.forEach(item => {
                    if (isInserted === false && item.productId === props.id && !isTwoArrayDifferent(item.variationEntityIdSet, noNullValueProductOption)) {
                        item.quantity += 1;
                        isInserted = true;
                    }
                })
                if (isInserted === false) {
                    cart.data.content.push({
                        quantity: 1,
                        variationEntityIdSet: noNullValueProductOption,
                        productId: props.id
                    })
                    cart.data.totalElements += 1;
                    isInserted = true;
                }
                newCart = cart;
            }
            localStorage.setItem("cart", JSON.stringify(newCart));
        }
        console.log("cart: ", newCart);
        dispatch(CartSlice.actions.setCart(newCart.data));
    }

    function isTwoArrayDifferent(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return true;
        }
        return arr1.some(item => {
            return !arr2.includes(item);
        })
    }
}

