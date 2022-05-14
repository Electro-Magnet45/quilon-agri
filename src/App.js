import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useTitle } from "./constants";
import { useEffect, useState } from "react";
import error_icon from "./assets/undraw_page_not_found.svg";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Toast from "./components/Toast";
import Cart from "./screens/Cart";

function App() {
  const [items, setItems] = useState();
  const [toasts, setToasts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchItems = async () => {
    const items = await fetch(process.env.REACT_APP_SERVER_URL + "/get_items", {
      headers: {
        connect_key: process.env.REACT_APP_CONNECT_KEY,
      },
    });
    return items.json();
  };

  useEffect(() => {
    fetchItems().then((e) => setItems(e));
  }, []);

  return (
    <div className="app">
      <Header cartItems={cartItems} />
      <Toast toasts={toasts} setToasts={setToasts} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              cartItems={cartItems}
              setCartItems={setCartItems}
              setToasts={setToasts}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

const ErrorPage = () => {
  useTitle("404 Not Found");
  return (
    <div className="errorPage">
      <div className="errorPage_container">
        <img src={error_icon} alt="" />
        <h1>Wow! That's a dead end!</h1>
        <Link to="/">
          <div style={{ fontSize: 18, color: "#faa905" }}>Home</div>
        </Link>
      </div>
    </div>
  );
};
