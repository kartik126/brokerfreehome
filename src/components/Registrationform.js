import React from "react";
import { useState } from "react";
import $ from "jquery";
import jQuery from "jquery";

function Registrationform(props) {
  const [option, setoption] = useState(true);
  const [formclose, setformclose] = useState(props.regForm);

  // const formclose=()=>{
  //   $(".close-reg , .reg-overlay").on("click", function () {
  //     modal.hide();
  //   });
  // }
  const set =()=>{
    // alert("hy")
    props.set();
    setformclose(false);
  }
  return (
    <>
      { formclose? (
        <div className="main-register-wrap modal">
          <div className="reg-overlay"></div>
          <div className="main-register-holder tabs-act">
            <div className="main-register-wrapper modal_main fl-wrap">
              <div
                className="main-register-header color-bg"
                style={{ background: "#0b2239" }}
              >
                <div className="main-register-logo fl-wrap">
                  <img src="./assets/images/white-logo.png" alt="" />
                </div>
                <div className="main-register-bg">
                  <div className="mrb_pin"></div>
                  <div className="mrb_pin mrb_pin2"></div>
                </div>
                <div className="mrb_dec"></div>
                <div className="mrb_dec mrb_dec2"></div>
              </div>
              <div className="main-register">
                <div className="close-reg"  >
                  <i className="fa fa-times" onClick={()=>set()} ></i>
                </div>
                <ul className="tabs-menu fl-wrap no-list-style">
                  <li className="current">
                    <a href="#tab-1" onClick={() => setoption(true)}>
                      <i className="fa fa-sign-in-alt"></i> Login
                    </a>
                  </li>
                  <li>
                    <a href="#tab-2" onClick={() => setoption(false)}>
                      <i className="fa fa-user-plus"></i> Register
                    </a>
                  </li>
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
                              onClick="this.select()"
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
                                onClick="this.select()"
                                value=""
                              />
                            </div>

                            <div className="clearfix"></div>
                            <button type="submit" className="log_btn color-bg">
                              {" "}
                              LogIn{" "}
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="tab">
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
                            <input
                              name="name"
                              type="text"
                              onClick="this.select()"
                              value=""
                            />
                            <label>
                              Email Address *{" "}
                              <span className="dec-icon">
                                <i className="fa fa-envelope"></i>
                              </span>
                            </label>
                            <input
                              name="email"
                              type="text"
                              onClick="this.select()"
                              value=""
                            />
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
                              onClick="this.select()"
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
                                onClick="this.select()"
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
                                I agree to the <a href="#">Privacy Policy</a>{" "}
                                and <a href="#">Terms and Conditions</a>
                              </label>
                            </div>
                            <div className="clearfix"></div>
                            <button type="submit" className="log_btn color-bg">
                              {" "}
                              Register{" "}
                            </button>
                          </form>
                        </div>
                      </div>
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
        <>

        </>
      )}
    </>
  );
}

export default Registrationform;
