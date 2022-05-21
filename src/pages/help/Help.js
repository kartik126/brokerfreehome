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
     
        {/*register form end */}
        {/*secondary-nav */}
        <div className="secondary-nav">
          <ul>
            <li><a href="dashboard-add-listing.html" className="tolt" data-microtip-position="left" data-tooltip="Sell Property"><i className="fa fa-truck-couch" /> </a></li>
            <li><a href="listing.html" className="tolt" data-microtip-position="left" data-tooltip="Buy Property"> <i className="fa fa-shopping-bag" /></a></li>
            <li><a href="compare.html" className="tolt" data-microtip-position="left" data-tooltip="Your Compare"><i className="fa fa-exchange" /></a></li>
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