import React, { useEffect } from "react";
import "./PopUp.css";

const PopUp = ({ popUp, setPopUp }) => {
  useEffect(() => {
    document.getElementById("popUp").onclick = doBodyMenu;
    document.getElementById("popUp_container").onclick = doTableMenu;

    function doBodyMenu() {
      setPopUp(false);
    }
    function doTableMenu(e) {
      var evt = e ? e : window.event;

      if (evt.stopPropagation) {
        evt.stopPropagation();
      } else {
        evt.cancelBubble = true;
      }
      return false;
    }
  }, []);

  return (
    <div id="popUp">
      <div className="popUp_container" id="popUp_container">
        <img src={popUp.item.img} alt="" />
        <div className="popUp-cont_info">
          <div style={{ fontSize: 24 }}>{popUp.item.fullName}</div>
          <div style={{ fontSize: 20, marginTop: 20 }}>
            200gms: <span>{`₹${popUp.item.price["200gms"]}`}</span>
          </div>
          <div style={{ fontSize: 20, marginTop: 5 }}>
            500gms: <span>{`₹${popUp.item.price["500gms"]}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
