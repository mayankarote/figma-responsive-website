import React from "react";
import "./Game.css";
import cloudOne from "../../assests/cloud_one.png";
import cloudTwo from "../../assests/cloud_two.png";
import cloudThree from "../../assests/cloud_three.png";
import lock from "../../assests/lock.png";
import blackPlay from "../../assests/blackPlay.png";
import sun from "../../assests/sun.png";
import smallCloud from "../../assests/smallCloud.png";
import miniCloud from "../../assests/miniCloud.png";
import square from "../../assests/square.png";
import colorSquare from "../../assests/colorSquare.png";
import trees from "../../assests/trees.png";
import Greenline from "../../assests/Greenline.png";
import bunchTrees from "../../assests/bunchTrees.png";
import fourWhiteSteps from "../../assests/fourWhiteSteps.png";
import fourWhiteStepsShadow from "../../assests/fourWhiteStepsShadow.png";
import fourYellowSteps from "../../assests/fourYellowSteps.png";
import manLight from "../../assests/manLight.png";
import yellowLine from "../../assests/yellowLine.png";
import { useHistory } from "react-router-dom";
import Footer from "../Footer";
import {
  GameContainer,
  GameContent,
  GameItems,
  GameMiniCloudIcon,
  GameSmallCloudIcon2,
  GameP,
  GamePartOne,
  GameScoreCircle,
  GameScoreCircleOne,
  GameScoreCircleThree,
  GameScoreCircleTwo,
  GameScoreRectangle,
  GameSunIcon,
  PartOne,
  ScoreDiv,
  ScoreDiv2,
  PinholeSetup,
  PartTwo,
  PartThree,
  PinholeCamera,
  PinholeCameraCirlce,
  PinholeLock,
  GameSquare,
} from "./GameElements";

export default function Login() {
  let history = useHistory();
  const onClick = () => {
    history.push({
      pathname: "/chapintro",
    });
  };

  return (
    <GameContainer>
      <GameContent>
        <GameItems>
          {/* <div className="cloud__three">
            <img src={cloudThree} alt="" />
          </div>
          <div className="cloud__two">
            <img src={cloudTwo} alt="" />
          </div>
          <div className="cloud__one">
            <img src={cloudOne} alt="" />
          </div> */}
          <PartOne>
            <ScoreDiv>
              <GameP>Score</GameP>
              <GameScoreRectangle>
                <GameScoreCircle>
                  <GameScoreCircleOne>0</GameScoreCircleOne>
                  <GameScoreCircleTwo>1</GameScoreCircleTwo>
                  <GameScoreCircleThree>1</GameScoreCircleThree>
                </GameScoreCircle>
              </GameScoreRectangle>
            </ScoreDiv>
          </PartOne>
          <PartTwo>
            <GameSmallCloudIcon2 src={smallCloud} alt="" />
            <GameSunIcon src={sun} alt="" />
            <GameMiniCloudIcon src={miniCloud} alt="" />
          </PartTwo>

          <PartThree>
            <PinholeSetup>
              <PinholeCamera>Pinhole camera</PinholeCamera>
              <PinholeCameraCirlce>
                <PinholeLock src={lock} alt="" />
              </PinholeCameraCirlce>
            </PinholeSetup>
            <GameSquare src={square}>
              {/* <GameSquare></GameSquare> */}
              {/* <img src={trees} alt="" className="trees" /> */}
              {/* <img
              src={fourWhiteStepsShadow}
              alt=""
              className="fourWhite__stepsShadow"
            /> */}
              {/* <img src={fourWhiteSteps} alt="" className="fourWhite__steps" /> */}
              {/* <img src={smallCloud} alt="" className="small__cloud1" /> */}
              {/* <div className="pinhole__setup2">
              <div className="pinhole__camera2"></div>
              <div className="pinhole__cameraText2">Eclipses</div>
              <div className="pinhole__cameraCirlce2"></div>
              <img src={lock} alt="" className="pinhole__cameraLock2" />
            </div> */}
            </GameSquare>
          </PartThree>

          {/* <div className="square__stepsSetup2">
            <img src={square} alt="" className="square2" />
            <img src={trees} alt="" className="trees2" />
            <img
              src={fourWhiteStepsShadow}
              alt=""
              className="fourWhite__stepsShadow2"
            />
            <img src={fourWhiteSteps} alt="" className="fourWhite__steps2" />
            <img src={smallCloud} alt="" className="small__cloud2" />
            <div className="pinhole__setup3">
              <div className="pinhole__camera3"></div>
              <div className="pinhole__cameraText3">Types of Beam</div>
              <div className="pinhole__cameraCirlce3"></div>
              <img src={lock} alt="" className="pinhole__cameraLock3" />
            </div>
          </div> */}
          {/* <div className="square__stepsSetup3">
            <img src={square} alt="" className="square3" />
            <img src={trees} alt="" className="trees3" />
            <img
              src={fourWhiteStepsShadow}
              alt=""
              className="fourWhite__stepsShadow3"
            />
            <img src={fourYellowSteps} alt="" className="fourWhite__steps3" />
            <img src={smallCloud} alt="" className="small__cloud3" />
          </div> */}
          {/* <div className="square__stepsSetup4">
            <img src={colorSquare} alt="" className="square4" />
            <img src={bunchTrees} alt="" className="trees4" />
            <img src={Greenline} alt="" className="Greenline" />
            <img
              src={fourWhiteStepsShadow}
              alt=""
              className="fourWhite__stepsShadow4"
            />
            <img src={fourYellowSteps} alt="" className="fourWhite__steps4" />
            <div className="pinhole__setup4">
              <div className="pinhole__camera4"></div>
              <div className="pinhole__cameraText4">
                Transparent, Translucent & Opaque materials
              </div>
              <div className="pinhole__cameraCirlce4"></div>
              <img src={lock} alt="" className="pinhole__cameraLock4" />
            </div>
          </div> */}
          {/* <div className="square__stepsSetup5">
            <img src={colorSquare} alt="" className="square5" />
            <img src={manLight} alt="" className="manLight" />
            <button className="pinhole__setup5" onClick={onClick}>
              <div className="pinhole__camera5"></div>
              <div className="pinhole__cameraText5">Introduction to Light</div>
              <div className="pinhole__cameraCirlce5"></div>
              <img src={blackPlay} alt="" className="pinhole__cameraPlay5" />
              <img src={yellowLine} alt="" className="pinhole__yellowLine" />
            </button>
          </div> */}
        </GameItems>
      </GameContent>
      <Footer />
    </GameContainer>
  );
}
