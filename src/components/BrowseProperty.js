import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img from "../assets/images/all/3.jpg";
const options = {
  responsiveClass: true,
  autoplay: true,
  smartSpeed: 500,
  loop: true,
  margin: 20,
  nav: true,
  dots: true,
  responsive: {
    0: {
      items: 2,
    },
    400: {
      items: 2,
    },
    600: {
      items: 2,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};
function BrowseProperty() {
  return (
    <section className="gray-bg small-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="section-title fl-wrap">
              <h2>BROWSE PROPERTIES</h2>
              <h4>Apartments for Sale, below AED 1 Mn</h4>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>

        <OwlCarousel {...options}>
          <div className="listing-item">
            <article className="geodir-category-listing fl-wrap">
              <div className="geodir-category-img fl-wrap">
                <a
                  href="singlelisting"
                  className="geodir-category-img_item"
                >
                  <img src={img} alt="" />
                  <div className="overlay"></div>
                </a>
                <div className="geodir-category-location">
                  <a
                    href="#"
                    className="single-map-item tolt"
                    data-newlatitude="40.88496706"
                    data-newlongitude="-73.88191222"
                    data-microtip-position="top-left"
                    data-tooltip="On the map"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Prince St, NY, USA</span>
                  </a>
                </div>
                <ul className="list-single-opt_header_cat">
                  <li>
                    <a href="#" className="cat-opt blue-bg">
                      Sale
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cat-opt color-bg">
                      Villa
                    </a>
                  </li>
                </ul>
                <a
                  href="#"
                  className="geodir_save-btn tolt"
                  data-microtip-position="left"
                  data-tooltip="Save"
                >
                  <span>
                    <i className="fal fa-heart"></i>
                  </span>
                </a>
                <div className="geodir-category-listing_media-list">
                  <span>
                    <i className="fas fa-eye"></i> 12
                  </span>
                </div>
              </div>
              <div className="geodir-category-content fl-wrap">
                <h3 className="title-sin_item">
                  <a href="singlelisting">Kayak Point House</a>
                </h3>
                <div className="geodir-category-content_price">
                  A.E.D. 500.000
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                  Donec a consectetur nulla.
                </p>
                <div className="geodir-category-content-details">
                  <ul>
                    <li>
                      <i className="fal fa-bed"></i>
                      <span>5</span>
                    </li>
                    <li>
                      <i className="fal fa-bath"></i>
                      <span>1</span>
                    </li>
                    <li>
                      <i className="fal fa-cube"></i>
                      <span>510 ft2</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div className="listing-item">
            <article className="geodir-category-listing fl-wrap">
              <div className="geodir-category-img fl-wrap">
                <a
                  href="singlelisting"
                  className="geodir-category-img_item"
                >
                  <img src={img} alt="" />
                  <div className="overlay"></div>
                </a>
                <div className="geodir-category-location">
                  <a
                    href="#"
                    className="single-map-item tolt"
                    data-newlatitude="40.88496706"
                    data-newlongitude="-73.88191222"
                    data-microtip-position="top-left"
                    data-tooltip="On the map"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Prince St, NY, USA</span>
                  </a>
                </div>
                <ul className="list-single-opt_header_cat">
                  <li>
                    <a href="#" className="cat-opt blue-bg">
                      Sale
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cat-opt color-bg">
                      Villa
                    </a>
                  </li>
                </ul>
                <a
                  href="#"
                  className="geodir_save-btn tolt"
                  data-microtip-position="left"
                  data-tooltip="Save"
                >
                  <span>
                    <i className="fal fa-heart"></i>
                  </span>
                </a>
                <div className="geodir-category-listing_media-list">
                  <span>
                    <i className="fas fa-eye"></i> 12
                  </span>
                </div>
              </div>
              <div className="geodir-category-content fl-wrap">
                <h3 className="title-sin_item">
                  <a href="singlelisting">Kayak Point House</a>
                </h3>
                <div className="geodir-category-content_price">
                  A.E.D. 500.000
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                  Donec a consectetur nulla.
                </p>
                <div className="geodir-category-content-details">
                  <ul>
                    <li>
                      <i className="fal fa-bed"></i>
                      <span>5</span>
                    </li>
                    <li>
                      <i className="fal fa-bath"></i>
                      <span>1</span>
                    </li>
                    <li>
                      <i className="fal fa-cube"></i>
                      <span>510 ft2</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div className="listing-item">
            <article className="geodir-category-listing fl-wrap">
              <div className="geodir-category-img fl-wrap">
                <a
                  href="singlelisting"
                  className="geodir-category-img_item"
                >
                  <img src={img} alt="" />
                  <div className="overlay"></div>
                </a>
                <div className="geodir-category-location">
                  <a
                    href="#"
                    className="single-map-item tolt"
                    data-newlatitude="40.88496706"
                    data-newlongitude="-73.88191222"
                    data-microtip-position="top-left"
                    data-tooltip="On the map"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Prince St, NY, USA</span>
                  </a>
                </div>
                <ul className="list-single-opt_header_cat">
                  <li>
                    <a href="#" className="cat-opt blue-bg">
                      Sale
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cat-opt color-bg">
                      Villa
                    </a>
                  </li>
                </ul>
                <a
                  href="#"
                  className="geodir_save-btn tolt"
                  data-microtip-position="left"
                  data-tooltip="Save"
                >
                  <span>
                    <i className="fal fa-heart"></i>
                  </span>
                </a>
                <div className="geodir-category-listing_media-list">
                  <span>
                    <i className="fas fa-eye"></i> 12
                  </span>
                </div>
              </div>
              <div className="geodir-category-content fl-wrap">
                <h3 className="title-sin_item">
                  <a href="singlelisting">Kayak Point House</a>
                </h3>
                <div className="geodir-category-content_price">
                  A.E.D. 500.000
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                  Donec a consectetur nulla.
                </p>
                <div className="geodir-category-content-details">
                  <ul>
                    <li>
                      <i className="fal fa-bed"></i>
                      <span>5</span>
                    </li>
                    <li>
                      <i className="fal fa-bath"></i>
                      <span>1</span>
                    </li>
                    <li>
                      <i className="fal fa-cube"></i>
                      <span>510 ft2</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div className="listing-item">
            <article className="geodir-category-listing fl-wrap">
              <div className="geodir-category-img fl-wrap">
                <a
                  href="singlelisting"
                  className="geodir-category-img_item"
                >
                  <img src={img} alt="" />
                  <div className="overlay"></div>
                </a>
                <div className="geodir-category-location">
                  <a
                    href="#"
                    className="single-map-item tolt"
                    data-newlatitude="40.88496706"
                    data-newlongitude="-73.88191222"
                    data-microtip-position="top-left"
                    data-tooltip="On the map"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Prince St, NY, USA</span>
                  </a>
                </div>
                <ul className="list-single-opt_header_cat">
                  <li>
                    <a href="#" className="cat-opt blue-bg">
                      Sale
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cat-opt color-bg">
                      Villa
                    </a>
                  </li>
                </ul>
                <a
                  href="#"
                  className="geodir_save-btn tolt"
                  data-microtip-position="left"
                  data-tooltip="Save"
                >
                  <span>
                    <i className="fal fa-heart"></i>
                  </span>
                </a>
                <div className="geodir-category-listing_media-list">
                  <span>
                    <i className="fas fa-eye"></i> 12
                  </span>
                </div>
              </div>
              <div className="geodir-category-content fl-wrap">
                <h3 className="title-sin_item">
                  <a href="singlelisting">Kayak Point House</a>
                </h3>
                <div className="geodir-category-content_price">
                  A.E.D. 500.000
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                  Donec a consectetur nulla.
                </p>
                <div className="geodir-category-content-details">
                  <ul>
                    <li>
                      <i className="fal fa-bed"></i>
                      <span>5</span>
                    </li>
                    <li>
                      <i className="fal fa-bath"></i>
                      <span>1</span>
                    </li>
                    <li>
                      <i className="fal fa-cube"></i>
                      <span>510 ft2</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div className="listing-item">
            <article className="geodir-category-listing fl-wrap">
              <div className="geodir-category-img fl-wrap">
                <a
                  href="singlelisting"
                  className="geodir-category-img_item"
                >
                  <img src={img} alt="" />
                  <div className="overlay"></div>
                </a>
                <div className="geodir-category-location">
                  <a
                    href="#"
                    className="single-map-item tolt"
                    data-newlatitude="40.88496706"
                    data-newlongitude="-73.88191222"
                    data-microtip-position="top-left"
                    data-tooltip="On the map"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Prince St, NY, USA</span>
                  </a>
                </div>
                <ul className="list-single-opt_header_cat">
                  <li>
                    <a href="#" className="cat-opt blue-bg">
                      Sale
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cat-opt color-bg">
                      Villa
                    </a>
                  </li>
                </ul>
                <a
                  href="#"
                  className="geodir_save-btn tolt"
                  data-microtip-position="left"
                  data-tooltip="Save"
                >
                  <span>
                    <i className="fal fa-heart"></i>
                  </span>
                </a>
                <div className="geodir-category-listing_media-list">
                  <span>
                    <i className="fas fa-eye"></i> 12
                  </span>
                </div>
              </div>
              <div className="geodir-category-content fl-wrap">
                <h3 className="title-sin_item">
                  <a href="singlelisting">Kayak Point House</a>
                </h3>
                <div className="geodir-category-content_price">
                  A.E.D. 500.000
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                  Donec a consectetur nulla.
                </p>
                <div className="geodir-category-content-details">
                  <ul>
                    <li>
                      <i className="fal fa-bed"></i>
                      <span>5</span>
                    </li>
                    <li>
                      <i className="fal fa-bath"></i>
                      <span>1</span>
                    </li>
                    <li>
                      <i className="fal fa-cube"></i>
                      <span>510 ft2</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div className="listing-item">
            <article className="geodir-category-listing fl-wrap">
              <div className="geodir-category-img fl-wrap">
                <a
                  href="singlelisting"
                  className="geodir-category-img_item"
                >
                  <img src={img} alt="" />
                  <div className="overlay"></div>
                </a>
                <div className="geodir-category-location">
                  <a
                    href="#"
                    className="single-map-item tolt"
                    data-newlatitude="40.88496706"
                    data-newlongitude="-73.88191222"
                    data-microtip-position="top-left"
                    data-tooltip="On the map"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Prince St, NY, USA</span>
                  </a>
                </div>
                <ul className="list-single-opt_header_cat">
                  <li>
                    <a href="#" className="cat-opt blue-bg">
                      Sale
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cat-opt color-bg">
                      Villa
                    </a>
                  </li>
                </ul>
                <a
                  href="#"
                  className="geodir_save-btn tolt"
                  data-microtip-position="left"
                  data-tooltip="Save"
                >
                  <span>
                    <i className="fal fa-heart"></i>
                  </span>
                </a>
                <div className="geodir-category-listing_media-list">
                  <span>
                    <i className="fas fa-eye"></i> 12
                  </span>
                </div>
              </div>
              <div className="geodir-category-content fl-wrap">
                <h3 className="title-sin_item">
                  <a href="singlelisting">Kayak Point House</a>
                </h3>
                <div className="geodir-category-content_price">
                  A.E.D. 500.000
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                  Donec a consectetur nulla.
                </p>
                <div className="geodir-category-content-details">
                  <ul>
                    <li>
                      <i className="fal fa-bed"></i>
                      <span>5</span>
                    </li>
                    <li>
                      <i className="fal fa-bath"></i>
                      <span>1</span>
                    </li>
                    <li>
                      <i className="fal fa-cube"></i>
                      <span>510 ft2</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </OwlCarousel>
        <a href="/searchlisting" className="btn float-btn-r small-btn color-bg">
          View All Properties
        </a>
      </div>
    </section>
  );
}

export default BrowseProperty;
