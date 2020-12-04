import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import goodKnight from "./Images/goodKnight.png";
import timedQuiz from "./Images/timedQuiz.png";
import train from "./Images/train.png";
import drinks from "./Images/drinks.png";
import giftastic from "./Images/giftastic.png";
import phase from "./Images/phase.png";

const Projects = () => {
  return (
    <div style={{ padding: "3%" }} className="ui-container">
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Img variant="top" src={goodKnight} />
              <Card.Body>
                <Card.Title>A Good Knight</Card.Title>
                <Card.Text>
                  A role playing game with character selection and choice
                  selection that will determine the outcome of your story!
                  <br></br>
                  <br></br>
                </Card.Text>
                <Button
                  href="https://guarded-gorge-94645.herokuapp.com/"
                  style={{}}
                  variant="primary"
                >
                  click to play
                </Button>
                <br></br>
                <br></br>
                <Button
                  href="https://github.com/origamiunicorn/this-is-spr-ta/tree/master"
                  variant="primary"
                >
                  repo
                </Button>
              </Card.Body>
            </Card>
          </Col>
          {/* ------------------------------------------------------------------- */}

          <Col>
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Img variant="top" src={timedQuiz} />
              <Card.Body>
                <Card.Title>Timed Quiz</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  <br></br>
                  <br></br>
                </Card.Text>
                <Button
                  href="https://prestoncarroll.github.io/quiz/"
                  variant="primary"
                >
                  click to play
                </Button>
                <br></br>
                <br></br>
                <Button
                  href="https://github.com/prestoncarroll/quiz"
                  variant="primary"
                >
                  repo
                </Button>
              </Card.Body>
            </Card>
          </Col>
          {/* --------------------------------------------------------------------------------- */}

          <Col>
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Img variant="top" src={train} />
              <Card.Body>
                <Card.Title>Train Scheduler</Card.Title>
                <Card.Text>
                  A train scheduler which allows you to mark down your times for
                  your next train!
                  <br></br>
                  <br></br>
                </Card.Text>
                <Button
                  href="https://prestoncarroll.github.io/Train-Scheduler/"
                  variant="primary"
                >
                  click to play
                </Button>
                <br></br>
                <br></br>
                <Button
                  href="https://github.com/prestoncarroll/Train-Scheduler"
                  variant="primary"
                >
                  repo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        {/* ---------------------------------new row-------------------------------------- */}
        <Row>
          <Col>
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Img variant="top" src={drinks} />
              <Card.Body>
                <Card.Title>Let's Have A Toast</Card.Title>
                <Card.Text>
                  Thirsty? this website allows you to search up any drink recipe
                  in the world by using our fancy API.
                  <br></br>
                  <br></br>
                </Card.Text>
                <Button
                  href="https://doz-a.github.io/projectone/"
                  variant="primary"
                >
                  click to play
                </Button>
                <br></br>
                <br></br>
                <Button
                  href="https://github.com/doz-a/projectone"
                  variant="primary"
                >
                  repo
                </Button>
              </Card.Body>
            </Card>
          </Col>
          {/* --------------------------------------------------------------- */}
          <Col>
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Img variant="top" src={giftastic} />
              <Card.Body>
                <Card.Title>Gif Tastic</Card.Title>
                <Card.Text>
                  Append fun and exciting Gifs to the webpage given a certain
                  categories of gifs.
                  <br></br>
                  <br></br>
                </Card.Text>
                <Button
                  href="https://prestoncarroll.github.io/gif-homework/"
                  variant="primary"
                >
                  click to play
                </Button>
                <br></br>
                <br></br>
                <Button
                  href="https://github.com/prestoncarroll/gif-homework"
                  variant="primary"
                >
                  repo
                </Button>
              </Card.Body>
            </Card>
          </Col>
          {/* -------------------------------- */}
          <Col>
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Img variant="top" src={phase} />
              <Card.Body>
                <Card.Title>Phaser Tamagotchi</Card.Title>
                <Card.Text>
                  With a touch of throwback pokemon this phaser game allows you
                  to walk around and battle enemies using your keyboard.
                  <br></br>
                  <br></br>
                </Card.Text>
                <Button
                  href="https://fathomless-stream-68190.herokuapp.com/"
                  variant="primary"
                >
                  click to play
                </Button>
                <br></br>
                <br></br>
                <Button
                  href="https://github.com/UnseenMountain/tamagotchi"
                  variant="primary"
                >
                  repo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
