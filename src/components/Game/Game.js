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
  PartThree,
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
  PinholeCamera2,
  PinholeLock2,
  PinholeCameraCirlce2,
  GameSmallClouds,
  GameSquare3,
  Gametrees3,
  GameStairsShadow3,
  GameWhiteStairs3,
  PinholeSetup3,
  PinholeCamera3,
  PinholeCameraCirlce3,
  PinholeLock3,
} from "./GameElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";

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
          <>
            <Timeline align="alternate">
              <TimelineItem>
                <TimelineOppositeContent>
                  <PinholeSetup>
                    <PinholeCamera>Pinhole camera </PinholeCamera>
                    <PinholeCameraCirlce>
                      <PinholeLock src={lock} alt="" />
                    </PinholeCameraCirlce>
                  </PinholeSetup>
                </TimelineOppositeContent>

                <TimelineContent>
                  <GameSquare src={square} />
                  <Gametrees src={trees} alt="" />
                  <GameStairsShadow src={fourWhiteStepsShadow} alt="" />
                  <GameWhiteStairs src={fourWhiteSteps} alt="" />
                </TimelineContent>
              </TimelineItem>
              {/* square 2 */}

              {/* <TimelineItem>
                <TimelineOppositeContent>
                  <GameSquare2 src={square} />
                  <Gametrees2 src={trees} alt="" />
                  <GameStairsShadow2 src={fourWhiteStepsShadow} alt="" />
                  <GameWhiteStairs2 src={fourWhiteSteps} alt="" />
                </TimelineOppositeContent>

                <TimelineContent>
                  <PinholeSetup2>
                    <PinholeCamera2>Pinhole camera </PinholeCamera2>
                    <PinholeCameraCirlce2>
                      <PinholeLock2 src={lock} alt="" />
                    </PinholeCameraCirlce2>
                  </PinholeSetup2>
                  <GameSmallClouds src={smallCloud} alt="" />
                </TimelineContent>
              </TimelineItem> */}
              {/* square 3 */}

              {/* <TimelineItem>
                <TimelineOppositeContent>
                  <PinholeSetup3>
                    <PinholeCamera3>Pinhole camera </PinholeCamera3>
                    <PinholeCameraCirlce3>
                      <PinholeLock3 src={lock} alt="" />
                    </PinholeCameraCirlce3>
                  </PinholeSetup3>
                </TimelineOppositeContent>

                <TimelineContent> */}
              {/* <GameSquare3 src={square} />
                  <Gametrees3 src={trees} alt="" />
                  <GameStairsShadow3 src={fourWhiteStepsShadow} alt="" />
                  <GameWhiteStairs3 src={fourWhiteSteps} alt="" /> */}

              {/* <GameSmallClouds src={smallCloud} alt="" /> */}
              {/* </TimelineContent>
              </TimelineItem> */}
            </Timeline>
          </>
        </GameItems>
        <Footer />
      </GameContent>
    </GameContainer>
  );
}
