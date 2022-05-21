import React from 'react'

function Getcontacted() {
  return (
    <>
    <section className="small-padding " style={{background: '#0b2239'}}>
        <div className="container">
          <div className="mob-nav-content-btn  color-bg show-list-wrap-search ntm fl-wrap">Show Filters</div>
          {/* list-searh-input-wrap*/}
          <div className="list-searh-input-wrap box_list-searh-input-wrap lws_mobile fl-wrap">
            <div className="about-title ab-hero fl-wrap">
              <h2>Get contacted by Property-owner</h2>
              <h4>Tell us what you’re looking for, and get contacted directly by property owners.</h4>
            </div>
            <div className="custom-form fl-wrap">
              <div className="row">
                {/* listsearch-input-item */}
                <div className="col-sm-5">
                  <div className="listsearch-input-item">
                    <select data-placeholder="Status" className="chosen-select on-radius no-search-select">
                      <option>Purpose</option>
                      <option>For Rent</option>
                      <option>For Sale</option>
                    </select>
                  </div>
                </div>
                {/* listsearch-input-item */}
                {/* listsearch-input-item */}
                <div className="col-sm-5">
                  <div className="listsearch-input-item">
                    <select data-placeholder="Status" className="chosen-select on-radius no-search-select">
                      <option>Property type</option>
                      <option>For Rent</option>
                      <option>For Sale</option>
                    </select>
                  </div>
                </div>
                {/* listsearch-input-item */}
                {/* listsearch-input-item */}
                <div className="col-sm-2">
                  <div className="listsearch-input-item">
                    <a href="#" className="btn color-bg fw-btn float-btn small-btn">Search</a>
                  </div>
                </div>
                {/* listsearch-input-item */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Getcontacted