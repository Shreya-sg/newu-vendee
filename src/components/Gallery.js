
import React from 'react';
import {
    Link
  } from "react-router-dom";


function Gallery(props) {
        const gallerys = [
          { url:"/newu-vendee/images/port-standard-img-01.jpg", saleammount:"50.0%", subtitle: "Placeholder Text", title: "Lorem Ispum Heading", shopnow:"Shop Now" },
          { url:"/newu-vendee/images/portfolio-featured-11.jpg", saleammount:"50.0%",  subtitle: "Placeholder Text", title: "Lorem Ispum Heading", shopnow:"Shop Now" },
          { url:"/newu-vendee/images/portfolio-featured-13.jpg", saleammount:"50.0%",  subtitle: "Placeholder Text", title: "Lorem Ispum Heading", shopnow:"Shop Now"},
        ];
              
      const gallerysec = () =>
      gallerys.map(gallery => (
         <>
            <div className="col-md-4" style={{backgroundImage: `url(${gallery.url})`}}>
                <div className="inner-description">
                    <span>{gallery.saleammount}</span>
                    <h5>{gallery.subtitle}</h5>
                    <h2>{gallery.title}</h2>
                    <div className="button"> <Link to="/">{gallery.shopnow}</Link></div>
                </div>
            </div> 
         </>
        ));
     
        return (
            <>
              <div className="row">
                 {gallerysec()}
              </div>
          </>
          
        );
      }
      
export default Gallery; 