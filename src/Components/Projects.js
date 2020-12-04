import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import goodKnight from "./Images/goodKnight.png";
import timedQuiz from "./Images/timedQuiz.png";
import train from "./Images/train.png";

const Projects = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={goodKnight} />
            <Card.Body>
              <Card.Title>A Good Knight</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={timedQuiz} />
            <Card.Body>
              <Card.Title>Timed Quiz</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={train} />
            <Card.Body>
              <Card.Title>Train Scheduler</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Let's Have A Toast</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Gif Tastic</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
        {/* -------------------------------- */}
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Phaser Tamagotchi</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
      </Row>
    </Container>
  );
};

export default Projects;
