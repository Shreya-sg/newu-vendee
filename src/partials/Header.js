import React from 'react';
import {
    Link
  } from "react-router-dom";
  
  import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink, 
      UncontrolledDropdown,
      DropdownToggle,
      DropdownMenu,
      DropdownItem,
      NavbarText
    }  from 'reactstrap';
  
    
function Header() {
        return (
          <>
          <div className="newu-topnavbar" id="header-sec">
              <div className="top-header-social">
                  <div className="container">
                        <div className="row">
                          <div className="col-md-3">
                              <ul className="details">
                                <li><i class="fa fa-envelope-o" aria-hidden="true"></i>demo@cosmetic.com</li>
                                <li><i class="fa fa-volume-control-phone" aria-hidden="true"></i>+00 212 444</li>
                              </ul> 
                          </div>
                          <div class="col-md-6">
                            <p>Free Standard Shipping on All Orders Over $50</p>
                          </div>
                          <div class="col-md-3">
                            <p>
                              <span>Facebook</span> |
                              <span>Twitter</span> |
                              <span>Instagram </span> 
                            </p>
                          </div>
                        </div>
                  </div>
                </div>
            <div className="container">
                <Navbar color="light" light expand="md">
                    <NavbarToggler/>
                    <Collapse isOpen={false} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                            <Link to="/"><NavLink>Home</NavLink></Link>
                            </NavItem>
                            <NavItem>
                            <Link to="/bestseller"><NavLink>Bestseller</NavLink></Link>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Shop
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                Option 1
                                </DropdownItem>
                                <DropdownItem>
                                Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                Reset
                                </DropdownItem>
                            </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                            <Link to="/sale"><NavLink>Sale</NavLink></Link>
                            </NavItem>
                            <NavItem>
                            <Link to="/contact"><NavLink>Contact Us</NavLink></Link>
                            </NavItem>
                       </Nav>
                    </Collapse>
                    <NavbarBrand href="/"><img  className="logo" src={process.env.PUBLIC_URL + '/images/New-NEWU-logo-03.png'} /> </NavbarBrand>
                </Navbar>
            </div>
        </div>
          </>
        );
      }
      
      export default Header; 