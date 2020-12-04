import React from "react";
import me from "./Images/me.PNG";

const Home = () => {
  return (
    <div>
      {" "}
      hello
      <img src={me} style={{ height: "400px" }} className="mePic" alt="none" />
    </div>
  );
};

export default Home;
