import React from 'react'

function Loginform() {
  return (
    <>
     <div className="main-register-wrap modal">
        <div className="reg-overlay" />
        <div className="main-register-holder tabs-act">
          <div className="main-register-wrapper modal_main fl-wrap">
            <div className="main-register-header color-bg" style={{background: '#0b2239'}}>
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
                        <label>Phone Number * <span className="dec-icon"><i className="fal fa-phone-alt" /></span></label>
                        <input name="email" maxLength={10} type="text"  defaultValue />
                        <div className="pass-input-wrap fl-wrap">
                          <label>OTP * <span className="dec-icon"><i className="fal fa-key" /></span></label>
                          <input name="password" type="password" autoComplete="off"  defaultValue />
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
                          <input name="name" type="text"  defaultValue />
                          <label>Email Address * <span className="dec-icon"><i className="fal fa-envelope" /></span></label>
                          <input name="email" type="text"  defaultValue />
                          <label>Phone Number * <span className="dec-icon"><i className="fal fa-phone-alt" /></span></label>
                          <input name="email" maxLength={10} type="text"  defaultValue />
                          <div className="pass-input-wrap fl-wrap">
                            <label>OTP * <span className="dec-icon"><i className="fal fa-key" /></span></label>
                            <input name="password" type="password" autoComplete="off"  defaultValue />
                          </div>
                          <div className="filter-tags ft-list">
                            <input id="check-a2" type="checkbox" name="check" />
                            <label htmlFor="check-a2">I agree to the <a href="#">Privacy Policy</a> and <a href="#">Terms
                                and
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loginform