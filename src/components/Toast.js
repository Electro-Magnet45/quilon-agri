import React, { useEffect } from "react";
import "./Toast.css";
import check_icon from "../assets/check_icon.svg";

const Toast = ({ toasts, setToasts }) => {
  return (
    <div className="toast">
      {toasts.map((e) => {
        return (
          <ToastItem
            key={Date.now() + Math.random()}
            message={e}
            setToasts={setToasts}
          />
        );
      })}
    </div>
  );
};

const ToastItem = ({ message, setToasts }) => {
  useEffect(() => {
    setTimeout(() => {
      setToasts((prev) => prev.filter((x) => x !== message));
    }, 3000);
  }, []);

  return (
    <div className="toast_container">
      <img src={check_icon} alt="" />
      <div style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>
        {message}
      </div>
    </div>
  );
};

export default Toast;
