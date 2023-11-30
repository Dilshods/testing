import React, { useState } from "react";
import "./index.style.css";
import NotfoundImg from "../../assest/undraw_page_not_foud.png";
import Button from "../button";

const NotFound = () => {
  const [open, setOpen] = useState(false);

  const handlePage = () => {
    setOpen(!open);
    console.log("Button 1 clicked");
  };

  const handleReload = () => {
    setOpen(!open);
    console.log("Button 2 clicked");
  };

  return (
    <div className="notfound">
      <div className="notfound_img">
        <img src={NotfoundImg} alt="alt" />
      </div>
      <div className="notfoun_btn">
        <Button
          type="Go Home Page"
          onClick={handlePage}
          className="notfound_btn"
        />
        <Button
          type="Reload Page"
          onClick={handleReload}
          className="notfound_btn"
        />
      </div>
    </div>
  );
};

export default NotFound;
