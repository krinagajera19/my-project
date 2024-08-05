import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardSVGIcon from "./SVGComponents/DashboardSVGIcon";
import HospitalSVGIcon from "./SVGComponents/HospitalSVGIcon";
import AuditLogSVGIcon from "./SVGComponents/AuditLogSVGIcon";
import SettingLogSVGIcon from "./SVGComponents/SettingSVGIcon";

import "../App.css";
import side from "../assets/svg/side.svg";
import img28 from "../assets/image/img28.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHospitalDropdownOpen, setIsHospitalDropdownOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("");
  const [selectedItem, setSelectedItem] = useState("true");
  const pathname = window.location.pathname;

  const handleItemClick = (path) => {
    setSelectedItem(path);
    navigate(path);
    setActiveItem(path);
  };

  const handleLogoClick = () => {
    navigate("/dashboard");
  };

  const toggleHospitalDropdown = () => {
    setActiveItem(activeItem === "/hospital" ? "" : "/hospital");
    setIsHospitalDropdownOpen(!isHospitalDropdownOpen);
  };

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <style>
        {`
          .custom-list {
            display: ${isHospitalDropdownOpen ? "block" : "none"};
          }
          .custom-list-item {
            color: gray; /* Default color */
            cursor: pointer;
          }
          .custom-list-item.active {
             background: #623CE7;
            color: white;
          }
          .dashboard.hospital.active {;
          color: white;
          }
        `}
      </style>

      <div className="Sidebar-main-div">
        <div className="logo-div" onClick={handleLogoClick}>
          <img src={side} alt="logo" />
          <h1>LOGO</h1>
        </div>

        <div
          className={`dashboard ${activeItem === "/dashboard" ? "active" : ""}`}
          onClick={() => handleItemClick("/dashboard")}
        >
          <div className="svg-div">
            <HospitalSVGIcon
              color={pathname === "/dashboard" ? "#623CE7" : "#828282"}
            />
          </div>
          <p>Dashboard</p>
          <img src={img28} style={{ height: "16px", marginLeft: "50px" }} />
        </div>

        <div
          className={`dashboard ${activeItem === "/tasks" ? "active" : ""}`}
          onClick={() => handleItemClick("/tasks")}
        >
          <div className="svg-div">
            <DashboardSVGIcon
              color={pathname === "/tasks" ? "#623CE7" : "#828282"}
            />
          </div>
          <p>Available Tasks</p>
          <img src={img28} style={{ height: "16px", marginLeft: "20px" }} />
        </div>

        <div
          className={`dashboard ${activeItem === "/audit" ? "active" : ""}`}
          onClick={() => handleItemClick("/audit")}
        >
          <div className="svg-div">
            <DashboardSVGIcon
              color={pathname === "/audit" ? "#623CE7" : "#828282"}
            />
          </div>
          <p>Audit Log</p>
          <img src={img28} style={{ height: "16px", marginLeft: "68px" }} />
        </div>

        <div
          className={`dashboard hospital ${
            activeItem === "/hospital" ? "active" : ""
          }`}
          onClick={toggleHospitalDropdown}
        >
          <div className="svg-div">
            <AuditLogSVGIcon
              color={
                pathname == "/floor" ||
                pathname == "/ward" ||
                pathname == "/bed" ||
                pathname === "/action"
                  ? "#623CE7"
                  : "#828282"
              }
            />
          </div>
          {console.log("activeItem: ", activeItem)}
          <p
            style={{
              color:
                pathname == "/floor" ||
                pathname == "/ward" ||
                pathname == "/bed" ||
                pathname === "/action"
                  ? "#623CE7"
                  : "#828282",
            }}
          >
            Hospital
          </p>
          <img src={img28} style={{ height: "16px", marginLeft: "70px" }} />
        </div>

        <ul className="custom-list">
          <li
            className={`dashboard ${activeItem === "/floor" ? "active" : ""}`}
            onClick={() => handleItemClick("/floor")}
          >
            Manage floor
          </li>
          <li
            className={`dashboard ${activeItem === "/ward" ? "active" : ""}`}
            onClick={() => handleItemClick("/ward")}
          >
            Manage ward
          </li>
          <li
            className={`dashboard ${activeItem === "/bed" ? "active" : ""}`}
            onClick={() => handleItemClick("/bed")}
          >
            Manage Bed
          </li>

          <li
            className={`dashboard ${activeItem === "/action" ? "active" : ""}`}
            onClick={() => handleItemClick("/action")}
          >
            Manage Action
          </li>
        </ul>
        <div
          className={`dashboard ${activeItem === "/activity" ? "active" : ""}`}
          onClick={() => handleItemClick("/activity")}
        >
          <div className="svg-div">
            <DashboardSVGIcon
              color={pathname === "/activity" ? "#0000FF" : "#828282"}
            />
          </div>
          <p>Activity Report</p>
          <img
            src={img28}
            style={{ height: "16px", marginLeft: "22px", marginTop: "6px" }}
          />
        </div>
        <div
          className={`dashboard ${activeItem === "/settings" ? "active" : ""}`}
          onClick={() => handleItemClick("/settings")}
        >
          <div className="svg-div">
            <SettingLogSVGIcon
              color={pathname === "/settings" ? "#623CE7" : "#828282"}
            />
          </div>
          <p>Setting</p>
          <img src={img28} style={{ height: "16px", marginLeft: "90px" }} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
