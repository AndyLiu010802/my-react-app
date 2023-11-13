import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header-container">
      <div className="content">
        <span>Learning Schedule</span>
        <span>Learning Schedule</span>
      </div>
      <div className="icon-container">
        <FontAwesomeIcon
          icon={faBars}
          size="2xl"
          style={{ color: "#74b9f3" }}
        />
      </div>
    </div>
  );
};

export default Header;
