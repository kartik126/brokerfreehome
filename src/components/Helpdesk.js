import React from "react";
import img from "../assets/images/bg/12.jpg"
function Helpdesk() {
  return (
    <>
      <section
        className="hidden-section single-hero-section"
        data-scrollax-parent="true"
        id="sec1"
        style={{ paddingTop: "50px" }}
      >
        <div className="bg-wrap bg-parallax-wrap-gradien">
          <div
            className="bg par-elem"
            style={{backgroundImage:`url(${img})`}} 
            
            data-scrollax="properties: { translateY: '30%' }"
          >
            <div className=" main_banner_parallax" />
          </div>
        </div>
        <div className="container">
          {/*  list-single-opt_header end */}
          {/*  list-single-header-item*/}
          <div className="list-single-header-item no-bg-list_sh fl-wrap">
            <div className="row">
              <div className="col-md-12">
                <h1 style={{ color: "white" }}>Help Desk</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="services-item ">
                  <h1 style={{color:"rgb(74, 210, 149)"}} className="fa fa-file" />
                  <h4>
                   Useful Forms 
                  </h4>
                
                </div>
              </div>
              <div className="col-md-3">
                <div className="services-item ">
                  <h1 style={{color:"rgb(74, 210, 149)"}} className="fa fa-search" />
                  <h4>
                   Useful Links 
                  </h4>
                
                </div>
              </div>
              <div className="col-md-3">
                <div className="services-item ">
                  <h1 style={{color:"rgb(74, 210, 149)"}} className="fa fa-question" />
                  <h4>
                   FAQs
                  </h4>
                
                </div>
              </div>
            
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Helpdesk;
