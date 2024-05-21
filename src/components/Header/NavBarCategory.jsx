import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router-dom";

const NavBarCategory = () => {
    const navigate = useNavigate();
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Nav className="m-0 mt-1 w-100 justify-content-around">
                <Nav.Link onClick={(event) => preventDefaultAndNavigate(event, "/")}><p className='m-0' style={{ fontSize: 1.2 + "rem" }}>Home</p></Nav.Link>
                <Nav.Link onClick={(event) => preventDefaultAndNavigate(event, "/products")}><p className='m-0' style={{ fontSize: 1.2 + "rem" }}>Products</p></Nav.Link>
                <Nav.Link href="#home"><p className='m-0' style={{ fontSize: 1.2 + "rem" }}>Pricing</p></Nav.Link>
                <Nav.Link href="#home"><p className='m-0' style={{ fontSize: 1.2 + "rem" }}>Home</p></Nav.Link>
                <Nav.Link href="#home"><p className='m-0' style={{ fontSize: 1.2 + "rem" }}>Features</p></Nav.Link>
                <Nav.Link href="#home"><p className='m-0' style={{ fontSize: 1.2 + "rem" }}>Pricing</p></Nav.Link>
            </Nav>
        </Navbar>
    )

    function preventDefaultAndNavigate(event, path) {
        event.preventDefault();
        navigate(path);
    }
}

export default NavBarCategory