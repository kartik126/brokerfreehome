import React, { useEffect } from "react";
import Footer2 from "../../othercomponents/Footer2";
import Header from "../../othercomponents/Header";

function Termscondition() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <div>
        <div id="wrapper">
          {/* content */}
          <div className="content">
            {/*  section  */}
            <section
              className="hidden-section single-par2  "
              data-scrollax-parent="true"
            >
              <div className="bg-wrap bg-parallax-wrap-gradien">
                <div
                  className="bg par-elem "
                  style={{
                    backgroundImage: `url(${"./assets/Images/all/4.jpg"})`,
                  }}
                  data-scrollax="properties: { translateY: '30%' }"
                />
              </div>
              <div className="container">
                <div className="section-title center-align big-title">
                  <h2>
                    <span>Our Pricing Plans</span>
                  </h2>
                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    nec tincidunt arcu, sit amet fermentum sem.
                  </h4>
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
                  <a href="#">Home</a>
                  <a href="#">Pages</a> <span>Pricing Plans</span>
                </div>
                <div className="share-holder hid-share">
                  <a href="#" className="share-btn showshare sfcs">
                    {" "}
                    <i className="fas fa-share-alt" /> Share{" "}
                  </a>
                  <div className="share-container  isShare" />
                </div>
              </div>
            </div>
            {/* breadcrumbs end */}
            {/* section */}
            <section className="gray-bg small-padding ">
              <div className="container">
                <div className="pricing-switcher-header">
                  Simple Pricing For Everyone Users:
                </div>
                <div className="pricing-switcher">
                  <div className="fieldset color-bg">
                    <input
                      type="radio"
                      name="duration-1"
                      id="monthly-1"
                      className="tariff-toggle"
                      defaultChecked
                    />
                    <label htmlFor="monthly-1">Monthly Tariff</label>
                    <input
                      type="radio"
                      name="duration-1"
                      className="tariff-toggle"
                      id="yearly-1"
                    />
                    <label htmlFor="yearly-1">Yearly Tariff</label>
                    <span className="switch" />
                  </div>
                </div>
                <div className="clearfix" />
                <div className="row">
                  {/* pricing-column */}
                  <div className="col-md-3">
                    <div className="pricing-column fl-wrap">
                      <div className="pricing-header">
                        <h3>
                          <span>01.</span>Free
                        </h3>
                        <div className="price-num price-item fl-wrap">
                          <div className="price-num-item">
                            <span className="mouth-cont">
                              <span className="curen">$</span>0
                            </span>
                            <span className="year-cont">
                              <span className="curen">$</span>0
                            </span>
                          </div>
                          <div className="price-num-desc">
                            <span className="mouth-cont">Per Month</span>
                            <span className="year-cont">Per Year</span>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor amet, consectetur adipiscing elit.
                        </p>
                      </div>
                      <div className="pricing-content fl-wrap">
                        <ul className="no-list-style">
                          <li>One Listing</li>
                          <li className="not-included">90 Days Availability</li>
                          <li className="not-included">Non-Featured</li>
                          <li className="not-included">Limited Support</li>
                        </ul>
                        <a href="#" className="price-link color-bg fl-wrap">
                          Choose Free
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* pricing-column end */}
                  {/* pricing-column */}
                  <div className="col-md-3">
                    <div className="pricing-column fl-wrap">
                      <div className="pricing-header">
                        <h3>
                          <span>02.</span>Basic
                        </h3>
                        <div className="price-num price-item fl-wrap">
                          <div className="price-num-item">
                            <span className="mouth-cont">
                              <span className="curen">$</span>49
                            </span>
                            <span className="year-cont">
                              <span className="curen">$</span>530
                            </span>
                          </div>
                          <div className="price-num-desc">
                            <span className="mouth-cont">Per Month</span>
                            <span className="year-cont">Per Year</span>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor amet, consectetur adipiscing elit.
                        </p>
                      </div>
                      <div className="recomm-price color-bg">Recommended</div>
                      <div className="pricing-content fl-wrap">
                        <ul className="no-list-style">
                          <li>20 Listings</li>
                          <li>190 Days Availability</li>
                          <li>Non-Featured</li>
                          <li className="not-included">24/7 Support</li>
                        </ul>
                        <a href="#" className="price-link color-bg fl-wrap">
                          Choose Basic
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* pricing-column end */}
                  {/* pricing-column */}
                  <div className="col-md-3">
                    <div className="pricing-column fl-wrap">
                      <div className="pricing-header">
                        <h3>
                          <span>03.</span>Extended
                        </h3>
                        <div className="price-num price-item fl-wrap">
                          <div className="price-num-item">
                            <span className="mouth-cont">
                              <span className="curen">$</span>109
                            </span>
                            <span className="year-cont">
                              <span className="curen">$</span>1100
                            </span>
                          </div>
                          <div className="price-num-desc">
                            <span className="mouth-cont">Per Month</span>
                            <span className="year-cont">Per Year</span>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor amet, consectetur adipiscing elit.
                        </p>
                      </div>
                      <div className="pricing-content fl-wrap">
                        <ul className="no-list-style">
                          <li>Unlimited Listings</li>
                          <li>220 Days Availability</li>
                          <li>Non-Featured</li>
                          <li>Limited Support</li>
                        </ul>
                        <a href="#" className="price-link color-bg fl-wrap">
                          Choose Extended
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* pricing-column end */}
                  {/* pricing-column */}
                  <div className="col-md-3">
                    <div className="pricing-column fl-wrap">
                      <div className="pricing-header">
                        <h3>
                          <span>04.</span>Premium
                        </h3>
                        <div className="price-num price-item fl-wrap">
                          <div className="price-num-item">
                            <span className="mouth-cont">
                              <span className="curen">$</span>149
                            </span>
                            <span className="year-cont">
                              <span className="curen">$</span>1430
                            </span>
                          </div>
                          <div className="price-num-desc">
                            <span className="mouth-cont">Per Month</span>
                            <span className="year-cont">Per Year</span>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor amet, consectetur adipiscing elit.
                        </p>
                      </div>
                      <div className="pricing-content fl-wrap">
                        <ul className="no-list-style">
                          <li>Unlimited Listings</li>
                          <li>Lifetime Availability</li>
                          <li>Featured In Search Results</li>
                          <li>24/7 Support</li>
                        </ul>
                        <a href="#" className="price-link color-bg fl-wrap">
                          Choose Premium
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* pricing-column end */}
                </div>
              </div>
            </section>
            {/* section end*/}
          </div>
          {/* content end */}
          {/* subscribe-wrap */}
          {/* subscribe-wrap end */}
          {/* footer */}
          <Footer2 />
          {/* footer end */}
        </div>
        {/* wrapper end */}
        {/*register form */}
    
        {/*register form end */}
        {/*secondary-nav */}
        <div className="secondary-nav">
          <ul>
            <li>
              <a
                href="dashboard-add-listing.html"
                className="tolt"
                data-microtip-position="left"
                data-tooltip="Sell Property"
              >
                <i className="fal fa-truck-couch" />{" "}
              </a>
            </li>
            <li>
              <a
                href="listing.html"
                className="tolt"
                data-microtip-position="left"
                data-tooltip="Buy Property"
              >
                {" "}
                <i className="fal fa-shopping-bag" />
              </a>
            </li>
            <li>
              <a
                href="compare.html"
                className="tolt"
                data-microtip-position="left"
                data-tooltip="Your Compare"
              >
                <i className="fal fa-exchange" />
              </a>
            </li>
          </ul>
          <div className="progress-indicator">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
              <circle
                cx={16}
                cy={16}
                r="15.9155"
                className="progress-bar__background"
              />
              <circle
                cx={16}
                cy={16}
                r="15.9155"
                className="progress-bar__progress 
                            js-progress-bar"
              />
            </svg>
          </div>
        </div>
        {/*secondary-nav end */}
        <a className="to-top color-bg">
          <i className="fas fa-caret-up" />
        </a>
      </div>
    </>
  );
}

export default Termscondition;
