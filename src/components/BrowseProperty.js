import React from "react";

function BrowseProperty() {
  return (
    <>
      <section className="gray-bg small-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="section-title fl-wrap">
                <h2>BROWSE PROPERTIES</h2>
                <h4>Apartments for Sale, below AED 1 Mn</h4>
              </div>
            </div>
            {/* <div class="col-md-8">
								<div class="listing-filters gallery-filters">
									<a href="#" class="gallery-filter  gallery-filter-active" data-filter="*"> <span>All
											Categories</span></a>
									<a href="#" class="gallery-filter" data-filter=".for_sale"> <span>For
											Sale</span></a>
									<a href="#" class="gallery-filter" data-filter=".for_rent"> <span>For
											Rent</span></a>
								</div>
							</div> */}
          </div>
          <div className="clearfix" />
          {/* grid-item-holder*/}
          <div className="gallery-items gisp browse_property_grid_scroll">
            <div className="new_div_scroll_property row">
              {/* gallery-item*/}
              <div className="gallery-item for_sale">
                {/* listing-item */}
                <div className="listing-item">
                  <article className="geodir-category-listing fl-wrap">
                    <div className="geodir-category-img fl-wrap">
                      <a
                        href="listing-single3.html"
                        className="geodir-category-img_item"
                      >
                        <img src="images/all/3.jpg" alt="" />
                        <div className="overlay" />
                      </a>
                      <div className="geodir-category-location">
                        <a
                          href="#"
                          className="single-map-item tolt"
                          data-newlatitude="40.72956781"
                          data-newlongitude="-73.99726866"
                          data-microtip-position="top-left"
                          data-tooltip="On the map"
                        >
                          <i className="fas fa-map-marker-alt" />
                          <span> Bright St New York, USA</span>
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
                            Apartment
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
                          <i className="fal fa-heart" />
                        </span>
                      </a>
                      <div className="geodir-category-listing_media-list">
                        <span>
                          <i className="fas fa-eye" /> 8
                        </span>
                      </div>
                    </div>
                    <div className="geodir-category-content fl-wrap">
                      <h3 className="title-sin_item">
                        <a href="listing-single3.html">
                          Gorgeous House For Sale
                        </a>
                      </h3>
                      <div className="geodir-category-content_price">
                        A.E.D. 600,000
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas in pulvinar neque. Nulla finibus lobortis
                        pulvinar. Donec a consectetur nulla.
                      </p>
                      <div className="geodir-category-content-details">
                        <ul>
                          <li>
                            <i className="fal fa-bed" />
                            <span>3</span>
                          </li>
                          <li>
                            <i className="fal fa-bath" />
                            <span>2</span>
                          </li>
                          <li>
                            <i className="fal fa-cube" />
                            <span>450 ft2</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
                {/* listing-item end*/}
              </div>
              {/* gallery-item end*/}
              {/* gallery-item*/}
              <div className="gallery-item for_sale for_rent">
                {/* listing-item */}
                <div className="listing-item">
                  <article className="geodir-category-listing fl-wrap">
                    <div className="geodir-category-img fl-wrap">
                      <a
                        href="listing-single3.html"
                        className="geodir-category-img_item"
                      >
                        <img src="images/all/5.jpg" alt="" />
                        <div className="overlay" />
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
                          <i className="fas fa-map-marker-alt" />
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
                          <i className="fal fa-heart" />
                        </span>
                      </a>
                      <div className="geodir-category-listing_media-list">
                        <span>
                          <i className="fas fa-eye" /> 12
                        </span>
                      </div>
                    </div>
                    <div className="geodir-category-content fl-wrap">
                      <h3 className="title-sin_item">
                        <a href="listing-single3.html">Kayak Point House</a>
                      </h3>
                      <div className="geodir-category-content_price">
                        A.E.D. 500.000
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas in pulvinar neque. Nulla finibus lobortis
                        pulvinar. Donec a consectetur nulla.
                      </p>
                      <div className="geodir-category-content-details">
                        <ul>
                          <li>
                            <i className="fal fa-bed" />
                            <span>5</span>
                          </li>
                          <li>
                            <i className="fal fa-bath" />
                            <span>1</span>
                          </li>
                          <li>
                            <i className="fal fa-cube" />
                            <span>510 ft2</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
                {/* listing-item end*/}
              </div>
              {/* gallery-item end*/}
              {/* gallery-item*/}
              <div className="gallery-item for_rent">
                {/* listing-item */}
                <div className="listing-item">
                  <article className="geodir-category-listing fl-wrap">
                    <div className="geodir-category-img fl-wrap">
                      <a
                        href="listing-single3.html"
                        className="geodir-category-img_item"
                      >
                        <img src="images/all/8.jpg" alt="" />
                        <div className="overlay" />
                      </a>
                      <div className="geodir-category-location">
                        <a
                          href="#"
                          className="single-map-item tolt"
                          data-newlatitude="40.76221766"
                          data-newlongitude="-73.96511769"
                          data-microtip-position="top-left"
                          data-tooltip="On the map"
                        >
                          <i className="fas fa-map-marker-alt" />
                          <span>Bright St, Jersey City, NJ USA</span>
                        </a>
                      </div>
                      <ul className="list-single-opt_header_cat">
                        <li>
                          <a href="#" className="cat-opt blue-bg">
                            Rent
                          </a>
                        </li>
                        <li>
                          <a href="#" className="cat-opt color-bg">
                            Apartment
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
                          <i className="fal fa-heart" />
                        </span>
                      </a>
                      <div className="geodir-category-listing_media-list">
                        <span>
                          <i className="fas fa-eye" /> 21
                        </span>
                      </div>
                    </div>
                    <div className="geodir-category-content fl-wrap">
                      <h3 className="title-sin_item">
                        <a href="listing-single3.html">Urban House</a>
                      </h3>
                      <div className="geodir-category-content_price">
                        1500 / per month
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas in pulvinar neque. Nulla finibus lobortis
                        pulvinar. Donec a consectetur nulla.
                      </p>
                      <div className="geodir-category-content-details">
                        <ul>
                          <li>
                            <i className="fal fa-bed" />
                            <span>5</span>
                          </li>
                          <li>
                            <i className="fal fa-bath" />
                            <span>3</span>
                          </li>
                          <li>
                            <i className="fal fa-cube" />
                            <span>1210 ft2</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
                {/* listing-item end*/}
              </div>
              {/* gallery-item end*/}
              {/* gallery-item*/}
              <div className="gallery-item for_sale">
                {/* listing-item */}
                <div className="listing-item">
                  <article className="geodir-category-listing fl-wrap">
                    <div className="geodir-category-img fl-wrap">
                      <a
                        href="listing-single3.html"
                        className="geodir-category-img_item"
                      >
                        <img src="images/all/3.jpg" alt="" />
                        <div className="overlay" />
                      </a>
                      <div className="geodir-category-location">
                        <a
                          href="#"
                          className="single-map-item tolt"
                          data-newlatitude="40.72956781"
                          data-newlongitude="-73.99726866"
                          data-microtip-position="top-left"
                          data-tooltip="On the map"
                        >
                          <i className="fas fa-map-marker-alt" />
                          <span> Bright St New York, USA</span>
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
                            Apartment
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
                          <i className="fal fa-heart" />
                        </span>
                      </a>
                      <div className="geodir-category-listing_media-list">
                        <span>
                          <i className="fas fa-eye" /> 8
                        </span>
                      </div>
                    </div>
                    <div className="geodir-category-content fl-wrap">
                      <h3 className="title-sin_item">
                        <a href="listing-single3.html">
                          Gorgeous House For Sale
                        </a>
                      </h3>
                      <div className="geodir-category-content_price">
                        A.E.D. 600,000
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas in pulvinar neque. Nulla finibus lobortis
                        pulvinar. Donec a consectetur nulla.
                      </p>
                      <div className="geodir-category-content-details">
                        <ul>
                          <li>
                            <i className="fal fa-bed" />
                            <span>3</span>
                          </li>
                          <li>
                            <i className="fal fa-bath" />
                            <span>2</span>
                          </li>
                          <li>
                            <i className="fal fa-cube" />
                            <span>450 ft2</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
                {/* listing-item end*/}
              </div>
              {/* gallery-item end*/}
              {/* gallery-item*/}
              <div className="gallery-item for_sale for_rent">
                {/* listing-item */}
                <div className="listing-item">
                  <article className="geodir-category-listing fl-wrap">
                    <div className="geodir-category-img fl-wrap">
                      <a
                        href="listing-single3.html"
                        className="geodir-category-img_item"
                      >
                        <img src="images/all/5.jpg" alt="" />
                        <div className="overlay" />
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
                          <i className="fas fa-map-marker-alt" />
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
                          <i className="fal fa-heart" />
                        </span>
                      </a>
                      <div className="geodir-category-listing_media-list">
                        <span>
                          <i className="fas fa-eye" /> 12
                        </span>
                      </div>
                    </div>
                    <div className="geodir-category-content fl-wrap">
                      <h3 className="title-sin_item">
                        <a href="listing-single3.html">Kayak Point House</a>
                      </h3>
                      <div className="geodir-category-content_price">
                        A.E.D. 500.000
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas in pulvinar neque. Nulla finibus lobortis
                        pulvinar. Donec a consectetur nulla.
                      </p>
                      <div className="geodir-category-content-details">
                        <ul>
                          <li>
                            <i className="fal fa-bed" />
                            <span>5</span>
                          </li>
                          <li>
                            <i className="fal fa-bath" />
                            <span>1</span>
                          </li>
                          <li>
                            <i className="fal fa-cube" />
                            <span>510 ft2</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
                {/* listing-item end*/}
              </div>
              {/* gallery-item end*/}
              {/* gallery-item*/}
              <div className="gallery-item for_rent">
                {/* listing-item */}
                <div className="listing-item">
                  <article className="geodir-category-listing fl-wrap">
                    <div className="geodir-category-img fl-wrap">
                      <a
                        href="listing-single3.html"
                        className="geodir-category-img_item"
                      >
                        <img src="images/all/8.jpg" alt="" />
                        <div className="overlay" />
                      </a>
                      <div className="geodir-category-location">
                        <a
                          href="#"
                          className="single-map-item tolt"
                          data-newlatitude="40.76221766"
                          data-newlongitude="-73.96511769"
                          data-microtip-position="top-left"
                          data-tooltip="On the map"
                        >
                          <i className="fas fa-map-marker-alt" />
                          <span>Bright St, Jersey City, NJ USA</span>
                        </a>
                      </div>
                      <ul className="list-single-opt_header_cat">
                        <li>
                          <a href="#" className="cat-opt blue-bg">
                            Rent
                          </a>
                        </li>
                        <li>
                          <a href="#" className="cat-opt color-bg">
                            Apartment
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
                          <i className="fal fa-heart" />
                        </span>
                      </a>
                      <div className="geodir-category-listing_media-list">
                        <span>
                          <i className="fas fa-eye" /> 21
                        </span>
                      </div>
                    </div>
                    <div className="geodir-category-content fl-wrap">
                      <h3 className="title-sin_item">
                        <a href="listing-single3.html">Urban House</a>
                      </h3>
                      <div className="geodir-category-content_price">
                        1500 / per month
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas in pulvinar neque. Nulla finibus lobortis
                        pulvinar. Donec a consectetur nulla.
                      </p>
                      <div className="geodir-category-content-details">
                        <ul>
                          <li>
                            <i className="fal fa-bed" />
                            <span>5</span>
                          </li>
                          <li>
                            <i className="fal fa-bath" />
                            <span>3</span>
                          </li>
                          <li>
                            <i className="fal fa-cube" />
                            <span>1210 ft2</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
                {/* listing-item end*/}
              </div>
              {/* gallery-item end*/}
            </div>
          </div>
          {/* grid-item-holder*/}
          <a href="listing.html" className="btn float-btn-r small-btn color-bg">
            View All Properties
          </a>
        </div>
      </section>
    </>
  );
}

export default BrowseProperty;
