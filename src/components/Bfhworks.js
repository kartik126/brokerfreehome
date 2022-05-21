import React from 'react'

function Bfhworks() {
  return (
    <>
    
     <section className="hidden-section single-hero-section" data-scrollax-parent="true" id="sec1" style={{paddingTop: '50px'}}>
        <div className="bg-wrap bg-parallax-wrap-gradien">
          <div className="bg par-elem" style={{backgroundImage:`url(${"./assets/NEW/Images/2.png" })`}} 
          
          data-scrollax="properties: { translateY: '30%' }">
            <div className=" main_banner_parallax" />
          </div>
        </div>
        <div className="container">
          {/* <div class="pricing-switcher-header" style="color: #0b2239;">How BFH works</div> */}
          <div className="col-md-4">
            <div className="section-title fl-wrap">
              <h2>BHow BFH works</h2>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            </div>
          </div>
          <div className="pricing-switcher">
            <div className="fieldset color-bg">
              <input type="radio" name="duration-1" id="monthly-1" className="tariff-toggle" defaultChecked />
              <label htmlFor="monthly-1" className="button-bfh">Buyer</label>
              <input type="radio" name="duration-1" className="tariff-toggle" id="yearly-1" />
              <label htmlFor="yearly-1" className="button-bfh">Seller</label>
              <input type="radio" name="duration-1" className="tariff-toggle" id="yearly-2" />
              <label htmlFor="yearly-2" className="button-bfh">Tennant</label>
              <input type="radio" name="duration-1" className="tariff-toggle" id="yearly-3" />
              <label htmlFor="yearly-3" className="button-bfh">Landlord</label>
              <span className="switch-bfh" />
            </div>
          </div>
          {/*  list-single-opt_header end */}
          {/*  list-single-header-item*/}
          <div className="list-single-header-item no-bg-list_sh fl-wrap">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6" style={{padding: '10px'}}>
                  <div className="services-item fl-wrap">
                    <i className="fa fa-search" />
                    <h4>Search <span>01</span></h4>
                    <p>Search for a property of your choice from the hundreds of properties listed on the Broker
                      Free.
                    </p>
                  </div>
                </div>
                <div className="col-md-6" style={{padding: '10px'}}>
                  <div className="services-item fl-wrap">
                    <i className="fa fa-address-book" />
                    <h4>Contact Directly<span>02</span></h4>
                    <p>Get in touch with the owner using any of the multiple options available…Email, Phone,
                      Whatsapp,
                      etc.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6" style={{padding: '10px'}}>
                  <div className="services-item fl-wrap">
                    <i className="fa fa-home" />
                    <h4>Home Viewing<span>03</span></h4>
                    <p>Coordinate and schedule a property viewing using the convenient Meeting Planner tool.
                    </p>
                  </div>
                </div>
                <div className="col-md-6" style={{padding: '10px'}}>
                  <div className="services-item fl-wrap">
                    <i className="fa fa-stamp" />
                    <h4>Seal the Deal<span>04</span></h4>
                    <p>Loved the place? Close the deal DIY using our user-friendly step-by-step guides, checklists
                      and
                      templates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Bfhworks