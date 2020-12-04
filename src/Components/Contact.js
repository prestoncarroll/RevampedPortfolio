import React from "react";
import linkedinicon from "./Images/linkedinicon.png";
import mail from "./Images/mail.webp";
import githubnew from "./Images/githubnew.jpg";
import twitter from "./Images/twitter.png";

const Contact = () => {
  return (
    <div className="ui container">
      <header
        style={{
          color: "white",
          fontSize: "35px",
          marginLeft: "37%",
        }}
      >
        Contact Me
      </header>
      <li style={{ fontSize: "22px" }}>
        Click on any of the following icons to reach me{" "}
      </li>
      <div className="ui container">
        <div className="contactIcons">
          <a href="https://www.linkedin.com/in/preston-carroll-868791194/">
            <img
              src={linkedinicon}
              style={{
                borderRadius: "8%",
                height: "180px",
              }}
              alt="linkedinIcon"
            />
          </a>
          <a class="mailto" href="mailto:plutusinc1@yahoo.com">
            <img
              src={mail}
              style={{
                borderRadius: "1%",
                height: "202px",
              }}
              alt="mailIcon"
            />
          </a>

          <a href="https://github.com/prestoncarroll">
            <img
              src={githubnew}
              style={{
                borderRadius: "30%",
                height: "202px",
              }}
              alt="githubIcon"
            />
          </a>
          <a href="https://twitter.com/Preston14901546">
            <img
              src={twitter}
              style={{
                borderRadius: "30%",
                height: "202px",
              }}
              alt="twitterIcon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
