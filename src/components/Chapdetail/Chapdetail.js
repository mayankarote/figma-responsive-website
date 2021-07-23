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
  CDCircle,
  CDGroupOne,
  CDGroupTwo,
  CDYellowP,
  CDYellowCircle,
  CDP1,
  CDColorfulRing,
  ChapPTextList,
  ChapBtn,
  ChapBtn2,
  CDBtnDiv,
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
                  <CDGroupOne>
                    <CDYellowCircle>
                      <CDYellowP>1</CDYellowP>
                    </CDYellowCircle>
                    <CDCircle src={zigzagCircle} alt="" />
                    <CDCircle src={zigzagCircle} alt="" />
                    <CDCircle src={zigzagCircle} alt="" />
                  </CDGroupOne>

                  <CDGroupTwo>
                    <CDP1>
                      Light affects our eyes to produce the sensation of Vision
                    </CDP1>
                    <CDColorfulRing>
                      <ChapPTextList>10 s</ChapPTextList>
                    </CDColorfulRing>
                  </CDGroupTwo>
                  <CDBtnDiv>
                    <ChapBtn>True</ChapBtn>
                    <ChapBtn2>False</ChapBtn2>
                  </CDBtnDiv>
                </CDRectangle>
              </CDPartTwo>
            </div>
            {/* <div className="chapdetail__smallCircleBox">
              
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
