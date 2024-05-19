import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Badge from 'react-bootstrap/Badge';
import { getCart } from '../../services/CartService'
import { CartSlice } from "../../redux/CartSlice";

const NavBarHeader = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);
    const user = useSelector(state => state.authentication.user);

    useEffect(() => {
        let initCart = async () => {
            if (user != null && cart == null) {
                let cart = await getCart(user.id);
                dispatch(CartSlice.actions.setCart(cart.data));
            }
        }
        initCart();
    }, [])

    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Nav className="m-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Navbar.Brand className="m-auto" href="#home">Navbar</Navbar.Brand>
                <Nav className="m-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Button variant="outline-dark" className='border-0'>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <Badge pill bg="danger" style={{ fontSize: 0.6 + "em", position: "relative", top: -0.7 + "em", right: 0.8 + "em" }}>{cart == null ? 0 : cart.totalElements}</Badge>
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBarHeader