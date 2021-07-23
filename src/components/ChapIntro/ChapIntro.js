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
              </ChapPartOne>
              <ModelOne>
                {state && (
                  <>
                    <HideShowcontent />
                  </>
                )}
              </ModelOne>
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
