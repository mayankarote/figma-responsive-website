import React, { useState } from "react";
import "./Chapdetail.css";
import play from "../../assests/play.png";
import zigzagCircle from "../../assests/zigzagCircle.png";
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
  ChapBtn3,
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
          <div className="row">
            <div className="column">
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
            <div className="column" style={{ backgroundColor: "" }}>
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
              <ChapBtn3 onClick={onClick}>Back To Lesson</ChapBtn3>
            </div>
          </div>
        </CDItems>
      </CDContent>
      <Footer />
    </CDContainer>
  );
}
