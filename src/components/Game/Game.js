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
  PinholeSetup,
  PinholeCamera,
  PinholeCameraCirlce,
  PinholeLock,
  GameSquare,
  Gametrees,
  GameWhiteStairs,
  GameStairsShadow,
  GameSquare2,
  Gametrees2,
  GameStairsShadow2,
  GameWhiteStairs2,
  PinholeSetup2,
  GameSquare3,
  Gametrees3,
  GameStairsShadow3,
  GameWhiteStairs3,
  PinholeSetup3,
  GameSmallClouds2,
  GameSmallClouds3,
  PinholeSetup4,
  GameSquare4,
  Gametrees4,
  GameWhiteStairs4,
  GameStairsShadow4,
  GameGreenLine4,
  GameSquare5,
  PinholeCameraCirlce5,
  PinholeSetup5,
  PinholeCamera5,
  PinholeLine,
  PinholeText5,
  PinholePlay,
  GameLight,
  GameScoreCircle,
  GameScoreCircleOne,
  GameScoreRectangle,
  GameP,
  GameScoreCircleTwo,
  GameScoreCircleThree,
  GameSmallCloudIcon2,
  GameSunIcon,
  GameMiniCloudIcon,
  ScoreDiv,
  Setup,
} from "./GameElements";
import "react-vertical-timeline-component/style.min.css";

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
          <section class="timeline">
            <GameSunIcon src={sun} alt="" />
            <GameSmallCloudIcon2 src={smallCloud} alt="" />
            <GameMiniCloudIcon src={miniCloud} alt="" />
          </section>
          <section class="timeline">
            <Setup>
              <ul>
                <li>
                  <div>
                    <GameSquare src={square} />
                    <Gametrees src={trees} alt="" />
                    <GameWhiteStairs src={fourWhiteSteps} alt="" />
                    <GameStairsShadow src={fourWhiteStepsShadow} alt="" />
                  </div>
                </li>
                <li>
                  <div>
                    <PinholeSetup>
                      <PinholeCamera>Pinhole camera </PinholeCamera>
                      <PinholeCameraCirlce>
                        <PinholeLock src={lock} alt="" />
                      </PinholeCameraCirlce>
                    </PinholeSetup>
                  </div>
                </li>
              </ul>
              {/*  */}
              <ul>
                <li>
                  <div>
                    <PinholeSetup2>
                      <PinholeCamera>Eclipses </PinholeCamera>
                      <PinholeCameraCirlce>
                        <PinholeLock src={lock} alt="" />
                      </PinholeCameraCirlce>
                    </PinholeSetup2>
                  </div>
                </li>
                <li>
                  <div>
                    <GameSmallClouds2 src={smallCloud} alt="" />
                  </div>
                </li>
                <li>
                  <div>
                    <GameSquare2 src={square} />
                    <Gametrees2 src={trees} alt="" />
                    <GameWhiteStairs2 src={fourWhiteSteps} alt="" />
                    <GameStairsShadow2 src={fourWhiteStepsShadow} alt="" />
                  </div>
                </li>
              </ul>
              {/*  */}
              <ul>
                <li>
                  <div>
                    <GameSmallClouds3 src={smallCloud} alt="" />
                  </div>
                </li>

                <li>
                  <div>
                    <GameSquare3 src={square} />
                    <Gametrees3 src={trees} alt="" />
                    <GameWhiteStairs3 src={fourYellowSteps} alt="" />
                    <GameStairsShadow3 src={fourWhiteStepsShadow} alt="" />
                  </div>
                </li>
                <li>
                  <div>
                    <PinholeSetup3>
                      <PinholeCamera>Types of Beam</PinholeCamera>
                      <PinholeCameraCirlce>
                        <PinholeLock src={lock} alt="" />
                      </PinholeCameraCirlce>
                    </PinholeSetup3>
                  </div>
                </li>
              </ul>
              {/*  */}
              <ul>
                <li>
                  <div>
                    <PinholeSetup4>
                      <PinholeCamera>
                        Transparent, Translucent & Opaque materials
                      </PinholeCamera>
                      <PinholeCameraCirlce>
                        <PinholeLock src={lock} alt="" />
                      </PinholeCameraCirlce>
                    </PinholeSetup4>
                  </div>
                </li>
                <li>
                  <div>
                    <GameSquare4 src={colorSquare} />
                    <Gametrees4 src={bunchTrees} alt="" />
                    <GameWhiteStairs4 src={fourYellowSteps} alt="" />
                    <GameStairsShadow4 src={fourWhiteStepsShadow} alt="" />
                    <GameGreenLine4 src={Greenline} alt="" />
                  </div>
                </li>
              </ul>
              {/*  */}
              <ul>
                <li>
                  <div>
                    <GameSquare5 src={colorSquare} />
                    <GameLight src={manLight} alt="" />
                  </div>
                </li>
                <li>
                  <div>
                    <PinholeSetup5 onClick={onClick}>
                      <PinholeCamera5>
                        <PinholeText5>Introduction to Light </PinholeText5>
                        <PinholeLine src={yellowLine} />
                      </PinholeCamera5>
                      <PinholeCameraCirlce5>
                        <PinholePlay src={blackPlay} alt="" />
                      </PinholeCameraCirlce5>
                    </PinholeSetup5>
                  </div>
                </li>
              </ul>
            </Setup>
          </section>

          <section class="timeline">
            <ul>
              <li>
                <div>
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
                </div>
              </li>
            </ul>
          </section>
        </GameItems>
        <Footer />
      </GameContent>
    </GameContainer>
  );
}
