import React from "react";

function MortageCalculator() {
  return (
    <>
      <section className="small-padding">
        <div className="container-fluid " style={{ height: "100%" }}>
          <div className="row">
            <div className="col-md-6" style={{ paddingRight: 0 }}>
              <a href="listing.html"></a>
              <div className="slick-item">
                <a href="listing.html"></a>
                <div className="half-carousel-item-new fl-wrap">
                  <a href="listing.html"></a>
                  <div
                    className="half-carousel-content"
                    style={{ top: "30px" }}
                  >
                    <a href="listing.html">
                      <h3 style={{ textAlign: "left", color: "#0b2239" }}>
                        Mortgage Calculator
                      </h3>
                      {/* <p style="text-align: left;color: #0b2239;">Constant care and attention to the patients makes
													good record</p> */}
                    </a>
                    <div className="row">
                      <a href="listing.html"></a>
                      <div
                        className="col-md-5"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <a href="listing.html"></a>
                        <div className="share-holder hid-share">
                          <a href="listing.html"></a>
                          <a href="#" className=" share-btn ">
                            {" "}
                            Expat{" "}
                          </a>
                        </div>
                        <div className="share-holder hid-share">
                          <a href="#" className="share-btn">
                            {" "}
                            Emirati{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="listing-item custom-form"
                      style={{ width: "100%", paddingTop: "20px" }}
                    >
                      <div className="row">
                        <div className="row" style={{ padding: "0px 20px" }}>
                          <div className="col-sm-6">
                            <label>
                              Property Value
                              <span className="dec-icon">
                                <i className="far fa-money-bill" />
                              </span>
                            </label>
                            <input
                              type="text"
                              placeholder="Property Value / Rental Value"
                              defaultValue
                            />
                          </div>
                          <div className="col-sm-6">
                            <label>
                              Down payment
                              <span className="dec-icon">
                                <i className="far fa-money-bill" />
                              </span>
                            </label>
                            <input
                              type="text"
                              placeholder={10000}
                              defaultValue
                              readOnly
                            />
                          </div>
                        </div>
                        <h3
                          style={{
                            textAlign: "left",
                            color: "#0b2239",
                            margin: "10px ",
                          }}
                        >
                          Down Payment and Interest %
                        </h3>
                        <div className="row" style={{ padding: "0px 20px" }}>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="price-range"
                              data-min={100}
                              data-max={100000}
                              name="price-range1"
                              data-step={1}
                              defaultValue={1}
                              data-prefix="A.E.D."
                            />
                          </div>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="price-range"
                              data-min={100}
                              data-max={100000}
                              name="price-range1"
                              data-step={1}
                              defaultValue={1}
                              data-prefix="A.E.D."
                            />
                          </div>
                        </div>

                        {/* <div>
                          <h3 style={{fontSize: '15px'}}>It displays ‘Hurray! You’ll save AED XXXX’</h3>
                        </div> */}
                      </div>
                      <div className="row">
                        <div
                          className="col-md-12"
                          style={{
                            marginTop: "35px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <button
                            href="#"
                            className="btn color-bg small-btn "
                            style={{ margin: 0 }}
                          >
                            Compare
                          </button>
                          <button href="#" className="monthly-pay-btn">
                            Monthly Payment AED 12345
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6" style={{ padding: 0 }}>
                  <a href="listing.html">
                    <div className="slick-item">
                      <div
                        className="half-carousel-item-new fl-wrap"
                        style={{
                          borderRadius: 0,
                          borderRight: "none",
                          height: "400px",
                        }}
                      >
                        <div className="half-carousel-content">
                          <div className="services-item-new fl-wrap">
                            <i className="fa fa-repeat" />
                          </div>
                          <h3>Mortgage Compare</h3>
                          <p>
                            Constant care and attention to the patients makes
                            good record
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6" style={{ paddingLeft: 0 }}>
                  <a href="/mortgageform">
                    <div className="slick-item">
                      <div
                        className="half-carousel-item-new fl-wrap"
                        style={{ borderRadius: 0, height: "400px" }}
                      >
                        <div className="half-carousel-content">
                          <div className="services-item-new fl-wrap">
                            <i className="fa fa-file"></i>
                            {/* <i className="fa fa-file" /> */}
                          </div>
                          <h3>Apply for Mortgage</h3>
                          <p>
                            Constant care and attention to the patients makes
                            good record
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MortageCalculator;
