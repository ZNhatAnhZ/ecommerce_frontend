import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBarCategory = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Nav className="m-0 mt-1 w-100 justify-content-around">
                <Nav.Link href="#home" className='h-50'><p className='m-0' style={{ fontSize: 1.2 + "rem" }}>Home</p></Nav.Link>
                <Nav.Link href="#home"><p className='m-0' style={{ fontSize: 1.2 + "rem" }}>Features</p></Nav.Link>
                <Nav.Link href="#home"><p className='m-0' style={{ fontSize: 1.2 + "rem" }}>Pricing</p></Nav.Link>
                <Nav.Link href="#home"><p className='m-0' style={{ fontSize: 1.2 + "rem" }}>Home</p></Nav.Link>
                <Nav.Link href="#home"><p className='m-0' style={{ fontSize: 1.2 + "rem" }}>Features</p></Nav.Link>
                <Nav.Link href="#home"><p className='m-0' style={{ fontSize: 1.2 + "rem" }}>Pricing</p></Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavBarCategory