import React from 'react'
import { Link } from 'react-router-dom'
import Dashboardsidemenu from '../../components/Dashboardsidemenu'
import Footer2 from '../../othercomponents/Footer2'
import Header from '../../othercomponents/Header'
function Editprofile() {
  return (
    <>
    <Header/>
     <div id="wrapper">
        {/* dashbard-menu-wrap */}
       <Dashboardsidemenu/>
        {/* dashbard-menu-wrap end  */}		
        {/* content */}	
        <div className="dashboard-content">
          <div className="dashboard-menu-btn color-bg"><span><i className="fas fa-bars" /></span>Dasboard Menu</div>
          <div className="container dasboard-container">
            {/* dashboard-title */}	
            <div className="dashboard-title fl-wrap">
              <div className="dashboard-title-item"><span>Edit Profile</span></div>
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
            {/* dasboard-wrapper*/}
            <div className="dasboard-wrapper fl-wrap no-pag">
              <div className="row">
                <div className="col-md-7">
                  <div className="dasboard-widget-title fl-wrap">
                    <h5><i className="fas fa-user-circle" />Change Avatar</h5>
                  </div>
                  <div className="dasboard-widget-box nopad-dash-widget-box fl-wrap">
                    <div className="edit-profile-photo">
                      <img src="images/avatar/5.jpg" className="respimg" alt="" />
                      <div className="change-photo-btn">
                        <div className="photoUpload">
                          <span>  Upload New Photo</span>
                          <input type="file" className="upload" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-wrap bg-parallax-wrap-gradien">
                      <div className="bg" data-bg="images/bg/3.jpg" />
                    </div>
                    <div className="change-photo-btn cpb-2  ">
                      <div className="photoUpload color-bg">
                        <span> <i className="far fa-camera" /> Change Cover </span>
                        <input type="file" className="upload" />
                      </div>
                    </div>
                  </div>
                  <div className="dasboard-widget-title fl-wrap">
                    <h5><i className="fas fa-key" />Personal Info</h5>
                  </div>
                  <div className="dasboard-widget-box fl-wrap">
                    <div className="custom-form">
                      <label>Full Name <span className="dec-icon"><i className="far fa-user" /></span></label>
                      <input type="text" placeholder="Alica" defaultValue />
                      {/* <label>Second Name <span className="dec-icon"><i className="fas fa-user" /></span></label> */}
                      {/* <input type="text" placeholder="Noory" defaultValue /> */}
                      <label>Email Address <span className="dec-icon"><i className="far fa-envelope" /></span></label>
                      <input type="text" placeholder="AlicaNoory@domain.com" defaultValue />	
                      <label>Phone<span className="dec-icon"><i className="far fa-phone" /> </span></label>
                      <input type="text" placeholder="+7(123)987654" defaultValue />	
                      <label>Adress <span className="dec-icon"><i className="fas fa-map-marker" /> </span></label>
                      <input type="text" placeholder="USA 27TH Brooklyn NY" defaultValue />										
                      {/* <label>Website <span className="dec-icon"><i className="far fa-globe" /> </span></label> */}
                      <input type="text" placeholder="themeforest.net" defaultValue />										
                      {/* <label>Agensy<span className="dec-icon"><i className="far fa-home-lg-alt" /> </span></label> */}
                      <input type="text" placeholder="Mavers RealEstate Agency" defaultValue />										
                      {/* <label>Notes </label> */}
                      {/* <textarea cols={40} rows={3} placeholder="About Me" style={{marginBottom: '20px'}} defaultValue={""} />										 */}
                      <button className="btn    color-bg  float-btn">Save Changes</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="dasboard-widget-title dbt-mm fl-wrap">
                    <h5><i className="fas fa-key" />Change Password</h5>
                  </div>
                  <div className="dasboard-widget-box fl-wrap">
                    <div className="custom-form">
                      <div className="pass-input-wrap fl-wrap">
                        <label>Current Password<span className="dec-icon"><i className="far fa-lock-open-alt" /></span></label>
                        <input type="password" className="pass-input" placeholder defaultValue />
                        <span className="eye"><i className="far fa-eye" aria-hidden="true" /> </span>
                      </div>
                      <div className="pass-input-wrap fl-wrap">
                        <label>New Password<span className="dec-icon"><i className="far fa-lock-alt" /></span></label>
                        <input type="password" className="pass-input" placeholder defaultValue />
                        <span className="eye"><i className="far fa-eye" aria-hidden="true" /> </span>
                      </div>
                      <div className="pass-input-wrap fl-wrap">
                        <label>Confirm New Password<span className="dec-icon"><i className="far fa-shield-check" /> </span></label>
                        <input type="password" className="pass-input" placeholder defaultValue />
                        <span className="eye"><i className="far fa-eye" aria-hidden="true" /> </span>
                      </div>
                      <button className="btn    color-bg  float-btn">Save Changes</button>
                    </div>
                  </div>
                  {/* <div className="dasboard-widget-title fl-wrap" style={{marginTop: '30px'}}>
                    <h5><i className="fas fa-share-alt" />Your Socials</h5>
                  </div> */}
                  {/* <div className="dasboard-widget-box fl-wrap">
                    <div className="custom-form">
                      <label>Facebook  <span className="dec-icon"><i className="fab fa-facebook" /></span></label>
                      <input type="text" placeholder="https://www.facebook.com/" defaultValue />
                      <label>Twitter <span className="dec-icon"><i className="fab fa-twitter" /></span></label>
                      <input type="text" placeholder="https://twitter.com/" defaultValue />
                      <label>Instagram<span className="dec-icon"><i className="fab fa-instagram" /></span></label>
                      <input type="text" placeholder="https://www.instagram.com/" defaultValue />	
                      <label>Vkontakte<span className="dec-icon"><i className="fab fa-vk" /></span></label>
                      <input type="text" placeholder="https://vk.com/" defaultValue />	
                      <button className="btn    color-bg  float-btn">Save Changes</button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            {/* dasboard-wrapper end */}	
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
      <Footer2/>
    </>
  )
}

export default Editprofile