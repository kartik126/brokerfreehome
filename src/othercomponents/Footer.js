import { Link } from "react-router-dom";

function Footer() {

    return (
      <div>
        <footer className="main-footer fl-wrap">
          <div className="footer-inner fl-wrap">
            <div className="container">
              <div className="row">
                {/* <!-- footer widget--> */}
                <div className="col-md-3">
                  <div className="footer-widget fl-wrap">
                    <div className="footer-widget-logo fl-wrap">
                      <a href="/">
                        <img src="logo/logo.png" alt="" />
                      </a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas in pulvinar neque. Nulla finibus lobortis
                      pulvinar.
                    </p>
                    <div className="footer-social fl-wrap">
                      <ul>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-vk"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- footer widget end--> */}
                {/* <!-- footer widget--> */}
                <div className="col-md-3">
                  <div className="footer-widget fl-wrap">
                    <div className="footer-widget-title fl-wrap">
                      <h4>Helpful links</h4>
                    </div>
                    <ul className="footer-list fl-wrap">
                      <li>
                        <a href="/aboutus">About Us</a>
                      </li>
                      <li>
                        <a href="/faq">Faq's</a>
                      </li>
                      <li>
                        <a href="/termsandcondition">Terms & Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/contactus">Contacts</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- footer widget end--> */}
                {/* <!-- footer widget--> */}
                <div className="col-md-3">
                  <div className="footer-widget fl-wrap">
                    <div className="footer-widget-title fl-wrap">
                      <h4>Contacts Info</h4>
                    </div>
                    <ul className="footer-contacts fl-wrap">
                      <li>
                        <span>
                          <i className="fa fa-envelope"></i> Mail :
                        </span>
                        <a href="#" target="_blank">
                          yourmail@domain.com
                        </a>
                      </li>
                      <li>
                        {" "}
                        <span>
                          <i className="fa fa-map-marker"></i> Adress :
                        </span>
                        <a href="#" target="_blank">
                          USA 27TH Brooklyn NY
                        </a>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-phone"></i> Phone :
                        </span>
                        <a href="#">+7(111)123456789</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- footer widget end--> */}
                {/* <!-- footer widget--> */}
                <div className="col-md-3">
                  <div className="footer-widget fl-wrap">
                    <div className="footer-widget-title fl-wrap">
                      <h4>Download our API</h4>
                    </div>
                    <div className="api-links fl-wrap">
                      <a href="#" className="api-btn color-bg">
                        <i className="fab fa-apple"></i> App Store
                      </a>
                      <a href="#" className="api-btn color-bg">
                        <i className="fab fa-google-play"></i> Play Store
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- footer widget end--> */}
              </div>
            </div>
          </div>
          {/* <!--sub-footer--> */}
          <div className="sub-footer gray-bg fl-wrap">
            <div className="container">
              <div className="copyright">
                {" "}
                &#169; Broker Free Homes 2022 . All rights reserved.
              </div>
              <div className="subfooter-nav">
                <ul className="no-list-style">
                  <li>
                    <a href="#">Terms of use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!--sub-footer end --> */}
        </footer>
      </div>
    );
  
}

export default Footer;
