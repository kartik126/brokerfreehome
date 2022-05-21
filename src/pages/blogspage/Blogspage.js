import React from "react";
import { Link } from "react-router-dom";
import Footer2 from "../../othercomponents/Footer2";
import Header from "../../othercomponents/Header";
function Blogspage() {
  return (
    <>
    <Header/>
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
                style={{backgroundImage:`url(${"./assets/images/all/4.jpg" })`}} 
               
                data-scrollax="properties: { translateY: '30%' }"
              />
            </div>
            <div className="container">
              <div className="section-title center-align big-title">
                <h2>
                  <span>Our last News</span>
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
                <a href="#">Home</a> <span>Blog</span>
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
          {/* col-list-wrap */}
          <div className="gray-bg small-padding fl-wrap">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="post-container fl-wrap">
                    {/* article> */}
                    <article className="post-article fl-wrap">
                      <div className="list-single-main-media fl-wrap">
                        <div className="single-slider-wrapper carousel-wrap fl-wrap">
                          <div className="single-slider fl-wrap carousel lightgallery">
                            {/*  slick-slide-item */}
                            <div className="slick-slide-item">
                              <div className="box-item">
                                <a
                                  href="images/all/blog/1.jpg"
                                  className="gal-link popup-image"
                                >
                                  <i className="fal fa-search" />
                                </a>
                                <img src="./assets/images/all/blog/1.jpg" alt="" />
                              </div>
                            </div>
                            {/*  slick-slide-item end */}
                            {/*  slick-slide-item */}
                            <div className="slick-slide-item">
                              <div className="box-item">
                                <a
                                  href="images/all/blog/2.jpg"
                                  className="gal-link popup-image"
                                >
                                  <i className="fal fa-search" />
                                </a>
                                <img src="./assets/images/all/blog/2.jpg" alt="" />
                              </div>
                            </div>
                            {/*  slick-slide-item end */}
                            {/*  slick-slide-item */}
                            <div className="slick-slide-item">
                              <div className="box-item">
                                <a
                                  href="images/all/blog/3.jpg"
                                  className="gal-link popup-image"
                                >
                                  <i className="fal fa-search" />
                                </a>
                                <img src="./assets/images/all/blog/3.jpg" alt="" />
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
                      </div>
                      <div className="list-single-main-item fl-wrap block_box">
                        <h2 className="post-opt-title">
                          <a href="blog-single.html">
                            Best House to Your Family .
                          </a>
                        </h2>
                        <p>
                          Ut euismod ultricies sollicitudin. Curabitur sed
                          dapibus nulla. Nulla eget iaculis lectus. Mauris ac
                          maximus neque. Nam in mauris quis libero sodales
                          eleifend. Morbi varius, nulla sit amet rutrum
                          elementum, est elit finibus tellus, ut tristique elit
                          risus at metus.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas in pulvinar neque. Nulla finibus
                          lobortis pulvinar. Donec a consectetur nulla. Nulla
                          posuere sapien vitae lectus suscipit, et pulvinar nisi
                          tincidunt...
                        </p>
                        <span className="fw-separator fl-wrap" />
                        <div className="post-author">
                          <a href="#">
                            <img src="./assets/images/avatar/5.jpg" alt="" />
                            <span>By , Alisa Noory</span>
                          </a>
                        </div>
                        <div className="post-opt">
                          <ul className="no-list-style">
                            <li>
                              <i className="fal fa-calendar" />{" "}
                              <span>15 April 2019</span>
                            </li>
                            <li>
                              <i className="fal fa-eye" /> <span>164</span>
                            </li>
                            <li>
                              <i className="fal fa-tags" /> <a href="#">Shop</a>{" "}
                              , <a href="#">Hotels</a>{" "}
                            </li>
                          </ul>
                        </div>
                        <a
                          href="blog-single.html"
                          className="btn color-bg float-btn small-btn"
                        >
                          Read more
                        </a>
                      </div>
                    </article>
                    {/* article end */}
                    {/* article> */}
                    <article className="post-article fl-wrap">
                      <div className="list-single-main-media fl-wrap">
                        <img
                          src="./assets/images/all/blog/4.jpg"
                          className="respimg"
                          alt=""
                        />
                      </div>
                      <div className="list-single-main-item fl-wrap block_box">
                        <h2 className="post-opt-title">
                          <a href="blog-single.html">
                            How to choose the right Agent.
                          </a>
                        </h2>
                        <p>
                          Ut euismod ultricies sollicitudin. Curabitur sed
                          dapibus nulla. Nulla eget iaculis lectus. Mauris ac
                          maximus neque. Nam in mauris quis libero sodales
                          eleifend. Morbi varius, nulla sit amet rutrum
                          elementum, est elit finibus tellus, ut tristique elit
                          risus at metus.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas in pulvinar neque. Nulla finibus
                          lobortis pulvinar. Donec a consectetur nulla. Nulla
                          posuere sapien vitae lectus suscipit, et pulvinar nisi
                          tincidunt...
                        </p>
                        <span className="fw-separator fl-wrap" />
                        <div className="post-author">
                          <a href="#">
                            <img src="./assets/images/avatar/5.jpg" alt="" />
                            <span>By , Alisa Noory</span>
                          </a>
                        </div>
                        <div className="post-opt">
                          <ul className="no-list-style">
                            <li>
                              <i className="fal fa-calendar" />{" "}
                              <span>15 April 2019</span>
                            </li>
                            <li>
                              <i className="fal fa-eye" /> <span>164</span>
                            </li>
                            <li>
                              <i className="fal fa-tags" /> <a href="#">Shop</a>{" "}
                              , <a href="#">Hotels</a>{" "}
                            </li>
                          </ul>
                        </div>
                        <a
                          href="blog-single.html"
                          className="btn color-bg float-btn small-btn"
                        >
                          Read more
                        </a>
                      </div>
                    </article>
                    {/* article end */}
                    {/* article> */}
                    <article className="post-article fl-wrap">
                      <div className="list-single-main-media fl-wrap">
                        <img
                          src="./assets/images/all/blog/2.jpg"
                          className="respimg"
                          alt=""
                        />
                      </div>
                      <div className="list-single-main-item fl-wrap block_box">
                        <h2 className="post-opt-title">
                          <a href="blog-single.html">
                            RealEstate Facts And Story
                          </a>
                        </h2>
                        <p>
                          Ut euismod ultricies sollicitudin. Curabitur sed
                          dapibus nulla. Nulla eget iaculis lectus. Mauris ac
                          maximus neque. Nam in mauris quis libero sodales
                          eleifend. Morbi varius, nulla sit amet rutrum
                          elementum, est elit finibus tellus, ut tristique elit
                          risus at metus.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas in pulvinar neque. Nulla finibus
                          lobortis pulvinar. Donec a consectetur nulla. Nulla
                          posuere sapien vitae lectus suscipit, et pulvinar nisi
                          tincidunt...
                        </p>
                        <span className="fw-separator fl-wrap" />
                        <div className="post-author">
                          <a href="#">
                            <img src="./assets/images/avatar/5.jpg" alt="" />
                            <span>By , Alisa Noory</span>
                          </a>
                        </div>
                        <div className="post-opt">
                          <ul className="no-list-style">
                            <li>
                              <i className="fal fa-calendar" />{" "}
                              <span>15 April 2019</span>
                            </li>
                            <li>
                              <i className="fal fa-eye" /> <span>164</span>
                            </li>
                            <li>
                              <i className="fal fa-tags" /> <a href="#">Shop</a>{" "}
                              , <a href="#">Hotels</a>{" "}
                            </li>
                          </ul>
                        </div>
                        <a
                          href="blog-single.html"
                          className="btn color-bg float-btn small-btn"
                        >
                          Read more
                        </a>
                      </div>
                    </article>
                    {/* article end */}
                    {/* pagination*/}
                    <div className="pagination">
                      <a href="#" className="prevposts-link">
                        <i className="fa fa-caret-left" />
                      </a>
                      <a href="#">1</a>
                      <a href="#" className="current-page">
                        2
                      </a>
                      <a href="#">3</a>
                      <a href="#">4</a>
                      <a href="#" className="nextposts-link">
                        <i className="fa fa-caret-right" />
                      </a>
                    </div>
                    {/* pagination end*/}
                  </div>
                </div>
                {/* col-md 8 end */}
                {/*  sidebar*/}
                <div className="col-md-4">
                  <div className="box-widget-wrap fl-wrap fixed-bar">
                    {/*box-widget*/}
                    <div className="box-widget fl-wrap">
                      <div className="search-widget fl-wrap">
                        <form action="#" className="fl-wrap custom-form">
                          <input
                            name="se"
                            id="se"
                            type="text"
                            className="search"
                            placeholder="Search.."
                            defaultValue
                          />
                          <button className="search-submit" id="submit_btn">
                            <i className="far fa-search" />
                          </button>
                        </form>
                      </div>
                    </div>
                    {/*box-widget end */}
                    {/*box-widget*/}
                    <div className="box-widget fl-wrap">
                      <div className="box-widget-title fl-wrap">
                        Popular Posts
                      </div>
                      <div className="box-widget-content fl-wrap">
                        {/*widget-posts*/}
                        <div className="widget-posts  fl-wrap">
                          <ul className="no-list-style">
                            <li>
                              <div className="widget-posts-img">
                                <a href="blog-single.html">
                                  <img src="./assets/images/all/blog/5.jpg" alt="" />
                                </a>
                              </div>
                              <div className="widget-posts-descr">
                                <h4>
                                  <a href="listing-single.html">
                                    Nullam dictum felis
                                  </a>
                                </h4>
                                <div className="geodir-category-location fl-wrap">
                                  <a href="#">
                                    <i className="fal fa-calendar" /> 27 Mar
                                    2020
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="widget-posts-img">
                                <a href="blog-single.html">
                                  <img src="./assets/images/all/blog/2.jpg" alt="" />
                                </a>
                              </div>
                              <div className="widget-posts-descr">
                                <h4>
                                  <a href="listing-single.html">
                                    Scrambled it to mak
                                  </a>
                                </h4>
                                <div className="geodir-category-location fl-wrap">
                                  <a href="#">
                                    <i className="fal fa-calendar" /> 12 May
                                    2020
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="widget-posts-img">
                                <a href="blog-single.html">
                                  <img src="./assets/images/all/blog/6.jpg" alt="" />
                                </a>{" "}
                              </div>
                              <div className="widget-posts-descr">
                                <h4>
                                  <a href="listing-single.html">
                                    Fermentum nis type
                                  </a>
                                </h4>
                                <div className="geodir-category-location fl-wrap">
                                  <a href="#">
                                    <i className="fal fa-calendar" />
                                    22 Feb 2020
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="widget-posts-img">
                                <a href="blog-single.html">
                                  <img src="./assets/images/all/blog/4.jpg" alt="" />
                                </a>{" "}
                              </div>
                              <div className="widget-posts-descr">
                                <h4>
                                  <a href="listing-single.html">
                                    Rutrum elementum
                                  </a>
                                </h4>
                                <div className="geodir-category-location fl-wrap">
                                  <a href="#">
                                    <i className="fal fa-calendar" /> 7 Mar 2019
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* widget-posts end*/}
                      </div>
                    </div>
                    {/*box-widget end */}
                    {/*box-widget*/}
                    <div className="box-widget fl-wrap">
                      <div className="box-widget-title fl-wrap">Categories</div>
                      <div className="box-widget-content fl-wrap">
                        <ul className="cat-item no-list-style">
                          <li>
                            <a href="#">Standard</a> <span>3</span>
                          </li>
                          <li>
                            <a href="#">Video</a> <span>6 </span>
                          </li>
                          <li>
                            <a href="#">Gallery</a> <span>12 </span>
                          </li>
                          <li>
                            <a href="#">Quotes</a> <span>4</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*box-widget end */}
                    {/*box-widget*/}
                    <div className="box-widget fl-wrap">
                      <div className="banner-widget fl-wrap">
                        <div className="bg-wrap bg-parallax-wrap-gradien">
                          <div
                            className="bg  "
                            data-bg="images/all/blog/1.jpg"
                          />
                        </div>
                        <div className="banner-widget_content">
                          <h5>Do you want to join our real estate network?</h5>
                          <a
                            href="#"
                            className="btn float-btn color-bg small-btn"
                          >
                            Become an Agent
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*box-widget end */}
                    {/*box-widget*/}
                    <div className="box-widget fl-wrap">
                      <div className="box-widget-title fl-wrap">Tags</div>
                      <div className="box-widget-content fl-wrap">
                        {/*tags*/}
                        <div
                          className="list-single-tags fl-wrap tags-stylwrap"
                          style={{ marginTop: "20px" }}
                        >
                          <a href="#">Hotel</a>
                          <a href="#">Hostel</a>
                          <a href="#">Room</a>
                          <a href="#">Spa</a>
                          <a href="#">Restourant</a>
                          <a href="#">Parking</a>
                        </div>
                        {/*tags end*/}
                      </div>
                    </div>
                    {/*box-widget end */}
                    {/*box-widget*/}
                    <div className="box-widget fl-wrap">
                      <div className="box-widget-title fl-wrap">Archive</div>
                      <div className="box-widget-content fl-wrap">
                        <ul className="cat-item cat-item_dec no-list-style">
                          <li>
                            <a href="#">March 2020</a>
                          </li>
                          <li>
                            <a href="#">May 2019</a>
                          </li>
                          <li>
                            <a href="#">January 2016</a>
                          </li>
                          <li>
                            <a href="#">Decemder 2018</a>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*box-widget end */}
                  </div>
                  {/* sidebar end*/}
                </div>
              </div>
            </div>
          </div>
          <div className="limit-box fl-wrap" />
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
                    <h3>
                      Sign up for newsletter and get latest news and update
                    </h3>
                  </div>
                </div>
                <div className="col-md-1" />
                <div className="col-md-5">
                  <div className="footer-widget fl-wrap">
                    <div className="subscribe-widget fl-wrap">
                      <div className="subcribe-form">
                        <form id="subscribe">
                          <input
                            className="enteremail fl-wrap"
                            name="email"
                            id="subscribe-email"
                            placeholder="Enter Your Email"
                            spellCheck="false"
                            type="text"
                          />
                          <button
                            type="submit"
                            id="subscribe-button"
                            className="subscribe-button color-bg"
                          >
                            {" "}
                            Subscribe
                          </button>
                          <label
                            htmlFor="subscribe-email"
                            className="subscribe-message"
                          />
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
    </>
  );
}

export default Blogspage;
