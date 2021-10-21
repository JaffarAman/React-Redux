import React from 'react'
import { Navbar , Nav} from "react-bootstrap"
const NavbarApp = () => {
    return (
        <div>
            <Navbar style={{backgroundColor : "#09DEEA"}} expand="lg">
  <Navbar.Brand href="#home">Carrier <del>Carrer</del> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Profile</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default NavbarApp
