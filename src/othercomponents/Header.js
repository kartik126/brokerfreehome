import { Link } from "react-router-dom";
import Registrationform from "../components/Registrationform";
import { useState } from "react";
function Header(props) {
  const [regForm, setregForm] = useState(false);
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "350px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
 const set=()=>{
  setregForm(false)
}


  return (
    <header className="main-header">
      {/* <!--  logo  --> */}
      <div className="logo-holder">
        <Link to="/">
          <img src="logo/logo.png" alt="" />
        </Link>
      </div>
      {/* <!-- logo end  -->
			<!-- nav-button-wrap--> */}
      <div className="nav-button-wrap color-bg nvminit">
        <div className="nav-button">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* <!-- <div className="header-search-button">
          <i className="fal fa-search"></i>
          <span>Search...</span>
          </div> --> */}
      {/* <!-- header-search button end  -->
			<!--  add new  btn --> */}
      <div className="add-list_wrap">
        <a
          href="javascript:void(0)"
          className="add-list hamburger_header color-bg"
          onClick={() => openNav()}
          style={{
            width: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            float: "right",
          }}
        >
         
          <i className="fa-solid fa-bars" style={{ display: "block !important" }} />
        </a>
      </div>
      <div id="mySidenav" className="sidenav">
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={() => closeNav()}
        >
          &times;
        </a>
        <a href="#">Mortgage Assist</a>
        <a href="">Useful Links</a>
        <a href="">Useful Forms</a>
        <a href="">FAQ's</a>
        <a href="">Ask BFH</a>
        <hr />
        <div>
          <h4>
            <u>FOLLOW US ON</u>
          </h4>
          <ul style={{ display: "flex" }}>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="fab fa-vk"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!--  add new  btn end -->
			<!--  login btn --> */}
      <div
        className="show-reg-form "
        onClick={() => setregForm(true)}  
      >
        <i class="fas fa-user"></i>
        <span>Log In</span>
      </div>
      {/* <!--  login btn  end -->
			<!--  header-opt_btn --> */}
      <div
        className="header-opt_btn tolt"
        data-microtip-position="bottom"
        data-tooltip="Language"
      >
        <span>
          <i class="fa fa-globe "></i>
        </span>
      </div>
      {/* <!--  header-opt_btn end -->
			<!--  cart-btn   --> */}
      {/* <!-- <div className="cart-btn  tolt show-header-modal" data-microtip-position="bottom"
          data-tooltip="Your Wishlist / Compare">
          <i className="fal fa-bell"></i>
          <span className="cart-btn_counter color-bg">5</span>
          </div> --> */}
      {/* <!--  cart-btn end -->
			<!--  navigation --> */}
      <div className="nav-holder main-menu">
        <nav>
          <ul className="no-list-style">
            <li>
              <Link to="/" className="act-link">
                Buyer
              </Link>
            </li>
            <li>
              <Link to="/seller">Seller</Link>
            </li>
            <li>
              <Link to="/tenant">Tenant</Link>
            </li>
            <li>
              <Link to="/landlord">Landlord</Link>
            </li>
            {/* <!-- <li>
                <a href="#">Listings <i className="fa fa-caret-down"></i></a>
                <ul>
                    <li><a href="listing.html">Column map</a></li>
                    <li><a href="listing2.html">Column map 2</a></li>
                    <li><a href="listing3.html">Fullwidth Map</a></li>
                    <li><a href="listing4.html">Fullwidth Map 2</a></li>
                    <li><a href="listing5.html">Without Map</a></li>
                    <li><a href="listing6.html">Without Map 2</a></li>
                    <li>
                        <a href="#">Single <i className="fa fa-caret-down"></i></a>
                        <ul>
                            <li><a href="listing-single3.html">Style 1</a></li>
                            <li><a href="listing-single2.html">Style 2</a></li>
                            <li><a href="listing-single3.html">Style 3</a></li>
                        </ul>
                    </li>
                </ul>
                </li>
                <li>
                <a href="#">Agents<i className="fa fa-caret-down"></i></a>
                <ul>
                    <li><a href="agent-list.html">Agent List</a></li>
                    <li><a href="agency-list.html">Agency List</a></li>
                    <li><a href="agent-single.html">Agent Single</a></li>
                    <li><a href="agency-single.html">Agency Single</a></li>
                </ul>
                </li>
                <li>
                <a href="blog.html">News</a>
                </li>
                <li>
                <a href="#">Pages <i className="fa fa-caret-down"></i></a>
                <ul>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contacts.html">Contacts</a></li>
                    <li><a href="help.html">Help FAQ</a></li>
                    <li><a href="pricing.html">Pricing </a></li>
                    <li><a href="dashboard.html">User Dashboard</a></li>
                    <li><a href="blog-single.html">Blog Single</a></li>
                    <li><a href="compare.html">Compare</a></li>
                    <li><a href="coming-soon.html">Coming Soon</a></li>
                    <li><a href="404.html">404</a></li>
                </ul>
                </li> --> */}
          </ul>
        </nav>
      </div>
      {/* <!-- navigation  end -->
			<!-- header-search-wrapper --> */}
      <div className="header-search-wrapper novis_search">
        <div className="header-serach-menu">
          <div className="custom-switcher fl-wrap">
            <div className="fieldset fl-wrap">
              <input
                type="radio"
                name="duration-1"
                id="buy_sw"
                className="tariff-toggle"
                checked=""
              />
              <label for="buy_sw">Buy</label>
              <input
                type="radio"
                name="duration-1"
                className="tariff-toggle"
                id="rent_sw"
              />
              <label for="rent_sw" className="lss_lb">
                Rent
              </label>
              <span className="switch color-bg"></span>
            </div>
          </div>
        </div>
        <div className="custom-form">
          <form method="post" name="registerform">
            <label>Keywords </label>
            <input
              type="text"
              placeholder="Address , Street , State..."
              value=""
            />
            <label>Categories</label>
            <select
              data-placeholder="Categories"
              className="chosen-select on-radius no-search-select"
            >
              <option>All Categories</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Hotel</option>
              <option>Villa</option>
              <option>Office</option>
            </select>
            <label style={{ marginTop: "10px" }}>Price Range</label>
            <div className="price-rage-item fl-wrap">
              <input
                type="text"
                className="price-range"
                data-min="100"
                data-max="100000"
                name="price-range1"
                data-step="1"
                value="1"
                data-prefix="A.E.D."
              />
            </div>
            <button
              onClick="location.href='listing.html'"
              type="button"
              className="btn float-btn color-bg"
            >
              <i className="fal fa-search"></i> Search
            </button>
          </form>
        </div>
      </div>
      {/* <!-- header-search-wrapper end  -->
			<!-- wishlist-wrap--> */}
      <div className="header-modal novis_wishlist tabs-act">
        <ul className="tabs-menu fl-wrap no-list-style">
          <li className="current">
            <a href="#tab-wish">
              {" "}
              Wishlist <span>- 3</span>
            </a>
          </li>
          <li>
            <a href="#tab-compare">
              {" "}
              Compare <span>- 2</span>
            </a>
          </li>
        </ul>
        {/* <!--tabs --> */}
        <div className="tabs-container">
          <div className="tab">
            {/* <!--tab --> */}
            <div id="tab-wish" className="tab-content first-tab">
              {/* <!-- header-modal-container--> */}
              <div
                className="header-modal-container scrollbar-inner fl-wrap"
                data-simplebar=""
              >
                {/* <!--widget-posts--> */}
                <div className="widget-posts  fl-wrap">
                  <ul className="no-list-style">
                    <li>
                      <div className="widget-posts-img">
                        <a href="listing-single3.html">
                          <img src="images/all/small/1.jpg" alt="" />
                        </a>
                      </div>
                      <div className="widget-posts-descr">
                        <h4>
                          <a href="listing-single3.html">
                            Affordable Urban Room
                          </a>
                        </h4>
                        <div className="geodir-category-location fl-wrap">
                          <a href="#">
                            <i className="fas fa-map-marker-alt"></i>
                            40 Journal Square , NJ, USA
                          </a>
                        </div>
                        <div className="widget-posts-descr-price">
                          <span>Price: </span> A.E.D. 1500 / per month
                        </div>
                        <div className="clear-wishlist">
                          <i className="fal fa-trash-alt"></i>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="widget-posts-img">
                        <a href="listing-single3.html">
                          <img src="images/all/small/2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="widget-posts-descr">
                        <h4>
                          <a href="listing-single3.html">Family House</a>
                        </h4>
                        <div className="geodir-category-location fl-wrap">
                          <a href="#">
                            <i className="fas fa-map-marker-alt"></i>
                            34-42 Montgomery St , NY, USA
                          </a>
                        </div>
                        <div className="widget-posts-descr-price">
                          <span>Price: </span> A.E.D. 50.000
                        </div>
                        <div className="clear-wishlist">
                          <i className="fal fa-trash-alt"></i>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="widget-posts-img">
                        <a href="listing-single3.html">
                          <img src="images/all/small/3.jpg" alt="" />
                        </a>
                      </div>
                      <div className="widget-posts-descr">
                        <h4>
                          <a href="listing-single3.html">Apartment to Rent</a>
                        </h4>
                        <div className="geodir-category-location fl-wrap">
                          <a href="#">
                            <i className="fas fa-map-marker-alt"></i>75 Prince
                            St, NY, USA
                          </a>
                        </div>
                        <div className="widget-posts-descr-price">
                          <span>Price: </span> A.E.D.100 / per night
                        </div>
                        <div className="clear-wishlist">
                          <i className="fal fa-trash-alt"></i>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <!-- widget-posts end--> */}
              </div>
              {/* <!-- header-modal-container end--> */}
              <div className="header-modal-top fl-wrap">
                <div className="clear_wishlist color-bg">
                  <i className="fal fa-trash-alt"></i> Clear all
                </div>
              </div>
            </div>
            {/* <!--tab end --> */}
            {/* <!--tab --> */}
            <div className="tab">
              <div id="tab-compare" className="tab-content">
                {/* <!-- header-modal-container--> */}
                <div
                  className="header-modal-container scrollbar-inner fl-wrap"
                  data-simplebar=""
                >
                  {/* <!--widget-posts--> */}
                  <div className="widget-posts  fl-wrap">
                    <ul className="no-list-style">
                      <li>
                        <div className="widget-posts-img">
                          <a href="listing-single3.html">
                            <img src="images/all/small/4.jpg" alt="" />
                          </a>
                        </div>
                        <div className="widget-posts-descr">
                          <h4>
                            <a href="listing-single3.html">
                              Gorgeous house for sale
                            </a>
                          </h4>
                          <div className="geodir-category-location fl-wrap">
                            <a href="#">
                              <i className="fas fa-map-marker-alt"></i> 70
                              Bright St New York, USA{" "}
                            </a>
                          </div>
                          <div className="widget-posts-descr-price">
                            <span>Price: </span> A.E.D. 52.100
                          </div>
                          <div className="clear-wishlist">
                            <i className="fal fa-trash-alt"></i>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="widget-posts-img">
                          <a href="listing-single3.html">
                            <img src="images/all/small/5.jpg" alt="" />
                          </a>
                        </div>
                        <div className="widget-posts-descr">
                          <h4>
                            <a href="listing-single3.html">Family Apartments</a>
                          </h4>
                          <div className="geodir-category-location fl-wrap">
                            <a href="#">
                              <i className="fas fa-map-marker-alt"></i> W 85th
                              St, New York, USA{" "}
                            </a>
                          </div>
                          <div className="widget-posts-descr-price">
                            <span>Price: </span> A.E.D. 72.400
                          </div>
                          <div className="clear-wishlist">
                            <i className="fal fa-trash-alt"></i>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- widget-posts end--> */}
                </div>
                {/* <!-- header-modal-container end--> */}
                <div className="header-modal-top fl-wrap">
                  <a className="clear_wishlist color-bg" href="compare.html">
                    <i className="fal fa-random"></i>
                    Compare
                  </a>
                </div>
              </div>
            </div>
            {/* <!--tab end --> */}
          </div>
          {/* <!--tabs end --> */}
        </div>
      </div>
      {/* <!--wishlist-wrap end --> */}
      {/* <!--header-opt-modal--> */}
      <div className="header-opt-modal novis_header-mod">
        <div className="header-opt-modal-container hopmc_init">
          <div className="header-opt-modal-item lang-item fl-wrap">
            <h4>
              Language: <span>EN</span>
            </h4>
            <div className="header-opt-modal-list fl-wrap">
              <ul>
                <li>
                  <a href="#" className="current-lan" data-lantext="EN">
                    English
                  </a>
                </li>
                <li>
                  <a href="#" data-lantext="FR">
                    Franais
                  </a>
                </li>
                <li>
                  <a href="#" data-lantext="ES">
                    Espaol
                  </a>
                </li>
                <li>
                  <a href="#" data-lantext="DE">
                    Deutsch
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!--header-opt-modal end --> */}
      {regForm ? <Registrationform regForm={regForm} set={set} /> : <></>}
    </header>
  );
}

export default Header;
