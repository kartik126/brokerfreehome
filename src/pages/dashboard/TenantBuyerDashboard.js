import React from 'react'
import Dashboardsidemenutenant from '../../components/Dashboardsidemenutenant'
import Header from '../../othercomponents/Header'

function TenantBuyerDashboard() {
  return (
    <>
    <Header/>
    <div id="wrapper">
        {/* dashbard-menu-wrap */}	
      <Dashboardsidemenutenant/>
        {/* dashbard-menu-wrap end  */}		
        {/* content */}	
        <div className="dashboard-content">
          <div className="dashboard-menu-btn color-bg"><span><i className="fas fa-bars" /></span>Dasboard Menu</div>
          <div className="container dasboard-container">
            {/* dashboard-title */}	
            <div className="dashboard-title fl-wrap">
              <div className="dashboard-title-item"><span>Dashboard</span></div>
              <div className="dashbard-menu-header">
                <div className="dashbard-menu-avatar fl-wrap">
                  <img src="images/avatar/5.jpg" alt="" />
                  <h4>Welcome, <span>Alica Noory</span></h4>
                </div>
                <a href="index.html" className="log-out-btn   tolt" data-microtip-position="bottom" data-tooltip="Log Out"><i className="far fa-power-off" /></a>
              </div>
              {/*Tariff Plan menu*/}
              <div className="tfp-det-container">
                <div className="tfp-btn"><span>Your Tariff Plan : </span> <strong>Extended</strong></div>
                <div className="tfp-det">
                  <p>You Are on <a href="#">Extended</a> . Use link bellow to view details or upgrade. </p>
                  <a href="#" className="tfp-det-btn color-bg">Details</a>
                </div>
              </div>
              {/*Tariff Plan menu end*/}						
            </div>
            {/* dashboard-title end */}		
            <div className="dasboard-wrapper fl-wrap no-pag">
              <div className="dashboard-stats-container fl-wrap">
                <div className="row">
                  {/*dashboard-stats*/}
                  <div className="col-md-3">
                    <div className="dashboard-stats fl-wrap">
                      <i className="fal fa-map-marked" />
                      <h4>Active Listings</h4>
                      <div className="dashboard-stats-count">124</div>
                    </div>
                  </div>
                  {/* dashboard-stats end */}
                  {/*dashboard-stats*/}
                  <div className="col-md-3">
                    <div className="dashboard-stats fl-wrap">
                      <i className="fal fa-chart-bar" />
                      <h4>Listing Views</h4>
                      <div className="dashboard-stats-count">1056<span>(<strong>+356</strong> this week)</span></div>
                    </div>
                  </div>
                  {/* dashboard-stats end */}
                  {/*dashboard-stats*/}
                  <div className="col-md-3">
                    <div className="dashboard-stats fl-wrap">
                      <i className="fal fa-comments-alt" />
                      <h4>Your Reviews</h4>
                      <div className="dashboard-stats-count">357<span>(<strong>+12</strong> this week)</span></div>
                    </div>
                  </div>
                  {/* dashboard-stats end */}
                  {/*dashboard-stats*/}
                  <div className="col-md-3">
                    <div className="dashboard-stats fl-wrap">
                      <i className="fal fa-heart" />
                      <h4>Times Bookmarked</h4>
                      <div className="dashboard-stats-count">2329<span>(<strong>+234</strong> this week)</span></div>
                    </div>
                  </div>
                  {/* dashboard-stats end */}		
                </div>
              </div>
              <div className="clearfix" />
              <div className="row">
                <div className="col-md-8">
                  <div className="notification success-notif  fl-wrap">
                    <p>Your listing <a href="#">Family house in Brooklyn</a> has been approved!</p>
                    <a className="notification-close" href="#"><i className="fal fa-times" /></a>
                  </div>
                  <div className="dashboard-widget-title fl-wrap">Your  Statistic</div>
                  <div className="dasboard-content fl-wrap">
                    {/* chart-wra*/}
                    <div className="chart-wrap   fl-wrap">
                      <div className="chart-header fl-wrap">
                        <div className="listsearch-input-item">
                          <select data-placeholder="Week" className="chosen-select no-search-select">
                            <option>Week</option>
                            <option>Month</option>
                            <option>Year</option>
                          </select>
                        </div>
                        <div id="myChartLegend" />
                      </div>
                      <canvas id="canvas-chart" />
                    </div>
                    {/*chart-wrap end*/}									
                  </div>
                  <div className="dashboard-widget-title fl-wrap">Last Activites</div>
                  <div className="dashboard-list-box  fl-wrap">
                    {/* dashboard-list end*/}
                    <div className="dashboard-list fl-wrap">
                      <div className="dashboard-message">
                        <span className="close-dashboard-item color-bg"><i className="fal fa-times" /></span>
                        <div className="main-dashboard-message-icon color-bg"><i className="far fa-check" /></div>
                        <div className="main-dashboard-message-text">
                          <p>Your listing <a href="#">Urban Appartmes</a> has been approved! </p>
                        </div>
                        <div className="main-dashboard-message-time"><i className="fal fa-calendar-week" /> 28 may 2020</div>
                      </div>
                    </div>
                    {/* dashboard-list end*/}
                    {/* dashboard-list end*/}
                    <div className="dashboard-list fl-wrap">
                      <div className="dashboard-message">
                        <span className="close-dashboard-item color-bg"><i className="fal fa-times" /></span>
                        <div className="main-dashboard-message-icon color-bg"><i className="fal fa-comment-alt" /></div>
                        <div className="main-dashboard-message-text">
                          <p> Someone left a review on <a href="#">Park Central</a> listing!</p>
                        </div>
                        <div className="main-dashboard-message-time"><i className="fal fa-calendar-week" /> 28 may 2020</div>
                      </div>
                    </div>
                    {/* dashboard-list end*/}
                    {/* dashboard-list end*/}
                    <div className="dashboard-list fl-wrap">
                      <div className="dashboard-message">
                        <span className="close-dashboard-item color-bg"><i className="fal fa-times" /></span>
                        <div className="main-dashboard-message-icon color-bg"><i className="far fa-heart" /></div>
                        <div className="main-dashboard-message-text">
                          <p><a href="#">Fider Mamby</a> bookmarked your <a href="#">Holiday Home</a> listing!</p>
                        </div>
                        <div className="main-dashboard-message-time"><i className="fal fa-calendar-week" /> 28 may 2020</div>
                      </div>
                    </div>
                    {/* dashboard-list end*/}
                  </div>
                </div>
                <div className="col-md-4">
                  {/*box-widget*/}
                  <div className="dasboard-widget fl-wrap">
                    <div className="dasboard-widget-title fl-wrap">
                      <h5><i className="fas fa-comment-alt" />Last Messages</h5>
                    </div>
                    <div className="chat-contacts fl-wrap">
                      {/* chat-contacts-item*/}
                      <a className="chat-contacts-item" href="#">
                        <div className="dashboard-message-avatar">
                          <img src="images/avatar/2.jpg" alt="" />
                          <div className="message-counter">2</div>
                        </div>
                        <div className="chat-contacts-item-text">
                          <h4>Mark Rose</h4>
                          <span>27 Dec 2018 </span>
                          <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                        </div>
                      </a>
                      {/* chat-contacts-item */}
                      {/* chat-contacts-item*/}
                      <a className="chat-contacts-item" href="#">
                        <div className="dashboard-message-avatar">
                          <img src="images/avatar/1.jpg" alt="" />
                          <div className="message-counter">1</div>
                        </div>
                        <div className="chat-contacts-item-text">
                          <h4>Adam Koncy</h4>
                          <span>27 Dec 2018 </span>
                          <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                        </div>
                      </a>
                      {/* chat-contacts-item */}
                      {/* chat-contacts-item*/}
                      <a className="chat-contacts-item chat-contacts-item_active" href="#">
                        <div className="dashboard-message-avatar">
                          <img src="images/avatar/3.jpg" alt="" />
                          <div className="message-counter">3</div>
                        </div>
                        <div className="chat-contacts-item-text">
                          <h4>Andy Smith</h4>
                          <span>27 Dec 2018 </span>
                          <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                        </div>
                      </a>
                      {/* chat-contacts-item */}
                      {/* chat-contacts-item*/}
                      <a className="chat-contacts-item" href="#">
                        <div className="dashboard-message-avatar">
                          <img src="images/avatar/5.jpg" alt="" />
                          <div className="message-counter">4</div>
                        </div>
                        <div className="chat-contacts-item-text">
                          <h4>Joe Frick</h4>
                          <span>27 Dec 2018 </span>
                          <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                        </div>
                      </a>
                      {/* chat-contacts-item */}
                      {/* chat-contacts-item*/}
                      <a className="chat-contacts-item" href="#">
                        <div className="dashboard-message-avatar">
                          <img src="images/avatar/4.jpg" alt="" />
                        </div>
                        <div className="chat-contacts-item-text">
                          <h4>Alise Goovy</h4>
                          <span>27 Dec 2018 </span>
                          <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                        </div>
                      </a>
                      {/* chat-contacts-item */}
                      {/* chat-contacts-item*/}
                      <a className="chat-contacts-item" href="#">
                        <div className="dashboard-message-avatar">
                          <img src="images/avatar/6.jpg" alt="" />
                        </div>
                        <div className="chat-contacts-item-text">
                          <h4>Cristiano Olando</h4>
                          <span>27 Dec 2018 </span>
                          <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                        </div>
                      </a>
                      {/* chat-contacts-item */}
                    </div>
                  </div>
                  {/*box-widget end */}								
                  {/*box-widget*/}
                  <div className="box-widget fl-wrap">
                    <div className="banner-widget fl-wrap">
                      <div className="bg-wrap bg-parallax-wrap-gradien">
                        <div className="bg  " data-bg="images/all/blog/1.jpg" />
                      </div>
                      <div className="banner-widget_content">
                        <h5>Participate in our loyalty program. Refer a friend and get a discount.</h5>
                        <a href="#" className="btn float-btn color-bg small-btn">Read More</a>
                      </div>
                    </div>
                  </div>
                  {/*box-widget end */} 								
                </div>
              </div>
            </div>
          </div>
          {/* dashboard-footer */}
          <div className="dashboard-footer">
            <div className="dashboard-footer-links fl-wrap">
              <span>Helpfull Links:</span>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="pricing.html">Pricing Plans</a></li>
                <li><a href="contacts.html">Contacts</a></li>
                <li><a href="help.html">Help Center</a></li>
              </ul>
            </div>
            <a href="#main" className="dashbord-totop  custom-scroll-link"><i className="fas fa-caret-up" /></a>
          </div>
          {/* dashboard-footer end */}				
        </div>
        {/* content end */}	
        <div className="dashbard-bg gray-bg" />
      </div>
    </>
  )
}

export default TenantBuyerDashboard