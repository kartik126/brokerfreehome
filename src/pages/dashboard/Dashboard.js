import React, { useEffect } from "react";

import Header from "../../othercomponents/Header";
import img from "../../assets/images/avatar/5.jpg";
import Dashboardsidemenu from "../../components/Dashboardsidemenu";
function Dashboard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <div id="wrapper">
        {/* dashbard-menu-wrap */}
        <Dashboardsidemenu />
      </div>
      {/* dashbard-menu-wrap end  */}
      {/* content */}
      <div className="dashboard-content">
        <div className="dashboard-menu-btn color-bg">
          <span>
            <i className="fas fa-bars" />
          </span>
          Dasboard Menu
        </div>
        <div className="container dasboard-container">
          {/* dashboard-title */}
          <div className="dashboard-title fl-wrap">
            <div className="dashboard-title-item">
              <span>Add Listing</span>
            </div>
            <div className="dashbard-menu-header">
              <div className="dashbard-menu-avatar fl-wrap">
                <img src={img} alt="" />
                <h4>
                  Welcome, <span>Alica Noory</span>
                </h4>
              </div>
              <a
                href="index.html"
                className="log-out-btn   tolt"
                data-microtip-position="bottom"
                data-tooltip="Log Out"
              >
                <i className="far fa-power-off" />
              </a>
            </div>
            {/*Tariff Plan menu*/}
            <div className="tfp-det-container">
              <div className="tfp-btn">
                <span>Your Tariff Plan : </span> <strong>Extended</strong>
              </div>
              <div className="tfp-det">
                <p>
                  You Are on <a href="#">Extended</a> . Use link bellow to view
                  details or upgrade.{" "}
                </p>
                <a href="#" className="tfp-det-btn color-bg">
                  Details
                </a>
              </div>
            </div>
            {/*Tariff Plan menu end*/}
          </div>
          {/* dashboard-title end */}
          <div className="dasboard-wrapper fl-wrap no-pag">
            <div className="dasboard-scrollnav-wrap scroll-to-fixed-fixed scroll-init2 fl-wrap">
              <ul>
                <li>
                  <a href="#sec1" className="act-scrlink">
                    Info
                  </a>
                </li>
                <li>
                  <a href="#sec2">Location</a>
                </li>
                <li>
                  <a href="#sec3">Media</a>
                </li>
                <li>
                  <a href="#sec4">Details</a>
                </li>
                <li>
                  <a href="#sec5">Documents</a>
                </li>
                {/* <li>
                  <a href="#sec6">Plans</a>
                </li>
                <li>
                  <a href="#sec7">Widgets</a>
                </li> */}
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
            {/* dasboard-widget-title */}
            <div className="dasboard-widget-title fl-wrap" id="sec1">
              <h5>
                <i className="fas fa-info" />
                Basic Informations
              </h5>
            </div>
            {/* dasboard-widget-title end */}
            {/* dasboard-widget-box  */}
            <div className="dasboard-widget-box fl-wrap">
              <div className="custom-form">
                <div className="row">
                  <div className="col-sm-4">
                    <label>
                      Listing Title{" "}
                      <span className="dec-icon">
                        <i className="far fa-briefcase" />
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name of your business"
                      defaultValue
                    />
                  </div>
                  <div className="col-sm-4">
                    <label>Type</label>
                    <div className="listsearch-input-item">
                      <select
                        data-placeholder="All Types"
                        className="chosen-select no-search-select"
                      >
                        <option>All Types</option>
                        <option>Rent</option>
                        <option>Sale</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <label>
                      Listing Price{" "}
                      <span className="dec-icon">
                        <i className="far fa-money-bill-wave" />
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Listing Price"
                      defaultValue
                    />
                  </div>
                  <div className="col-sm-4">
                    <label>Category</label>
                    <div className="listsearch-input-item">
                      <select
                        data-placeholder="Apartments"
                        className="chosen-select no-search-select"
                      >
                        <option>All Categories</option>
                        <option>House</option>
                        <option>Apartment</option>
                        <option>Hotel</option>
                        <option>Villa</option>
                        <option>Office</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <label>
                      Keywords{" "}
                      <span className="dec-icon">
                        <i className="far fa-key" />
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Maximum 15 , should be separated by commas"
                      defaultValue
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* dasboard-widget-box  end*/}
            {/* dasboard-widget-title */}
            <div className="dasboard-widget-title dwb-mar fl-wrap" id="sec2">
              <h5>
                <i className="fas fa-street-view" />
                Location / Contacts
              </h5>
            </div>
            {/* dasboard-widget-title end */}
            {/* dasboard-widget-box  */}
            <div className="dasboard-widget-box   fl-wrap">
              <div className="custom-form">
                <div className="row">
                  <div className="col-md-3">
                    <label>
                      House Number
                      <span className="dec-icon">
                        <i className="far fa-map-marker" />
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="House Number"
                      defaultValue
                    />
                  </div>
                  <div className="col-md-3">
                    <label>
                      Apartment Name
                      <span className="dec-icon">
                        <i className="far fa-map-marker" />
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Apartment Name"
                      defaultValue
                    />
                  </div>
                  <div className="col-md-6">
                    <label>
                      Locality/Area
                      <span className="dec-icon">
                        <i className="far fa-map-marker" />
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Locality/Area"
                      defaultValue
                    />
                  </div>
                  <div className="col-md-3">
                    <label>
                      City
                      <span className="dec-icon">
                        <i className="far fa-map-marker" />
                      </span>
                    </label>
                    <input type="text" placeholder="City" defaultValue />
                  </div>
                  <div className="col-md-3">
                    <label>
                      Zip Code
                      <span className="dec-icon">
                        <i className="far fa-map-marker" />
                      </span>
                    </label>
                    <input type="text" placeholder="Zip Code" defaultValue />
                  </div>

                  <div className="col-sm-3">
                    <label>
                      Longitude (Drag marker on map){" "}
                      <span className="dec-icon">
                        <i className="far fa-long-arrow-alt-right" />
                      </span>
                    </label>
                    <input
                      type="text"
                      id="long"
                      placeholder="Map Longitude"
                      defaultValue
                    />
                  </div>
                  <div className="col-sm-3">
                    <label>
                      Latitude (Drag marker on map)
                      <span className="dec-icon">
                        <i className="far fa-long-arrow-alt-down" />{" "}
                      </span>
                    </label>
                    <input
                      type="text"
                      id="lat"
                      placeholder="Map Latitude"
                      defaultValue
                    />
                  </div>
                </div>
                <div className="row"></div>
                <div className="clearfix" />
                <div className="map-container">
                  <div
                    id="singleMap"
                    className="drag-map"
                    data-latitude="40.7427837"
                    data-longitude="-73.11445617675781"
                  ></div>
                </div>
                <div className="clearfix" />
                {/* <div className="row">
                  <div className="col-sm-6">
                    <label>City</label>
                    <div className="listsearch-input-item">
                      <select
                        data-placeholder="Apartments"
                        className="chosen-select no-search-select"
                      >
                        <option>All Cities</option>
                        <option>New York</option>
                        <option>London</option>
                        <option>Paris</option>
                        <option>Kiev</option>
                        <option>Moscow</option>
                        <option>Dubai</option>
                        <option>Rome</option>
                        <option>Beijing</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>
                      Email Address{" "}
                      <span className="dec-icon">
                        <i className="far fa-envelope" />
                      </span>{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="JessieManrty@domain.com"
                      defaultValue
                    />
                  </div>
                  <div className="col-sm-6">
                    <label>
                      Phone{" "}
                      <span className="dec-icon">
                        <i className="far fa-phone" />{" "}
                      </span>{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="+7(123)987654"
                      defaultValue
                    />
                  </div>
                  <div className="col-sm-6">
                    <label>
                      {" "}
                      Website{" "}
                      <span className="dec-icon">
                        <i className="far fa-globe" />{" "}
                      </span>{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="themeforest.net"
                      defaultValue
                    />
                  </div>
                </div> */}
              </div>
            </div>
            {/* dasboard-widget-box  end*/}
            {/* dasboard-widget-title */}
            <div className="dasboard-widget-title dwb-mar fl-wrap" id="sec3">
              <h5>
                <i className="fas fa-image" />
                Header Media
              </h5>
            </div>
            {/* dasboard-widget-title end */}
            {/* dasboard-widget-box  */}
            <div className="dasboard-widget-box   fl-wrap">
              <div className="custom-form">
                {/* <div className="add-list-media-header">
                  <label className="radio inline">
                    <input type="radio" name="gender" defaultChecked />
                    <span>Carousel</span>
                  </label>
                </div> */}
                {/* <div className="add-list-media-header">
                  <label className="radio inline">
                    <input type="radio" name="gender" />
                    <span>Slider</span>
                  </label>
                </div>
                <div className="add-list-media-header">
                  <label className="radio inline">
                    <input type="radio" name="gender" />
                    <span> Background image</span>
                  </label>
                </div> */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam dignissim sollicitudin mauris, at semper elit sagittis
                  eget. Integer ut nunc a dui hendrerit pulvinar. Ut at nunc
                  eros. Praesent ac purus ac enim ullamcorper vehicula quis nec
                  magna. Donec pulvinar interdum lacus sed interdum. Donec ut
                  orci suscipit, tristique augue quis, condimentum metus.
                </p>
                <div className="clearfix" />
                <div className="listsearch-input-item fl-wrap">
                  <form className="fuzone">
                    <div className="fu-text">
                      <span>
                        <i className="far fa-cloud-upload-alt" /> Click here or
                        drop files to upload
                      </span>
                      <div className="photoUpload-files fl-wrap" />
                    </div>
                    <input type="file" className="upload" multiple />
                  </form>
                </div>
              </div>
            </div>
            {/* dasboard-widget-box  end*/}
            {/* dasboard-widget-title */}
            <div className="dasboard-widget-title dwb-mar fl-wrap" id="sec4">
              <h5>
                <i className="fas fa-list" />
                Listing Details
              </h5>
            </div>
            {/* dasboard-widget-title end */}
            {/* dasboard-widget-box  */}
            <div className="dasboard-widget-box   fl-wrap">
              <div className="custom-form">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-sm-6">
                        <label>
                          Area:{" "}
                          <span className="dec-icon">
                            <i className="far fa-sort-size-down-alt" />
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="House Area"
                          defaultValue
                        />
                        <label>
                          Accomodation:{" "}
                          <span className="dec-icon">
                            <i className="far fa-users" />
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Listing Accomodation"
                          defaultValue
                        />
                        <label>
                          Yard size:{" "}
                          <span className="dec-icon">
                            <i className="far fa-trees" />
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Yard size"
                          defaultValue
                        />
                      </div>
                      <div className="col-sm-6">
                        <label>
                          Bedrooms:{" "}
                          <span className="dec-icon">
                            <i className="far fa-bed" />
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="House Bedrooms"
                          defaultValue
                        />
                        <label>
                          Bathrooms:{" "}
                          <span className="dec-icon">
                            <i className="far fa-bath" />
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="House Bathrooms"
                          defaultValue
                        />
                        <label>
                          Garage:{" "}
                          <span className="dec-icon">
                            <i className="far fa-warehouse" />
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Number of cars"
                          defaultValue
                        />
                      </div>
                      <div className="col-sm-12">
                        <div className="row">
                          <div className="col-md-6">
                            <label>
                              Status:
                              <span className="dec-icon">
                                <i className="far fa-sort-size-down-alt" />
                              </span>
                            </label>
                            <input
                              type="text"
                              placeholder="Ready to Move"
                              defaultValue
                            />
                            <label>
                              Furnishing:
                              <span className="dec-icon">
                                <i className="far fa-sort-size-down-alt" />
                              </span>
                            </label>
                            <input
                              type="text"
                              placeholder="Semi-furnished"
                              defaultValue
                            />
                          </div>

                          <div className="col-md-6">
                            <label>
                              Rented:
                              <span className="dec-icon">
                                <i className="far fa-sort-size-down-alt" />
                              </span>
                            </label>
                            <input type="text" placeholder="" defaultValue />
                            <label>
                              Mortgage Status:
                              <span className="dec-icon">
                                <i className="far fa-sort-size-down-alt" />
                              </span>
                            </label>
                            <input type="text" placeholder="" defaultValue />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>Details Text</label>
                    <div className="listsearch-input-item">
                      <textarea
                        cols={40}
                        rows={3}
                        style={{ height: "415px" }}
                        placeholder="Datails"
                        spellCheck="false"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="clearfix" />
                <label>Amenities: </label>
                <div className=" add-list-tags fl-wrap">
                  {/* Checkboxes */}
                  <ul className="fl-wrap filter-tags no-list-style ds-tg">
                    <li>
                      <input
                        id="check-aaa5"
                        type="checkbox"
                        name="check"
                        defaultChecked
                      />
                      <label htmlFor="check-aaa5"> Wi Fi</label>
                    </li>
                    <li>
                      <input
                        id="check-bb5"
                        type="checkbox"
                        name="check"
                        defaultChecked
                      />
                      <label htmlFor="check-bb5">Pool</label>
                    </li>
                    <li>
                      <input id="check-dd5" type="checkbox" name="check" />
                      <label htmlFor="check-dd5"> Security</label>
                    </li>
                    <li>
                      <input id="check-cc5" type="checkbox" name="check" />
                      <label htmlFor="check-cc5"> Laundry Room</label>
                    </li>
                    <li>
                      <input
                        id="check-ff5"
                        type="checkbox"
                        name="check"
                        defaultChecked
                      />
                      <label htmlFor="check-ff5"> Equipped Kitchen</label>
                    </li>
                    <li>
                      <input id="check-c4" type="checkbox" name="check" />
                      <label htmlFor="check-c4">Air Conditioning</label>
                    </li>
                    <li>
                      <input id="check-c18" type="checkbox" name="check" />
                      <label htmlFor="check-c18">Parking</label>
                    </li>
                    <li>
                      <input
                        id="check-aaa5"
                        type="checkbox"
                        name="check"
                        defaultChecked
                      />
                      <label htmlFor="check-aaa5"> Wi Fi</label>
                    </li>
                    <li>
                      <input
                        id="check-bb5"
                        type="checkbox"
                        name="check"
                        defaultChecked
                      />
                      <label htmlFor="check-bb5">Pool</label>
                    </li>
                    <li>
                      <input id="check-dd5" type="checkbox" name="check" />
                      <label htmlFor="check-dd5"> Security</label>
                    </li>
                    <li>
                      <input id="check-cc5" type="checkbox" name="check" />
                      <label htmlFor="check-cc5"> Laundry Room</label>
                    </li>
                    <li>
                      <input
                        id="check-ff5"
                        type="checkbox"
                        name="check"
                        defaultChecked
                      />
                      <label htmlFor="check-ff5"> Equipped Kitchen</label>
                    </li>
                  </ul>
                  {/* Checkboxes end */}
                </div>
              </div>
            </div>
            {/* dasboard-widget-box  end*/}
            {/* dasboard-widget-title */}
            {/* <div className="dasboard-widget-title dwb-mar fl-wrap" id="sec5">
              <h5>
                <i className="fas fa-home-lg-alt" />
                Rooms
              </h5>
              <div className="onoffswitch">
                <input
                  type="checkbox"
                  name="onoffswitch"
                  className="onoffswitch-checkbox"
                  id="myonoffswitch5"
                  defaultChecked
                />
                <label className="onoffswitch-label" htmlFor="myonoffswitch5">
                  <span className="onoffswitch-inner" />
                  <span className="onoffswitch-switch" />
                </label>
              </div>
            </div> */}
            {/* dasboard-widget-title end */}
            {/* dasboard-widget-box  */}
            <div className="dasboard-widget-box   fl-wrap">
              <div className="custom-form add_room-item-wrap">
                <div className="add_room-container fl-wrap">
                  {/* add_room-item   */}
                  <div className="add_room-item fl-wrap">
                    <span
                      className="remove-rp tolt"
                      data-microtip-position="left"
                      data-tooltip="Remove Room"
                    >
                      <i className="fal fa-times-circle" />
                    </span>
                    <div className="row">
                      <div className="col-sm-6">
                        <label>
                          Room Title:{" "}
                          <span className="dec-icon">
                            <i className="fal fa-layer-group" />
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Standard Family Room"
                          defaultValue
                        />
                      </div>
                      <div className="col-sm-6">
                        <label>
                          Additional Room:{" "}
                          <span className="dec-icon">
                            <i className="fal fa-layer-plus" />
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Example: Sauna"
                          defaultValue
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <label>Room Details</label>
                        <div className="listsearch-input-item">
                          <textarea
                            cols={40}
                            rows={3}
                            style={{ height: "175px", marginBottom: "10px" }}
                            placeholder="Datails"
                            spellCheck="false"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <label>Room Images</label>
                        <div className="listsearch-input-item fl-wrap">
                          <form className="fuzone">
                            <div className="fu-text">
                              <span>
                                <i className="far fa-cloud-upload-alt" /> Click
                                here or drop files to upload
                              </span>
                              <div className="photoUpload-files fl-wrap" />
                            </div>
                            <input type="file" className="upload" multiple />
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                    <label>Amenities: </label>
                    <div className=" add-list-tags fl-wrap">
                      {/* Checkboxes */}
                      <ul className="fl-wrap filter-tags no-list-style ds-tg">
                        <li>
                          <input
                            id="check-2aaa5"
                            type="checkbox"
                            name="check"
                            defaultChecked
                          />
                          <label htmlFor="check-2aaa5">Air conditioner</label>
                        </li>
                        <li>
                          <input
                            id="check-2bb5"
                            type="checkbox"
                            name="check"
                            defaultChecked
                          />
                          <label htmlFor="check-2bb5">Tv Inside</label>
                        </li>
                        <li>
                          <input id="check-2dd5" type="checkbox" name="check" />
                          <label htmlFor="check-2dd5"> Ceramic bath</label>
                        </li>
                        <li>
                          <input
                            id="check-2cc5"
                            type="checkbox"
                            name="check"
                            defaultChecked
                          />
                          <label htmlFor="check-2cc5">Microwave</label>
                        </li>
                      </ul>
                      {/* Checkboxes end */}
                    </div>
                  </div>
                  {/*add_room-item end  */}
                </div>
                <a href="#" className="add-room-item">
                  Add New <i className="fal fa-plus" />{" "}
                </a>
              </div>
            </div>
            {/* dasboard-widget-box  end*/}
            {/* dasboard-widget-title */}
            {/* <div className="dasboard-widget-title dwb-mar fl-wrap" id="sec6">
              <h5>
                <i className="fas fa-ruler-combined" />
                House Plans{" "}
              </h5>
              <div className="onoffswitch">
                <input
                  type="checkbox"
                  name="onoffswitch"
                  className="onoffswitch-checkbox"
                  id="myonoffswitch22"
                />
                <label className="onoffswitch-label" htmlFor="myonoffswitch22">
                  <span className="onoffswitch-inner" />
                  <span className="onoffswitch-switch" />
                </label>
              </div>
            </div> */}
            {/* dasboard-widget-title end */}
            {/* dasboard-widget-box  */}
            <div className="dasboard-widget-box   fl-wrap">
              <div className="custom-form add_room-item-wrap">
                <div className="add_room-container fl-wrap">
                  {/* add_room-item   */}
                  <div className="add_room-item fl-wrap">
                    <span
                      className="remove-rp tolt"
                      data-microtip-position="left"
                      data-tooltip="Remove"
                    >
                      <i className="fal fa-times-circle" />
                    </span>
                    <div className="row">
                      <div className="col-sm-7">
                        <div className="row">
                          <div className="col-sm-6">
                            <label>
                              Plan Title:{" "}
                              <span className="dec-icon">
                                <i className="far fa-ruler-horizontal" />
                              </span>
                            </label>
                            <input
                              type="text"
                              placeholder=" First Floor Plan "
                              defaultValue
                            />
                          </div>
                          <div className="col-sm-6">
                            <label>
                              Plan Optional info:{" "}
                              <span className="dec-icon">
                                <i className="far fa-ruler-horizontal" />
                              </span>
                            </label>
                            <input
                              type="text"
                              placeholder="Example: 286 sq ft"
                              defaultValue
                            />
                          </div>
                        </div>
                        <label>Plan Details</label>
                        <div className="listsearch-input-item">
                          <textarea
                            cols={40}
                            rows={3}
                            style={{ height: "85px" }}
                            placeholder="Datails"
                            spellCheck="false"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <label>Upload Images</label>
                        <div className="listsearch-input-item fl-wrap">
                          <form className="fuzone">
                            <div className="fu-text">
                              <span>
                                <i className="far fa-cloud-upload-alt" /> Click
                                here or drop files to upload
                              </span>
                              <div className="photoUpload-files fl-wrap" />
                            </div>
                            <input type="file" className="upload" />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*add_room-item end  */}
                </div>
                <a href="#" className="add-room-item">
                  Add New <i className="fal fa-plus" />{" "}
                </a>
              </div>
            </div>
            {/* dasboard-widget-box  end*/}
            {/* dasboard-widget-title */}
            {/* <div className="dasboard-widget-title dwb-mar fl-wrap" id="sec7">
              <h5>
                <i className="fas fa-sliders-h" />
                Content Widgets
              </h5>
            </div> */}
            {/* dasboard-widget-title end */}
            {/* dasboard-widget-box  */}
            <div className="dasboard-widget-box   fl-wrap">
              <div className="custom-form">
                <div className="row">
                  {/* content-widget-switcher */}
                  <div className="col-md-4">
                    <div className="content-widget-switcher fl-wrap">
                      <span className="content-widget-switcher-title">
                        Video Presentation
                      </span>
                      <div className="onoffswitch">
                        <input
                          type="checkbox"
                          name="onoffswitch"
                          className="onoffswitch-checkbox"
                          id="myonoffswitchmc"
                          defaultChecked
                        />
                        <label
                          className="onoffswitch-label"
                          htmlFor="myonoffswitchmc"
                        >
                          <span className="onoffswitch-inner" />
                          <span className="onoffswitch-switch" />
                        </label>
                      </div>
                      <div className="content-widget-switcher-item fl-wrap">
                        <label>
                          Video Youtube:{" "}
                          <span className="dec-icon">
                            <i className="fab fa-youtube" />
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Youtube Or Vimeo"
                          defaultValue
                        />
                        <label>
                          Video VImeo:{" "}
                          <span className="dec-icon">
                            <i className="fab fa-vimeo-v" />
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Youtube Or Vimeo"
                          defaultValue
                        />
                      </div>
                    </div>
                  </div>
                  {/* content-widget-switcher end*/}
                  {/* content-widget-switcher */}
                  <div className="col-md-4">
                    <div className="content-widget-switcher fl-wrap">
                      <span className="content-widget-switcher-title">
                        Propertie Documents
                      </span>
                      <div className="onoffswitch">
                        <input
                          type="checkbox"
                          name="onoffswitch"
                          className="onoffswitch-checkbox"
                          id="myonoffswitchmc523"
                          defaultChecked
                        />
                        <label
                          className="onoffswitch-label"
                          htmlFor="myonoffswitchmc523"
                        >
                          <span className="onoffswitch-inner" />
                          <span className="onoffswitch-switch" />
                        </label>
                      </div>
                      <div className="content-widget-switcher-item fl-wrap">
                        <form className="fuzone">
                          <div className="fu-text">
                            <span>
                              <i className="far fa-cloud-upload-alt" /> Click
                              here or drop files to upload
                            </span>
                            <div className="photoUpload-files fl-wrap" />
                          </div>
                          <input type="file" className="upload" multiple />
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* content-widget-switcher end*/}
                  {/* content-widget-switcher */}
                  <div className="col-md-4">
                    <div className="content-widget-switcher fl-wrap">
                      <span className="content-widget-switcher-title">
                        Mortgage Calculator
                      </span>
                      <div className="onoffswitch">
                        <input
                          type="checkbox"
                          name="onoffswitch"
                          className="onoffswitch-checkbox"
                          id="myonoffswitchmc423"
                          defaultChecked
                        />
                        <label
                          className="onoffswitch-label"
                          htmlFor="myonoffswitchmc423"
                        >
                          <span className="onoffswitch-inner" />
                          <span className="onoffswitch-switch" />
                        </label>
                      </div>
                    </div>
                    <div
                      className="content-widget-switcher fl-wrap"
                      style={{ marginTop: "20px" }}
                    >
                      <span className="content-widget-switcher-title">
                        Google Map
                      </span>
                      <div className="onoffswitch">
                        <input
                          type="checkbox"
                          name="onoffswitch"
                          className="onoffswitch-checkbox"
                          id="myonoffswitchmc923"
                        />
                        <label
                          className="onoffswitch-label"
                          htmlFor="myonoffswitchmc923"
                        >
                          <span className="onoffswitch-inner" />
                          <span className="onoffswitch-switch" />
                        </label>
                      </div>
                    </div>
                    <div
                      className="content-widget-switcher fl-wrap"
                      style={{ marginTop: "20px" }}
                    >
                      <span className="content-widget-switcher-title">
                        Contact Form
                      </span>
                      <div className="onoffswitch">
                        <input
                          type="checkbox"
                          name="onoffswitch"
                          className="onoffswitch-checkbox"
                          id="myonoffswitchmc`23"
                        />
                        <label
                          className="onoffswitch-label"
                          htmlFor="myonoffswitchmc`23"
                        >
                          <span className="onoffswitch-inner" />
                          <span className="onoffswitch-switch" />
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* content-widget-switcher end*/}
                </div>
              </div>
            </div>
            <div className="dasboard-widget-title dwb-mar fl-wrap" id="sec3">
              <h5>
                <i className="fas fa-image" />
                Documents
              </h5>
            </div>
            {/* dasboard-widget-title end */}
            {/* dasboard-widget-box  */}
            <div className="dasboard-widget-box   fl-wrap">
              <div className="custom-form">
                {/* <div className="add-list-media-header">
                  <label className="radio inline">
                    <input type="radio" name="gender" defaultChecked />
                    <span>Carousel</span>
                  </label>
                </div> */}
                {/* <div className="add-list-media-header">
                  <label className="radio inline">
                    <input type="radio" name="gender" />
                    <span>Slider</span>
                  </label>
                </div>
                <div className="add-list-media-header">
                  <label className="radio inline">
                    <input type="radio" name="gender" />
                    <span> Background image</span>
                  </label>
                </div> */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam dignissim sollicitudin mauris, at semper elit sagittis
                  eget. Integer ut nunc a dui hendrerit pulvinar. Ut at nunc
                  eros. Praesent ac purus ac enim ullamcorper vehicula quis nec
                  magna. Donec pulvinar interdum lacus sed interdum. Donec ut
                  orci suscipit, tristique augue quis, condimentum metus.
                </p>
                <h1
                  style={{
                    textAlign: "left",
                    margin: "5px 0",
                    fontSize: "20px",
                  }}
                >
                  Title Deed / Signed Letter of Undertaking
                </h1>
                <div className="clearfix" />
                <div className="listsearch-input-item fl-wrap">
                  <form className="fuzone">
                    <div className="fu-text">
                      <span>
                        <i className="far fa-cloud-upload-alt" /> Click here or
                        drop files to upload
                      </span>
                      <div className="photoUpload-files fl-wrap" />
                    </div>
                    <input
                      type="file"
                      className="upload"
                      multiple
                      style={{ width: "50%" }}
                    />
                  </form>
                </div>
              </div>
            </div>
            {/* dasboard-widget-box  end*/}
            <a href="#" className="btn  color-bg float-btn">
              Save Changes{" "}
            </a>
          </div>
        </div>
        <div className="limit-box fl-wrap" />
        {/* dashboard-footer */}
        <div className="dashboard-footer">
          <div className="dashboard-footer-links fl-wrap">
            <span>Helpfull Links:</span>
            <ul>
              <li>
                <a href="about.html">About </a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="pricing.html">Pricing Plans</a>
              </li>
              <li>
                <a href="contacts.html">Contacts</a>
              </li>
              <li>
                <a href="help.html">Help Center</a>
              </li>
            </ul>
          </div>
          <a href="#main" className="dashbord-totop  custom-scroll-link">
            <i className="fas fa-caret-up" />
          </a>
        </div>
        {/* dashboard-footer end */}
      </div>
      {/* content end */}
      <div className="dashbard-bg gray-bg" />
    </>
  );
}

export default Dashboard;
