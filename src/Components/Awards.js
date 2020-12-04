import React from "react";

const Awards = () => {
  return (
    <div style={{ padding: "5%" }} className="ui container">
      <header style={{ fontSize: "35px", color: "white" }}>
        Awards and Acheivements
      </header>
      <div style={{ width: "100%" }}>
        <p1 style={{ color: "white" }}>
          {" "}
          <li style={{ width: "100%" }}>
            {" "}
            IBM - Enterprise Design Thinking Practitioner
          </li>
          <li style={{ width: "100%" }}>
            {" "}
            AWS - Certificate of Completion Introduction to Blockchain{" "}
          </li>
          <li style={{ width: "100%" }}>
            {" "}
            UCLA - Completion of full stack web development bootcamp{" "}
          </li>
          <li style={{ width: "100%" }}> UCLA - Best overall group project</li>
          <li style={{ width: "100%" }}> UCLA - Most resourceful</li>
        </p1>
      </div>
    </div>
  );
};

export default Awards;
