import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
function Footer2() {
  return (
    <>
 
       <footer className="main-footer fl-wrap">
            <div className="footer-inner fl-wrap">
              <div className="container">
                <div className="row">
                  {/* footer widget*/}
                  <div className="col-md-3">
                    <div className="footer-widget fl-wrap">
                      <div className="footer-widget-logo fl-wrap">
                        <img src="./assets/images/logo.png" alt="" />
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla
                        finibus
                        lobortis pulvinar.</p>
                      <div className="fw_hours fl-wrap">
                        <span>Monday - Friday:<strong> 8am - 6pm</strong></span>
                        <span>Saturday - Sunday:<strong> 9am - 3pm</strong></span>
                      </div>
                    </div>
                  </div>
                  {/* footer widget end*/}
                  {/* footer widget*/}
                  <div className="col-md-3">
                    <div className="footer-widget fl-wrap">
                      <div className="footer-widget-title fl-wrap">
                        <h4>Helpful links</h4>
                      </div>
                      <ul className="footer-list fl-wrap">
                        <li><Link to="/aboutus">About Our Company</Link></li>
                        <li><Link to="/ourblogs">Our last News</Link></li>
                        <li><Link to="/pricing">Pricing Plans</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                        <li><Link to="/help">Help Center</Link></li>
                      </ul>
                    </div>
                  </div>
                  {/* footer widget end*/}
                  {/* footer widget*/}
                  <div className="col-md-3">
                    <div className="footer-widget fl-wrap">
                      <div className="footer-widget-title fl-wrap">
                        <h4>Contacts Info</h4>
                      </div>
                      <ul className="footer-contacts fl-wrap">
                        <li><span><i className="fa fa-envelope" /> Mail :</span><a href="#" target="_blank">yourmail@domain.com</a></li>
                        <li> <span><i className="fa fa-map-marker" /> Adress :</span><a href="#" target="_blank">USA 27TH
                            Brooklyn NY</a></li>
                        <li><span><i className="fa fa-phone" /> Phone :</span><a href="#">+7(111)123456789</a></li>
                      </ul>
                      <div className="footer-social fl-wrap">
                        <ul>
                          <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                          <li><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
                          <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
                          <li><a href="#" target="_blank"><i className="fab fa-vk" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* footer widget end*/}
                  {/* footer widget*/}
                  <div className="col-md-3">
                    <div className="footer-widget fl-wrap">
                      <div className="footer-widget-title fl-wrap">
                        <h4>Download our API</h4>
                      </div>
                      <p>Start working with Homeradar that can provide everything you need </p>
                      <div className="api-links fl-wrap">
                        <a href="#" className="api-btn color-bg"><i className="fab fa-apple" /> App Store</a>
                        <a href="#" className="api-btn color-bg"><i className="fab fa-google-play" /> Play Market</a>
                      </div>
                    </div>
                  </div>
                  {/* footer widget end*/}
                </div>
              </div>
            </div>
            {/*sub-footer*/}
            <div className="sub-footer gray-bg fl-wrap">
              <div className="container">
                <div className="copyright"> © Homeradar 2022 . All rights reserved.</div>
                <div className="subfooter-nav">
                  <ul className="no-list-style">
                    <li><a href="#">Terms of use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Blog</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/*sub-footer end */}
          </footer>
    </>
  )
}

export default Footer2