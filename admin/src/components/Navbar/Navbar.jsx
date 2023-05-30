import React from "react";
import "./Navbar.css";


const Navbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <img
            src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
