import React, { useEffect } from "react";
import "./Home.css";
import home_icon from "../undraw_breakfast.svg";
import HomeItem from "../components/HomeItem";
import { items, useTitle } from "../constants";

const Home = () => {
  var timeout;
  const animateNext = () => {
    const elements = document.querySelectorAll(
      ".homeItem > div:not(.opacityAnime)"
    );
    if (elements.length) {
      elements[0].classList.add("opacityAnime");
      timeout = setTimeout(animateNext, 200);
    } else clearTimeout(timeout);
  };

  useTitle("Home | Quilon Agri Products");
  useEffect(() => animateNext(), []);

  return (
    <div className="home">
      <div className="home_container">
        <div className="home_landing">
          <div className="home-land_1">
            <div className="home-land_title">
              <h1>
                <span>Quilon</span>
                <br />
                <span>Agri</span>
                <br />
                <span>Products</span>
              </h1>
            </div>
            <img src={home_icon} alt="" />
          </div>
          <div className="home-land_2">
            <button>Order Now</button>
            <button>Contact Us</button>
          </div>
        </div>
        <div className="home_items">
          {items.map((i) => (
            <HomeItem key={i.id} item={i} data-animation-offset={i.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
