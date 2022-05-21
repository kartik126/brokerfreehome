import React from 'react'

function Savingcalculator() {
  return (
    <>
  
    <section className="color-bg" style={{padding: '30px'}}>
        <div className="container">
          <div className="main-facts fl-wrap">
            <div className="col-md-12">
              {/* listing-item-wrap*/}
              <div className="listing-item-container one-column-grid-wrap  box-list_ic agency-list fl-wrap">
                <div className="about-title ab-hero fl-wrap">
                  <h2 style={{color: '#0b2239'}}>Savings Calculator</h2>
                  <h4 style={{color: 'white'}}>Find out how much you’ll save if you transact using Broker Free Homes
                  </h4>
                </div>
                {/*  agecy card item */}
                <div className="listing-item custom-form">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="row" style={{padding: '20px'}}>
                        <div className="col-sm-4">
                          <label>You are? </label>
                          <select data-placeholder="All Categories" className="chosen-select">
                            <option>Buyer</option>
                            <option>Seller</option>
                            <option>Landlord</option>
                            <option>Tenant</option>
                          </select>
                        </div>
                        <div className="col-sm-4">
                          <label>Property Value/Rental Value (AED)<span className="dec-icon"><i className="fa fa-money-bill" /></span></label>
                          <input type="text" placeholder="Property Value / Rental Value" defaultValue />
                        </div>
                        <div className="col-sm-4">
                          <label>Comission<span className="dec-icon"><i className="far fa-percentage" /></span></label>
                          <input type="text" placeholder={5} defaultValue readOnly />
                        </div>
                      </div>
                      <div className="row" style={{padding: '10px 20px'}}>
                        <a href="#" className="btn float-btn-r color-bg small-btn" style={{margin: 0}}>Compare</a>
                      </div>
                      <div>
                        <h3 style={{fontSize: '15px'}}>It displays ‘Hurray! You’ll save AED XXXX’</h3>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="about-img fl-wrap">
                        <img src="./assets/images/all/27.jpg" className="respimg-new" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                {/*  agecy card item end*/}
              </div>
              {/* listing-item-wrap end*/}
            </div>
          </div>
        </div>
        <div className="svg-bg">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
            <defs>
              <linearGradient id="bg">
                <stop offset="0%" style={{stopColor: 'rgba(255, 255, 255, 0.6)'}} />
                <stop offset="50%" style={{stopColor: 'rgba(255, 255, 255, 0.1)'}} />
                <stop offset="100%" style={{stopColor: 'rgba(255, 255, 255, 0.6)'}} />
              </linearGradient>
              <path id="wave" stroke="url(#bg)" fill="none" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
                    s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
            </defs>
            <g>
              <use xlinkHref="#wave">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="10s" calcMode="spline" values="270 230; -334 180; 270 230" keyTimes="0; .5; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite" />
              </use>
              <use xlinkHref="#wave">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="8s" calcMode="spline" values="-270 230;243 220;-270 230" keyTimes="0; .6; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite" />
              </use>
              <use xlinkHref="#wave">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="6s" calcMode="spline" values="0 230;-140 200;0 230" keyTimes="0; .4; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite">
                </animateTransform>
              </use>
              <use xlinkHref="#wave">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="12s" calcMode="spline" values="0 240;140 200;0 230" keyTimes="0; .4; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite">
                </animateTransform>
              </use>
            </g>
          </svg>
        </div>
      </section></>
  )
}

export default Savingcalculator