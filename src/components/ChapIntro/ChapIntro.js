import React, { useState } from "react";
import "./ChapIntro.css";
import play from "../../assests/play.png";
import CollapeIcon from "../../assests/icons/CollapseIcon";
import blackplayBtn from "../../assests/blackplayBtn.png";
import { useHistory } from "react-router-dom";
import HideShowcontent from "./HideShowcontent";
import horizontalLine from "../../assests/horizontalLine.png";
import zigzagLine from "../../assests/zigzagLine.png";
import zigzagCircle from "../../assests/zigzagCircle.png";

import Footer from "../Footer";
import {
  ChapContainer,
  ChapContent,
  ChapIcon,
  ChapItems,
  ChapPartOne,
  ChapP,
  ChapGrayAL,
  ChapGrayArrow,
  ChapGrayLine,
  ChapNameBox,
  ModelOne,
  ChapP2,
  ChapRectangle,
  ChapPartTwo,
  ChapCircle,
  ChapPTextList,
  ChapYellowP,
  ChapHightlightP,
  ChapWhiteP,
  ChapWhiteBoldP,
  ChapBtnDiv,
  ChapBtn,
} from "./ChapIntroElements";

export default function Chapdescription() {
  const [state, setState] = useState(true);

  let history = useHistory();
  const onClick = () => {
    history.push({
      pathname: "/chapdetail",
    });
  };

  return (
    <ChapContainer>
      <ChapContent>
        <ChapItems>
          <div className="row">
            <div className="column">
              <ChapPartOne>
                {/* Chap One Start */}
                <ChapP>Light</ChapP>
                <ChapIcon src={play} alt="" />
                <ChapP>Introduction to light </ChapP>

                <ChapGrayArrow onClick={() => setState((v) => !v)}>
                  <CollapeIcon />
                </ChapGrayArrow>
                <ChapGrayLine />
                {/* <ModelOne> */}
                {state && (
                  <>
                    {/* <ChapP2>Introduction to Light</ChapP2> */}
                    {/* <img
                  src={horizontalLine}
                  alt=""
                  className="chap__horizontalLine"
                />
                <img src={zigzagLine} alt="" className="chap__zigzagLine" />
                <img
                  src={zigzagCircle}
                  alt=""
                  className="chap__zigzagCircle1"
                />
                <img
                  src={zigzagCircle}
                  alt=""
                  className="chap__zigzagCircle2"
                />
                <img
                  src={zigzagCircle}
                  alt=""
                  className="chap__zigzagCircle3"
                />
                <img
                  src={zigzagCircle}
                  alt=""
                  className="chap__zigzagCircle4"
                />
                <p className="chap__topic1">Light</p>
                <p className="chap__topic2">Important Facts</p>
                <p className="chap__topic3">Types of Sources of light</p>
                <p className="chap__topic4">Luminious and non luminous</p> */}
                  </>
                )}
                {/* </ModelOne> */}
                {/* <HideShowcontent /> */}
              </ChapPartOne>
            </div>
            {/* Chap One End */}
            <div className="column">
              <ChapPartTwo>
                {/* Chap Two Start */}
                <ChapRectangle>
                  <ChapCircle>
                    <ChapIcon src={blackplayBtn} alt="" />
                  </ChapCircle>
                </ChapRectangle>
                <ChapPTextList>
                  <ChapYellowP>Light</ChapYellowP>

                  <ChapWhiteP>
                    Light is a form of
                    <ChapHightlightP> energy </ChapHightlightP>
                    which makes things
                    <ChapHightlightP> visible.</ChapHightlightP>
                  </ChapWhiteP>
                  <ChapWhiteBoldP>
                    An object becomes visible to us when light after striking
                    the object reaches our eye
                  </ChapWhiteBoldP>
                  <ChapWhiteBoldP>
                    Light itself is not visible, but it makes objects visible to
                    us
                  </ChapWhiteBoldP>
                </ChapPTextList>
              </ChapPartTwo>
              {/* Chap One End */}
              {/* <ChapBtnDiv>
                <ChapBtn onClick={onClick}>Play Quiz</ChapBtn>
              </ChapBtnDiv> */}
            </div>
          </div>
        </ChapItems>
      </ChapContent>
      <Footer />
    </ChapContainer>
  );
}
