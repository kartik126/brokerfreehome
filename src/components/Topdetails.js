import React from "react";
import img from "../assets/images/all/27.jpg";
function Topdetails() {
  return (
    <>
      <section>
        <div className="container">
          {/*about-wrap */}
          <div className="about-wrap">
            <div className="row">
              <div className="col-md-6 main_text_top">
                <div className="about-title ab-hero fl-wrap">
                  <h2>Savings All The Way</h2>
                  <h4>
                    Enjoy a host of benefits on choosing properties through
                    Broker Free Homes
                  </h4>
                </div>
              </div>
              <div className="col-md-1" />
              <div className="col-md-6 seller-image">
                <div className="about-img fl-wrap">
                  <img src={img} className="respimg" alt="" />
                  {/* <div className="about-img-hotifer color-bg">
											<p>Your website is fully responsive so visitors can view your content from
												their choice of device.
											</p>
											<h4>Mark Antony</h4>
											<h5>Broker Free Homes CEO</h5>
										</div> */}
                </div>
              </div>
            </div>

            <div className="services-opions fl-wrap">
              <div
                className="container"
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto auto",
                }}
              >
                <div className="seller-grid-block">
                  <h4>Broker Free Transactions </h4>
                  <h1></h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Et, incidunt!
                  </p>
                </div>
                <div className="grid-block">
                  <h4>Zero Commission Deals </h4>
                  <h1></h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Et, incidunt!
                  </p>
                </div>
                <div className="seller-grid-block">
                  <h4>Zero Platform Charge</h4>
                  <h1></h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Et, incidunt!
                  </p>
                </div>
                <div className="seller-grid-block">
                  <h4>Quick Mortgage Assist</h4>
                  <h1></h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Et, incidunt!
                  </p>
                </div>
                <div className="grid-block">
                  <h4>Zero Platform Charge</h4>
                  <h1></h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Et, incidunt!
                  </p>
                </div>
                <div className="seller-grid-block">
                  <h4>Zero Platform Charge</h4>
                  <h1></h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Et, incidunt!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about-wrap end  */}
      </section>
    </>
  );
}

export default Topdetails;
