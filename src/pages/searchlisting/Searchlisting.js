import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../othercomponents/Header";

import img from "../../assets/images/all/3.jpg";
import Footer from "../../othercomponents/Footer";
import Searchfilter from "../../components/Searchfilter";

function Searchlisting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <div id="wrapper">
        {/* content */}
        <div className="content">
          {/*  section  */}
          {/* <section className="parallax-section single-par color-bg">
          <div className="container">
            <div className="section-title center-align big-title">
              <h2><span>Listings Without Map</span></h2>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet fermentum
                sem.</h4>
            </div>
          </div>
          <div className="pwh_bg"></div>
          <div className="mrb_pin vis_mr mrb_pin3 "></div>
          <div className="mrb_pin vis_mr mrb_pin4 "></div>
        </section> */}
          {/*  section  end*/}
          {/* breadcrumbs*/}
          {/* <div className="breadcrumbs fw-breadcrumbs sp-brd fl-wrap">
          <div className="container">
            <div className="breadcrumbs-list">
              <a href="/">Home</a><a href="#">Listings</a> <span>New York</span>
            </div>
            <div className="share-holder hid-share">
              <a href="#" className="share-btn showshare sfcs"> <i className="fas fa-share-alt"></i> Share </a>
              <div className="share-container  isShare"></div>
            </div>
          </div>
        </div> */}
          {/* breadcrumbs end */}
          {/* col-list-wrap */}
          <section className="gray-bg small-padding ">
            <div className="container">
              <div className="row">
                {/* search sidebar*/}
               <Searchfilter/>
                {/* search sidebar end*/}
                <div className="col-md-8">
                  {/* list-main-wrap-header*/}
                  <div className="list-main-wrap-header box-list-header fl-wrap">
                    {/* list-main-wrap-title*/}
                    <div className="list-main-wrap-title">
                      <h2>
                        Results For : <span>New York </span>
                        <strong>8</strong>
                      </h2>
                    </div>
                    {/* list-main-wrap-title end*/}
                    {/* list-main-wrap-opt*/}
                    <div className="list-main-wrap-opt">
                      {/* price-opt*/}
                      <div className="price-opt">
                        <span className="price-opt-title">Sort by:</span>
                        <div className="listsearch-input-item">
                          <select
                            data-placeholder="Popularity"
                            className="chosen-select no-search-select"
                          >
                            <option>Popularity</option>
                            <option>Average rating</option>
                            <option>Price: low to high</option>
                            <option>Price: high to low</option>
                          </select>
                        </div>
                      </div>
                      {/* price-opt end*/}
                      {/* price-opt*/}
                      <div className="grid-opt">
                        <ul className="no-list-style">
                          <li className="grid-opt_act">
                            <span
                              className="two-col-grid act-grid-opt tolt"
                              data-microtip-position="bottom"
                              data-tooltip="Grid View"
                            >
                              <i className="far fa-th" />
                            </span>
                          </li>
                          <li className="grid-opt_act">
                            <span
                              className="one-col-grid tolt"
                              data-microtip-position="bottom"
                              data-tooltip="List View"
                            >
                              <i className="far fa-list" />
                            </span>
                          </li>
                        </ul>
                      </div>
                      {/* price-opt end*/}
                    </div>
                    {/* list-main-wrap-opt end*/}
                  </div>
                  {/* list-main-wrap-header end*/}
                  {/* listing-item-wrap*/}
                  <div className="listing-item-container  box-list_ic fl-wrap">
                    <div className="row">
                      <div className="col-md-6" style={{paddingBottom:"100px"}}>
                        <div className="listing-item">
                          <article className="geodir-category-listing fl-wrap">
                            <div className="geodir-category-img fl-wrap">
                              <a
                                href="/singlelisting"
                                className="geodir-category-img_item"
                              >
                                <img src={img} alt="" />
                                <div className="overlay" />
                              </a>
                              <div className="geodir-category-location">
                                <a
                                  href="#"
                                  className="single-map-item tolt"
                                  data-newlatitude="40.72956781"
                                  data-newlongitude="-73.99726866"
                                  data-microtip-position="top-left"
                                  data-tooltip="On the map"
                                >
                                  <i className="fas fa-map-marker-alt" />{" "}
                                  <span> 70 Bright St New York, USA</span>
                                </a>
                              </div>
                              <ul className="list-single-opt_header_cat">
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
                              <a
                                href="#"
                                className="geodir_save-btn tolt"
                                data-microtip-position="left"
                                data-tooltip="Save"
                              >
                                <span>
                                  <i className="fal fa-heart" />
                                </span>
                              </a>
                              <div className="geodir-category-listing_media-list">
                                <span>
                                  <i className="fas fa-eye" /> 8
                                </span>
                              </div>
                            </div>
                            <div className="geodir-category-content fl-wrap">
                              <h3 className="title-sin_item">
                                <a href="listing-single3.html">
                                  Gorgeous House For Sale
                                </a>
                              </h3>
                              <div className="geodir-category-content_price">
                                $ 600,000
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas in pulvinar neque.
                                Nulla finibus lobortis pulvinar. Donec a
                                consectetur nulla.
                              </p>
                              <div className="geodir-category-content-details">
                                <ul>
                                  <li>
                                    <i className="fal fa-bed" />
                                    <span>3</span>
                                  </li>
                                  <li>
                                    <i className="fal fa-bath" />
                                    <span>2</span>
                                  </li>
                                  <li>
                                    <i className="fal fa-cube" />
                                    <span>450 ft2</span>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href>
                                      <i className="fal fa-bookmark" />
                                      <span>Owner</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="geodir-category-footer fl-wrap"
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                            
                                <a
                                  href="agent-single.html"
                                  className="gcf-company"
                                >
                                  <i
                                    className="fal fa-phone-alt"
                                    style={{ marginRight: "10px" }}
                                  />
                                  Schedule Viewing
                                </a>
                                <a
                                  href="agent-single.html"
                                  className="gcf-company"
                                >
                                  <i
                                    className="fal fa-phone-alt"
                                    style={{ marginRight: "10px" }}
                                  />
                                  Connect To Buy
                                </a>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="col-md-6" style={{paddingBottom:"100px"}}>
                        <div className="listing-item">
                          <article className="geodir-category-listing fl-wrap">
                            <div className="geodir-category-img fl-wrap">
                              <a
                                href="/singlelisting"
                                className="geodir-category-img_item"
                              >
                                <img src={img} alt="" />
                                <div className="overlay" />
                              </a>
                              <div className="geodir-category-location">
                                <a
                                  href="#"
                                  className="single-map-item tolt"
                                  data-newlatitude="40.72956781"
                                  data-newlongitude="-73.99726866"
                                  data-microtip-position="top-left"
                                  data-tooltip="On the map"
                                >
                                  <i className="fas fa-map-marker-alt" />{" "}
                                  <span> 70 Bright St New York, USA</span>
                                </a>
                              </div>
                              <ul className="list-single-opt_header_cat">
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
                              <a
                                href="#"
                                className="geodir_save-btn tolt"
                                data-microtip-position="left"
                                data-tooltip="Save"
                              >
                                <span>
                                  <i className="fal fa-heart" />
                                </span>
                              </a>
                              <div className="geodir-category-listing_media-list">
                                <span>
                                  <i className="fas fa-eye" /> 8
                                </span>
                              </div>
                            </div>
                            <div className="geodir-category-content fl-wrap">
                              <h3 className="title-sin_item">
                                <a href="listing-single3.html">
                                  Gorgeous House For Sale
                                </a>
                              </h3>
                              <div className="geodir-category-content_price">
                                $ 600,000
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas in pulvinar neque.
                                Nulla finibus lobortis pulvinar. Donec a
                                consectetur nulla.
                              </p>
                              <div className="geodir-category-content-details">
                                <ul>
                                  <li>
                                    <i className="fal fa-bed" />
                                    <span>3</span>
                                  </li>
                                  <li>
                                    <i className="fal fa-bath" />
                                    <span>2</span>
                                  </li>
                                  <li>
                                    <i className="fal fa-cube" />
                                    <span>450 ft2</span>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href>
                                      <i className="fal fa-bookmark" />
                                      <span>Owner</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="geodir-category-footer fl-wrap"
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                     <a
                                  href="agent-single.html"
                                  className="gcf-company"
                                >
                                  <i
                                    className="fal fa-phone-alt"
                                    style={{ marginRight: "10px" }}
                                  />
                                  Schedule Viewing
                                </a>
                                <a
                                  href="agent-single.html"
                                  className="gcf-company"
                                >
                                  <i
                                    className="fal fa-phone-alt"
                                    style={{ marginRight: "10px" }}
                                  />
                                  Connect To Buy
                                </a>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="col-md-6" style={{paddingBottom:"100px"}}>
                        <div className="listing-item">
                          <article className="geodir-category-listing fl-wrap">
                            <div className="geodir-category-img fl-wrap">
                              <a
                                href="/singlelisting"
                                className="geodir-category-img_item"
                              >
                                <img src={img} alt="" />
                                <div className="overlay" />
                              </a>
                              <div className="geodir-category-location">
                                <a
                                  href="#"
                                  className="single-map-item tolt"
                                  data-newlatitude="40.72956781"
                                  data-newlongitude="-73.99726866"
                                  data-microtip-position="top-left"
                                  data-tooltip="On the map"
                                >
                                  <i className="fas fa-map-marker-alt" />{" "}
                                  <span> 70 Bright St New York, USA</span>
                                </a>
                              </div>
                              <ul className="list-single-opt_header_cat">
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
                              <a
                                href="#"
                                className="geodir_save-btn tolt"
                                data-microtip-position="left"
                                data-tooltip="Save"
                              >
                                <span>
                                  <i className="fal fa-heart" />
                                </span>
                              </a>
                              <div className="geodir-category-listing_media-list">
                                <span>
                                  <i className="fas fa-eye" /> 8
                                </span>
                              </div>
                            </div>
                            <div className="geodir-category-content fl-wrap">
                              <h3 className="title-sin_item">
                                <a href="listing-single3.html">
                                  Gorgeous House For Sale
                                </a>
                              </h3>
                              <div className="geodir-category-content_price">
                                $ 600,000
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas in pulvinar neque.
                                Nulla finibus lobortis pulvinar. Donec a
                                consectetur nulla.
                              </p>
                              <div className="geodir-category-content-details">
                                <ul>
                                  <li>
                                    <i className="fal fa-bed" />
                                    <span>3</span>
                                  </li>
                                  <li>
                                    <i className="fal fa-bath" />
                                    <span>2</span>
                                  </li>
                                  <li>
                                    <i className="fal fa-cube" />
                                    <span>450 ft2</span>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href>
                                      <i className="fal fa-bookmark" />
                                      <span>Owner</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="geodir-category-footer fl-wrap"
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                     <a
                                  href="agent-single.html"
                                  className="gcf-company"
                                >
                                  <i
                                    className="fal fa-phone-alt"
                                    style={{ marginRight: "10px" }}
                                  />
                                  Schedule Viewing
                                </a>
                                <a
                                  href="agent-single.html"
                                  className="gcf-company"
                                >
                                  <i
                                    className="fal fa-phone-alt"
                                    style={{ marginRight: "10px" }}
                                  />
                                  Connect To Buy
                                </a>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="col-md-6" style={{paddingBottom:"100px"}}>
                        <div className="listing-item">
                          <article className="geodir-category-listing fl-wrap">
                            <div className="geodir-category-img fl-wrap">
                              <a
                                href="/singlelisting"
                                className="geodir-category-img_item"
                              >
                                <img src={img} alt="" />
                                <div className="overlay" />
                              </a>
                              <div className="geodir-category-location">
                                <a
                                  href="#"
                                  className="single-map-item tolt"
                                  data-newlatitude="40.72956781"
                                  data-newlongitude="-73.99726866"
                                  data-microtip-position="top-left"
                                  data-tooltip="On the map"
                                >
                                  <i className="fas fa-map-marker-alt" />{" "}
                                  <span> 70 Bright St New York, USA</span>
                                </a>
                              </div>
                              <ul className="list-single-opt_header_cat">
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
                              <a
                                href="#"
                                className="geodir_save-btn tolt"
                                data-microtip-position="left"
                                data-tooltip="Save"
                              >
                                <span>
                                  <i className="fal fa-heart" />
                                </span>
                              </a>
                              <div className="geodir-category-listing_media-list">
                                <span>
                                  <i className="fas fa-eye" /> 8
                                </span>
                              </div>
                            </div>
                            <div className="geodir-category-content fl-wrap">
                              <h3 className="title-sin_item">
                                <a href="listing-single3.html">
                                  Gorgeous House For Sale
                                </a>
                              </h3>
                              <div className="geodir-category-content_price">
                                $ 600,000
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas in pulvinar neque.
                                Nulla finibus lobortis pulvinar. Donec a
                                consectetur nulla.
                              </p>
                              <div className="geodir-category-content-details">
                                <ul>
                                  <li>
                                    <i className="fal fa-bed" />
                                    <span>3</span>
                                  </li>
                                  <li>
                                    <i className="fal fa-bath" />
                                    <span>2</span>
                                  </li>
                                  <li>
                                    <i className="fal fa-cube" />
                                    <span>450 ft2</span>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href>
                                      <i className="fal fa-bookmark" />
                                      <span>Owner</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="geodir-category-footer fl-wrap"
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                     <a
                                  href="agent-single.html"
                                  className="gcf-company"
                                >
                                  <i
                                    className="fal fa-phone-alt"
                                    style={{ marginRight: "10px" }}
                                  />
                                  Schedule Viewing
                                </a>
                                <a
                                  href="agent-single.html"
                                  className="gcf-company"
                                >
                                  <i
                                    className="fal fa-phone-alt"
                                    style={{ marginRight: "10px" }}
                                  />
                                  Connect To Buy
                                </a>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="col-md-6" style={{paddingBottom:"100px"}}>
                        <div className="listing-item">
                          <article className="geodir-category-listing fl-wrap">
                            <div className="geodir-category-img fl-wrap">
                              <a
                                href="/singlelisting"
                                className="geodir-category-img_item"
                              >
                                <img src={img} alt="" />
                                <div className="overlay" />
                              </a>
                              <div className="geodir-category-location">
                                <a
                                  href="#"
                                  className="single-map-item tolt"
                                  data-newlatitude="40.72956781"
                                  data-newlongitude="-73.99726866"
                                  data-microtip-position="top-left"
                                  data-tooltip="On the map"
                                >
                                  <i className="fas fa-map-marker-alt" />{" "}
                                  <span> 70 Bright St New York, USA</span>
                                </a>
                              </div>
                              <ul className="list-single-opt_header_cat">
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
                              <a
                                href="#"
                                className="geodir_save-btn tolt"
                                data-microtip-position="left"
                                data-tooltip="Save"
                              >
                                <span>
                                  <i className="fal fa-heart" />
                                </span>
                              </a>
                              <div className="geodir-category-listing_media-list">
                                <span>
                                  <i className="fas fa-eye" /> 8
                                </span>
                              </div>
                            </div>
                            <div className="geodir-category-content fl-wrap">
                              <h3 className="title-sin_item">
                                <a href="listing-single3.html">
                                  Gorgeous House For Sale
                                </a>
                              </h3>
                              <div className="geodir-category-content_price">
                                $ 600,000
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas in pulvinar neque.
                                Nulla finibus lobortis pulvinar. Donec a
                                consectetur nulla.
                              </p>
                              <div className="geodir-category-content-details">
                                <ul>
                                  <li>
                                    <i className="fal fa-bed" />
                                    <span>3</span>
                                  </li>
                                  <li>
                                    <i className="fal fa-bath" />
                                    <span>2</span>
                                  </li>
                                  <li>
                                    <i className="fal fa-cube" />
                                    <span>450 ft2</span>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href>
                                      <i className="fal fa-bookmark" />
                                      <span>Owner</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="geodir-category-footer fl-wrap"
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                     <a
                                  href="agent-single.html"
                                  className="gcf-company"
                                >
                                  <i
                                    className="fal fa-phone-alt"
                                    style={{ marginRight: "10px" }}
                                  />
                                  Schedule Viewing
                                </a>
                                <a
                                  href="agent-single.html"
                                  className="gcf-company"
                                >
                                  <i
                                    className="fal fa-phone-alt"
                                    style={{ marginRight: "10px" }}
                                  />
                                  Connect To Buy
                                </a>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="col-md-6" style={{paddingBottom:"100px"}}>
                        <div className="listing-item">
                          <article className="geodir-category-listing fl-wrap">
                            <div className="geodir-category-img fl-wrap">
                              <a
                                href="/singlelisting"
                                className="geodir-category-img_item"
                              >
                                <img src={img} alt="" />
                                <div className="overlay" />
                              </a>
                              <div className="geodir-category-location">
                                <a
                                  href="#"
                                  className="single-map-item tolt"
                                  data-newlatitude="40.72956781"
                                  data-newlongitude="-73.99726866"
                                  data-microtip-position="top-left"
                                  data-tooltip="On the map"
                                >
                                  <i className="fas fa-map-marker-alt" />{" "}
                                  <span> 70 Bright St New York, USA</span>
                                </a>
                              </div>
                              <ul className="list-single-opt_header_cat">
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
                              <a
                                href="#"
                                className="geodir_save-btn tolt"
                                data-microtip-position="left"
                                data-tooltip="Save"
                              >
                                <span>
                                  <i className="fal fa-heart" />
                                </span>
                              </a>
                              <div className="geodir-category-listing_media-list">
                                <span>
                                  <i className="fas fa-eye" /> 8
                                </span>
                              </div>
                            </div>
                            <div className="geodir-category-content fl-wrap">
                              <h3 className="title-sin_item">
                                <a href="listing-single3.html">
                                  Gorgeous House For Sale
                                </a>
                              </h3>
                              <div className="geodir-category-content_price">
                                $ 600,000
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas in pulvinar neque.
                                Nulla finibus lobortis pulvinar. Donec a
                                consectetur nulla.
                              </p>
                              <div className="geodir-category-content-details">
                                <ul>
                                  <li>
                                    <i className="fal fa-bed" />
                                    <span>3</span>
                                  </li>
                                  <li>
                                    <i className="fal fa-bath" />
                                    <span>2</span>
                                  </li>
                                  <li>
                                    <i className="fal fa-cube" />
                                    <span>450 ft2</span>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href>
                                      <i className="fal fa-bookmark" />
                                      <span>Owner</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="geodir-category-footer fl-wrap"
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                     <a
                                  href="agent-single.html"
                                  className="gcf-company"
                                >
                                  <i
                                    className="fal fa-phone-alt"
                                    style={{ marginRight: "10px" }}
                                  />
                                  Schedule Viewing
                                </a>
                                <a
                                  href="agent-single.html"
                                  className="gcf-company"
                                >
                                  <i
                                    className="fal fa-phone-alt"
                                    style={{ marginRight: "10px" }}
                                  />
                                  Connect To Buy
                                </a>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="col-md-6" style={{paddingBottom:"100px"}}>
                        <div className="listing-item">
                          <article className="geodir-category-listing fl-wrap">
                            <div className="geodir-category-img fl-wrap">
                              <a
                                href="/singlelisting"
                                className="geodir-category-img_item"
                              >
                                <img src={img} alt="" />
                                <div className="overlay" />
                              </a>
                              <div className="geodir-category-location">
                                <a
                                  href="#"
                                  className="single-map-item tolt"
                                  data-newlatitude="40.72956781"
                                  data-newlongitude="-73.99726866"
                                  data-microtip-position="top-left"
                                  data-tooltip="On the map"
                                >
                                  <i className="fas fa-map-marker-alt" />{" "}
                                  <span> 70 Bright St New York, USA</span>
                                </a>
                              </div>
                              <ul className="list-single-opt_header_cat">
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
                              <a
                                href="#"
                                className="geodir_save-btn tolt"
                                data-microtip-position="left"
                                data-tooltip="Save"
                              >
                                <span>
                                  <i className="fal fa-heart" />
                                </span>
                              </a>
                              <div className="geodir-category-listing_media-list">
                                <span>
                                  <i className="fas fa-eye" /> 8
                                </span>
                              </div>
                            </div>
                            <div className="geodir-category-content fl-wrap">
                              <h3 className="title-sin_item">
                                <a href="listing-single3.html">
                                  Gorgeous House For Sale
                                </a>
                              </h3>
                              <div className="geodir-category-content_price">
                                $ 600,000
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas in pulvinar neque.
                                Nulla finibus lobortis pulvinar. Donec a
                                consectetur nulla.
                              </p>
                              <div className="geodir-category-content-details">
                                <ul>
                                  <li>
                                    <i className="fal fa-bed" />
                                    <span>3</span>
                                  </li>
                                  <li>
                                    <i className="fal fa-bath" />
                                    <span>2</span>
                                  </li>
                                  <li>
                                    <i className="fal fa-cube" />
                                    <span>450 ft2</span>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href>
                                      <i className="fal fa-bookmark" />
                                      <span>Owner</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="geodir-category-footer fl-wrap"
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                     <a
                                  href="agent-single.html"
                                  className="gcf-company"
                                >
                                  <i
                                    className="fal fa-phone-alt"
                                    style={{ marginRight: "10px" }}
                                  />
                                  Schedule Viewing
                                </a>
                                <a
                                  href="agent-single.html"
                                  className="gcf-company"
                                >
                                  <i
                                    className="fal fa-phone-alt"
                                    style={{ marginRight: "10px" }}
                                  />
                                  Connect To Buy
                                </a>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* listing-item-wrap end*/}
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
                {/* col-md 8 end */}
              </div>
            </div>
          </section>
          <div className="limit-box fl-wrap" />
        </div>
        {/* content end */}
        {/* subscribe-wrap */}
        {/* subscribe-wrap end */}
        {/* footer */}
      <Footer/>
        {/* footer end */}
      </div>
    </>
  );
}

export default Searchlisting;
