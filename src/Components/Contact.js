import React from "react";
import linkedinicon from "./Images/linkedinicon.png";
import mail from "./Images/mail.webp";
import githubnew from "./Images/githubnew.jpg";

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

          <img
            src={mail}
            style={{
              borderRadius: "1%",
              height: "202px",
            }}
            alt="no"
          />

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
        </div>
      </div>
    </div>
  );
};

export default Contact;
