
import React from 'react';
import {
    Link
  } from "react-router-dom";


function Instagallery(props) {
        const instagallerys = [
          { url:"/newu-vendee/images/port-featured-img-013.jpg" },
          { url:"/newu-vendee/images/portfolio-featured-10.jpg"},
          { url:"/newu-vendee/images/portfolio-featured-13.jpg"},
          { url:"/newu-vendee/images/port-standard-04.jpg"},
          { url:"/newu-vendee/images/portfolio-featured-13.jpg"},
          { url:"/newu-vendee/images/port-featured-img-013.jpg"},
        ];
              
      const instagallerysec = () =>
      instagallerys.map(gallery => (
         <>
             <div className="col-md-2">
                 <img  className="insta" src={gallery.url} />
             </div>
         </>
        ));
     
        return (
            <>
              <div className="row">
                 {instagallerysec()}
              </div>
          </>
          
        );
      }
      
export default Instagallery; 