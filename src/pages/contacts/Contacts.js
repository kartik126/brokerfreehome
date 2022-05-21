import React from 'react'
import Footer2 from '../../othercomponents/Footer2'
import Header from '../../othercomponents/Header'

function Contacts() {
  return (
    <>
    <Header/>
     <div id="wrapper">
          {/* content */}	
          <div className="content">
            {/*  section  */}
            <section className="hidden-section single-par2  " data-scrollax-parent="true">
              <div className="bg-wrap bg-parallax-wrap-gradien">
                <div className="bg par-elem " style={{backgroundImage:`url(${"./assets/Images/all/10.jpg" })`}}   data-scrollax="properties: { translateY: '30%' }" />
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
          <div className="subscribe-wrap fl-wrap">
            <div className="container">
              <div className="subscribe-container fl-wrap color-bg">
                <div className="pwh_bg" />
                <div className="mrb_dec mrb_dec3" />
                <div className="row">
                  <div className="col-md-6">
                    <div className="subscribe-header">
                      <h4>newsletter</h4>
                      <h3>Sign up for newsletter and get latest news and update</h3>
                    </div>
                  </div>
                  <div className="col-md-1" />
                  <div className="col-md-5">
                    <div className="footer-widget fl-wrap">
                      <div className="subscribe-widget fl-wrap">
                        <div className="subcribe-form">
                          <form id="subscribe">
                            <input className="enteremail fl-wrap" name="email" id="subscribe-email" placeholder="Enter Your Email" spellCheck="false" type="text" />
                            <button type="submit" id="subscribe-button" className="subscribe-button color-bg">  Subscribe</button>
                            <label htmlFor="subscribe-email" className="subscribe-message" />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* subscribe-wrap end */}	
          {/* footer */}	
       <Footer2/>
          {/* footer end */}
        </div>
        {/* wrapper end */}
        {/*register form */}
        <div className="main-register-wrap modal">
          <div className="reg-overlay" />
          <div className="main-register-holder tabs-act">
            <div className="main-register-wrapper modal_main fl-wrap">
              <div className="main-register-header color-bg">
                <div className="main-register-logo fl-wrap">
                  <img src="images/white-logo.png" alt="" />
                </div>
                <div className="main-register-bg">
                  <div className="mrb_pin" />
                  <div className="mrb_pin mrb_pin2" />
                </div>
                <div className="mrb_dec" />
                <div className="mrb_dec mrb_dec2" />
              </div>
              <div className="main-register">
                <div className="close-reg"><i className="fal fa-times" /></div>
                <ul className="tabs-menu fl-wrap no-list-style">
                  <li className="current"><a href="#tab-1"><i className="fal fa-sign-in-alt" /> Login</a></li>
                  <li><a href="#tab-2"><i className="fal fa-user-plus" /> Register</a></li>
                </ul>
                {/*tabs */}                       
                <div className="tabs-container">
                  <div className="tab">
                    {/*tab */}
                    <div id="tab-1" className="tab-content first-tab">
                      <div className="custom-form">
                        <form method="post" name="registerform">
                          <label>Username or Email Address  * <span className="dec-icon"><i className="fal fa-user" /></span></label>
                          <input name="email" type="text" onclick="this.select()" defaultValue />
                          <div className="pass-input-wrap fl-wrap">
                            <label>Password  * <span className="dec-icon"><i className="fal fa-key" /></span></label>
                            <input name="password" type="password" autoComplete="off" onclick="this.select()" defaultValue />
                            <span className="eye"><i className="fal fa-eye" /> </span>
                          </div>
                          <div className="lost_password">
                            <a href="#">Lost Your Password?</a>
                          </div>
                          <div className="filter-tags">
                            <input id="check-a3" type="checkbox" name="check" />
                            <label htmlFor="check-a3">Remember me</label>
                          </div>
                          <div className="clearfix" />
                          <button type="submit" className="log_btn color-bg"> LogIn </button>
                        </form>
                      </div>
                    </div>
                    {/*tab end */}
                    {/*tab */}
                    <div className="tab">
                      <div id="tab-2" className="tab-content">
                        <div className="custom-form">
                          <form method="post" name="registerform" className="main-register-form" id="main-register-form2">
                            <label>Full Name  * <span className="dec-icon"><i className="fal fa-user" /></span></label>
                            <input name="name" type="text" onclick="this.select()" defaultValue />
                            <label>Email Address  * <span className="dec-icon"><i className="fal fa-envelope" /></span></label>
                            <input name="email" type="text" onclick="this.select()" defaultValue />
                            <div className="pass-input-wrap fl-wrap">
                              <label>Password  * <span className="dec-icon"><i className="fal fa-key" /></span></label>
                              <input name="password" type="password" autoComplete="off" onclick="this.select()" defaultValue />
                              <span className="eye"><i className="fal fa-eye" /> </span>
                            </div>
                            <div className="filter-tags ft-list">
                              <input id="check-a2" type="checkbox" name="check" />
                              <label htmlFor="check-a2">I agree to the <a href="#">Privacy Policy</a> and <a href="#">Terms and Conditions</a></label>
                            </div>
                            <div className="clearfix" />
                            <button type="submit" className="log_btn color-bg"> Register </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/*tab end */}
                  </div>
                  {/*tabs end */}
                  <div className="log-separator fl-wrap"><span>or</span></div>
                  <div className="soc-log fl-wrap">
                    <p>For faster login or register use your social account.</p>
                    <a href="#" className="facebook-log"> Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
     
    </>
  )
}

export default Contacts