
import React from 'react';
import {
    Link
  } from "react-router-dom";
import Slider from "react-slick";


    function Slidertext(props) {
      var settings = {
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };

        //const {page, city, children, age}= props;
        //const {subtitle, title, shopnow}=props;
        const banners = [
            { url:"/newu-vendee/images/s-2_2048x.jpg",  subtitle: "View Our New",  title:"Cosmetics Product Now",  shopnow:"Shop Now" },
            { url:"/newu-vendee/images/s-1_2048x.jpg",  subtitle: "View Our New",  title:"Cosmetics Product Now",  shopnow:"Shop Now" },
            { url:"/newu-vendee/images/s-3_2048x.jpg",  subtitle: "View Our New",  title:"Cosmetics Product Now",  shopnow:"Shop Now" },
          ];

        const renderSlides = () =>
          banners.map(banner => (
            <div>
              <div className="col-md-12">
                  <div className="bg" style={{backgroundImage:`url(${banner.url})`}}>
                      <div className="slider-descriptions">
                          <h4>{banner.subtitle}</h4>
                          <h1>{banner.title}</h1>
                          <div className="button"><Link to="/">{banner.shopnow}</Link></div> 
                      </div>
                  </div>
              </div>
            </div>
          ));
        
      return (
        <div className="row">
          <Slider {...settings}> 
            {renderSlides()}
            </Slider>
        </div>
      );
      }
      
      export default Slidertext; 