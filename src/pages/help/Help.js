import React from 'react'
import Footer2 from '../../othercomponents/Footer2'

function Help() {
  return (
    <>
    <div id="wrapper">
          {/* content */}
          <div className="content">
            {/*  section  */}
            <section className="hidden-section single-par2  " data-scrollax-parent="true">
              <div className="bg-wrap bg-parallax-wrap-gradien">
                <div className="bg par-elem "  style={{backgroundImage:`url(${"./assets/Images/all/5.jpg" })`}} data-bg="images/bg/5.jpg" data-scrollax="properties: { translateY: '30%' }" />
              </div>
              <div className="container">
                <div className="section-title center-align big-title">
                  <h2><span>Frequently Asked Questions</span></h2>
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet fermentum
                    sem.</h4>
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
                  <a href="#">Home</a> <a href="#">Pages</a><span>Help FAQ</span>
                </div>
                <div className="share-holder hid-share">
                  <a href="#" className="share-btn showshare sfcs"> <i className="fas fa-share-alt" /> Share </a>
                  <div className="share-container  isShare" />
                </div>
              </div>
            </div>
            {/* breadcrumbs end */}
            {/* col-list-wrap */}
            <section className="gray-bg small-padding ">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="box-widget fl-wrap fixed-column_menu-init">
                      <div className="box-widget-content fl-wrap  ">
                        <div className="box-widget-title fl-wrap">FAQ Navigation</div>
                        <div className="faq-nav scroll-init fl-wrap">
                          <ul>
                            <li><a className="act-scrlink" href="#faq1">Payments</a></li>
                            <li><a href="#faq2">Suggestions</a></li>
                            <li><a href="#faq3">Reccomendations</a></li>
                            <li><a href="#faq4">Booking</a></li>
                            <li><a href="#faq5">Listing</a></li>
                          </ul>
                        </div>
                        <div className="search-widget fns fl-wrap">
                          <form action="#" className="fl-wrap custom-form">
                            <input name="se" id="se" type="text" className="search" placeholder="Keywords" defaultValue />
                            <button className="search-submit" id="submit_btn"><i className="far fa-search" /></button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="list-single-main-container">
                      {/*   list-single-main-item */}
                      <div className="list-single-main-item fl-wrap" id="faq1">
                        <div className="list-single-main-item-title big-lsmt fl-wrap">
                          <h3>Payments</h3>
                        </div>
                        {/*   accordion-lite */}
                        <div className="accordion-lite-container fl-wrap">
                          <div className="accordion-lite-header fl-wrap">How long does the sending process take? <i className="fas fa-plus" /></div>
                          <div className="accordion-lite_content fl-wrap">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla
                              finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                              suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla
                              diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a
                              consequat .</p>
                          </div>
                        </div>
                        {/*   accordion-lite end */}
                        {/*   accordion-lite */}
                        <div className="accordion-lite-container fl-wrap">
                          <div className="accordion-lite-header fl-wrap">Can I use more than one payment method to pay for a
                            reservation? <i className="fas fa-plus" /></div>
                          <div className="accordion-lite_content fl-wrap">
                            <p> Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae
                              lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis
                              fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis
                              massa, a consequat .</p>
                          </div>
                        </div>
                        {/*   accordion-lite end */}
                        {/*   accordion-lite */}
                        <div className="accordion-lite-container fl-wrap">
                          <div className="accordion-lite-header fl-wrap">How do I edit or remove a payment method? <i className="fas fa-plus" /></div>
                          <div className="accordion-lite_content fl-wrap">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla
                              finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                              suscipit, et pulvinar nisi tincidunt. </p>
                          </div>
                        </div>
                        {/*   accordion-lite end */}
                      </div>
                      {/*   list-single-main-item end */}
                      {/*   list-single-main-item */}
                      <div className="list-single-main-item fl-wrap" id="faq2">
                        <div className="list-single-main-item-title big-lsmt fl-wrap">
                          <h3>Suggestions</h3>
                        </div>
                        {/*   accordion-lite */}
                        <div className="accordion-lite-container fl-wrap">
                          <div className="accordion-lite-header fl-wrap">Can I pay my own taxes and insurance? <i className="fas fa-plus" /></div>
                          <div className="accordion-lite_content fl-wrap">
                            <p> Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae
                              lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis
                              fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis
                              massa, a consequat .</p>
                          </div>
                        </div>
                        {/*   accordion-lite end */}
                        {/*   accordion-lite */}
                        <div className="accordion-lite-container fl-wrap">
                          <div className="accordion-lite-header fl-wrap">How long does the loan process take?<i className="fas fa-plus" /></div>
                          <div className="accordion-lite_content fl-wrap">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla
                              finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                              suscipit, et pulvinar nisi tincidunt. </p>
                          </div>
                        </div>
                        {/*   accordion-lite end */}
                      </div>
                      {/*   list-single-main-item end */}
                      {/*   list-single-main-item */}
                      <div className="list-single-main-item fl-wrap" id="faq3">
                        <div className="list-single-main-item-title big-lsmt fl-wrap">
                          <h3>Reccomendations</h3>
                        </div>
                        {/*   accordion-lite */}
                        <div className="accordion-lite-container fl-wrap">
                          <div className="accordion-lite-header fl-wrap">How long does the sending process take? <i className="fas fa-plus" /></div>
                          <div className="accordion-lite_content fl-wrap">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla
                              finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                              suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla
                              diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a
                              consequat .</p>
                          </div>
                        </div>
                        {/*   accordion-lite end */}
                        {/*   accordion-lite */}
                        <div className="accordion-lite-container fl-wrap">
                          <div className="accordion-lite-header fl-wrap">Can I use more than one payment method to pay for a
                            reservation? <i className="fas fa-plus" /></div>
                          <div className="accordion-lite_content fl-wrap">
                            <p> Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae
                              lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis
                              fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis
                              massa, a consequat .</p>
                          </div>
                        </div>
                        {/*   accordion-lite end */}
                        {/*   accordion-lite */}
                        <div className="accordion-lite-container fl-wrap">
                          <div className="accordion-lite-header fl-wrap">How do I edit or remove a payment method? <i className="fas fa-plus" /></div>
                          <div className="accordion-lite_content fl-wrap">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla
                              finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                              suscipit, et pulvinar nisi tincidunt. </p>
                          </div>
                        </div>
                        {/*   accordion-lite end */}
                      </div>
                      {/*   list-single-main-item end */}
                      {/*   list-single-main-item */}
                      <div className="list-single-main-item fl-wrap" id="faq4">
                        <div className="list-single-main-item-title big-lsmt fl-wrap">
                          <h3>Booking</h3>
                        </div>
                        {/*   accordion-lite */}
                        <div className="accordion-lite-container fl-wrap">
                          <div className="accordion-lite-header fl-wrap">How long does the sending process take? <i className="fas fa-plus" /></div>
                          <div className="accordion-lite_content fl-wrap">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla
                              finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                              suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla
                              diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a
                              consequat .</p>
                          </div>
                        </div>
                        {/*   accordion-lite end */}
                        {/*   accordion-lite */}
                        <div className="accordion-lite-container fl-wrap">
                          <div className="accordion-lite-header fl-wrap">Can I use more than one payment method to pay for a
                            reservation? <i className="fas fa-plus" /></div>
                          <div className="accordion-lite_content fl-wrap">
                            <p> Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae
                              lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis
                              fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis
                              massa, a consequat .</p>
                          </div>
                        </div>
                        {/*   accordion-lite end */}
                        {/*   accordion-lite */}
                        <div className="accordion-lite-container fl-wrap">
                          <div className="accordion-lite-header fl-wrap">How do I edit or remove a payment method? <i className="fas fa-plus" /></div>
                          <div className="accordion-lite_content fl-wrap">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla
                              finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                              suscipit, et pulvinar nisi tincidunt. </p>
                          </div>
                        </div>
                        {/*   accordion-lite end */}
                      </div>
                      {/*   list-single-main-item end */}
                      {/*   list-single-main-item */}
                      <div className="list-single-main-item fl-wrap" id="faq5">
                        <div className="list-single-main-item-title big-lsmt fl-wrap">
                          <h3>Listing</h3>
                        </div>
                        {/*   accordion-lite */}
                        <div className="accordion-lite-container fl-wrap">
                          <div className="accordion-lite-header fl-wrap">How long does the sending process take? <i className="fas fa-plus" /></div>
                          <div className="accordion-lite_content fl-wrap">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla
                              finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                              suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla
                              diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a
                              consequat .</p>
                          </div>
                        </div>
                        {/*   accordion-lite end */}
                        {/*   accordion-lite */}
                        <div className="accordion-lite-container fl-wrap">
                          <div className="accordion-lite-header fl-wrap">Can I use more than one payment method to pay for a
                            reservation? <i className="fas fa-plus" /></div>
                          <div className="accordion-lite_content fl-wrap">
                            <p> Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae
                              lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis
                              fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis
                              massa, a consequat .</p>
                          </div>
                        </div>
                        {/*   accordion-lite end */}
                      </div>
                      {/*   list-single-main-item end */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="limit-box fl-wrap" />
            </section>
          </div>
          {/* content end */}
          {/* subscribe-wrap */}
          {/* subscribe-wrap end */}
          {/* footer */}
       <Footer2/>
          {/* footer end */}
        </div>
        {/* wrapper end */}
        {/*register form */}
        <div className="main-register-wrap modal">
          <div className="reg-overlay" />
          <div className="main-register-holder tabs-act">
            <div className="main-register-wrapper modal_main fl-wrap">
              <div className="main-register-header color-bg">
                <div className="main-register-logo fl-wrap">
                  <img src="./assets/images/white-logo.png" alt="" />
                </div>
                <div className="main-register-bg">
                  <div className="mrb_pin" />
                  <div className="mrb_pin mrb_pin2" />
                </div>
                <div className="mrb_dec" />
                <div className="mrb_dec mrb_dec2" />
              </div>
              <div className="main-register">
                <div className="close-reg"><i className="fal fa-times" /></div>
                <ul className="tabs-menu fl-wrap no-list-style">
                  <li className="current"><a href="#tab-1"><i className="fal fa-sign-in-alt" /> Login</a></li>
                  <li><a href="#tab-2"><i className="fal fa-user-plus" /> Register</a></li>
                </ul>
                {/*tabs */}
                <div className="tabs-container">
                  <div className="tab">
                    {/*tab */}
                    <div id="tab-1" className="tab-content first-tab">
                      <div className="custom-form">
                        <form method="post" name="registerform">
                          <label>Username or Email Address * <span className="dec-icon"><i className="fal fa-user" /></span></label>
                          <input name="email" type="text" onclick="this.select()" defaultValue />
                          <div className="pass-input-wrap fl-wrap">
                            <label>Password * <span className="dec-icon"><i className="fal fa-key" /></span></label>
                            <input name="password" type="password" autoComplete="off" onclick="this.select()" defaultValue />
                            <span className="eye"><i className="fal fa-eye" /> </span>
                          </div>
                          <div className="lost_password">
                            <a href="#">Lost Your Password?</a>
                          </div>
                          <div className="filter-tags">
                            <input id="check-a3" type="checkbox" name="check" />
                            <label htmlFor="check-a3">Remember me</label>
                          </div>
                          <div className="clearfix" />
                          <button type="submit" className="log_btn color-bg"> LogIn </button>
                        </form>
                      </div>
                    </div>
                    {/*tab end */}
                    {/*tab */}
                    <div className="tab">
                      <div id="tab-2" className="tab-content">
                        <div className="custom-form">
                          <form method="post" name="registerform" className="main-register-form" id="main-register-form2">
                            <label>Full Name * <span className="dec-icon"><i className="fal fa-user" /></span></label>
                            <input name="name" type="text" onclick="this.select()" defaultValue />
                            <label>Email Address * <span className="dec-icon"><i className="fal fa-envelope" /></span></label>
                            <input name="email" type="text" onclick="this.select()" defaultValue />
                            <div className="pass-input-wrap fl-wrap">
                              <label>Password * <span className="dec-icon"><i className="fal fa-key" /></span></label>
                              <input name="password" type="password" autoComplete="off" onclick="this.select()" defaultValue />
                              <span className="eye"><i className="fal fa-eye" /> </span>
                            </div>
                            <div className="filter-tags ft-list">
                              <input id="check-a2" type="checkbox" name="check" />
                              <label htmlFor="check-a2">I agree to the <a href="#">Privacy Policy</a> and <a href="#">Terms and
                                  Conditions</a></label>
                            </div>
                            <div className="clearfix" />
                            <button type="submit" className="log_btn color-bg"> Register </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/*tab end */}
                  </div>
                  {/*tabs end */}
                  <div className="log-separator fl-wrap"><span>or</span></div>
                  <div className="soc-log fl-wrap">
                    <p>For faster login or register use your social account.</p>
                    <a href="#" className="facebook-log"> Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*register form end */}
        {/*secondary-nav */}
        <div className="secondary-nav">
          <ul>
            <li><a href="dashboard-add-listing.html" className="tolt" data-microtip-position="left" data-tooltip="Sell Property"><i className="fal fa-truck-couch" /> </a></li>
            <li><a href="listing.html" className="tolt" data-microtip-position="left" data-tooltip="Buy Property"> <i className="fal fa-shopping-bag" /></a></li>
            <li><a href="compare.html" className="tolt" data-microtip-position="left" data-tooltip="Your Compare"><i className="fal fa-exchange" /></a></li>
          </ul>
          <div className="progress-indicator">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
              <circle cx={16} cy={16} r="15.9155" className="progress-bar__background" />
              <circle cx={16} cy={16} r="15.9155" className="progress-bar__progress 
                            js-progress-bar" />
            </svg>
          </div>
        </div>
        {/*secondary-nav end */}
        <a className="to-top color-bg"><i className="fas fa-caret-up" /></a>
   
    </>
  )
}

export default Help