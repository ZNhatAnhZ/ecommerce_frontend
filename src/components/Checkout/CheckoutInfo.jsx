import {useRef} from 'react'
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {useDispatch, useSelector} from "react-redux";
import {captureOrder, createAnOrderForTheCartWithEmail} from "../../services/OrderService.jsx";
import {CartSlice} from "../../redux/CartSlice.jsx";
import {useNavigate} from "react-router-dom";

export default function CheckoutInfo() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.authentication.user);
    const cart = useSelector(state => state.cart.cart);
    const emailRef = useRef();
    let order = {};

    return (
        <div>
            <h4 className='mb-3 fw-bold'>Check Out</h4>
            <div className='fw-bold'>Contact Info</div>
            <TextField size="small" fullWidth label="Email Address" variant="outlined" margin="dense" inputRef={emailRef} />
            <TextField size="small" fullWidth label="Phone Number" variant="outlined" margin="dense" />
            <div className='fw-bold mt-3'>Shipping Address</div>
            <TextField size="small" fullWidth label="Full Name" variant="outlined" margin="dense" />
            <Container className='m-0 p-0'>
                <Row>
                    <Col className='col-7 pe-1'>
                        <TextField size="small" fullWidth label="Address" variant="outlined" margin="dense" />
                    </Col>
                    <Col className='col-5 ps-1'>
                        <TextField size="small" fullWidth label="Apt, Suite" variant="outlined" margin="dense" />
                    </Col>
                </Row>
            </Container>
            <TextField size="small" fullWidth label="City" variant="outlined" margin="dense" />
            <Container className='m-0 p-0'>
                <Row>
                    <Col className='col-7 pe-1'>
                        <TextField size="small" fullWidth label="Province/state" variant="outlined" margin="dense" />
                    </Col>
                    <Col className='col-5 ps-1'>
                        <TextField size="small" fullWidth label="Zip code" variant="outlined" margin="dense" />
                    </Col>
                </Row>
            </Container>
            <FormControl fullWidth size="small" className='mt-2'>
                <InputLabel id="label-country">Country</InputLabel>
                <Select
                    labelId="label-country"
                    label="Country"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <div className='fw-bold mt-3'>Choose a Shipping Method</div>
            <RadioGroup
                defaultValue="Standard Shipping"
                name="radio-buttons-group"
            >
                <FormControlLabel value="Standard Shipping" control={<Radio />} label="Standard Shipping" />
                <FormControlLabel value="Express Shipping" control={<Radio />} label="Express Shipping" />
            </RadioGroup>
            <div className='fw-bold mt-3'>Payment Info</div>
            <div style={{ textAlign: "justify" }}>
                By purchasing from us, you agree to our Privacy Policy and Terms of Service.
            </div>
            <div className='mb-2' style={{ textAlign: "justify" }}>
                This site is protected by reCAPTCHA and the Google Privacy Policy & Terms of Service apply.
            </div>
            <PayPalScriptProvider options={{ clientId: "test", components: "buttons", currency: "USD" }} >
                <PayPalButtons createOrder={createOrderAndGetOrderIdPaypal} onApprove={captureOrderAfterPaypalApprove} style={{ layout: "vertical", label: "pay", }} />
            </PayPalScriptProvider>

        </div>

    )

    async function createOrderAndGetOrderIdPaypal() {
        let paypalOrder = await createAnOrderForTheCartWithEmail(cart, emailRef.current.value);
        order = paypalOrder.data;
        return paypalOrder.data.paypalOrderId;
    }

    async function captureOrderAfterPaypalApprove(data) {
        let capturedOrder = await captureOrder(data, order, user);
        console.log(capturedOrder.data);
        cleanUpCart();
    }

    function cleanUpCart() {
        dispatch(CartSlice.actions.setCart(null));
        localStorage.removeItem("cart");
        navigate("/carts");
    }
}