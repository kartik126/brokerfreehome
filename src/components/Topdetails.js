import React from "react";

function Topdetails() {
  return (
    <>
      <section>
        <div className="container">
          {/*about-wrap */}
          <div className="about-wrap">
            <div className="row">
              <div className="col-md-5">
                <div className="about-title ab-hero fl-wrap">
                  <h2>Savings All The Way</h2>
                  <h4>
                    Enjoy a host of benefits on choosing properties through
                    Broker Free Homes
                  </h4>
                </div>
                <div className="services-opions fl-wrap">
                  <ul>
                    <li>
                      <i className="fal fa-handshake" />
                      <h4>Broker Free Transactions </h4>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Et, incidunt!
                      </p>
                    </li>
                    <li>
                      <i className="fal fa-creative-commons-zero" />
                      <h4>Zero Commission Deals </h4>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Et, incidunt!
                      </p>
                    </li>
                    <li>
                      <i className="fal fa-creative-commons-zero" />
                      <h4>Zero Platform Charge</h4>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Et, incidunt!
                      </p>
                    </li>
                    <li>
                      <i className="fal fa-rabbit-fast" />
                      <h4>Quick Mortgage Assist</h4>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Et, incidunt!
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-1" />
              <div className="col-md-6">
                <div className="about-img fl-wrap">
                  <img src="./assets/images/all/27.jpg" className="respimg" alt="" />
                  {/* <div class="about-img-hotifer color-bg">
											<p>Your website is fully responsive so visitors can view your content from
												their choice of device.
											</p>
											<h4>Mark Antony</h4>
											<h5>Broker Free Homes CEO</h5>
										</div> */}
                </div>
              </div>
            </div>
          </div>
          {/* about-wrap end  */}
        </div>
      </section>
    </>
  );
}

export default Topdetails;
