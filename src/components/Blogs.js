import React from "react";
import img from "../assets/images/agency/agent/1.jpg"
function Blogs() {
  return (
    <>
      <section className="gray-bg small-padding">
        <div className="container">
          <div className="section-title st-center fl-wrap">
            <h4>Blogs</h4>
            <h2>Our latest news</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {/* blog-item */}
            <div className="col-md-4">
              <div className="listing-item-blogs">
                <article className="geodir-category-listing fl-wrap">
                  <div className="geodir-category-img fl-wrap  agent_card">
                    <a className="geodir-category-img_item">
                      <img src="./assets/images/agency/agent/1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="geodir-category-content fl-wrap">
                    <div className="agent_card-title fl-wrap">
                      <h4>
                        <a href="blog-single.html">
                          Lorem ipsum dolor sit amet consectetur.
                        </a>
                      </h4>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas in pulvinar neque. Nulla finibus lobortis
                      pulvinar. Donec a consectetur nulla.
                    </p>
                    <a
                      href="blog-single.html"
                      className="btn float-btn-r color-bg small-btn"
                    >
                      Read More
                    </a>
                  </div>
                </article>
              </div>
            </div>
            {/* blog-item  end*/}
            {/* blog-item */}
            <div className="col-md-4">
              <div className="listing-item-blogs">
                <article className="geodir-category-listing fl-wrap">
                  <div className="geodir-category-img fl-wrap  agent_card">
                    <a className="geodir-category-img_item">
                      <img src={img} alt="" />
                    </a>
                  </div>
                  <div className="geodir-category-content fl-wrap">
                    <div className="agent_card-title fl-wrap">
                      <h4>
                        <a href="blog-single.html">
                          Lorem ipsum dolor sit amet consectetur.
                        </a>
                      </h4>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas in pulvinar neque. Nulla finibus lobortis
                      pulvinar. Donec a consectetur nulla.
                    </p>
                    <a
                      href="blog-single.html"
                      className="btn float-btn-r color-bg small-btn"
                    >
                      Read More
                    </a>
                  </div>
                </article>
              </div>
            </div>
            {/* blog-item  end*/}
            {/* blog-item */}
            <div className="col-md-4">
              <div className="listing-item-blogs">
                <article className="geodir-category-listing fl-wrap">
                  <div className="geodir-category-img fl-wrap  agent_card">
                    <a className="geodir-category-img_item">
                      <img src="./assets/images/agency/agent/1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="geodir-category-content fl-wrap">
                    <div className="agent_card-title fl-wrap">
                      <h4>
                        <a href="blog-single.html">
                          Lorem ipsum dolor sit amet consectetur.
                        </a>
                      </h4>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas in pulvinar neque. Nulla finibus lobortis
                      pulvinar. Donec a consectetur nulla.
                    </p>
                    <a
                      href="blog-single.html"
                      className="btn float-btn-r color-bg small-btn"
                    >
                      Read More
                    </a>
                  </div>
                </article>
              </div>
            </div>
            {/* blog-item  end*/}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
