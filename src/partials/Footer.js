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
  
    
function Footer() {
        return (
          <>
          <div className="footer-navbar">
            <div className="container">
                <div class="row">
                    <div className="col-md-2">
                       <ul className="footer-menu">
                          <li className="bold-text"><Link to="/">Categories</Link></li>
                          <li className="simple-text"><Link to="/">Lorem</Link></li>
                          <li className="simple-text"><Link to="/">Lorem1</Link></li>
                          <li className="simple-text"><Link to="/">Lorem2</Link></li>
                          <li className="simple-text"><Link to="/">Lorem3</Link></li>
                          <li className="simple-text"><Link to="/">Lorem4</Link></li>
                       </ul>
                    </div>
                    <div className="col-md-2">
                       <ul className="footer-menu">
                          <li className="bold-text"><Link to="/">Information</Link></li>
                          <li className="simple-text"><Link to="/">About Us</Link></li>
                          <li className="simple-text"><Link to="/">Contact Us</Link></li>
                          <li className="simple-text"><Link to="/">Our Info</Link></li>
                          <li className="simple-text"><Link to="/">Whislist</Link></li>
                          <li className="simple-text"><Link to="/">Collections</Link></li>
                       </ul>
                    </div>
                    <div className="col-md-2">
                       <ul className="footer-menu">
                          <li className="bold-text"><Link to="/">My Account</Link></li>
                          <li className="simple-text"><Link to="/">My Account</Link></li>
                          <li className="simple-text"><Link to="/">Login In</Link></li>
                          <li className="simple-text"><Link to="/">Address</Link></li>
                          <li className="simple-text"><Link to="/">Featured</Link></li>
                          <li className="simple-text"><Link to="/">Trending</Link></li>
                       </ul>
                    </div>
                    <div className="col-md-2">
                       <ul className="footer-menu">
                          <li className="bold-text"><Link to="/">Products</Link></li>
                          <li className="simple-text"><Link to="/">New Arrival</Link></li>
                          <li className="simple-text"><Link to="/">Best Selling</Link></li>
                          <li className="simple-text"><Link to="/">Ous Sale</Link></li>
                          <li className="simple-text"><Link to="/">Orders</Link></li>
                          <li className="simple-text"><Link to="/">Password Page</Link></li>
                       </ul>
                    </div>
                    <div className="col-md-2">
                       <ul className="footer-menu">
                          <li className="bold-text"><Link to="/">Our Company</Link></li>
                          <li className="simple-text"><Link to="/">Term & Conditions</Link></li>
                          <li className="simple-text"><Link to="/">Shipping Policy</Link></li>
                          <li className="simple-text"><Link to="/">Return Policy</Link></li>
                          <li className="simple-text"><Link to="/">Copyright</Link></li>
                          <li className="simple-text"><Link to="/">Faq</Link></li>
                       </ul>
                    </div>
                    <div className="col-md-2">
                        <ul className="footer-menu">
                          <li className="bold-text"><Link to="/">Follow Us</Link></li>
                          <li className="simple-text"><Link to="/">Facebook</Link></li>
                          <li className="simple-text"><Link to="/">Instagram</Link></li>
                          <li className="simple-text"><Link to="/">Twitter</Link></li>
                       </ul>
                    </div>
                </div>
            </div>
        </div>
          </>
        );
      }
      
      export default Footer; 