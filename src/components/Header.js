import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";
import img1 from "../assets/image/img1.png";
import img2 from "../assets/image/img2.png";
import img4 from "../assets/image/img4.png";
import img5 from "../assets/image/img5.png";
import search from "../assets/svg/search.svg";
import notification from "../assets/svg/notification.svg";
import right from "../assets/svg/right click.svg";
import select from "../assets/svg/select.svg";
import setting from "../assets/svg/setting.svg";
import logout from "../assets/svg/logout.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isStrokeOpen, setIsStrokeOpen] = useState(false);
  const navigate = useNavigate();

  const handlelogoutClick = () => {
    navigate("/");
  };

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  const handleViewClick = () => {
    setIsStrokeOpen(!isStrokeOpen);
    console.log("isStrokeOpen:", isStrokeOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSettingsDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="header">
        <div className="searchbar">
          <input type="search" placeholder="search" className="inputSearch" />
          <img src={search} />
        </div>

        <div className="notification-container">
          <div class="theme_switcher">
            <label id="switch" class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
          <div className="notification" onClick={toggleDropdown}>
            <img src={notification} />
            <span className="badge">3</span>
            <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
              <div className="drop-header">
                <p>Notifications</p>
                <p>Mark all as read</p>
              </div>
              <div className="drop-contain">
                <div className="drop-img">
                  <img src={img2} />
                </div>
                <div className="drop-par">
                  <h5>Jenny Wilson</h5>
                  <h6>Request For </h6>
                  <p>Bed No. 3 | Ward No. 2</p>
                </div>
                <div className="right">
                  <img src={right} />
                </div>
              </div>

              <div className="drop-contain">
                <div className="drop-img">
                  <img src={img2} />
                </div>
                <div className="drop-par">
                  <h5>Jenny Wilson</h5>
                  <h6>Request For </h6>
                  <p>Bed No. 3 | Ward No. 2</p>
                </div>
                <div className="right">
                  <img src={right} />
                </div>
              </div>
              <div className="drop-contain">
                <div className="drop-img">
                  <img src={img2} />
                </div>
                <div className="drop-par">
                  <h5>Jenny Wilson</h5>
                  <h6>Request For </h6>
                  <p>Bed No. 3 | Ward No. 2</p>
                </div>
                <div className="right">
                  <img src={right} />
                </div>
              </div>
              <div
                className="view show"
                onClick={() => setIsStrokeOpen(!isStrokeOpen)}
              >
                <p>View All</p>
              </div>
            </div>
            {console.log("window location :", window.location.pathname)}
            {isStrokeOpen && window.location.pathname === "/dashboard" && (
              <div
                className={`view ${isStrokeOpen ? "show" : ""}`}
                style={{ display: `${!isStrokeOpen && "none"}` }}
              >
                <div className="dropdown">
                  <div className="dropdown-contain">
                    <div className="dropdown-par">
                      <h5>Jenny Wilson</h5>
                      <h6>Request For </h6>
                      <p>Bed No. 3 | Ward No. 2</p>
                    </div>
                    <div className="right-div">
                      <img src={right} />
                    </div>
                  </div>

                  <div className="dropdown-contain">
                    <div className="dropdown-par">
                      <h5>Jenny Wilson</h5>
                      <h6>Request For </h6>
                      <p>Bed No. 3 | Ward No. 2</p>
                    </div>
                    <div className="right-div">
                      <img src={right} />
                    </div>
                  </div>
                  <div className="dropdown-contain">
                    <div className="dropdown-img">
                      <img src={img5} />
                    </div>
                    <div className="dropdown-par">
                      <h5>Jenny Wilson</h5>
                      <h6>Request For </h6>
                      <p>Bed No. 3 | Ward No. 2</p>
                    </div>
                    <div className="right-div">
                      <img src={right} />
                    </div>
                  </div>

                  <div className="dropdown-contain">
                    <div className="dropdown-img">
                      <img src={img4} />
                    </div>
                    <div className="dropdown-par">
                      <h5>Jenny Wilson</h5>
                      <h6>Request For </h6>
                      <p>Bed No. 3 | Ward No. 2</p>
                    </div>
                    <div className="right-div">
                      <img src={right} />
                    </div>
                  </div>

                  <div className="dropdown-contain">
                    <div className="dropdown-img">
                      <img src={img5} />
                    </div>
                    <div className="dropdown-par">
                      <h5>Jenny Wilson</h5>
                      <h6>Request For </h6>
                      <p>Bed No. 3 | Ward No. 2</p>
                    </div>
                    <div className="right-div">
                      <img src={right} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="img-div">
            <div className="badge-div"></div>
            <img src={img1} />
          </div>
          <div className="willson-div">
            <p>Jenny Wilson</p>
          </div>
          <div className="select-div" onClick={toggleSettingsDropdown}>
            <img src={select} />
            <div
              className={`custom-dropdown-menu ${isDropdownOpen ? "show" : ""}`}
            >
              <div className="drop" onClick={handleSettingsClick}>
                <img src={setting} />
                Settings
              </div>
              <div className="log-out" onClick={handlelogoutClick}>
                <img src={logout} />
                Log Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
