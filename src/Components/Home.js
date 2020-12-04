import React from "react";
import me2 from "./Images/me2.jpg";

const Home = () => {
  return (
    <div className="imageOfMe">
      {" "}
      <img
        src={me2}
        style={{ height: "150px", borderRadius: "50%" }}
        className="img"
        alt="none"
      />
    </div>
  );
};

export default Home;
