import React, { useRef, useState, useEffect } from "react";
import { Transition, CSSTransition } from "react-transition-group";
//import { Container, Row, Col } from "react-bootstrap";
//import { useToggle } from "components/Utils";
import LinkGA from "../GoogleAnalytics/LinkGA";
import DB from "./DB";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import { gaEvents } from "components/SpGA/gaEvents";

const Popup = (props) => {
  const [curPopup, setCurPopup] = useState(DB[0]);
  const [enterDone, setEnterDone] = useState(false);
  useEffect(() => {
    console.log("props.curPopupNum", props.curPopupNum);
    setCurPopup(DB[props.curPopupNum]);
    console.log("db[0]", DB[0]);
  }, [props.curPopupNum]);

  const duration = 500;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    perspective: "500px"
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  };

  const defaultContentStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: "translateZ(100px)"
  };

  const transitionContentStyles = {
    entering: { transform: "rotateY(90deg) translateX(90px) scale(.2)" },
    entered: { transform: "rotateY(0deg) translateX(0px) scale(1)" },
    exiting: {
      transform: "rotateX(-75deg) translateY(100px) translateZ(300px) scale(.3)"
    }
    //exited: { transform: "rotateY(90deg)" }
  };

  return (
    <Transition
      in={props.popupIsOpen}
      timeout={{
        appear: 0,
        enter: 0,
        exit: duration
      }}
      mountOnEnter
      unmountOnExit
      onEntered={() => setEnterDone(true)}
      onExited={() => setEnterDone(false)}
    >
      {(state) => (
        <div
          className="popup_box"
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          <div className="popup-bg" onClick={props.closePopup}></div>
          <div
            className="popup"
            style={{
              ...defaultContentStyle,
              ...transitionContentStyles[state]
            }}
          >
            <div className="popup-wrap">
              <h1>popup </h1>
              <div onClick={props.closePopup}>X</div>
              <div onClick={props.prevPopup}>prev</div>
              <div onClick={props.nextPopup}>next</div>
              <div>{props.curPopupNum}</div>
              <div>{curPopup?.date}</div>
              <div>I am {state}</div>
              <div dangerouslySetInnerHTML={{ __html: curPopup?.content }} />
              {enterDone && curPopup?.reactcontent}
              {/*{state == "entered" && curPopup?.reactcontent}*/}
              {/* without state condition slick damages transform rotate */}
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Popup;
