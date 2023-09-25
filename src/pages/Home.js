import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout
      data={
        <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
          <div className="headerContainer">
            <h1>Khana Khazana</h1>
            <p>Unbeatable Taste</p>
            <Link to="/menu">
              <button>ORDER NOW</button>
            </Link>
          </div>
        </div>
      }
    ></Layout>
  );
};

export default Home;
