import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { styled } from "@mui/system";
import { Transition, CSSTransition } from "react-transition-group";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
//import { Container, Row, Col } from "react-bootstrap";
import Html from "../Html";
import { useLockBodyScroll, getStyleObjectFromString } from "../Utils";
import LinkGA from "../GoogleAnalytics/LinkGA";
import DB from "./DB";
import LockBodyScrollProxy from "./LockBodyScrollProxy";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import { gaEvents } from "components/SpGA/gaEvents";

const Popup = (props) => {
  //useLockBodyScroll();
  /* proxy needed because of some react-transition-group component mounting peculiarity */
  const [curPopup, setCurPopup] = useState(DB[0]);
  const [enterDone, setEnterDone] = useState(false);
  useEffect(() => {
    console.log("props.curPopupNum", props.curPopupNum);
    setCurPopup(DB[props.curPopupNum]);
    console.log("db[0]", DB[0]);
  }, [props.curPopupNum]);

  const duration = 500;

  /*const defaultStyle = {
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
  };*/
  const Popup_box = styled("div")({
    color: "darkslategray",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center" /*center;*/ /*flex-end; */,
    /*perspective-origin: 75%;*/

    "&.popup_animation-enter": {
      opacity: 0
    },
    "&.popup_animation-enter-active": {
      opacity: 1,
      transition: "transform 500ms"
    },
    "&.popup_animation-exit": {
      opacity: 1
    },
    "&.popup_animation-exit-active ": {
      opacity: 0,
      transition: "opacity 500ms"
    },
    "&.popup_animation-enter .popup": {
      transform: "translateZ(100px) rotateY(90deg) translateX(90px) scale(0.2)"
    },
    "&.popup_animation-enter-active .popup": {
      opacity: 1,
      transform: "translateZ(0px) rotateY(0deg) translateX(0px) scale(1)",
      transition: "transform 300ms"
    },
    "&.popup_animation-exit-active .popup": {
      transition: "transform 300ms",
      transform:
        "rotateX(-75deg) translateY(100px) translateZ(300px) scale(0.3)"
    }
  });
  const PopupBg = styled("div")({
    background: "#ff00ff",
    opacity: 0.4,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 5
  });

  const PopupPerspective = styled("div")({
    perspective: "500px",
    zIndex: 7
  });

  const Popup = styled("div")({
    position: "relative",
    zIndex: 10,
    background: "#fff",
    borderRadius: "20px",
    color: "#000",
    maxWidth: "500px",
    minWidth: "480px",
    minHeight: "600px",
    margin: "15px 15px 15px 0"
  }); //not working yet
  /*getStyleObjectFromString(`position:relative,
    z-index:10,
    background:#fff,
    border-radius:20px,
    color:#000,
    max-width:463px,
    margin:15px 15px 15px 0`)*/
  //https://stackoverflow.com/questions/50368417/styling-element-inside-class-mui

  return (
    <CSSTransition
      in={props.popupIsOpen}
      classNames="popup_animation"
      timeout={{
        appear: duration,
        enter: duration,
        exit: duration
      }}
      //mountOnEnter
      unmountOnExit
      onEntered={() => setEnterDone(true)}
      onExited={() => setEnterDone(false)}
    >
      {(state) => (
        <Popup_box className="popup_box">
          {state === "entered" && <LockBodyScrollProxy />}
          {/* proxy needed because of some react-transition-group component mounting peculiarity */}
          <PopupBg className="popup-bg" onClick={props.closePopup}></PopupBg>
          <PopupPerspective>
            <Popup className="popup">
              <div className="popup-wrap">
                <h1>{curPopup?.head}</h1>

                <div>curPopupNum {props.curPopupNum}</div>
                <div>{curPopup?.date}</div>
                <SimpleBar style={{ maxHeight: 300 }}>
                  <Html>{curPopup?.content}</Html>

                  {state === "entered" && curPopup?.iframe && (
                    <div
                      dangerouslySetInnerHTML={{ __html: curPopup?.iframe }}
                    />
                  )}
                  {/*{enterDone && curPopup?.reactcontent}*/}
                  {state === "entered" && curPopup?.reactcontent}
                  {/* without state condition slick damages transform rotate */}
                </SimpleBar>
                <hr />
                <div>popup anim state: {state}</div>

                <div onClick={props.prevPopup}>prev</div>
                <div onClick={props.nextPopup}>next</div>
                <div onClick={props.closePopup}>X close X</div>
              </div>
            </Popup>
          </PopupPerspective>
        </Popup_box>
      )}
    </CSSTransition>
  );
};

export default Popup;
