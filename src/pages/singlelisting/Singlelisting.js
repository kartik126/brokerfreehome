import React, { useEffect } from "react";
import Header from '../../othercomponents/Header'
import img from "../../assets/images/all/3.jpg" 
import avatar from "../../assets/images/avatar/1.jpg"
function Singlelisting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
    <Header/>
    <div id="wrapper">
        {/* content */}
        <div className="content">
          <div className="breadcrumbs fw-breadcrumbs top-smpar smpar fl-wrap">
            <div className="container">
              <div className="breadcrumbs-list">
                <a href="#">Home</a><a href="#">Listings</a><a href="#">New York</a><span>Property Single</span>
              </div>
              <div className="show-more-snopt smact"><i className="fal fa-ellipsis-v" /></div>
              <div className="show-more-snopt-tooltip">
                <a href="#sec15" className="custom-scroll-link"> <i className="fas fa-comment-alt" /> Write a review</a>
                <a href="#"> <i className="fas fa-exclamation-triangle" /> Report </a>
              </div>
              <a className="print-btn tolt" href="javascript:window.print()" data-microtip-position="bottom" data-tooltip="Print"><i className="fas fa-print" /></a>
              <a className="compare-top-btn tolt" data-microtip-position="bottom" data-tooltip="Compare" href="#"><i className="fas fa-random" /></a>
              <div className="like-btn"><i className="fas fa-heart" /> Save</div>
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
                          <li><a className="act-scrlink" href="#sec1"><i className="fal fa-info" /> </a><span>Details</span>
                          </li>
                          <li><a href="#sec2"><i className="fal fa-stars" /></a><span>Features</span></li>
                          <li><a href="#sec3"><i className="fal fa-bed" /></a><span>Rooms</span></li>
                          {/* <li><a href="#sec4"><i className="fal fa-video"></i></a><span>Video</span></li> */}
                          <li><a href="#sec5"><i className="fal fa-map-pin" /></a><span>Location</span></li>
                          {/* <li><a href="#sec6"><i className="fal fa-comment-alt-lines"></i></a><span>Reviews</span></li> */}
                        </ul>
                        <div className="progress-indicator">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                            <circle cx={16} cy={16} r="15.9155" className="progress-bar__background" />
                            <circle cx={16} cy={16} r="15.9155" className="progress-bar__progress
                                                            js-progress-bar" />
                          </svg>
                        </div>
                      </nav>
                    </div>
                    {/*  scroll-nav-wrap end*/}
                    {/*  list-single-opt_header*/}
                    <div className="list-single-opt_header fl-wrap">
                      <ul className="list-single-opt_header_cat">
                        <li><a href="#" className="cat-opt color-bg">Rent</a></li>
                        <li><a href="#" className="cat-opt blue-bg">Sale</a></li>
                        <li><a href="#" className="cat-opt color-bg">Apartment</a></li>
                      </ul>
                      <div className="share-holder hid-share">
                        <a href="#" className="share-btn showshare sfcs"> <i className="fas fa-share-alt" /> Share </a>
                        <div className="share-container  isShare" />
                      </div>
                    </div>
                    {/*  list-single-opt_header end */}
                    {/*  list-single-header-item*/}
                    <div className="list-single-header-item  fl-wrap" id="sec1">
                      <div className="row">
                        <div className="col-md-8">
                          <h1>House in Financial District <span className="verified-badge tolt" data-microtip-position="bottom" data-tooltip="Verified"><i className="fas fa-check" /></span>
                          </h1>
                          <div className="geodir-category-location fl-wrap">
                            <a href="#"><i className="fas fa-map-marker-alt" /> 70 Bright St New York, USA</a>
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
                        <div className="list-single-header-date"><span>Date:</span>20.05.2020</div>
                        <div className="list-single-stats">
                          <ul className="no-list-style">
                            <li><span className="viewed-counter"><i className="fas fa-eye" /> Viewed - 156 </span></li>
                            <li><span className="bookmark-counter"><i className="fas fa-heart" /> Bookmark - 24 </span></li>
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
                              <a href="images/all/1.jpg" className="gal-link popup-image"><i className="fal fa-search" /></a>
                              <img src={img} alt="" />
                            </div>
                          </div>
                          {/*  slick-slide-item end */}
                          {/*  slick-slide-item */}
                          <div className="slick-slide-item">
                            <div className="box-item">
                              <a href="images/all/2.jpg" className="gal-link popup-image"><i className="fal fa-search" /></a>
                              <img src={img} alt="" />
                            </div>
                          </div>
                          {/*  slick-slide-item end */}
                          {/*  slick-slide-item */}
                          <div className="slick-slide-item">
                            <div className="box-item">
                              <a href={img} className="gal-link popup-image"><i className="fal fa-search" /></a>
                              <img src={img} alt="" />
                            </div>
                          </div>
                          {/*  slick-slide-item end */}
                          {/*  slick-slide-item */}
                          <div className="slick-slide-item">
                            <div className="box-item">
                              <a href="images/all/4.jpg" className="gal-link popup-image"><i className="fal fa-search" /></a>
                              <img src="images/all/4.jpg" alt="" />
                            </div>
                          </div>
                          {/*  slick-slide-item end */}
                        </div>
                        <div className="swiper-button-prev ssw-btn"><i className="fas fa-caret-left" /></div>
                        <div className="swiper-button-next ssw-btn"><i className="fas fa-caret-right" /></div>
                      </div>
                      <div className="single-slider-wrapper fl-wrap">
                        <div className="slider-nav fl-wrap">
                          <div className="slick-slide-item"><img src={img} alt="" /></div>
                          <div className="slick-slide-item"><img src={img} alt="" /></div>
                          <div className="slick-slide-item"><img src={img} alt="" /></div>
                          <div className="slick-slide-item"><img src={img} alt="" /></div>
                          <div className="slick-slide-item"><img src={img} alt="" /></div>
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
                      {/* inline-facts  */}
                      <div className="inline-facts-wrap">
                        <div className="inline-facts">
                          <i className="fal fa-users" />
                          <h6>Accomodation</h6>
                          <span>6 Guest</span>
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
                    </div>
                    <div className="list-single-main-container fl-wrap">
                      {/* list-single-main-item */}
                      <div className="list-single-main-item fl-wrap">
                        <div className="list-single-main-item-title">
                          <h3>About This Listing</h3>
                        </div>
                        <div className="list-single-main-item_content fl-wrap">
                          <p>Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id
                            ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor.
                            Vivamus adipiscing eros quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant
                            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec velit non
                            odio aliquam suscipit. Sed non neque faucibus, condimentum lectus at, accumsan enim. </p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla
                            finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                            suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla
                            diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a
                            consequat purus viverra.</p>
                          <a href="#" className="btn float-btn color-bg">Visit Website</a>
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
                              <li><span>Property Id:</span>154</li>
                              <li><span>Property Lot Size:</span>850 m2</li>
                              <li><span>Bathrooms:</span>4</li>
                              <li><span>Rooms:</span>8</li>
                              <li><span>Bedrooms:</span>2</li>
                              <li><span>Garage Size:</span>2 cars</li>
                              <li><span>Available from:</span>25.05.2020</li>
                              <li><span>Price:</span>$ 50.500.00</li>
                              <li><span>Type:</span>Apartment/House</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* list-single-main-item end */}
                      {/*   list-single-main-item */}
                      <div className="list-single-main-item fl-wrap" id="sec3">
                        <div className="list-single-main-item-title fl-wrap">
                          <h3>Available Rooms</h3>
                        </div>
                        {/*   rooms-container */}
                        <div className="rooms-container fl-wrap">
                          {/*  rooms-item */}
                          <div className="rooms-item fl-wrap">
                            <div className="rooms-media">
                              <img src={img} alt="" />
                              <div className="dynamic-gal more-photos-button color-bg" data-dynamicpath="[{'src': 'images/all/10.jpg'}, {'src': 'images/all/2.jpg'},{'src': 'images/all/3.jpg'}]">
                                <i className="fas fa-camera" /> <span>3 photos</span> </div>
                            </div>
                            <div className="rooms-details">
                              <div className="rooms-details-header fl-wrap">
                                <span className="rooms-area">44<strong> / sq ft</strong></span>
                                <h3>Standard Family Room</h3>
                                <h5>Additional Rooms: <span>Guest Bath</span></h5>
                              </div>
                              <p>Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit
                                risus at metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <div className="facilities-list fl-wrap">
                                <ul>
                                  <li className="tolt" data-microtip-position="top" data-tooltip="Air conditioner"><i className="fal fa-snowflake" /></li>
                                  <li className="tolt" data-microtip-position="top" data-tooltip="Tv Inside"><i className="fal fa-tv" /> </li>
                                  <li className="tolt" data-microtip-position="top" data-tooltip="Bed Inside"><i className="fal fa-bed" /></li>
                                  <li className="tolt" data-microtip-position="top" data-tooltip="Fireplace"><i className="fal fa-fireplace" /> </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/*  rooms-item end */}
                          {/*  rooms-item */}
                          <div className="rooms-item fl-wrap">
                            <div className="rooms-media">
                              <img src={img} alt="" />
                              <div className="dynamic-gal more-photos-button color-bg" data-dynamicpath="[{'src': 'images/all/11.jpg'}, {'src': 'images/all/12.jpg'} ]"><i className="fas fa-camera" /> <span>2 photos</span> </div>
                            </div>
                            <div className="rooms-details">
                              <div className="rooms-details-header fl-wrap">
                                <span className="rooms-area">18<strong> / sq ft</strong></span>
                                <h3>Modern Bathroom</h3>
                                <h5>Additional Rooms: <span>Sauna</span></h5>
                              </div>
                              <p>Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit
                                risus at metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <div className="facilities-list fl-wrap">
                                <ul>
                                  <li className="tolt" data-microtip-position="top" data-tooltip="Ceramic bath"><i className="fal fa-bath" /></li>
                                  <li className="tolt" data-microtip-position="top" data-tooltip="Multifunctional Shower"><i className="fal fa-shower" /></li>
                                  <li className="tolt" data-microtip-position="top" data-tooltip="Sauna"> <i className="fal fa-hot-tub" /></li>
                                  <li className="tolt" data-microtip-position="top" data-tooltip="Panoramic windows"><i className="fal fa-columns" /></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/*  rooms-item end */}
                          {/*  rooms-item */}
                          <div className="rooms-item fl-wrap">
                            <div className="rooms-media">
                              <img src={img} alt="" />
                              <div className="dynamic-gal more-photos-button color-bg" data-dynamicpath="[{'src': 'images/all/13.jpg'}, {'src': 'images/all/14.jpg'},{'src': 'images/all/15.jpg'}]">
                                <i className="fas fa-camera" /> <span>3 photos</span> </div>
                            </div>
                            <div className="rooms-details">
                              <div className="rooms-details-header fl-wrap">
                                <span className="rooms-area">27<strong> / sq ft</strong></span>
                                <h3>Spacious Kitchen</h3>
                                <h5>Additional Rooms: <span>Pantry</span></h5>
                              </div>
                              <p>Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit
                                risus at metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <div className="facilities-list fl-wrap">
                                <ul>
                                  <li className="tolt" data-microtip-position="top" data-tooltip="Microwave"><i className="fal fa-washer" /> </li>
                                  <li className="tolt" data-microtip-position="top" data-tooltip="Panoramic Windows"><i className="fal fa-columns" /></li>
                                  <li className="tolt" data-microtip-position="top" data-tooltip="Refrigerator"><i className="fal fa-temperature-frigid" /></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/*  rooms-item end */}
                        </div>
                        {/*   rooms-container end */}
                      </div>
                      {/* list-single-main-item end */}
                      {/* list-single-main-item */}
                      <div className="list-single-main-item fl-wrap">
                        <div className="list-single-main-item-title">
                          <h3>Features</h3>
                        </div>
                        <div className="list-single-main-item_content fl-wrap">
                          <div className="listing-features ">
                            <ul>
                              <li><a href="#"><i className="fal fa-dumbbell" /> Gym</a></li>
                              <li><a href="#"><i className="fal fa-wifi" /> Wi Fi</a></li>
                              <li><a href="#"><i className="fal fa-parking" /> Parking</a></li>
                              <li><a href="#"><i className="fal fa-cloud" /> Air Conditioned</a></li>
                              <li><a href="#"><i className="fal fa-swimmer" /> Pool</a></li>
                              <li><a href="#"><i className="fal fa-cctv" /> Security</a></li>
                              <li><a href="#"><i className="fal fa-washer" /> Laundry Room</a></li>
                              <li><a href="#"><i className="fal fa-utensils" /> Equipped Kitchen</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* list-single-main-item end */}
                      {/* list-single-main-item */}
                      <div className="list-single-main-item fw-lmi fl-wrap" id="sec5">
                        <div className="map-container mapC_vis mapC_vis2">
                          <div id="singleMap" data-latitude="40.7427837" data-longitude="-73.11445617675781" data-maptitle="Our Location" data-infotitle="House in Financial Distric" data-infotext="70 Bright St New York, USA" />
                          <div className="scrollContorl" />
                        </div>
                        <input id="pac-input" className="controls fl-wrap controls-mapwn" autoComplete="on" type="text" placeholder="What Nearby? Schools, Gym... " defaultValue />
                      </div>
                      {/* list-single-main-item end */}
                    </div>
                  </div>
                </div>
                {/* listing-single content end*/}
                {/* sidebar */}
                <div className="col-md-4">
                  {/*box-widget*/}
                  <div className="box-widget fl-wrap">
                    <div className="profile-widget">
                      <div className="profile-widget-header color-bg smpar fl-wrap">
                        <div className="pwh_bg" />
                        <div className="call-btn"><a href="tel:123-456-7890" className="tolt color-bg" data-microtip-position="right" data-tooltip="Call Now"><i className="fas fa-phone-alt" /></a>
                        </div>
                        <div className="box-widget-menu-btn smact"><i className="far fa-ellipsis-h" /></div>
                        <div className="show-more-snopt-tooltip bxwt">
                          <a href="#"> <i className="fas fa-comment-alt" /> Write a review</a>
                          <a href="#"> <i className="fas fa-exclamation-triangle" /> Report </a>
                        </div>
                        <div className="profile-widget-card">
                          <div className="profile-widget-image">
                            <img src={avatar} alt="" />
                          </div>
                          <div className="profile-widget-header-title">
                            <h4><a href="agent-single.html">Jessie Wilcox</a></h4>
                            <div className="clearfix" />
                            <div className="pwh_counter"><span>22</span>Property Listings</div>
                            <div className="clearfix" />
                            <div className="listing-rating card-popup-rainingvis" data-starrating2={4} />
                          </div>
                        </div>
                      </div>
                      <div className="profile-widget-content fl-wrap">
                        <div className="contats-list fl-wrap">
                          <ul className="no-list-style">
                            <li><span><i className="fal fa-phone" /> Phone :</span> <a href="#">+7(123)987654</a></li>
                            <li><span><i className="fal fa-envelope" /> Mail :</span> <a href="#">JessieWilcox@domain.com</a></li>
                            <li><span><i className="fal fa-browser" /> Website :</span> <a href="#">themeforest.net</a></li>
                          </ul>
                        </div>
                        <div className="profile-widget-footer fl-wrap">
                          <a href="agent-single.html" className="btn float-btn color-bg small-btn">View Profile</a>
                          <a href="#sec-contact" className="custom-scroll-a hreflt" data-microtip-position="left" data-tooltip="Viewing Property"><i className="fal fa-paper-plane" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*box-widget end */}
                  {/*box-widget*/}
                  <div className="box-widget fl-wrap hidden-section" style={{marginTop: '30px'}}>
                    <div className="box-widget-content fl-wrap color-bg">
                      <div className="color-form reset-action">
                        <div className="color-form-title fl-wrap">
                          <h4>Calculate Your Mortgage</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere convallis purus non
                            cursus. </p>
                        </div>
                        <form method="post" name="mortgage-form">
                          <div className="fl-wrap">
                            <label htmlFor="amt">Loan Amount </label>
                            <input id="amt" name="amt" type="text" placeholder={0} defaultValue={0} />
                            <div className="use-current-price tolt" data-microtip-position="left" data-tooltip="Use current price"><i className="fal fa-tag" /></div>
                          </div>
                          <label htmlFor="apr">Percentage rate</label>
                          <div className="price-rage-item fl-wrap">
                            <input type="text" id="apr" name="apr" className="price-range" data-min={0} data-max={100} data-step={1} defaultValue={0} data-prefix="%" />
                          </div>
                          <label htmlFor="trm">Loan Term (Years) </label>
                          <div className="price-rage-item fl-wrap">
                            <input type="text" id="trm" name="trm" className="price-range" data-min={0} data-max={5} data-step={1} defaultValue={0} data-prefix="Y" />
                          </div>
                          <div className="clearfix" />
                          <button type="button" id="sbt" className="color2-bg">Calculate</button>
                          <div className="reset-form reset-btn"> <i className="far fa-sync-alt" /> Reset Form</div>
                          <div className="monterage-title fl-wrap">
                            <h5>Monthly payment:</h5>
                            <input type="text" id="pmt" name="mPmt" defaultValue={0} />
                            <div className="monterage-title-item">$<span /></div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/*box-widget end */}
                  {/*box-widget*/}
                  <div className="box-widget fl-wrap">
                    <div className="box-widget-title fl-wrap">Propertie Documents</div>
                    <div className="box-widget-content fl-wrap">
                      <div className="bwc_download-list">
                        <a href="#" download><span><i className="fal fa-file-pdf" /></span>Property Presentation</a>
                        <a href="#" download><span><i className="fal fa-file-word" /></span>Energetic Certificate</a>
                        <a href="#" download><span><i className="fal fa-file-pdf" /></span>Property Plans</a>
                      </div>
                    </div>
                  </div>
                  {/*box-widget end */}
                  {/*box-widget*/}
                  <div className="box-widget fl-wrap">
                    <div className="box-widget-fixed-init fl-wrap" id="sec-contact">
                      <div className="box-widget-title fl-wrap box-widget-title-color color-bg">Contact Property</div>
                      <div className="box-widget-content fl-wrap">
                        <div className="custom-form">
                          <form method="post" name="contact-property-form">
                            <label>Your name* <span className="dec-icon"><i className="fas fa-user" /></span></label>
                            <input name="phone" type="text"  defaultValue />
                            <label>Your phone * <span className="dec-icon"><i className="fas fa-phone" /></span></label>
                            <input name="phone" type="text"  defaultValue />
                            <div className="row">
                              <div className="col-sm-6">
                                <label>Date <span className="dec-icon"><i className="fas fa-calendar-check" /></span></label>
                                <div className="date-container fl-wrap">
                                  <input type="text" placeholder style={{padding: '16px 5px 16px 60px'}} name="datepicker-here" defaultValue />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <label>Time </label>
                                <select data-placeholder="9 AM" className="chosen-select on-radius no-search-select">
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
                            <button type="submit" className="btn float-btn color-bg fw-btn"> Send</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*box-widget end */}
                </div>
                {/*  sidebar end*/}
              </div>
              <div className="fl-wrap limit-box" />
              <div className="listing-carousel-wrapper carousel-wrap fl-wrap">
                <div className="list-single-main-item-title">
                  <h3>Similar Properties</h3>
                </div>
                <div className="listing-carousel carousel ">
                  {/* slick-slide-item */}
                  <div className="slick-slide-item">
                    {/* listing-item */}
                    <div className="listing-item">
                      <article className="geodir-category-listing fl-wrap">
                        <div className="geodir-category-img fl-wrap">
                          <a href="listing-single.html" className="geodir-category-img_item">
                            <img src={img} alt="" />
                            <div className="overlay" />
                          </a>
                          <div className="geodir-category-location">
                            <a href="#4" className="map-item"><i className="fas fa-map-marker-alt" /> 70 Bright St New York,
                              USA</a>
                          </div>
                          <ul className="list-single-opt_header_cat">
                            <li><a href="#" className="cat-opt blue-bg">Sale</a></li>
                            <li><a href="#" className="cat-opt color-bg">Apartment</a></li>
                          </ul>
                          <a href="#" className="geodir_save-btn tolt" data-microtip-position="left" data-tooltip="Save"><span><i className="fal fa-heart" /></span></a>
                          <a href="#" className="compare-btn tolt" data-microtip-position="left" data-tooltip="Compare"><span><i className="fal fa-random" /></span></a>
                          <div className="geodir-category-listing_media-list">
                            <span><i className="fas fa-camera" /> 8</span>
                          </div>
                        </div>
                        <div className="geodir-category-content fl-wrap">
                          <h3><a href="listing-single.html">Gorgeous house for sale</a></h3>
                          <div className="geodir-category-content_price">$ 600,000</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla
                            finibus lobortis pulvinar. Donec a consectetur nulla.</p>
                          <div className="geodir-category-content-details">
                            <ul>
                              <li><i className="fal fa-bed" /><span>3</span></li>
                              <li><i className="fal fa-bath" /><span>2</span></li>
                              <li><i className="fal fa-cube" /><span>450 ft2</span></li>
                            </ul>
                          </div>
                          <div className="geodir-category-footer fl-wrap">
                            <a href="agent-single.html" className="gcf-company"><img src={avatar} alt="" /><span>By
                                Liza Rose</span></a>
                            <div className="listing-rating card-popup-rainingvis tolt" data-microtip-position="top" data-tooltip="Good" data-starrating2={4} />
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* listing-item end*/}
                  </div>
                  {/* slick-slide-item end*/}
                  {/* slick-slide-item */}
                  <div className="slick-slide-item">
                    {/* listing-item */}
                    <div className="listing-item">
                      <article className="geodir-category-listing fl-wrap">
                        <div className="geodir-category-img fl-wrap">
                          <a href="listing-single.html" className="geodir-category-img_item">
                            <img src={img} alt="" />
                            <div className="overlay" />
                          </a>
                          <div className="geodir-category-location">
                            <a href="#4" className="map-item"><i className="fas fa-map-marker-alt" /> 40 Journal Square , NJ,
                              USA</a>
                          </div>
                          <ul className="list-single-opt_header_cat">
                            <li><a href="#" className="cat-opt blue-bg">Sale</a></li>
                            <li><a href="#" className="cat-opt color-bg">Apartment</a></li>
                          </ul>
                          <a href="#" className="geodir_save-btn tolt" data-microtip-position="left" data-tooltip="Save"><span><i className="fal fa-heart" /></span></a>
                          <a href="#" className="compare-btn tolt" data-microtip-position="left" data-tooltip="Compare"><span><i className="fal fa-random" /></span></a>
                          <div className="geodir-category-listing_media-list">
                            <span><i className="fas fa-camera" /> 47</span>
                          </div>
                        </div>
                        <div className="geodir-category-content fl-wrap">
                          <h3><a href="listing-single.html">Luxury Family Home</a></h3>
                          <div className="geodir-category-content_price">$ 300,000</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla
                            finibus lobortis pulvinar. Donec a consectetur nulla.</p>
                          <div className="geodir-category-content-details">
                            <ul>
                              <li><i className="fal fa-bed" /><span>4</span></li>
                              <li><i className="fal fa-bath" /><span>2</span></li>
                              <li><i className="fal fa-cube" /><span>460 ft2</span></li>
                            </ul>
                          </div>
                          <div className="geodir-category-footer fl-wrap">
                            <a href="agent-single.html" className="gcf-company"><img src={avatar} alt="" /><span>By
                                Anna Lips</span></a>
                            <div className="listing-rating card-popup-rainingvis tolt" data-microtip-position="top" data-tooltip="Excellent" data-starrating2={5} />
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* listing-item end*/}
                  </div>
                  {/* slick-slide-item end*/}
                  {/* slick-slide-item */}
                  <div className="slick-slide-item">
                    {/* listing-item */}
                    <div className="listing-item">
                      <article className="geodir-category-listing fl-wrap">
                        <div className="geodir-category-img fl-wrap">
                          <a href="listing-single.html" className="geodir-category-img_item">
                            <img src={img} alt="" />
                            <div className="overlay" />
                          </a>
                          <div className="geodir-category-location">
                            <a href="#4" className="map-item"><i className="fas fa-map-marker-alt" /> 34-42 Montgomery St , NY,
                              USA</a>
                          </div>
                          <ul className="list-single-opt_header_cat">
                            <li><a href="#" className="cat-opt blue-bg">Sale</a></li>
                            <li><a href="#" className="cat-opt color-bg">Apartment</a></li>
                          </ul>
                          <a href="#" className="geodir_save-btn tolt" data-microtip-position="left" data-tooltip="Save"><span><i className="fal fa-heart" /></span></a>
                          <a href="#" className="compare-btn tolt" data-microtip-position="left" data-tooltip="Compare"><span><i className="fal fa-random" /></span></a>
                          <div className="geodir-category-listing_media-list">
                            <span><i className="fas fa-camera" /> 4</span>
                          </div>
                        </div>
                        <div className="geodir-category-content fl-wrap">
                          <h3><a href="listing-single.html">Gorgeous house for sale</a></h3>
                          <div className="geodir-category-content_price">$ 120,000</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla
                            finibus lobortis pulvinar. Donec a consectetur nulla.</p>
                          <div className="geodir-category-content-details">
                            <ul>
                              <li><i className="fal fa-bed" /><span>2</span></li>
                              <li><i className="fal fa-bath" /><span>1</span></li>
                              <li><i className="fal fa-cube" /><span>220 ft2</span></li>
                            </ul>
                          </div>
                          <div className="geodir-category-footer fl-wrap">
                            <a href="agent-single.html" className="gcf-company"><img src={avatar} alt="" /><span>By
                                Mark Frosty</span></a>
                            <div className="listing-rating card-popup-rainingvis tolt" data-microtip-position="top" data-tooltip="Good" data-starrating2={4} />
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* listing-item end*/}
                  </div>
                  {/* slick-slide-item end*/}
                  {/* slick-slide-item */}
                  <div className="slick-slide-item">
                    {/* listing-item */}
                    <div className="listing-item">
                      <article className="geodir-category-listing fl-wrap">
                        <div className="geodir-category-img fl-wrap">
                          <a href="listing-single.html" className="geodir-category-img_item">
                            <img src={img} alt="" />
                            <div className="overlay" />
                          </a>
                          <div className="geodir-category-location">
                            <a href="#4" className="map-item"><i className="fas fa-map-marker-alt" /> W 85th St, New York, USA
                            </a>
                          </div>
                          <ul className="list-single-opt_header_cat">
                            <li><a href="#" className="cat-opt blue-bg">Sale</a></li>
                            <li><a href="#" className="cat-opt color-bg">Apartment</a></li>
                          </ul>
                          <a href="#" className="geodir_save-btn tolt" data-microtip-position="left" data-tooltip="Save"><span><i className="fal fa-heart" /></span></a>
                          <a href="#" className="compare-btn tolt" data-microtip-position="left" data-tooltip="Compare"><span><i className="fal fa-random" /></span></a>
                          <div className="geodir-category-listing_media-list">
                            <span><i className="fas fa-camera" /> 13</span>
                          </div>
                        </div>
                        <div className="geodir-category-content fl-wrap">
                          <h3><a href="listing-single.html">Contemporary Apartment</a></h3>
                          <div className="geodir-category-content_price">$ 1,600,000</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla
                            finibus lobortis pulvinar. Donec a consectetur nulla.</p>
                          <div className="geodir-category-content-details">
                            <ul>
                              <li><i className="fal fa-bed" /><span>4</span></li>
                              <li><i className="fal fa-bath" /><span>1</span></li>
                              <li><i className="fal fa-cube" /><span>550 ft2</span></li>
                            </ul>
                          </div>
                          <div className="geodir-category-footer fl-wrap">
                            <a href="agent-single.html" className="gcf-company"><img src={avatar} alt="" /><span>By
                                Bill Trust</span></a>
                            <div className="listing-rating card-popup-rainingvis tolt" data-microtip-position="top" data-tooltip="Excellent
                                                            " data-starrating2={5} />
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* listing-item end*/}
                  </div>
                  {/* slick-slide-item end*/}
                </div>
                <div className="swiper-button-prev lc-wbtn lc-wbtn_prev"><i className="far fa-angle-left" /></div>
                <div className="swiper-button-next lc-wbtn lc-wbtn_next"><i className="far fa-angle-right" /></div>
              </div>
            </div>
          </div>
        </div>
        {/* content end */}
        {/* subscribe-wrap */}
        {/* subscribe-wrap end */}
        {/* footer */}
        <footer className="main-footer fl-wrap">
          <div className="footer-inner fl-wrap">
            <div className="container">
              <div className="row">
                {/* footer widget*/}
                <div className="col-md-3">
                  <div className="footer-widget fl-wrap">
                    <div className="footer-widget-logo fl-wrap">
                      <img src="images/logo.png" alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus
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
                      <li><a href="about.html">About Our Company</a></li>
                      <li><a href="blog.html">Our last News</a></li>
                      <li><a href="pricing.html">Pricing Plans</a></li>
                      <li><a href="contacts.html">Contacts</a></li>
                      <li><a href="help.html">Help Center</a></li>
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
                      <li><span><i className="fal fa-envelope" /> Mail :</span><a href="#" target="_blank">yourmail@domain.com</a></li>
                      <li> <span><i className="fal fa-map-marker" /> Adress :</span><a href="#" target="_blank">USA 27TH
                          Brooklyn NY</a></li>
                      <li><span><i className="fal fa-phone" /> Phone :</span><a href="#">+7(111)123456789</a></li>
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
        {/* footer end */}
      </div>
    </>
  )
}

export default Singlelisting