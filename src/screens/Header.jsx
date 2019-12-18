import { MdSearch, } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';

const eatZillaLogo = require('../images/eatZillaLogo.png');

const Header = () => {
    return (
        <Row className="headerRow">
            <Col className="headerCol">
                <Navbar bg="light" expand="lg">

                    {/* <Col xs={{ order: 1 }} id="hello" className="justify-content-md-start" style={{ color: 'green' }}><Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="NavBarCollapse">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Col> */}

                    <Col xs={{ order: 1 }} style={{ color: 'rgb(217,186,61)', width: '200px'}}><GiHamburgerMenu></GiHamburgerMenu></Col>
                    <Col xs={{ order: 2 }}><Image src={eatZillaLogo} style={{ width: '100px' }} /></Col>
                    <Col xs={{ order: 3 }} style={{ width: '200px', fontSize: '2rem' }}><MdSearch></MdSearch></Col>

                    <Col xs={{ order: 4 }} className="justify-content-md-end" style={{ width: '100px', padding: '0px' }}><Button>Log In</Button></Col>

                </Navbar>
            </Col>
        </Row>
    )
}




export default Header;