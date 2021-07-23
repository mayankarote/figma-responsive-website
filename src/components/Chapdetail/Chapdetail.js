import React, { useState } from "react";
import "./Chapdetail.css";
import play from "../../assests/play.png";
import verticleLine from "../../assests/Line.png";
import rectangle from "../../assests/Rectangle.png";
import triangle from "../../assests/Triangle.png";
import smalltriangle from "../../assests/smallTriangle.png";
import zigzagCircle from "../../assests/zigzagCircle.png";
import smallCircle1 from "../../assests/smallCircle1.png";
import colorfulRing from "../../assests/colorfulRing.png";
import { useHistory } from "react-router-dom";
import CollapeIcon from "../../assests/icons/CollapseIcon";
import Footer from "../Footer";
import {
  CDContainer,
  CDContent,
  CDGrayArrow,
  CDGrayLine,
  CDIcon,
  CDItems,
  CDP,
  CDPartOne,
  CDRectangle,
  CDModelOne,
  CDPartTwo,
} from "./ChapDetailElements";

export default function Chapdetail() {
  const [state, setState] = useState(false);

  let history = useHistory();
  const onClick = () => {
    history.push({
      pathname: "/chapintro",
    });
  };
  return (
    <CDContainer>
      <CDContent>
        <CDItems>
          <div className="row" style={{ backgroundColor: "black" }}>
            <div className="column" style={{ backgroundColor: "grey" }}>
              <CDPartOne>
                <CDP>Light</CDP>
                <CDIcon src={play} alt="" />
                <CDP>Introduction to light </CDP>
              </CDPartOne>

              <CDModelOne>
                <CDGrayArrow onClick={() => setState((v) => !v)}>
                  <CollapeIcon />
                </CDGrayArrow>
                <CDGrayLine />
              </CDModelOne>
            </div>
            <div className="column" style={{ backgroundColor: "sienna" }}>
              <CDPartTwo>
                <CDRectangle>
                  <img
                    src={smallCircle1}
                    alt=""
                    className="chapdetail__smallCircle1"
                  />
                </CDRectangle>
              </CDPartTwo>
            </div>
            {/* <div className="chapdetail__smallCircleBox">
              <p className="chapdetail__smallCircle1text">1</p>
              <img
                src={zigzagCircle}
                alt=""
                className="chapdetail__smallCircle2"
              />
              <img
                src={zigzagCircle}
                alt=""
                className="chapdetail__smallCircle3"
              />
              <img
                src={zigzagCircle}
                alt=""
                className="chapdetail__smallCircle4"
              />
              <div className="chapdetail__middleHeading">
                Light affects our eyes to produce the sensation of Vision{" "}
              </div>
              <img src={colorfulRing} alt="" className="chap__colorfulRing" />
              <p className="chap__tenSec">10 s</p>
              <button className="chap__trueBtn chap__trueBtntext">True</button>
              <button className="chap__falseBtn chap__falseBtntext">
                True
              </button>
            </div> */}

            {/* <button
              className="chapdetail__playQuiz chapdetail__playQuiztext"
              onClick={onClick}
            >
              Back To Lesson
            </button> */}
          </div>
        </CDItems>
      </CDContent>
      <Footer />
    </CDContainer>
  );
}
