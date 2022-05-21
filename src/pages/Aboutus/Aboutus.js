import React from "react";
import Header from "../../othercomponents/Header";
import Footer from "../../othercomponents/Footer";
import { Link } from "react-router-dom";
import Footer2 from "../../othercomponents/Footer2";
function Aboutus() {
  return (
    <>
      <Header />
      <div id="wrapper">
        {/* content */}
        <div className="content">
          {/*  section  */}
          <section
            className="hidden-section single-par2  "
            data-scrollax-parent="true"
          >
            <div className="bg-wrap bg-parallax-wrap-gradien">
              <div
                className="bg par-elem "
                style={{
                  backgroundImage: `url(${"./assets/images/all/11.jpg"})`,
                }}
                data-scrollax="properties: { translateY: '30%' }"
              ></div>
            </div>
            <div className="container">
              <div className="section-title center-align big-title">
                <h2>
                  <span>About Us</span>
                </h2>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  nec tincidunt arcu, sit amet fermentum sem.
                </h4>
              </div>
              <div className="scroll-down-wrap">
                <div className="mousey">
                  <div className="scroller" />
                </div>
                <span>Scroll Down To Discover</span>
              </div>
            </div>
          </section>
          {/*  section  end*/}
          {/* breadcrumbs*/}
          <div className="breadcrumbs fw-breadcrumbs sp-brd fl-wrap">
            <div className="container">
              <div className="breadcrumbs-list">
                <a href="#">Home</a> <span>About</span>
              </div>
              <div className="share-holder hid-share">
                <a href="#" className="share-btn showshare sfcs">
                  {" "}
                  <i className="fas fa-share-alt" /> Share{" "}
                </a>
                <div className="share-container  isShare" />
              </div>
            </div>
          </div>
          {/* breadcrumbs end */}
          {/* section */}
          <section className="color-bg small-padding">
            <div className="container">
              <div className="main-facts fl-wrap">
                {/* inline-facts  */}
                <div className="inline-facts-wrap">
                  <div className="inline-facts">
                    <div className="milestone-counter">
                      <div className="stats animaper">
                        <div className="num" data-content={0} data-num={578}>
                          0
                        </div>
                      </div>
                    </div>
                    <h6>Agents and Agencys</h6>
                  </div>
                </div>
                {/* inline-facts end */}
                {/* inline-facts  */}
                <div className="inline-facts-wrap">
                  <div className="inline-facts">
                    <div className="milestone-counter">
                      <div className="stats animaper">
                        <div className="num" data-content={0} data-num={12168}>
                          0
                        </div>
                      </div>
                    </div>
                    <h6>Happy Customers Every Year</h6>
                  </div>
                </div>
                {/* inline-facts end */}
                {/* inline-facts  */}
                <div className="inline-facts-wrap">
                  <div className="inline-facts">
                    <div className="milestone-counter">
                      <div className="stats animaper">
                        <div className="num" data-content={0} data-num={2172}>
                          0
                        </div>
                      </div>
                    </div>
                    <h6>Won Awards</h6>
                  </div>
                </div>
                {/* inline-facts end */}
                {/* inline-facts  */}
                <div className="inline-facts-wrap">
                  <div className="inline-facts">
                    <div className="milestone-counter">
                      <div className="stats animaper">
                        <div className="num" data-content={0} data-num={732}>
                          0
                        </div>
                      </div>
                    </div>
                    <h6>New Listing Every Week</h6>
                  </div>
                </div>
                {/* inline-facts end */}
              </div>
            </div>
            <div className="svg-bg">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="100%"
                height="100%"
                viewBox="0 0 1600 900"
                preserveAspectRatio="xMidYMax slice"
              >
                <defs>
                  <linearGradient id="bg">
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgba(255, 255, 255, 0.6)" }}
                    />
                    <stop
                      offset="50%"
                      style={{ stopColor: "rgba(255, 255, 255, 0.1)" }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgba(255, 255, 255, 0.6)" }}
                    />
                  </linearGradient>
                  <path
                    id="wave"
                    stroke="url(#bg)"
                    fill="none"
                    d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
                                        s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
                  />
                </defs>
                <g>
                  <use xlinkHref="#wave">
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="translate"
                      dur="10s"
                      calcMode="spline"
                      values="270 230; -334 180; 270 230"
                      keyTimes="0; .5; 1"
                      keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                      repeatCount="indefinite"
                    />
                  </use>
                  <use xlinkHref="#wave">
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="translate"
                      dur="8s"
                      calcMode="spline"
                      values="-270 230;243 220;-270 230"
                      keyTimes="0; .6; 1"
                      keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                      repeatCount="indefinite"
                    />
                  </use>
                  <use xlinkHref="#wave">
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="translate"
                      dur="6s"
                      calcMode="spline"
                      values="0 230;-140 200;0 230"
                      keyTimes="0; .4; 1"
                      keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                      repeatCount="indefinite"
                    />
                  </use>
                  <use xlinkHref="#wave">
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="translate"
                      dur="12s"
                      calcMode="spline"
                      values="0 240;140 200;0 230"
                      keyTimes="0; .4; 1"
                      keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                      repeatCount="indefinite"
                    />
                  </use>
                </g>
              </svg>
            </div>
          </section>
          {/* section end*/}
          {/* section */}
          <section>
            <div className="container">
              {/*about-wrap */}
              <div className="about-wrap">
                <div className="row">
                  <div className="col-md-5">
                    <div className="about-title fl-wrap">
                      <h2>
                        Our Company <span>Story</span>
                      </h2>
                      <h4>
                        Check video presentation to find out more about us .
                      </h4>
                    </div>
                    <p>
                      Ut euismod ultricies sollicitudin. Curabitur sed dapibus
                      nulla. Nulla eget iaculis lectus. Mauris ac maximus neque.
                      Nam in mauris quis libero sodales eleifend. Morbi varius,
                      nulla sit amet rutrum elementum, est elit finibus tellus,
                      ut tristique elit risus at metus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas in pulvinar neque. Nulla finibus lobortis
                      pulvinar. Donec a consectetur nulla. Nulla posuere sapien
                      vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam
                      erat volutpat. Curabitur convallis fringilla diam sed
                      aliquam. Sed tempor iaculis massa faucibus feugiat. In
                      fermentum facilisis massa, a consequat purus viverra.
                    </p>
                    <a href="#" className="btn small-btn float-btn color-bg">
                      Read More
                    </a>
                  </div>
                  <div className="col-md-1" />
                  <div className="col-md-6">
                    <div className="about-img fl-wrap">
                      <img
                        src="./assets/images/all/18.jpg"
                        className="respimg"
                        alt=""
                      />
                      <div className="about-img-hotifer color-bg">
                        <p>
                          Your website is fully responsive so visitors can view
                          your content from their choice of device.
                        </p>
                        <h4>Mark Antony</h4>
                        <h5>Homeradar CEO</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* about-wrap end  */}
            </div>
          </section>
          {/* section end*/}
          {/* section */}
          <section className="gray-bg small-padding">
            <div className="container">
              <div className="row">
                {/* services-item */}
                <div className="col-md-4">
                  <div className="services-item fl-wrap">
                    <i className="fa fa-headset" />
                    <h4>
                      24 Hours Support <span>01</span>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas in pulvinar neque. Nulla finibus lobortis
                      pulvinar.
                    </p>
                    <a href="#" className="serv-link">
                      Read more
                    </a>
                  </div>
                </div>
                {/* services-item  end*/}
                {/* services-item */}
                <div className="col-md-4">
                  <div className="services-item fl-wrap">
                    <i className="fa fa-users-cog" />
                    <h4>
                      User Admin Panel <span>02</span>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas in pulvinar neque. Nulla finibus lobortis
                      pulvinar.
                    </p>
                    <a href="#" className="serv-link">
                      Read more
                    </a>
                  </div>
                </div>
                {/* services-item  end*/}
                {/* services-item */}
                <div className="col-md-4">
                  <div className="services-item fl-wrap">
                    <i className="fa fa-laptop" />
                    <h4>
                      Mobile Friendly <span>03</span>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas in pulvinar neque. Nulla finibus lobortis
                      pulvinar.
                    </p>
                    <a href="#" className="serv-link">
                      Read more
                    </a>
                  </div>
                </div>
                {/* services-item  end*/}
              </div>
            </div>
          </section>
          {/* section end*/}
          {/* footer */}
          <Footer2 /> {/* footer end */}
        </div>
        {/* wrapper end */}
        {/*register form */}
      
        {/*register form end */}
        {/*secondary-nav */}
        <div className="secondary-nav">
          <ul>
            <li>
              <a
                href="dashboard-add-listing.html"
                className="tolt"
                data-microtip-position="left"
                data-tooltip="Sell Property"
              >
                <i className="fal fa-truck-couch" />{" "}
              </a>
            </li>
            <li>
              <a
                href="listing.html"
                className="tolt"
                data-microtip-position="left"
                data-tooltip="Buy Property"
              >
                {" "}
                <i className="fal fa-shopping-bag" />
              </a>
            </li>
            <li>
              <a
                href="compare.html"
                className="tolt"
                data-microtip-position="left"
                data-tooltip="Your Compare"
              >
                <i className="fal fa-exchange" />
              </a>
            </li>
          </ul>
          <div className="progress-indicator">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
              <circle
                cx={16}
                cy={16}
                r="15.9155"
                className="progress-bar__background"
              />
              <circle
                cx={16}
                cy={16}
                r="15.9155"
                className="progress-bar__progress 
                            js-progress-bar"
              />
            </svg>
          </div>
        </div>
        {/*secondary-nav end */}
        <a className="to-top color-bg">
          <i className="fas fa-caret-up" />
        </a>
      </div>
    </>
  );
}

export default Aboutus;
