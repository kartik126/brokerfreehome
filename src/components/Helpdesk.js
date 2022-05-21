import React from 'react'

function Helpdesk() {
  return (
    <>
     <section className="hidden-section single-hero-section" data-scrollax-parent="true" id="sec1" style={{paddingTop: '50px'}}>
        <div className="bg-wrap bg-parallax-wrap-gradien">
          <div className="bg par-elem" data-bg="images/bg/12.jpg" data-scrollax="properties: { translateY: '30%' }">
            <div className=" main_banner_parallax" />
          </div>
        </div>
        <div className="container">
          {/*  list-single-opt_header end */}
          {/*  list-single-header-item*/}
          <div className="list-single-header-item no-bg-list_sh fl-wrap">
            <div className="row">
              <div className="col-md-12">
                <h1 style={{color: 'white'}}>Help Desk</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="services-item fl-wrap">
                  <i className="fal fa-search" />
                  <h4>Search <span>01</span></h4>
                  <p>Search for a property of your choice from the hundreds of properties listed on the Broker Free
                    Homes.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="services-item fl-wrap">
                  <i className="fal fa-address-book" />
                  <h4>Contact Directly<span>02</span></h4>
                  <p>Get in touch with the owner using any of the multiple options available…Email, Phone, Whatsapp,
                    etc.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="services-item fl-wrap">
                  <i className="fal fa-home" />
                  <h4>Home Viewing<span>03</span></h4>
                  <p>Coordinate and schedule a property viewing using the convenient Meeting Planner tool.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="services-item fl-wrap">
                  <i className="fal fa-stamp" />
                  <h4>Seal the Deal<span>04</span></h4>
                  <p>Loved the place? Close the deal DIY using our user-friendly step-by-step guides, checklists and
                    templates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Helpdesk