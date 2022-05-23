import React, { useEffect } from "react";

import Footer2 from '../../othercomponents/Footer2'
import Header from '../../othercomponents/Header'

function Contactus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
    <Header/>
    <div >
        {/* header */}
      
        {/* header end  */}	
        {/* wrapper  */}	
        <div id="wrapper">
          {/* content */}	
          <div className="content">
            {/*  section  */}
            <section className="hidden-section single-par2  " data-scrollax-parent="true">
              <div className="bg-wrap bg-parallax-wrap-gradien">
                <div className="bg par-elem "  style={{backgroundImage:`url(${"./assets/Images/all/10.jpg" })`}}   data-scrollax="properties: { translateY: '30%' }" />
              </div>
              <div className="container">
                <div className="section-title center-align big-title">
                  <h2><span>Our Contacts</span></h2>
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet fermentum sem.</h4>
                </div>
                <div className="scroll-down-wrap">
                  <div className="mousey">
                    <div className="scroller" />
                  </div>
                  <span>Scroll Down To Discover</span>
                </div>
              </div>
            </section>
            {/*  section  end*/} 		
            {/* breadcrumbs*/}
            <div className="breadcrumbs fw-breadcrumbs sp-brd fl-wrap">
              <div className="container">
                <div className="breadcrumbs-list">
                  <a href="#">Home</a> <a href="#">Pages</a><span>Contacts</span>
                </div>
                <div className="share-holder hid-share">
                  <a href="#" className="share-btn showshare sfcs">  <i className="fas fa-share-alt" />  Share </a>
                  <div className="share-container  isShare" />
                </div>
              </div>
            </div>
            {/* breadcrumbs end */}
            {/* section */}
            <section className="gray-bg small-padding">
              <div className="container">
                <div className="row">
                  {/* services-item */}
                  <div className="col-md-4">
                    <div className="services-item fl-wrap">
                      <i className="fal fa-envelope" />
                      <h4>Our Mails <span>01</span></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                      <a href="#" className="serv-link sl-b">yourmail@domain.com</a>
                    </div>
                  </div>
                  {/* services-item  end*/}
                  {/* services-item */}
                  <div className="col-md-4">
                    <div className="services-item fl-wrap">
                      <i className="fal fa-phone-rotary" />
                      <h4>Our Phones<span>02</span></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                      <a href="#" className="serv-link sl-b">+7(111)123456789</a>
                    </div>
                  </div>
                  {/* services-item  end*/}
                  {/* services-item */}
                  <div className="col-md-4">
                    <div className="services-item fl-wrap">
                      <i className="fal fa-map-marked" />
                      <h4>Our Adress <span>03</span></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                      <a href="#" className="serv-link sl-b">USA 27TH Brooklyn NY</a>
                    </div>
                  </div>
                  {/* services-item  end*/}								
                </div>
                <div className="clearfix" />
                <div className="contacts-opt fl-wrap">
                  <div className="contact-social">
                    <span className="cs-title">Find us on: </span>
                    <ul>
                      <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
                      <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
                      <li><a href="#" target="_blank"><i className="fab fa-vk" /></a></li>
                    </ul>
                  </div>
                  <a href="#" className="btn small-btn float-btn color-bg cf_btn">Write Mesagge</a>
                  <div className="contact-notifer">Or visit our <a href="help.html">  help page</a></div>
                </div>
                {/*box-widget  */}			
                <div className="box-widget">
                  <div className="box-widget-title single_bwt fl-wrap   ">Office Location</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla.</p>
                  {/*box-widget end*/}
                </div>
                {/*box-widget*/}
                <div className="box-widget fl-wrap">
                  <div className="map-widget contacts-map fl-wrap">
                    <div className="map-container mapC_vis">
                      <div id="singleMap" data-latitude="40.7427837" data-longitude="-73.11445617675781" data-infotitle="Our Loacation In NewYork" data-infotext="70 Bright St New York, USA" />
                      <div className="scrollContorl" />
                    </div>
                  </div>
                </div>
                {/*box-widget end */} 									
              </div>
            </section>
            {/* section end*/}	
          </div>
          {/* content end */}	
          {/* subscribe-wrap */}	
          {/* subscribe-wrap end */}	
          {/* footer */}	
        <Footer2/>
          {/* footer end */}
        </div>
        {/* wrapper end */}
        {/*register form */}
   
        {/*register form end */}
        {/*secondary-nav */}
        <div className="secondary-nav">
          <ul>
            <li><a href="dashboard-add-listing.html" className="tolt" data-microtip-position="left" data-tooltip="Sell Property"><i className="fal fa-truck-couch" /> </a></li>
            <li><a href="listing.html" className="tolt" data-microtip-position="left" data-tooltip="Buy Property"> <i className="fal fa-shopping-bag" /></a></li>
            <li><a href="compare.html" className="tolt" data-microtip-position="left" data-tooltip="Your Compare"><i className="fal fa-exchange" /></a></li>
          </ul>
          <div className="progress-indicator">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
              <circle cx={16} cy={16} r="15.9155" className="progress-bar__background" />
              <circle cx={16} cy={16} r="15.9155" className="progress-bar__progress 
                            js-progress-bar" />
            </svg>
          </div>
        </div>
        {/*secondary-nav end */}			
        <a className="to-top color-bg"><i className="fas fa-caret-up" /></a>   
      </div>
    </>
  )
}

export default Contactus