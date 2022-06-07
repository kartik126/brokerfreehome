import React, { useEffect } from "react";
import Header from "../../othercomponents/Header";
import img from "../../assets/images/all/3.jpg";
import avatar from "../../assets/images/avatar/1.jpg";
import Footer from "../../othercomponents/Footer";
import BrowseProperty from "../../components/BrowseProperty";
import Map from "./Map";
function Singlelisting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <div id="wrapper">
        {/* content */}
        <div className="content">
          <div className="breadcrumbs fw-breadcrumbs top-smpar smpar fl-wrap">
            <div className="container">
              <div className="breadcrumbs-list">
                <a href="/">Home</a>
                <a href="#">Listings</a>
                <a href="#">New York</a>
                <span>Property Single</span>
              </div>
              <div className="show-more-snopt smact">
                <i className="fal fa-ellipsis-v" />
              </div>
              <div className="show-more-snopt-tooltip">
                <a href="#sec15" className="custom-scroll-link">
                  {" "}
                  <i className="fas fa-comment-alt" /> Write a review
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-exclamation-triangle" /> Report{" "}
                </a>
              </div>
              <a
                className="print-btn tolt"
                href="javascript:window.print()"
                data-microtip-position="bottom"
                data-tooltip="Print"
              >
                <i className="fas fa-print" />
              </a>
              <a
                className="compare-top-btn tolt"
                data-microtip-position="bottom"
                data-tooltip="Compare"
                href="#"
              >
                <i className="fas fa-random" />
              </a>
              <div className="like-btn">
                <i className="fas fa-heart" /> Save
              </div>
            </div>
          </div>
          <div className="gray-bg small-padding fl-wrap">
            <div className="container">
              <div className="row">
                {/*  listing-single content */}
                <div className="col-md-8">
                  <div className="list-single-main-wrapper fl-wrap">
                    {/*  scroll-nav-wrap */}
                    <div className="scroll-nav-wrap">
                      <nav className="scroll-nav scroll-init fixed-column_menu-init">
                        <ul className="no-list-style">
                          <li>
                            <a className="act-scrlink" href="#sec1">
                              <i className="fal fa-info" />{" "}
                            </a>
                            <span>Details</span>
                          </li>
                          <li>
                            <a href="#sec2">
                              <i className="fal fa-stars" />
                            </a>
                            <span>Features</span>
                          </li>
                          <li>
                            <a href="#sec3">
                              <i className="fal fa-bed" />
                            </a>
                            <span>Rooms</span>
                          </li>
                          {/* <li><a href="#sec4"><i className="fal fa-video"></i></a><span>Video</span></li> */}
                          <li>
                            <a href="#sec5">
                              <i className="fal fa-map-pin" />
                            </a>
                            <span>Location</span>
                          </li>
                          {/* <li><a href="#sec6"><i className="fal fa-comment-alt-lines"></i></a><span>Reviews</span></li> */}
                        </ul>
                        <div className="progress-indicator">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-1 -1 34 34"
                          >
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
                      </nav>
                    </div>
                    {/*  scroll-nav-wrap end*/}
                    {/*  list-single-opt_header*/}
                    <div className="list-single-opt_header fl-wrap">
                      <ul className="list-single-opt_header_cat">
                        {/* <li>
                          <a href="#" className="cat-opt color-bg">
                            Rent
                          </a>
                        </li> */}
                        <li>
                          <a href="#" className="cat-opt blue-bg">
                            Sale
                          </a>
                        </li>
                        <li>
                          <a href="#" className="cat-opt color-bg">
                            Apartment
                          </a>
                        </li>
                      </ul>
                      <div className="share-holder hid-share">
                        <a href="#" className="share-btn showshare sfcs">
                          {" "}
                          <i className="fas fa-share-alt" /> Share{" "}
                        </a>
                        <div className="share-container  isShare" />
                      </div>
                    </div>
                    {/*  list-single-opt_header end */}
                    {/*  list-single-header-item*/}
                    <div className="list-single-header-item  fl-wrap" id="sec1">
                      <div className="row">
                        <div className="col-md-8">
                          <h1>
                            House in Financial District{" "}
                            <span
                              className="verified-badge tolt"
                              data-microtip-position="bottom"
                              data-tooltip="Verified"
                            >
                              <i className="fas fa-check" />
                            </span>
                          </h1>
                          <div className="geodir-category-location fl-wrap">
                            <a href="#">
                              <i className="fas fa-map-marker-alt" /> 70 Bright
                              St New York, USA
                            </a>
                            {/* <div className="listing-rating card-popup-rainingvis" data-starrating2="4"><span
                              className="re_stars-title">Good</span></div> */}
                          </div>
                        </div>
                        {/* <div className="col-md-4">
                        <a className="host-avatar-wrap" href="agent-single.html">
                          <span>By Jessie Wilcox</span>
                          <img src="images/avatar/1.jpg" alt="">
                        </a>
                      </div> */}
                      </div>
                      <div className="list-single-header-footer fl-wrap">
                        {/* <div className="list-single-header-price" data-propertyprise="50500">
                        <strong>Price:</strong><span>$</span>50.500</div> */}
                        <div className="list-single-header-date">
                          <h1 style={{ fontSize: "18px" }}> AED 200,000</h1>
                        </div>
                        <div className="list-single-stats">
                          <ul className="no-list-style">
                            <li>
                              <span className="viewed-counter">
                                <i className="fas fa-eye" /> Viewed - 156{" "}
                              </span>
                            </li>
                            <li>
                              <span className="bookmark-counter">
                                <i className="fas fa-heart" /> Bookmark - 24{" "}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="list-single-main-media fl-wrap">
                      <div className="single-slider-wrapper carousel-wrap fl-wrap">
                        <div className="slider-for fl-wrap carousel lightgallery">
                          {/*  slick-slide-item */}
                          <div className="slick-slide-item">
                            <div className="box-item">
                              <a
                                href="images/all/1.jpg"
                                className="gal-link popup-image"
                              >
                                <i className="fal fa-search" />
                              </a>
                              <img src={img} alt="" />
                            </div>
                          </div>
                          {/*  slick-slide-item end */}
                          {/*  slick-slide-item */}
                          <div className="slick-slide-item">
                            <div className="box-item">
                              <a
                                href="images/all/2.jpg"
                                className="gal-link popup-image"
                              >
                                <i className="fal fa-search" />
                              </a>
                              <img src={img} alt="" />
                            </div>
                          </div>
                          {/*  slick-slide-item end */}
                          {/*  slick-slide-item */}
                          <div className="slick-slide-item">
                            <div className="box-item">
                              <a href={img} className="gal-link popup-image">
                                <i className="fal fa-search" />
                              </a>
                              <img src={img} alt="" />
                            </div>
                          </div>
                          {/*  slick-slide-item end */}
                          {/*  slick-slide-item */}
                          <div className="slick-slide-item">
                            <div className="box-item">
                              <a
                                href="images/all/4.jpg"
                                className="gal-link popup-image"
                              >
                                <i className="fal fa-search" />
                              </a>
                              <img src="images/all/4.jpg" alt="" />
                            </div>
                          </div>
                          {/*  slick-slide-item end */}
                        </div>
                        <div className="swiper-button-prev ssw-btn">
                          <i className="fas fa-caret-left" />
                        </div>
                        <div className="swiper-button-next ssw-btn">
                          <i className="fas fa-caret-right" />
                        </div>
                      </div>
                      <div className="single-slider-wrapper fl-wrap">
                        <div className="slider-nav fl-wrap">
                          <div className="slick-slide-item">
                            <img src={img} alt="" />
                          </div>
                          <div className="slick-slide-item">
                            <img src={img} alt="" />
                          </div>
                          <div className="slick-slide-item">
                            <img src={img} alt="" />
                          </div>
                          <div className="slick-slide-item">
                            <img src={img} alt="" />
                          </div>
                          <div className="slick-slide-item">
                            <img src={img} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="list-single-facts fl-wrap">
                      {/* inline-facts */}
                      <div className="inline-facts-wrap">
                        <div className="inline-facts">
                          <i className="fal fa-home-lg" />
                          <h6>Type</h6>
                          <span>Apartment/ House</span>
                        </div>
                      </div>
                      {/* inline-facts end */}
                      {/* inline-facts */}
                      <div className="inline-facts-wrap">
                        <div className="inline-facts">
                          <i className="fal fa-bed" />
                          <h6>Bedrooms</h6>
                          <span>3 Bedrooms / 4 Beds</span>
                        </div>
                      </div>
                      {/* inline-facts end */}
                      {/* inline-facts */}
                      <div className="inline-facts-wrap">
                        <div className="inline-facts">
                          <i className="fal fa-bath" />
                          <h6>Bathrooms</h6>
                          <span>3 Full</span>
                        </div>
                      </div>
                      {/* inline-facts end */}
                      {/* inline-facts  */}
                      <div className="inline-facts-wrap">
                        <div className="inline-facts">
                          <i className="fal fa-users" />
                          <h6>Area</h6>
                          <span>555 sq.ft</span>
                        </div>
                      </div>
                      {/* inline-facts end */}
                    </div>
                    <div className="list-single-main-container fl-wrap">
                      {/* list-single-main-item */}
                      <div className="list-single-main-item fl-wrap">
                        <div className="list-single-main-item-title">
                          <h3>About This Listing</h3>
                        </div>
                        <div className="list-single-main-item_content fl-wrap">
                          <p>
                            Praesent eros turpis, commodo vel justo at, pulvinar
                            mollis eros. Mauris aliquet eu quam id ornare. Morbi
                            ac quam enim. Cras vitae nulla condimentum, semper
                            dolor non, faucibus dolor. Vivamus adipiscing eros
                            quis orci fringilla, sed pretium lectus viverra.
                            Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas. Donec
                            nec velit non odio aliquam suscipit. Sed non neque
                            faucibus, condimentum lectus at, accumsan enim.{" "}
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas in pulvinar neque. Nulla finibus
                            lobortis pulvinar. Donec a consectetur nulla. Nulla
                            posuere sapien vitae lectus suscipit, et pulvinar
                            nisi tincidunt. Aliquam erat volutpat. Curabitur
                            convallis fringilla diam sed aliquam. Sed tempor
                            iaculis massa faucibus feugiat. In fermentum
                            facilisis massa, a consequat purus viverra.
                          </p>
                          {/* <a href="#" className="btn float-btn color-bg">
                            Visit Website
                          </a> */}
                        </div>
                      </div>
                      {/* list-single-main-item end */}
                      {/* list-single-main-item */}
                      <div className="list-single-main-item fl-wrap" id="sec2">
                        <div className="list-single-main-item-title">
                          <h3>Details</h3>
                        </div>
                        <div className="list-single-main-item_content fl-wrap">
                          <div className="details-list">
                            <ul>
                              <li>
                                <span>Property Id:</span>154
                              </li>
                              <li>
                                <span>Status</span>Ready to Move
                              </li>
                              <li>
                                <span>Bathrooms:</span>4
                              </li>
                              <li>
                                <span>Rooms:</span>8
                              </li>
                              <li>
                                <span>Bedrooms:</span>2
                              </li>
                              <li>
                                <span>Garage Size:</span>2 cars
                              </li>
                              <li>
                                <span>Available from:</span>25.05.2020
                              </li>
                              <li>
                                <span>Furnishing</span>Semi-furnished
                              </li>
                              <li>
                                <span>Plot Area:</span>
                              </li>
                              <li>
                                <span>Built-up Area:</span>
                              </li>
                              <li>
                                <span>Rented:</span>
                              </li>
                              <li>
                                <span>Mortgage Status:</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* list-single-main-item end */}
                      {/*   list-single-main-item */}

                      {/* list-single-main-item end */}
                      {/* list-single-main-item */}
                      <div className="list-single-main-item fl-wrap">
                        <div className="list-single-main-item-title">
                          <h3>Features</h3>
                        </div>
                        <div className="list-single-main-item_content fl-wrap">
                          <div className="listing-features ">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fal fa-dumbbell" /> Gym
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fal fa-wifi" /> Wi Fi
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fal fa-parking" /> Parking
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fal fa-cloud" /> Air Conditioned
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fal fa-swimmer" /> Pool
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fal fa-washer" /> Laundry Room
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fal fa-washer" /> Laundry Room
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fal fa-utensils" /> Equipped
                                  Kitchen
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fal fa-dumbbell" /> Gym
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fal fa-wifi" /> Wi Fi
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fal fa-parking" /> Parking
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fal fa-cloud" /> Air Conditioned
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* list-single-main-item end */}
                      {/* list-single-main-item */}
                      <div>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.512379311034!2d78.14201641500884!3d30.3363849116772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390927f081a65de3%3A0x46a63023a7361ad6!2sMaldevta%20Road%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1654596268958!5m2!1sen!2sin"
                          height="300"
                          width="100%"
                          style={{border:"0"}}
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>

                      {/* <div
                        className="list-single-main-item fw-lmi fl-wrap"
                        id="sec5"
                      >
                      
                        <div className="map-container mapC_vis mapC_vis2">
                          <div
                            id="singleMap"
                            data-latitude="40.7427837"
                            data-longitude="-73.11445617675781"
                            data-maptitle="Our Location"
                            data-infotitle="House in Financial Distric"
                            data-infotext="70 Bright St New York, USA"
                          />
                          <div className="scrollContorl" />
                        </div>
                        <input
                          id="pac-input"
                          className="controls fl-wrap controls-mapwn"
                          autoComplete="on"
                          type="text"
                          placeholder="What Nearby? Schools, Gym... "
                          defaultValue
                        />
                      </div> */}
                      {/* list-single-main-item end */}
                    </div>
                  </div>
                </div>
                {/* listing-single content end*/}
                {/* sidebar */}
                <div className="col-md-4 ">
                  {/*box-widget*/}
                  <div className="col-md-4 side-info">
                    <h1>Broker Free Homes Savings !</h1>
                    <p>
                      Here’s how much you’ll save on commission on buying this
                      property through Broker Free Homes{" "}
                    </p>
                    <button>AED 4000</button>
                  </div>
                  {/*box-widget end */}
                  {/*box-widget*/}
                  <div
                    className="box-widget fl-wrap hidden-section"
                    style={{ marginTop: "30px" }}
                  >
                    <div className="box-widget-content fl-wrap color-bg">
                      <div className="color-form reset-action">
                        <div className="color-form-title fl-wrap">
                          <h4>Calculate Your Mortgage</h4>
                          <div>
                            <div className="hero-notifer fl-wrap-new">
                              <a
                                href="javascript:void(0)"
                                style={{ background: "#ffff", color: "#000" }}
                              >
                                Emirati
                              </a>
                            </div>
                            <div className="hero-notifer fl-wrap-new">
                              <a
                                href="javascript:void(0)"
                                style={{ background: "#ffff", color: "#000" }}
                              >
                                Expat
                              </a>
                            </div>
                          </div>

                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc posuere convallis purus non cursus.{" "}
                          </p> */}
                        </div>
                        <form method="post" name="mortgage-form">
                          <div className="fl-wrap">
                            <label htmlFor="amt">Loan Amount </label>
                            <input
                              id="amt"
                              name="amt"
                              type="text"
                              placeholder={0}
                              defaultValue={0}
                            />
                            <label htmlFor="amt">Loan Amount </label>
                            <input
                              id="amt"
                              name="amt"
                              type="text"
                              placeholder={0}
                              defaultValue={0}
                            />
                            <div
                              className="use-current-price tolt"
                              data-microtip-position="left"
                              data-tooltip="Use current price"
                            >
                              <i className="fal fa-tag" />
                            </div>
                          </div>
                          <label htmlFor="apr">Percentage rate</label>
                          <div className="price-rage-item fl-wrap">
                            <input
                              type="text"
                              id="apr"
                              name="apr"
                              className="price-range"
                              data-min={0}
                              data-max={100}
                              data-step={1}
                              defaultValue={0}
                              data-prefix="%"
                            />
                          </div>
                          <label htmlFor="trm">Loan Term (Years) </label>
                          <div className="price-rage-item fl-wrap">
                            <input
                              type="text"
                              id="trm"
                              name="trm"
                              className="price-range"
                              data-min={0}
                              data-max={5}
                              data-step={1}
                              defaultValue={0}
                              data-prefix="Y"
                            />
                          </div>
                          <div className="clearfix" />
                          <button type="button" id="sbt" className="color2-bg">
                            Calculate
                          </button>
                          <div className="reset-form reset-btn">
                            {" "}
                            <i className="far fa-sync-alt" /> Reset Form
                          </div>
                          <div className="monterage-title fl-wrap">
                            <h5>Monthly payment:</h5>
                            <input
                              type="text"
                              id="pmt"
                              name="mPmt"
                              defaultValue={0}
                            />
                            <div className="monterage-title-item">
                              $<span />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 contact_owner">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        /* justify-content: left; */
                        /* width: 100%; */
                        textAlign: "left",
                        padding: "15px",
                      }}
                    >
                      <h1 style={{ color: "#ffff", fontSize: "24px" }}>
                        Liked this Property?
                      </h1>
                      <h1
                        style={{
                          color: "#ffff",
                          fontSize: "27px",
                          fontWeight: "600",
                        }}
                      >
                        Contact Owner
                      </h1>
                    </div>
                    <div className=" contact-middle">
                      <button className="contact_btn">Message board</button>
                      <button className="contact_btn">Schedule Viewing</button>
                    </div>
                  </div>
                  {/*box-widget end */}
                  {/*box-widget*/}
                  {/* <div className="box-widget fl-wrap">
                    <div className="box-widget-title fl-wrap">
                      Propertie Documents
                    </div>
                    <div className="box-widget-content fl-wrap">
                      <div className="bwc_download-list">
                        <a href="#" download>
                          <span>
                            <i className="fal fa-file-pdf" />
                          </span>
                          Property Presentation
                        </a>
                        <a href="#" download>
                          <span>
                            <i className="fal fa-file-word" />
                          </span>
                          Energetic Certificate
                        </a>
                        <a href="#" download>
                          <span>
                            <i className="fal fa-file-pdf" />
                          </span>
                          Property Plans
                        </a>
                      </div>
                    </div>
                  </div> */}
                  {/*box-widget end */}
                  {/*box-widget*/}
                  {/* <div className="box-widget fl-wrap">
                    <div
                      className="box-widget-fixed-init fl-wrap"
                      id="sec-contact"
                    >
                      <div className="box-widget-title fl-wrap box-widget-title-color color-bg">
                        Contact Property
                      </div>
                      <div className="box-widget-content fl-wrap">
                        <div className="custom-form">
                          <form method="post" name="contact-property-form">
                            <label>
                              Your name*{" "}
                              <span className="dec-icon">
                                <i className="fas fa-user" />
                              </span>
                            </label>
                            <input name="phone" type="text" defaultValue />
                            <label>
                              Your phone *{" "}
                              <span className="dec-icon">
                                <i className="fas fa-phone" />
                              </span>
                            </label>
                            <input name="phone" type="text" defaultValue />
                            <div className="row">
                              <div className="col-sm-6">
                                <label>
                                  Date{" "}
                                  <span className="dec-icon">
                                    <i className="fas fa-calendar-check" />
                                  </span>
                                </label>
                                <div className="date-container fl-wrap">
                                  <input
                                    type="text"
                                    placeholder
                                    style={{ padding: "16px 5px 16px 60px" }}
                                    name="datepicker-here"
                                    defaultValue
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <label>Time </label>
                                <select
                                  data-placeholder="9 AM"
                                  className="chosen-select on-radius no-search-select"
                                >
                                  <option>9 AM</option>
                                  <option>10 AM</option>
                                  <option>11 AM</option>
                                  <option>12 AM</option>
                                  <option>13 PM</option>
                                  <option>14 PM</option>
                                  <option>15 PM</option>
                                  <option>16 PM</option>
                                </select>
                              </div>
                            </div>
                            <button
                              type="submit"
                              className="btn float-btn color-bg fw-btn"
                            >
                              {" "}
                              Send
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/*box-widget end */}
                </div>
                {/*  sidebar end*/}
              </div>
              <div className="fl-wrap limit-box" />
              <BrowseProperty />
            </div>
          </div>
        </div>
        {/* content end */}
        {/* subscribe-wrap */}
        {/* subscribe-wrap end */}
        {/* footer */}
        <Footer />
        {/* footer end */}
      </div>
    </>
  );
}

export default Singlelisting;
