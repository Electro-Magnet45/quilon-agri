import React, { useEffect, useState } from "react";
import "./Cart.css";
import cart_icon from "../assets/cart_icon.svg";
import { useTitle } from "../constants";

const Cart = ({ cartItems, setCartItems }) => {
  useTitle("Cart");
  const [total, setTotal] = useState(0);

  const removeFromCart = (itemName) => {
    setCartItems((prev) => prev.filter((item) => item.name !== itemName));
  };

  const sendWhatsapp = () => {
    if (cartItems.length === 0) return;
    var text = "Hello%20QUILON%20AGRI%20PRODUCTS!%0AI%20want%20to%20order:";
    cartItems.map((e) => (text = `${text}%0A${e.selectedQ} of ${e.name}`));
    window.open(
      `https://api.whatsapp.com/send?phone=917012874039&text=${text.replaceAll(
        /\s/g,
        "%20"
      )}%0A👉%20https://quilon-agri.vercel.app`,
      "_blank"
    );
  };

  useEffect(() => {
    var totalPrice = 0;
    cartItems.forEach((e) => {
      if (e.selectedQ === "200 gms") {
        totalPrice = totalPrice + Number(e.gms200);
      } else {
        totalPrice = totalPrice + Number(e.gms500);
      }
    });
    setTotal(totalPrice);
  }, [cartItems]);

  return (
    <div className="cart">
      <div className="cart_container">
        <div className="about-cont_title">
          <div className="about-cont_text">
            <h1>Cart</h1>
          </div>
          <img src={cart_icon} alt="" style={{ height: 100, marginLeft: 10 }} />
        </div>
        <div className="cart-cont_head">
          <h1>
            {cartItems.length === 0
              ? "No Items in Cart"
              : `${cartItems.length} items:`}
          </h1>
        </div>
        {cartItems.length !== 0 && (
          <div className="cart-cont_info">
            <div className="cart-cont_items">
              {cartItems.map((e) => (
                <CartItem
                  key={e.name}
                  item={e}
                  deleteItem={() => removeFromCart(e.name)}
                />
              ))}
            </div>
            <div
              className="cart-cont_price"
              style={{
                height: 240,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  backgroundColor: "#faa905",
                  color: "white",
                  padding: 12,
                  borderRadius: 16,
                  fontSize: 20,
                  fontWeight: "bolder",
                  display: "flex",
                }}
              >
                <div style={{ marginRight: "auto" }}>Total</div>
                <div>‎ &#8377; {total}</div>
              </div>
              <div
                style={{
                  marginTop: "auto",
                  textAlign: "center",
                  backgroundColor: "#faa905",
                  color: "white",
                  padding: 12,
                  fontWeight: "bolder",
                  cursor: "pointer",
                }}
                onClick={sendWhatsapp}
              >
                Proceed
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CartItem = ({ item, deleteItem }) => {
  return (
    <div className="cartItem">
      <div className="cartItem_container">
        <div style={{ flex: 0.6 }}>
          <img src={item.img} alt="" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: "bold", marginBottom: 6, fontSize: 20 }}>
            {item.name}
          </div>
          <div>{item.selectedQ}</div>
          <div className="cartItem-cont_remove" onClick={deleteItem}>
            Remove
          </div>
        </div>
        <div style={{ fontSize: 20, flex: 1 }}>
          &#8377; {item.selectedQ === "200 gms" ? item.gms200 : item.gms500}
        </div>
      </div>
    </div>
  );
};

export default Cart;
