import React from "react";
import Header from "../../othercomponents/Header";
import Footer from "../../othercomponents/Footer";
import ReCAPTCHA from "react-google-recaptcha";

function Getcontactedbypropertyowner() {
  const onChange = (value) => {
    console.log("Captcha value:", value);
  };
  return (
    <>
      <Header />
      <div id="wrapper">
        <div className="content">
          <section
            className="hidden-section single-par2  "
            data-scrollax-parent="true"
          >
            <div className="bg-wrap bg-parallax-wrap-gradien">
              <div
                className="bg par-elem "
                style={{
                  backgroundImage: `url(${"./assets/images/all/11.jpg"})`,
                }}
                data-scrollax="properties: { translateY: '30%' }"
              ></div>
            </div>
            <div className="container">
              <div className="section-title center-align big-title">
                <h2>
                  <span>Get Contacted By Property Owner</span>
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
          <div className="breadcrumbs fw-breadcrumbs sp-brd fl-wrap">
            <div className="container">
              <div className="breadcrumbs-list">
                <a href="/">Home</a>{" "}
                <span>Get Contacted By Property Owner</span>
              </div>
            </div>
          </div>
          {/* breadcrumbs end */}
          <div className="card"><section>
            <div className="col-md-2"></div>
            <div
              className="col-md-8"
              style={{
                border: "1px solid #c5c5c5",
                borderRadius: "5px",
                padding: "20px",
              }}
            >
              <div className="row">
                <h1 style={{ fontSize: "26px" }}>Post your Requirement</h1>
                <p style={{ textAlign: "center", fontSize: "14px" }}>
                  Get matching properties delivered in your inbox as soon as
                  they're uploaded
                </p>
                <div className="col-md-12" style={{ display: "flex" }}>
                  <div
                    className="form-check"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      for="flexRadioDefault1"
                      style={{ marginLeft: "10px" }}
                    >
                      Buy
                    </label>
                  </div>
                  <div
                    className="form-check"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "10px",
                    }}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label"
                      for="flexRadioDefault2"
                      style={{ marginLeft: "10px" }}
                    >
                      Rent
                    </label>
                  </div>
                </div>
              </div>
              <div className="row" style={{ paddingTop: "10px" }}>
                <div className="col-md-6">
                  <div className="listsearch-input-item">
                    <label>Type of Property</label>
                    <select
                      data-placeholder="Status"
                      className="chosen-select on-radius no-search-select"
                    >
                      <option>Purpose</option>
                      <option>For Rent</option>
                      <option>For Sale</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="listsearch-input-item">
                    <label>Min Budget AED</label>
                    <select
                      data-placeholder="Status"
                      className="chosen-select on-radius no-search-select"
                    >
                      <option>select min price</option>
                      <option>For Rent</option>
                      <option>For Sale</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="listsearch-input-item">
                    <label>Max Budget AED</label>
                    <select
                      data-placeholder="Status"
                      className="chosen-select on-radius no-search-select"
                    >
                      <option>select max price</option>
                      <option>For Rent</option>
                      <option>For Sale</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row" style={{ paddingTop: "10px" }}>
                <div className="col-md-6">
                  <div className="listsearch-input-item">
                    <label>Locality</label>
                    <input
                      type="text"
                      placeholder="Enter Locality"
                      style={{ padding: "15px" }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="listsearch-input-item">
                    <label>Bedrooms</label>
                    <select
                      data-placeholder="Status"
                      className="chosen-select on-radius no-search-select"
                    >
                      <option>Studio</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>9+</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row" style={{ paddingTop: "10px" }}>
                <div className="col-md-6">
                  <div className="listsearch-input-item">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      style={{ padding: "15px" }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="listsearch-input-item">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="Enter Email"
                      style={{ padding: "15px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="row" style={{ paddingTop: "10px" }}>
                <div className="col-md-6">
                  <div className="listsearch-input-item">
                    <label>Mobile No.</label>
                    <input
                      type="text"
                      placeholder="Enter Mobile"
                      style={{ padding: "15px" }}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <ReCAPTCHA
                    sitekey="Your client site key"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="row" style={{ paddingTop: "10px" }}>
                <div className="col-md-12">
                  <div
                    className="form-group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                      style={{ marginLeft: "10px" }}
                    >
                      Is Mortgage Required ?
                    </label>
                  </div>
                  <div
                    className="form-group"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                      style={{ marginLeft: "10px" }}
                    >
                      I agree to the <b>Terms and Conditions</b> and{" "}
                      <b>Privacy Policy</b>
                    </label>
                  </div>
                </div>
                <div className="col-md-12">
                  <p>
                    <i>
                      You agree and confirm that your contact details might be
                      shared with a property developer or an individual owner
                      that matches your requirement above
                    </i>
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <a href="#" className="btn  color-bg float-btn-r ">
                  Post Requirements
                </a>
              </div>
            </div>
            <div className="col-md-2"></div>
          </section></div>
          <Footer />
        </div>
        <a className="to-top color-bg">
          <i className="fas fa-caret-up" />
        </a>
      </div>
    </>
  );
}

export default Getcontactedbypropertyowner;
