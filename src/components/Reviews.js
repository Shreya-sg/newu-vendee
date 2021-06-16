
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

  import Slider from "react-slick";

    

    function Reviewarea(props) {
      var reviewsettings = {
        arrow: false,
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

      const reviews = [
            { url:"/newu-vendee/images/s-2_2048x.jpg",  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", authorname: "John Doe" },
            { url:"/newu-vendee/images/s-2_2048x.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", authorname: "John Doe" },
            { url:"/newu-vendee/images/s-2_2048x.jpg",  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", authorname: "John Doe" },
          ];
        
      const renderSlides = () =>
        reviews.map(review => (
          <div>
          <div className="col-md-12" >
            <p className="review-desp">{review.description}</p>
            <h5>{review.authorname}</h5> 
          </div>
          </div>
        ));


      return (
        <div className="App">
          <Slider {...reviewsettings}>
            {renderSlides()}
          </Slider>
        </div>
      );
        
      }
      
      export default Reviewarea; 