import React, { useState } from "react";
import "./ChapIntro.css";
import play from "../../assests/play.png";
import CollapeIcon from "../../assests/icons/CollapseIcon";
import blackplayBtn from "../../assests/blackplayBtn.png";
import { useHistory } from "react-router-dom";
import HideShowcontent from "./HideShowcontent";
import Footer from "../Footer";
import {
  ChapContainer,
  ChapContent,
  ChapIcon,
  ChapItems,
  ChapP,
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
          <ChapP>Light </ChapP>
          <ChapIcon src={play} alt="" />
          <ChapP>Introduction to light </ChapP>

          <div className="hide_show">
            <div
              className="chap__rectangle"
              onClick={() => setState((v) => !v)}
            >
              <CollapeIcon />
            </div>
          </div>
          <div className="chap__verticleLine" />
          {/* {state && <HideShowcontent />} */}
          {/* <div className="chap__bigRectangle">
            <img src={blackplayBtn} alt="" className="blackplayBtn" />
            <div className="smallCricle"></div>
          </div>
          <p className="chap__light">Light</p>
          <p className="chap__lightdescription">
            Light is a form of
            <label className="chap__lightdescription_text"> energy </label>
            which makes things
            <label className="chap__lightdescription_text"> visible.</label>
          </p>
          <p className="chap__lightdescription2">
            An object becomes visible to us when light after striking the object
            reaches our eye
          </p>
          <p className="chap__lightdescription3">
            Light itself is not visible, but it makes objects visible to us
          </p>
          <button
            className="chap__playQuiz chap__playQuiztext"
            onClick={onClick}
          >
            Play Quiz
          </button> */}
        </ChapItems>
      </ChapContent>
      <Footer />
    </ChapContainer>
  );
}
