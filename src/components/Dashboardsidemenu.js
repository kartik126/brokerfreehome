import React from "react";
import { Link } from "react-router-dom";

function Dashboardsidemenu() {
  return (
    <>
      <div className="dashbard-menu-overlay" />
      <div className="dashbard-menu-wrap">
        <div className="dashbard-menu-close">
          <i className="fal fa-times" />
        </div>
        <div className="dashbard-menu-container">
          {/* user-profile-menu*/}
          <div className="user-profile-menu">
            <h3>Main</h3>
            <ul className="no-list-style">
              <li>
                <a href="/landlorddashboard">
                  <i className="fal fa-chart-line" />
                  Dashboard
                </a>
              </li>
              <li>
                <Link to="/editprofile">
                  <i className="fal fa-user-edit" /> Edit profile
                </Link>
              </li>
              <li>
                <a href="dashboard-messages.html">
                  <i className="fal fa-envelope" /> Messages <span>3</span>
                </a>
              </li>
              {/* <li>
                <a href="dashboard-agents.html">
                  <i className="fal fa-users" /> Agents List
                </a>
              </li> */}
              <li>
                <a href="#" className="submenu-link">
                  <i className="fal fa-plus" />
                  Submenu
                </a>
                <ul className="no-list-style">
                  <li>
                    <a href="#">
                      <i className="fal fa-th-list" /> Submenu 2{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fal fa-calendar-check" /> Submenu 2
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fal fa-comments-alt" />
                      Submenu 2
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fal fa-file-plus" /> Submenu 2
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* user-profile-menu end*/}
          {/* user-profile-menu*/}
          <div className="user-profile-menu">
            <h3>Listings</h3>
            <ul className="no-list-style">
              <li>
                <a href="dashboard-listing-table.html">
                  <i className="fal fa-th-list" /> My listigs{" "}
                </a>
              </li>
              <li>
                <a href="dashboard-bookings.html">
                  {" "}
                  <i className="fal fa-calendar-check" /> Viewings Scheduler{" "}
                  <span>3</span>
                </a>
              </li>
              {/* <li>
                <a href="dashboard-review.html">
                  <i className="fal fa-comments-alt" /> Reviews <span>2</span>{" "}
                </a>
              </li> */}
              <li>
                <a
                  href="dashboard-add-listing.html"
                  className="user-profile-act"
                >
                  <i className="fal fa-file-plus" /> Add New
                </a>
              </li>
            </ul>
          </div>
          {/* user-profile-menu end*/}
        </div>

        <div className="dashbard-menu-footer">
          {" "}
          © Homeradar 2022 . All rights reserved.
        </div>
      </div>
    </>
  );
}

export default Dashboardsidemenu;
