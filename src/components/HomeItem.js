import React, { useEffect, useState } from "react";
import "./HomeItem.css";
import chevron_down from "../assets/chevron_down.svg";
import chevron_up from "../assets/chevron_up.svg";
import { ReactComponent as AddIcon } from "../assets/add_icon.svg";

const HomeItem = ({ item, setCartItems, addedCart, setToasts }) => {
  const [dropHidden, setDropHidden] = useState(true);
  const [selectedQ, setSelectedQ] = useState("200 gms");

  const addToCart = (e) => {
    e.target.classList.toggle("remove");
    var addCart = e.target.classList.contains("remove") ? true : false;
    setToasts((prv) => [
      addCart ? "Added to Cart" : "Removed from cart",
      ...prv,
    ]);
    if (addCart)
      return setCartItems((prev) => [
        {
          name: item.name,
          selectedQ: selectedQ,
          img: item.img,
          gms200: item.gms200,
          gms500: item.gms500,
        },
        ...prev,
      ]);
    setCartItems((prev) => prev.filter((e) => e.name !== item.name));
  };

  useEffect(() => {
    if (addedCart) {
      document
        .querySelector(`.${item.name.replaceAll(/\s/g, "")}`)
        .classList.add("remove");
    }
  }, []);

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
        <div className="home-item_priceDrop">
          {!dropHidden && (
            <div className="home-item_pricePick">
              <div
                className={selectedQ === "200 gms" ? "active" : ""}
                onClick={() => {
                  setSelectedQ("200 gms");
                  setDropHidden(true);
                }}
              >
                200 gms
              </div>
              <div
                className={selectedQ === "500 gms" ? "active" : ""}
                onClick={() => {
                  setSelectedQ("500 gms");
                  setDropHidden(true);
                }}
              >
                500 gms
              </div>
            </div>
          )}
          <div
            className="home-item_dropMenu"
            onClick={() => setDropHidden((prev) => !prev)}
          >
            <div style={{ fontSize: 14 }}>{selectedQ}</div>
            <img src={dropHidden ? chevron_down : chevron_up} alt="" />
          </div>
          <div
            className={`home-item_cart ${item.name.replaceAll(/\s/g, "")}`}
            onClick={addToCart}
          >
            <AddIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
