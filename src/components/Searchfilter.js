import React from "react";

function Searchfilter() {
  return (
    <>
      <div className="col-md-4">
        <div className="mob-nav-content-btn  color-bg show-list-wrap-search ntm fl-wrap">
          Show Filters
        </div>
        <div className="fl-wrap lws_mobile">
          <div className="list-searh-input-wrap-title   fl-wrap">
            <i className="far fa-sliders-h" />
            <span>Search Filters</span>
          </div>
          <div className="block-box fl-wrap search-sb" id="filters-column">
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
                <h4 style={{ marginBottom: "10px", textAlign: "start" }}>
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
                <h4 style={{ marginBottom: "10px", textAlign: "start" }}>
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
              <h4 style={{ marginBottom: "10px", textAlign: "start" }}>
                Amenities:
              </h4>
              <div className=" fl-wrap filter-tags">
                <ul className="no-list-style">
                  <li>
                    <input id="check-aa" type="checkbox" name="check" />
                    <label htmlFor="check-aa">Elevator in building</label>
                  </li>
                  <li>
                    <input id="check-b" type="checkbox" name="check" />
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
                    <input id="check-d" type="checkbox" name="check" />
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
                    <input id="check-d4" type="checkbox" name="check" />
                    <label htmlFor="check-d4">Fitness Gym</label>
                  </li>
                  <li>
                    <input id="check-d5" type="checkbox" name="check" />
                    <label htmlFor="check-d5">Security</label>
                  </li>
                  <li>
                    <input id="check-d6" type="checkbox" name="check" />
                    <label htmlFor="check-d6">Garage Attached</label>
                  </li>
                  <li>
                    <input id="check-d7" type="checkbox" name="check" />
                    <label htmlFor="check-d7">Back yard</label>
                  </li>
                  <li>
                    <input id="check-d8" type="checkbox" name="check" />
                    <label htmlFor="check-d8">Fireplace</label>
                  </li>
                  <li>
                    <input id="check-d9" type="checkbox" name="check" />
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
              <a href="#" className="btn small-btn float-btn color-bg">
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
    </>
  );
}

export default Searchfilter;
