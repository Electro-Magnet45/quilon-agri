import React, { useState } from "react";
import "./HomeItem.css";
import chevron_down from "../assets/chevron_down.svg";
import chevron_up from "../assets/chevron_up.svg";
import whatsapp_icon from "../assets/whatsapp_icon.svg";

const HomeItem = ({ item }) => {
  const [dropHidden, setDropHidden] = useState(true);
  const [selectedQ, setSelectedQ] = useState("200 gms");

  const sendWhatsapp = () =>
    window.open(
      `https://api.whatsapp.com/send?phone=917012874039&text=Hello%20QUILON%20AGRI%20PRODUCTS!%0AI%20want%20to%20order%20${selectedQ}%20of%20${item.name}%0A👉%20https://quilon-agri.vercel.app`,
      "_blank"
    );

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
          <div style={{ fontSize: 16, fontWeight: 500 }}>
            &#8377; {selectedQ === "200 gms" ? item.gms200 : item.gms500}
          </div>
        </div>
        <div
          className="home-item_priceDrop"
          onClick={() => setDropHidden((prev) => !prev)}
        >
          {!dropHidden && (
            <div className="home-item_pricePick">
              <div
                className={selectedQ === "200 gms" ? "active" : ""}
                onClick={() => setSelectedQ("200 gms")}
              >
                200 gms
              </div>
              <div
                className={selectedQ === "500 gms" ? "active" : ""}
                onClick={() => setSelectedQ("500 gms")}
              >
                500 gms
              </div>
            </div>
          )}
          <div className="home-item_dropMenu">
            <div style={{ fontSize: 14 }}>{selectedQ}</div>
            <img src={dropHidden ? chevron_down : chevron_up} alt="" />
          </div>
          <div>
            <img src={whatsapp_icon} alt="" onClick={sendWhatsapp} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
