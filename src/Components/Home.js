import React from "react";
import me2 from "./Images/me2.jpg";
import AboutMe from "./AboutMe";

const Home = () => {
  return (
    <div className="imageOfMe">
      {" "}
      <img
        src={me2}
        style={{
          height: "150px",
          borderRadius: "50%",
          marginLeft: "40%",
          transition: "3",
        }}
        className="img"
        alt="none"
      />
      <AboutMe />
    </div>
  );
};

export default Home;
