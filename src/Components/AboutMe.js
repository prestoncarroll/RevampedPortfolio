import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Awards from "./Awards";

const AboutMe = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div style={{ padding: "5%" }} className="ui container">
            <header style={{ fontSize: "35px", color: "white" }}>
              About Me
            </header>
            <div style={{ textIndent: "50px", width: "70%" }}>
              <p1 style={{ color: "white" }}>
                {" "}
                My name is Preston Carroll. I am a Software Engineer and an UCLA
                full stack coding bootcamp graduate (MERN). I specialize in
                React but I am also experienced in several other areas. Some
                areas include javascript, node, various databases and orms, css,
                html, c#, CRUD, algorithms, rest API, authorization, and
                routing. Working with React I have the ability to build
                efficient single page applications by using resuable components,
                writing cleaner code, and taking advantage of the simplicity
                that react offers.
              </p1>
            </div>
          </div>
        </Col>
        <Col>
          <Awards />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
