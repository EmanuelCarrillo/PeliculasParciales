import React from "react";
import logo from "../img/logo.png";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Home;

