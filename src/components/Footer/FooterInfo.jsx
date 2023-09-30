import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function FooterInfo() {
    return (
        <div className="container-fluid text-center text-md-left border-bottom">
            <div className="row">
                <div className="col-md-3 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Footer Content</h5>
                    <p>Here you can use rows and columns to organize your footer content.</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-2 mb-md-0 mb-3">
                    <h5 className="text-uppercase">INFORMATION</h5>
                    <ul className="list-unstyled">
                        <li>
                            <Nav.Link href="#home" className="pb-1">About Us</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#home" className="pb-1">Track Order</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#home" className="pb-1">Reviews</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#home" className="pb-1">Blog</Nav.Link>
                        </li>
                    </ul>
                </div>

                <div className="col-md-2 mb-md-0 mb-3">
                    <h5 className="text-uppercase">POLICIES</h5>
                    <ul className="list-unstyled">
                        <li>
                            <Nav.Link href="#home" className="pb-1">Privacy Policy</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#home" className="pb-1">Shipping Policy</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#home" className="pb-1">Refund Policy</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#home" className="pb-1">Payment Methods</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#home" className="pb-1">Terms Of Service</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#home" className="pb-1">Copyright Infringement Report</Nav.Link>
                        </li>
                    </ul>
                </div>

                <div className="col-md-2 mb-md-0 mb-3">
                    <h5 className="text-uppercase">HELP</h5>
                    <ul className="list-unstyled">
                        <li>
                            <Nav.Link href="#home" className="pb-1">Help Center</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#home" className="pb-1">Contact Us</Nav.Link>
                        </li>
                    </ul>
                </div>

                <div className="col-md-2 mb-md-0 mb-3">
                    <h5 className="text-uppercase">GET IN TOUCH</h5>
                    <ul className="list-unstyled">
                        <li>
                            <Nav.Link href="#home" className="pb-1">Livechat 24/7</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#home" className="pb-1">+1 (585) 366 8846</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#home" className="pb-1">+1 (844) 976 2696</Nav.Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterInfo