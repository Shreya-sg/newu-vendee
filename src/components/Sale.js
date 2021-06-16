
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
  
    

    function Saletext(props) {
        //   const {page, city, children, age}= props;
          const {title, shopnow}=props;
        
        return (
          <>
            <div className="description">
                <h1>{title}</h1>
                <div className="button"> <Link to="/">{shopnow}</Link></div>
            </div>
          </>
        );
      }
      
      export default Saletext; 