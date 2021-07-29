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
  Gametrees,
  GameStairs,
  GameWhiteStairs,
  GameStairsShadow,
  GameSmallClouds,
  GameBigClouds,
  GameClouds,
  GameCloudsOne,
  GameCloudsTwo,
  GameCloudsThree,
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
          <div className="row" style={{ backgroundColor: "" }}>
            <div className="column" style={{ backgroundColor: "" }}>
              <PartTwo>
                <GameSmallCloudIcon2 src={smallCloud} alt="" />
                <GameSunIcon src={sun} alt="" />
                <GameMiniCloudIcon src={miniCloud} alt="" />
              </PartTwo>
            </div>

            <div className="column" style={{ backgroundColor: "" }}>
              <PartThree>
                <PinholeSetup>
                  <PinholeCamera>Pinhole camera</PinholeCamera>
                  <PinholeCameraCirlce>
                    <PinholeLock src={lock} alt="" />
                  </PinholeCameraCirlce>
                </PinholeSetup>

                <GameSquare src={square} />
                <Gametrees src={trees} alt="" />
                <GameWhiteStairs src={fourWhiteSteps} alt="" />
                <GameStairsShadow src={fourWhiteStepsShadow} alt="" />
                {/* <GameSmallClouds src={smallCloud} alt="" /> */}
                {/* <PinholeSetup>
                  <PinholeCamera>Eclipses</PinholeCamera>
                  <PinholeCameraCirlce>
                    <PinholeLock src={lock} alt="" />
                  </PinholeCameraCirlce>
                </PinholeSetup> */}

                {/*----------------- Square Set up 2----------------------------------- */}
                {/* <GameSquare />
                <Gametrees src={trees} alt="" />
                <GameStairsShadow src={fourWhiteStepsShadow} alt="" />
                <GameWhiteStairs src={fourWhiteSteps} alt="" />
                <GameSmallClouds src={smallCloud} alt="" />
                <PinholeSetup>
                  <PinholeCamera>Types of Beam</PinholeCamera>
                  <PinholeCameraCirlce>
                    <PinholeLock src={lock} alt="" />
                  </PinholeCameraCirlce>
                </PinholeSetup> */}
                {/*----------------- Square Set up 2 end----------------------------------- */}

                {/*----------------- Square Set up 3----------------------------------- */}
                {/* <GameSquare />
                <Gametrees src={trees} alt="" />
                <GameStairsShadow src={fourWhiteStepsShadow} alt="" />
                <GameWhiteStairs src={fourYellowSteps} alt="" />
                <GameSmallClouds src={smallCloud} alt="" /> */}
                {/*----------------- Square Set up 3 end----------------------------------- */}

                {/*----------------- Square Set up 4----------------------------------- */}
                {/* <GameSquare src={colorSquare} alt="" />
                <Gametrees src={bunchTrees} alt="" />
                <img src={Greenline} alt="" />
                <GameStairsShadow src={fourWhiteStepsShadow} alt="" />
                <GameWhiteStairs src={fourYellowSteps} alt="" />
                <PinholeSetup>
                  <PinholeCamera>
                    Transparent, Translucent & Opaque materials
                  </PinholeCamera>
                  <PinholeCameraCirlce>
                    <PinholeLock src={lock} alt="" />
                  </PinholeCameraCirlce>
                </PinholeSetup> */}
                {/*----------------- Square Set up 4 end----------------------------------- */}

                {/*
            <GameSquare src={colorSquare} alt="" className="square5" />
            <img src={manLight} alt="" className="manLight" />
            <button className="pinhole__setup5" onClick={onClick}>
              <div className="pinhole__camera5"></div>
              <div className="pinhole__cameraText5">Introduction to Light</div>
              <div className="pinhole__cameraCirlce5"></div>
              <img src={blackPlay} alt="" className="pinhole__cameraPlay5" />
              <img src={yellowLine} alt="" className="pinhole__yellowLine" />
            </button>
            */}
              </PartThree>
            </div>

            <div className="column" style={{ backgroundColor: "yellow" }}>
              {/* <PartOne>
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
              </PartOne> */}
            </div>
          </div>

          <div className="row" style={{ backgroundColor: "" }}>
            <GameBigClouds>
              <GameCloudsThree src={cloudThree} alt="" />
              <GameCloudsTwo src={cloudTwo} alt="" />
              <GameCloudsOne src={cloudOne} alt="" />
            </GameBigClouds>
          </div>
        </GameItems>
      </GameContent>
      <Footer />
    </GameContainer>
  );
}
