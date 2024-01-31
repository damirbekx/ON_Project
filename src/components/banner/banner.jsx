import React from "react";
import "./banner.scss";

export const Banner = ({ img, text, title, area }) => {
  return (
    <div className={area}>
      <div className="banner_block">
      <img className="banner_img" src={img} alt="" />
      <div className="banner_info">
      <h2 className="banner_title">{title}</h2>
      <p className="banner_text">{text}</p>
      </div>
      </div>
    </div>
  );
};
