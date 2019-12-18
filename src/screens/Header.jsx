import { MdSearch, } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
// import { MDBCol } from "mdbreact/";

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
import Dropdown from 'react-bootstrap/Dropdown'
import "../styles/layout.css";

// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';

const eatZillaLogo = require('../images/eatZillaLogo.png');

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a href="" ref={ref} onClick={e => {
        e.preventDefault();
        onClick(e);
    }}
    >
        {children}
        &#x25bc;
    </a>
))

const CustomMenu = React.forwardRef(
({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
const [value, setValue] = React.useState('');

return (
    <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
        <FormControl style={{width:'100%'}} autoFocus placeholder="Search..." onChange={e => setValue(e.target.value)} value={value} />
        {/* <ul className="list-unstyled">{React.Children.toArray</ul> */}
    </div>
)
}
)

const Header = () => {
    return (
        <Row className="headerRow">
            <Col className="headerCol" style={{ padding:'0' }}>
                <Navbar bg="light" expand="lg" style={{ padding: '0' }}>

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

                    <GiHamburgerMenu className="ml-3" style={{ height: '30px', width: '30px', color: 'rgb(217,186,61)' }}></GiHamburgerMenu>
                    
                    <Image src={eatZillaLogo} style={{ width: '40%', padding: '0' }} />
                    
                    <Dropdown drop='bottom'>
                        <Dropdown.Toggle as={CustomToggle}>
                            <MdSearch style={{ width: '40px', fontSize: '2rem', padding: '0', color: 'rgb(196, 220, 153)' }}></MdSearch>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as={CustomMenu}></Dropdown.Menu>
                    </Dropdown>
                    <Button className="logInButton mr-3" style={{ width: '60px', padding: '0px', height: '30px', backgroundColor: 'rgb(217,186,61)', color: 'black' }}>Log In</Button>




                </Navbar>
            </Col>
        </Row>
    )
}




export default Header;