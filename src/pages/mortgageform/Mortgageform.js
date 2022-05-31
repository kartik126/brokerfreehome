import React from "react";
import Header from "../../othercomponents/Header";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "../../othercomponents/Footer";
function Mortgageform() {
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
                  <span>Mortgage Form</span>
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
                <a href="/">Home</a> <span>Mortgage Form</span>
              </div>
            </div>
          </div>
          <div className="card">
            <section>
              <div className="col-md-2"></div>
              <div
                className="col-md-8"
                style={{
                  border: "1px solid #c5c5c5",
                  borderRadius: "5px",
                  padding: "20px",
                }}
              >
                <div
                  className="row"
                  style={{
                    padding: "10px 10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <h1 style={{ fontSize: "26px" }}>
                    APPLICATION FOR MORTGAGE PRE-APPROVAL
                  </h1>
                  <p style={{ textAlign: "wrap", fontSize: "14px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p style={{ fontWeight: "900" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                  <div className="col-md-12 form_heading">
                    <div className="p-3 mb-2 ">Personal Details</div>
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "10px" }}>
                  <div className="col-md-6">
                    <div className="listsearch-input-item">
                      <label>Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter Name"
                        style={{ padding: "15px" }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="listsearch-input-item">
                      <label>Nationality</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter Nationality"
                        style={{ padding: "15px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "10px" }}>
                  <div className="col-md-6">
                    <div className="listsearch-input-item">
                      <label>Age</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter Age"
                        style={{ padding: "15px" }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="listsearch-input-item">
                      <label>Status</label>
                      <select
                        data-placeholder="Status"
                        className="chosen-select on-radius no-search-select"
                      >
                        <option>UAE NATIONAL</option>
                        <option>UAE RESIDENT</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "10px" }}>
                  <div className="col-md-6">
                    <div className="listsearch-input-item">
                      <label>EMIRATES ID NO.</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter EMIRATES ID NO."
                        style={{ padding: "15px" }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="listsearch-input-item">
                      <label>Employeement Status</label>
                      <select
                        data-placeholder="Status"
                        className="chosen-select on-radius no-search-select"
                      >
                        <option>Employeed</option>
                        <option>Self-employeed</option>
                        <option>Othwe Source of Income</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    padding: "10px 10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className="col-md-12 form_heading"
                    style={{ paddingTop: "10px" }}
                  >
                    <div className="p-3 mb-2 ">Property Details</div>
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "10px" }}>
                  <div className="col-md-6">
                    <div className="listsearch-input-item">
                      <label>Type</label>
                      <select
                        data-placeholder="Status"
                        className="chosen-select on-radius no-search-select"
                      >
                        <option>Villa</option>
                        <option>Townhouse</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="listsearch-input-item">
                      <label>Status</label>
                      <select
                        data-placeholder="Status"
                        className="chosen-select on-radius no-search-select"
                      >
                        <option>Off Plan</option>
                        <option>Completed</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "10px" }}>
                  <div className="col-md-6">
                    <div className="listsearch-input-item">
                      <label>Address</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter Address"
                        style={{ padding: "15px" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="listsearch-input-item">
                      <label>Price</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter Price"
                        style={{ padding: "15px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "10px" }}>
                  <div className="col-md-6">
                    <div className="listsearch-input-item">
                      <label>Initial Payment Amount (20% is must)</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter Initial Payment Amount"
                        style={{ padding: "15px" }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="listsearch-input-item">
                      <label>Join Or Single Ownership</label>
                      <select
                        data-placeholder="Status"
                        className="chosen-select on-radius no-search-select"
                      >
                        <option>Join</option>
                        <option>Single Ownership</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    padding: "10px 10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className="col-md-12 form_heading"
                    style={{ paddingTop: "10px" }}
                  >
                    <div className="p-3 mb-2 ">Contact Details</div>
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "10px" }}>
                  <div className="col-md-6">
                    <div className="listsearch-input-item">
                      <label>Email ID</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter Email ID"
                        style={{ padding: "15px" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="listsearch-input-item">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter Phone Number"
                        style={{ padding: "15px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row" style={{ padding: "10px" }}>
                  <div className="col-md-12" style={{ padding: "10px" }}>
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
                  <div className="col-md-12" style={{ padding: "10px" }}>
                    <ReCAPTCHA
                      sitekey="Your client site key"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <a href="#" className="btn  color-bg float-btn-r ">
                    Submit
                  </a>
                </div>
              </div>
              <div className="col-md-2"></div>
            </section>
          </div>
          <Footer />
        </div>
        <a className="to-top color-bg">
          <i className="fas fa-caret-up" />
        </a>
      </div>
    </>
  );
}

export default Mortgageform;
