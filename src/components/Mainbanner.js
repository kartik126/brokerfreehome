import React from 'react'

function Mainbanner() {
  return (
    <>
        <section className="hero-section gray-bg">
        <div className="bg-wrap">
          <div className="half-hero-bg-media full-height">
            {/* <div class="slider-progress-bar">
								<span>
									<svg class="circ" width="30" height="30">
										<circle class="circ2" cx="15" cy="15" r="13" stroke="rgba(255,255,255,0.4)" stroke-width="1"
											fill="none"></circle>
										<circle class="circ1" cx="15" cy="15" r="13" stroke="#fff" stroke-width="2" fill="none"></circle>
									</svg>
								</span>
							</div> */}
            <div className="slideshow-container">
              {/* slideshow-item */}
              <div className="slideshow-item">
                <img className="bg" style={{backgroundImage:`url(${"./assets/images/main_banner.png" })`}}  />
              </div>
              {/*  slideshow-item end  */}
              {/* slideshow-item */}
              {/* <div class="slideshow-item">
									<div class="bg" data-bg="images/bg/17.jpg"></div>
								</div> */}
              {/*  slideshow-item end  */}
              {/* slideshow-item */}
              {/* <div class="slideshow-item">
									<div class="bg" data-bg="images/bg/12.jpg"></div>
								</div> */}
              {/*  slideshow-item end  */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="main-search-input-wrap shadow_msiw">
            <div className="row">
              <div className="hero-notifer fl-wrap-new float-btn-r"><a href="dashboard-add-listing.html">Want to list your
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