import React from "react";
import "./index.style.css";
import { BsBell, BsCloudCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import TextInput from "../input";
import { Link } from "react-router-dom";
import Beller from "../../assest/171925812.png";
function Navbar() {
  return (
    <div className="nav_bar">
      <div className="nav-search">
        <div className="check_cloud">
          <BsCloudCheck className="cloud_check" />
        </div>

        <div className="booklist">
          <Link to="/">Books</Link>
          <span>List</span>
        </div>
        <div className="search_training">
          <BiSearchAlt className="search_icon" />
          <TextInput
            className="search_input"
            type="search"
            placeholder="Search for any training you want "
          />
        </div>
      </div>
      <div className="nav_bell">
        <BsBell className="bell" />
        <div className="img_backround">
          <div
            style={{
              backgroundImage: `url(${Beller})`,
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
