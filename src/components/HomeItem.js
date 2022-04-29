import React from "react";
import "./HomeItem.css";

const HomeItem = ({ item, setPopUp }) => {
  return (
    <div className="homeItem">
      <div
        className="homeItem_container"
        onClick={() => setPopUp({ visible: true, item: item })}
      >
        <div className="home-item_img">
          <div className="item_img_container">
            <img className="item_img_foreground" src={item.img} alt="" />
            <img className="item_img_background" src={item.img} alt="" />
          </div>
        </div>
        <div className="home-item_details">
          <div style={{ fontSize: 18, fontWeight: 500 }}>{item.name}</div>
          <div style={{ fontSize: 14, fontWeight: 500, marginTop: 10 }}>
            {"₹" + item.price["200gms"]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
