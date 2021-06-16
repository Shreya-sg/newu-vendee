
import React from 'react';
import {
    Link
  } from "react-router-dom";


function Shipping(props) {
        const shippings = [
          {url:"/newu-vendee/images/shipping-icon.png", title:"Free Shipping", description:"Lorem Ispum Content" },
          {url:"/newu-vendee/images/shipping-icon.png", title:"Online Support", description:"Lorem Ispum Content" },
          {url:"/newu-vendee/images/shipping-icon.png", title:"Money Back", description:"Lorem Ispum Content" },
          {url:"/newu-vendee/images/shipping-icon.png", title:"Great Saving", description:"Lorem Ispum Content" },
        ];
              
      const shippingsec = () =>
      shippings.map(shipping => (
         <>
             <div className="col-md-3">
                 <ul>
                    <li className="icons">
                       <img  className="ship" src={shipping.url} />
                    </li>
                    <li className="text">
                       <h5>{shipping.title}</h5>
                       <p>{shipping.description}</p>
                    </li>
                 </ul>
             </div>
         </>
        ));
     
        return (
            <>
              <div className="row">
                 {shippingsec()}
              </div>
          </>
          
        );
      }
      
export default Shipping; 