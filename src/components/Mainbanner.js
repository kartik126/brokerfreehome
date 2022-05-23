import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/images/main_banner.png" ;
function Mainbanner() {
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
                <img className="bg" style={{backgroundImage:`url(${img})`}}  />
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
              <div className="hero-notifer fl-wrap-new float-btn-r"><a href="/dashboard">Want to list your
                  properties?</a></div>
            </div>
          </div>
          <div className="scroll-down-wrap sdw_center">
            <div className="mousey">
              <div className="scroller" />
            </div>
            <span>Scroll Down To Discover</span>
          </div>
        </div>
      </section></>
  )
}

export default Mainbanner