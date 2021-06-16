
import React from 'react';
import {
    Link
  } from "react-router-dom";


function Product(props) {
        const products = [
          {url:"/newu-vendee/images/port-standard-img-01.jpg", hoverurl:"/newu-vendee/images/product19_large.jpg", title:"Product Name", price:"$20.00", disscount:"$10.00"},
          {url:"/newu-vendee/images/port-standard-img-01.jpg", hoverurl:"/newu-vendee/images/product21_55.jpg", title:"Product Name", price:"$10.00",  disscount:"$10.00" },
          {url:"/newu-vendee/images/port-standard-img-01.jpg", hoverurl:"/newu-vendee/images/product27_large.jpg", title:"Product Name", price:"$30.00",  disscount:"$10.00" },
        ];
              
      const productssec = () =>
      products.map(product => (
         <>
             <div className="col-md-4">
                 <div className="inner-description">
                     <div className="image-sec">
                        <img  className="product" src={product.url} />
                         <img  className="hovership" src={product.hoverurl} />
                         <ul className="social-icon">
                             <li><i class="fa fa-suitcase" aria-hidden="true"></i></li>
                             <li><i class="fa fa-heart" aria-hidden="true"></i></li>
                             <li><i class="fa fa-download" aria-hidden="true"></i></li>
                         </ul>
                     </div>
                      <div className="text">
                          <p>{product.title}</p>
                           <ul>
                               <li><span className="price">{product.price}</span> <span className="discount">{product.disscount}</span></li>
                               <li class="star-sec">
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                </li>
                           </ul>
                      </div>
                 </div>
             </div>
         </>
        ));
     
        return (
            <>
              <div className="row">
                 {productssec()}
              </div>
          </>
          
        );
      }
      
export default Product; 