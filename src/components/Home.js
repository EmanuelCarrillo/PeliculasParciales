import React from "react";
import logo from "../img/logo.png";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={logo} alt="logo" style={{width:"950px"}} />
    </div>
  );
};

export default Home;

