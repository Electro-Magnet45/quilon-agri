import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import error_icon from "./undraw_page_not_found.svg";
import { useTitle } from "./constants";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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
