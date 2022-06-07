import React from "react";
import { useState } from "react";

import img from "../assets/images/white-logo.png";
function Registrationform(props) {
  const [option, setoption] = useState(true);
  const [formclose, setformclose] = useState(props.regForm);
  const [reg, setreg] = useState(false);

  // const formclose=()=>{
  //   $(".close-reg , .reg-overlay").on("click", function () {
  //     modal.hide();
  //   });
  // }
  const set = () => {
    // alert("hy")
    props.set();
    setformclose(false);
  };
  return (
    <>
      {formclose ? (
        <div className="main-register-wrap modal">
          <div className="reg-overlay"></div>
          <div className="main-register-holder tabs-act">
            <div className="main-register-wrapper modal_main fl-wrap">
              <div
                className="main-register-header color-bg"
                style={{ background: "#0b2239" }}
              >
                <div className="main-register-logo fl-wrap">
                  <img src={img} alt="" />
                </div>
                <div className="main-register-bg">
                  <div className="mrb_pin"></div>
                  <div className="mrb_pin mrb_pin2"></div>
                </div>
                <div className="mrb_dec"></div>
                <div className="mrb_dec mrb_dec2"></div>
              </div>
              <div className="main-register">
                <div className="close-reg">
                  <i className="fa fa-times" onClick={() => set()}></i>
                </div>
                <ul className="tabs-menu fl-wrap no-list-style">
                  {reg?(<></>):(<>
                    {option ? (
                    <>
                      <li className="current">
                        <a
                          onClick={() => setoption(true)}
                          style={{ cursor: "pointer" }}
                        >
                          <i className="fa fa-sign-in-alt"></i> Login
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => setoption(false)}
                          style={{ cursor: "pointer" }}
                        >
                          <i className="fa fa-user-plus"></i> Register
                        </a>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <a
                          onClick={() => setoption(true)}
                          style={{ cursor: "pointer" }}
                        >
                          <i className="fa fa-sign-in-alt"></i> Login
                        </a>
                      </li>
                      <li className="current">
                        <a
                          onClick={() => setoption(false)}
                          style={{ cursor: "pointer" }}
                        >
                          <i className="fa fa-user-plus"></i> Register
                        </a>
                      </li>
                    </>
                  )}</>)}
                
                </ul>
                {/* <!--tabs --> */}
                <div className="tabs-container">
                  {/* <!--tab --> */}
                  {option ? (
                    <div className="tab">
                      <div id="tab-1" className="tab-content first-tab">
                        <div className="custom-form">
                          <form method="post" name="registerform">
                            <label>
                              Phone Number *{" "}
                              <span className="dec-icon">
                                <i className="fa fa-phone-alt"></i>
                              </span>
                            </label>
                            <input
                              name="email"
                              maxlength="10"
                              type="text"
                              value=""
                            />
                            <div className="pass-input-wrap fl-wrap">
                              <label>
                                OTP *{" "}
                                <span className="dec-icon">
                                  <i className="fa fa-key"></i>
                                </span>
                              </label>
                              <input
                                name="password"
                                type="password"
                                autocomplete="off"
                                value=""
                              />
                            </div>

                            <div className="clearfix"></div>
                            <button className="log_btn color-bg">
                              <a href="/tenantbuyerdashboard">LogIn</a>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="tab">
                      {reg ? (
                        <>  
                         <p style={{marginBottom:"20px",fontSize:"20px",fontWeight:"500"}}>Continue Registration....</p>
                          <div id="tab-2" className="tab-content ">
                         
                            <div className="custom-form">
                              <form
                                method="post"
                                name="registerform"
                                className="main-register-form"
                                id="main-register-form2"
                              >
                                <label>
                                  City of Residence{" "}
                                  <span className="dec-icon">
                                    <i className="fa fa-home"></i>
                                  </span>
                                </label>
                                <input name="name" type="text" value="" />
                                <label>
                                  Nationality{" "}
                                  <span className="dec-icon">
                                    <i className="fa fa-flag"></i>
                                  </span>
                                </label>
                                <input name="email" type="text" value="" />
                                <label>
                                  Role{" "}
                                  <span className="dec-icon">
                                    <i className="fa fa-user"></i>
                                  </span>
                                </label>
                                <input
                                  name="email"
                                  maxlength="10"
                                  type="text"
                                  value=""
                                />

                                <div className="clearfix"></div>
                                <button
                                  type="submit"
                                  className="log_btn color-bg"
                                  onClick={() => setreg(false)}
                                >
                                  {" "}
                                  Get Started{" "}
                                </button>
                              </form>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div id="tab-2" className="tab-content ">
                            <div className="custom-form">
                              <form
                                method="post"
                                name="registerform"
                                className="main-register-form"
                                id="main-register-form2"
                              >
                                <label>
                                  Full Name *{" "}
                                  <span className="dec-icon">
                                    <i className="fa fa-user"></i>
                                  </span>
                                </label>
                                <input name="name" type="text" value="" />
                                <label>
                                  Email Address *{" "}
                                  <span className="dec-icon">
                                    <i className="fa fa-envelope"></i>
                                  </span>
                                </label>
                                <input name="email" type="text" value="" />
                                <label>
                                  Phone Number *{" "}
                                  <span className="dec-icon">
                                    <i className="fa fa-phone-alt"></i>
                                  </span>
                                </label>
                                <input
                                  name="email"
                                  maxlength="10"
                                  type="text"
                                  value=""
                                />
                                <div className="pass-input-wrap fl-wrap">
                                  <label>
                                    OTP *{" "}
                                    <span className="dec-icon">
                                      <i className="fa fa-key"></i>
                                    </span>
                                  </label>
                                  <input
                                    name="password"
                                    type="password"
                                    autocomplete="off"
                                    value=""
                                  />
                                </div>
                                <div className="filter-tags ft-list">
                                  <input
                                    id="check-a2"
                                    type="checkbox"
                                    name="check"
                                  />
                                  <label for="check-a2">
                                    I agree to the{" "}
                                    <a href="#">Privacy Policy</a> and{" "}
                                    <a href="#">Terms and Conditions</a>
                                  </label>
                                </div>
                                <div className="clearfix"></div>
                                <button
                                  type="submit"
                                  className="log_btn color-bg"
                                  onClick={() => setreg(true)}
                                >
                                  {" "}
                                  Get Started{" "}
                                </button>
                              </form>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* <!--tab end -->
                <!--tab --> */}

                  {/* <!--tab end --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Registrationform;
