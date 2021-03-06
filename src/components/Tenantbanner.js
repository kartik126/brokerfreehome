import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../othercomponents/Header";
import img from "../assets/images/main_banner.png";
function Tenantbanner() {
  const [buyActive, setbuyActive] = useState(true);
  const [rentActive, setrentActive] = useState(true);
  const navigate = useNavigate();

  const activeState=()=>{
    setrentActive(false);
    setbuyActive(false)
  }
  const deactiveState =()=>{
    setbuyActive(false);
    setrentActive(false);

  } 
  const modifyState=()=>{
    setbuyActive(true);
    setrentActive(true)
  }
  return (
    <>
      <section className="hero-section gray-bg">
        <div className="bg-wrap">
          <div className="half-hero-bg-media full-height">
            {/* <div className="slider-progress-bar">
								<span>
									<svg className="circ" width="30" height="30">
										<circle className="circ2" cx="15" cy="15" r="13" stroke="rgba(255,255,255,0.4)" stroke-width="1"
											fill="none"></circle>
										<circle className="circ1" cx="15" cy="15" r="13" stroke="#fff" stroke-width="2" fill="none"></circle>
									</svg>
								</span>
							</div> */}
            <div className="slideshow-container">
              {/* slideshow-item */}
              <div className="slideshow-item">
                <div
                  className="bg"
                  style={{
                    backgroundImage: `url(${img})`,
                  }}
                />
              </div>
              {/*  slideshow-item end  */}
              {/* slideshow-item */}
              {/* <div className="slideshow-item">
									<div className="bg" data-bg="images/bg/17.jpg"></div>
								</div> */}
              {/*  slideshow-item end  */}
              {/* slideshow-item */}
              {/* <div className="slideshow-item">
									<div className="bg" data-bg="images/bg/12.jpg"></div>
								</div> */}
              {/*  slideshow-item end  */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="main-search-input-wrap shadow_msiw">
            <div className="row">
              {buyActive ? (
                <div
                  className="hero-notifer fl-wrap-new"
                  onClick={() =>  deactiveState()  }
                >
                  <a href="javascript:void(0)">Buy</a>
                </div>
              ) : (
                <div className="hero-notifer fl-wrap-new">
                  <a
                    href="javascript:void(0)"
                    style={{ background: "#ffff", color: "#000" }}
                  >
                    Buy
                  </a>
                </div>
              )}
              {rentActive ? (
                <div className="hero-notifer fl-wrap-new" onClick={()=>activeState()}>
                  <a
                    href="javascript:void(0)"
                    style={{ background: "#ffff", color: "#000" }}
                  >
                    Rent
                  </a>
                </div>
              ) : (
                <div className="hero-notifer fl-wrap-new" onClick={ ()=>modifyState()}>
                  <a href="javascript:void(0)">Rent</a>
                </div>
              )}
            </div>
            <div className="main-search-input fl-wrap">
              <div className="main-search-input-item">
                <select
                  data-placeholder="All Categories"
                  className="chosen-select"
                >
                  <option>City</option>
                  <option>Dubai</option>
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
              <div className="main-search-input-item">
                <select
                  data-placeholder="Locality"
                  className="chosen-select no-search-select"
                >
                  <option>Location</option>
                  <option>London</option>
                  <option>Paris</option>
                  <option>Kiev</option>
                </select>
              </div>
              <div className="main-search-input-item">
                <select
                  data-placeholder="Property Type"
                  className="chosen-select"
                >
                  <option>Property Type</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>PentHouse</option>
                </select>
              </div>
              <div className="main-search-input-item">
                <select
                  data-placeholder="Beds"
                  className="chosen-select no-search-select"
                >
                  <option>Beds</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="main-search-input-item">
                <label />
                <div
                  className="price-rage-item fl-wrap"
                  style={{ marginTop: "10px", padding: "0 20px" }}
                >
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
              <button
                className="main-search-button color-bg"
                onClick={() => navigate("/searchlisting")}
              >
                {" "}
                Search <i className="fa fa-search" />
              </button>
            </div>
          </div>
          {/* <div className="hero-notifer fl-wrap">Need more search options? <a href="listing.html">Advanced
                Search</a> </div> */}
          <div className="scroll-down-wrap sdw_center">
            <div className="mousey">
              <div className="scroller" />
            </div>
            <span>Scroll Down To Discover</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tenantbanner;
