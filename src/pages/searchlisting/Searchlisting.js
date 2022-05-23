import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../othercomponents/Header";

import img from "../../assets/images/all/3.jpg";

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
              <a href="#">Home</a><a href="#">Listings</a> <span>New York</span>
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
                <div className="col-md-4">
                  <div className="mob-nav-content-btn  color-bg show-list-wrap-search ntm fl-wrap">
                    Show Filters
                  </div>
                  <div className="fl-wrap lws_mobile">
                    <div className="list-searh-input-wrap-title   fl-wrap">
                      <i className="far fa-sliders-h" />
                      <span>Search Filters</span>
                    </div>
                    <div
                      className="block-box fl-wrap search-sb"
                      id="filters-column"
                    >
                      {/* listsearch-input-item */}
                      <div className="listsearch-input-item">
                        <div className="row">
                          <div className="col-sm-12">
                            <div
                              className="list-single-tags fl-wrap tags-stylwrap"
                              style={{ marginTop: "20px" }}
                            >
                              <h4
                                style={{
                                  marginBottom: "10px",
                                  textAlign: "start",
                                }}
                              >
                                City:
                              </h4>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "start",
                                  alignItems: "center",
                                }}
                              >
                                <a href="#">Dubai</a>
                                <a href="#">New York</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* listsearch-input-item end*/}
                      {/* listsearch-input-item */}
                      <div className="listsearch-input-item">
                        <div className="row">
                          <div className="col-sm-12">
                            <div
                              className="list-single-tags fl-wrap tags-stylwrap"
                              style={{ marginTop: "20px" }}
                            >
                              <h4
                                style={{
                                  marginBottom: "10px",
                                  textAlign: "start",
                                }}
                              >
                                Location:
                              </h4>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "start",
                                  alignItems: "center",
                                }}
                              >
                                <a href="#">London</a>
                                <a href="#">Paris</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* listsearch-input-item end*/}
                      {/* listsearch-input-item */}
                      <div className="listsearch-input-item">
                        <div className="row">
                          <div className="col-sm-12">
                            <div
                              className="list-single-tags fl-wrap tags-stylwrap"
                              style={{ marginTop: "20px" }}
                            >
                              <h4
                                style={{
                                  marginBottom: "10px",
                                  textAlign: "start",
                                }}
                              >
                                Property Type:
                              </h4>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "start",
                                  alignItems: "center",
                                }}
                              >
                                <a href="#">Villa</a>
                                <a href="#">Apartment</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* listsearch-input-item end*/}
                      {/* listsearch-input-item */}
                      <div className="listsearch-input-item">
                        <div className="row">
                          <div className="col-sm-12">
                            <div
                              className="list-single-tags fl-wrap tags-stylwrap"
                              style={{ marginTop: "20px" }}
                            >
                              <h4
                                style={{
                                  marginBottom: "10px",
                                  textAlign: "start",
                                }}
                              >
                                Beds:
                              </h4>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "start",
                                  alignItems: "center",
                                }}
                              >
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* listsearch-input-item end*/}
                      {/* listsearch-input-item */}
                      <div className="listsearch-input-item">
                        <div className="fl-wrap">
                          {/* <span className="pr_title">Area Sq/ft:</span><br /><br /> */}
                          <h4
                            style={{ marginBottom: "10px", textAlign: "start" }}
                          >
                            Cost
                          </h4>
                          <input
                            type="text"
                            className="price-range-double"
                            data-min={100}
                            data-max={100000}
                            name="price-range2"
                            data-step={1}
                            defaultValue={1}
                            data-prefix
                          />
                        </div>
                      </div>
                      {/* listsearch-input-item end*/}
                      {/* listsearch-input-item */}
                      <div className="listsearch-input-item">
                        <div className="fl-wrap">
                          {/* <span className="pr_title">Area Sq/ft:</span><br /><br /> */}
                          <h4
                            style={{ marginBottom: "10px", textAlign: "start" }}
                          >
                            Area Sq/ft:
                          </h4>
                          <input
                            type="text"
                            className="price-range-double"
                            data-min={1}
                            data-max={1000}
                            name="price-range2"
                            data-step={1}
                            defaultValue={1}
                            data-prefix
                          />
                        </div>
                      </div>
                      {/* listsearch-input-item end*/}
                      {/* listsearch-input-item */}
                      <div className="listsearch-input-item">
                        <div className="row">
                          <div className="col-sm-12">
                            <div
                              className="list-single-tags fl-wrap tags-stylwrap"
                              style={{ marginTop: "20px" }}
                            >
                              <h4
                                style={{
                                  marginBottom: "10px",
                                  textAlign: "start",
                                }}
                              >
                                Baths:
                              </h4>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "start",
                                  alignItems: "center",
                                }}
                              >
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* listsearch-input-item end*/}
                      {/* listsearch-input-item*/}
                      <div className="listsearch-input-item">
                        <h4
                          style={{ marginBottom: "10px", textAlign: "start" }}
                        >
                          Amenities:
                        </h4>
                        <div className=" fl-wrap filter-tags">
                          <ul className="no-list-style">
                            <li>
                              <input
                                id="check-aa"
                                type="checkbox"
                                name="check"
                              />
                              <label htmlFor="check-aa">
                                Elevator in building
                              </label>
                            </li>
                            <li>
                              <input
                                id="check-b"
                                type="checkbox"
                                name="check"
                              />
                              <label htmlFor="check-b"> Laundry Room</label>
                            </li>
                            <li>
                              <input
                                id="check-c"
                                type="checkbox"
                                name="check"
                                defaultChecked
                              />
                              <label htmlFor="check-c">Equipped Kitchen</label>
                            </li>
                            <li>
                              <input
                                id="check-d"
                                type="checkbox"
                                name="check"
                              />
                              <label htmlFor="check-d">Air Conditioned</label>
                            </li>
                            <li>
                              <input
                                id="check-d2"
                                type="checkbox"
                                name="check"
                                defaultChecked
                              />
                              <label htmlFor="check-d2">Parking</label>
                            </li>
                            <li>
                              <input
                                id="check-d3"
                                type="checkbox"
                                name="check"
                                defaultChecked
                              />
                              <label htmlFor="check-d3">Swimming Pool</label>
                            </li>
                            <li>
                              <input
                                id="check-d4"
                                type="checkbox"
                                name="check"
                              />
                              <label htmlFor="check-d4">Fitness Gym</label>
                            </li>
                            <li>
                              <input
                                id="check-d5"
                                type="checkbox"
                                name="check"
                              />
                              <label htmlFor="check-d5">Security</label>
                            </li>
                            <li>
                              <input
                                id="check-d6"
                                type="checkbox"
                                name="check"
                              />
                              <label htmlFor="check-d6">Garage Attached</label>
                            </li>
                            <li>
                              <input
                                id="check-d7"
                                type="checkbox"
                                name="check"
                              />
                              <label htmlFor="check-d7">Back yard</label>
                            </li>
                            <li>
                              <input
                                id="check-d8"
                                type="checkbox"
                                name="check"
                              />
                              <label htmlFor="check-d8">Fireplace</label>
                            </li>
                            <li>
                              <input
                                id="check-d9"
                                type="checkbox"
                                name="check"
                              />
                              <label htmlFor="check-d9">Window Covering</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* listsearch-input-item end*/}
                      {/* listsearch-input-item */}
                      <div className="listsearch-input-item">
                        <div className="row">
                          <div className="col-sm-12">
                            <div
                              className="list-single-tags fl-wrap tags-stylwrap"
                              style={{ marginTop: "20px" }}
                            >
                              <h4
                                style={{
                                  marginBottom: "10px",
                                  textAlign: "start",
                                }}
                              >
                                Status:
                              </h4>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "start",
                                  alignItems: "center",
                                }}
                              >
                                <a href="#">Ready</a>
                                <a href="#">Under Construction</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* listsearch-input-item end*/}
                      {/* listsearch-input-item */}
                      <div className="listsearch-input-item">
                        <div className="row">
                          <div className="col-sm-12">
                            <div
                              className="list-single-tags fl-wrap tags-stylwrap"
                              style={{ marginTop: "20px" }}
                            >
                              <h4
                                style={{
                                  marginBottom: "10px",
                                  textAlign: "start",
                                }}
                              >
                                Furnished:
                              </h4>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "start",
                                  alignItems: "center",
                                }}
                              >
                                <a href="#">Furnished</a>
                                <a href="#">Semi-Furnished</a>
                                <a href="#">Unfurnished</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* listsearch-input-item end*/}
                      <div className="msotw_footer">
                        <a
                          href="#"
                          className="btn small-btn float-btn color-bg"
                        >
                          Search
                        </a>
                        <div className="reset-form reset-btn">
                          {" "}
                          <i className="far fa-sync-alt" /> Reset Filters
                        </div>
                      </div>
                    </div>
                    <a
                      className="back-tofilters color-bg custom-scroll-link fl-wrap scroll-to-fixed-fixed"
                      href="#filters-column"
                    >
                      Back to filters <i className="fas fa-caret-up" />
                    </a>
                  </div>
                </div>
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
                                  justifyContent: "center",
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
                                  justifyContent: "center",
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
                                  justifyContent: "center",
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
                                  justifyContent: "center",
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
                                  justifyContent: "center",
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
                                  justifyContent: "center",
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
                                  justifyContent: "center",
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
        <footer className="main-footer fl-wrap">
          <div className="footer-inner fl-wrap">
            <div className="container">
              <div className="row">
                {/* footer widget*/}
                <div className="col-md-3">
                  <div className="footer-widget fl-wrap">
                    <div className="footer-widget-logo fl-wrap">
                      <a href="index.html">
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
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-vk" />
                          </a>
                        </li>
                      </ul>
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
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="help.html">Faq's</a>
                      </li>
                      <li>
                        <a href="pricing.html">Terms &amp; Privacy Policy</a>
                      </li>
                      <li>
                        <a href="contacts.html">Contacts</a>
                      </li>
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
                      <li>
                        <span>
                          <i className="fal fa-envelope" /> Mail :
                        </span>
                        <a href="#" target="_blank">
                          yourmail@domain.com
                        </a>
                      </li>
                      <li>
                        {" "}
                        <span>
                          <i className="fal fa-map-marker" /> Adress :
                        </span>
                        <a href="#" target="_blank">
                          USA 27TH Brooklyn NY
                        </a>
                      </li>
                      <li>
                        <span>
                          <i className="fal fa-phone" /> Phone :
                        </span>
                        <a href="#">+7(111)123456789</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* footer widget end*/}
                {/* footer widget*/}
                <div className="col-md-3">
                  <div className="footer-widget fl-wrap">
                    <div className="footer-widget-title fl-wrap">
                      <h4>Download our API</h4>
                    </div>
                    <div className="api-links fl-wrap">
                      <a href="#" className="api-btn color-bg">
                        <i className="fab fa-apple" /> App Store
                      </a>
                      <a href="#" className="api-btn color-bg">
                        <i className="fab fa-google-play" /> Play Store
                      </a>
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
              <div className="copyright">
                {" "}
                © Broker Free Homes 2022 . All rights reserved.
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
          {/*sub-footer end */}
        </footer>
        {/* footer end */}
      </div>
    </>
  );
}

export default Searchlisting;
