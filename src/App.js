import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./styles.css";
import LinkGA from "./components/GoogleAnalytics/LinkGA";
import PopupTriggers from "./components/Popups/PopupTriggers";

export default function App() {
  const [num, setNum] = useState(0);
  function addNum(amount) {
    //console.log("num", num);
    setNum((num) => num + amount);
    //gsap.from(".draw-me", { duration: 1, stagger: 0.1, drawSVG: 0 });
    /*gsap.to(".draw-me", { duration: 1, opacity: 0.4 });
    gsap.fromTo(
      ".draw-me",
      { drawSVG: "50% 50%" },
      { duration: 1, drawSVG: "100%", stagger: 0.1 }
    );*/
  }
  return (
    <div className="App">
      <h1>COMPONENTS IN POPUP</h1>
      <div className="debug">
        <div className="growingNum"></div>
      </div>
      {/*<div className="panel">
        <h2>Google Analytics</h2>
        <LinkGA>
          <a href="#">link with ga event</a>
        </LinkGA>
        <LinkGA
          action={"PersonalStories Anastasia press"}
          onClickTrans={[addNum, 5]}
        >
          <div onClick={(e) => addNum(1)}>
            <div className="choiser-info">with function</div>
          </div>
        </LinkGA>
  </div>*/}

      {/* <Card style={{ width: "18rem" }}>
        
        <Card.Header>Google Analytics</Card.Header>
        <Card.Body>
          <Card.Title>Regular Link</Card.Title>
          <Card.Text>
            <LinkGA>
              <a href="#">Link</a>
            </LinkGA>
            &nbsp;with GA event
          </Card.Text>
        </Card.Body>
      </Card>*/}

      {/* <div className="compcont">
        <div className="head">Google Analytics</div>
        <div className="comp">
          <LinkGA>
            <a href="#">Link</a>
          </LinkGA>
          &nbsp;with GA event
        </div>
    </div>*/}

      <div className="compcont">
        <div className="head">Popus</div>
        <div className="comp">
          <PopupTriggers />
        </div>
      </div>
    </div>
  );
}

//https://stackoverflow.com/questions/34114679/convert-a-react-element-to-a-jsx-string
