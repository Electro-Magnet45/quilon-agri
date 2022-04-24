import React from "react";
import "./HomeItem.css";

const HomeItem = ({ item }) => {
  return (
    <div className="homeItem">
      <div className="homeItem_container">
        <div className="home-item_img">
          <div className="item_img_container">
            <img className="item_img_foreground" src={item.img} alt="" />
            <img className="item_img_background" src={item.img} alt="" />
          </div>
        </div>
        <div className="home-item_details">
          <div style={{ fontSize: 18, fontWeight: 500 }}>{item.name}</div>
          <div className="item-details_cart"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
