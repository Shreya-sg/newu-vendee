import React from 'react';
import { Button } from 'reactstrap';
import Slidertext from '../components/Bannerslider';
import Instagallery from '../components/Instagram';
import Product from '../components/Product';
import Shipping from '../components/Shipping';
import Saletext from '../components/Sale';
import Reviewarea from '../components/Reviews';
import Gallery from '../components/Gallery';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Slider from "react-slick";
import Sale from '../pages/Sale';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import {
    Link
  } from "react-router-dom";
  

function Home(){
    return (
        <div id="top">
        <Header/>
         <div className="home-banner-slider">
            <Slidertext />
         </div>

         <div className="home-sale-section">
             <div class="container">
             <div className="row">
                 <div className="col-md-6">
                     <div class="sale-inner-bg" id="sale-banner-1" style={{backgroundImage: "url(/newu-vendee/images/slide_01.jpg)"}}>
                        <Saletext title="96% Lorem Ispum Simple Placeholder cdacdScgyt" shopnow="Shop Now"/>
                     </div>
                 </div>
                 <div className="col-md-3">
                    <div class="sale-inner-bg"  id="sale-banner-2"  style={{backgroundImage: "url(/newu-vendee/images/slide_02.jpg)",}}>
                         <Saletext title="Save Upto 20% off promotions" shopnow="Shop Now"/>
                    </div>
                 </div>
                 <div className="col-md-3">
                    <div class="sale-inner-bg"  id="sale-banner-3"  style={{backgroundImage: "url(/newu-vendee/images/slide_03.jpg)", height: "295px", backgroundRepeat: "no-repeat", }}>
                        <Saletext title="Beauty and Cosmetic" shopnow="Shop Now"/>
                    </div>
                    <div class="sale-inner-bg"  id="sale-banner-4"   style={{backgroundImage: "url(/newu-vendee/images/slide_03.jpg)", height: "300px",backgroundRepeat: "no-repeat"}}>
                        <Saletext title="Lorm Ispum Dummy" shopnow="Shop Now"/>
                    </div>
                 </div>
             </div>
             </div>
         </div>


         <div className="product-section">
             <div className="container">
             <h2 className="product-heading">Our Product</h2>
                <Tabs>
                    <TabList>
                        <Tab>Latest</Tab>
                        <Tab>Best Seller</Tab>
                        <Tab>Trending</Tab>
                        <Tab>Our Sale</Tab>
                    </TabList>

                    <TabPanel>
                        <Product />
                        <Product />
                        <Product />
                    </TabPanel>
                    <TabPanel>
                       <Product />
                       <Product />
                       <Product />
                    </TabPanel>
                    <TabPanel>
                        <Product />
                        <Product />
                        <Product />
                    </TabPanel>
                    <TabPanel>
                        <Product />
                        <Product />
                        <Product />
                    </TabPanel>
                </Tabs>
             </div>
         </div>
         
         <div className="shipping-section">
            <div class="container"><Shipping /></div>
         </div>

         <div className="gallery-sale">
            <Gallery />
         </div>

        <div className="review-section">
            <div className="container">
                <h2>Customer Review</h2>
                <p>Lorem Ispum Dummy Text bcdnc </p>
                <div className="row">
                    <Reviewarea/>
                </div>
            </div>
        </div>
        
         <div className="instagram-gallery">
           <div className="container">
            <h2>Instagram</h2>
            <p>@lupa-cosmetic</p>
                <Instagallery/>
                <Instagallery/>
             </div>
         </div>

         <div class="back-banner">
             <Link to="\" className="text"> Back To Top</Link>
         </div>

         <div className="contactus">
             <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Newsletter</h2>
                        <p>Lorem Ispum Dolar sit amet,elit</p>
                    </div>
                    <div className="col-md-8">
                        <form>
                            <label>
                                <input type="text" name="name" placeholder="Enter Your Email Address"/>
                            </label>
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>
             </div>
         </div>

         <div className="footer-section">
             <div className="container">
                <Footer />
             </div>
         </div>

         <div className="copyright-sec">
            <div className="container">
               <div className="row">
                    <div className="col-md-6">
                         <p>Copyright © 2019 Newu.All Right Reserved</p>
                    </div>
                    <div className="col-md-6">
                        <ul className="icon-image">
                            <li><img src={process.env.PUBLIC_URL + '/images/mastercard_vrt_pos_92px_2x.png'} /> </li>
                            <li><img src={process.env.PUBLIC_URL + '/images/download.png'} /></li>
                            <li><img src={process.env.PUBLIC_URL + '/images/download (1).png'} /></li>
                            <li><img src={process.env.PUBLIC_URL + '/images/mastercard_vrt_pos_92px_2x.png'} /></li>
                            <li><img src={process.env.PUBLIC_URL + '/images/download (1).png'} /></li>
                        </ul>
                    </div>
                </div>
             </div>
         </div>

        </div>
    )
}
export default Home;
