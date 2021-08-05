import styled from "styled-components";

export const GameContainer = styled.div`
  height: 100vh;
`;
export const GameContent = styled.div`
  background: #68aeff;
  max-height: 100%;
  height: 100%;
  @media screen and (max-width: 650px) {
    height: 100%;
    width: 100%;
  }
`;

export const GameItems = styled.div`
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  background: #68aeff;
  margin: 0 auto;
  max-height: 100%;
  @media screen and (max-width: 650px) {
    max-width: 100%;
  }
`;
// sun clouds

export const GameSunIcon = styled.img`
  margin-left: -5rem;
  @media screen and (max-width: 650px) {
  }
`;
export const GameSmallCloudIcon2 = styled.img`
  // margin-left: 0rem;
  z-index: 1;
  @media screen and (max-width: 650px) {
  }
`;

export const GameMiniCloudIcon = styled.img`
  margin-left: -2.5rem;
  z-index: 1;
  @media screen and (max-width: 650px) {
  }
`;

// sun clouds complete

export const PinholeSetup = styled.div`
  width: 200px;
  height: 52px;
  opacity: 0.3;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 3rem;
  margin-left: 30rem;
  @media screen and (max-width: 650px) {
  }
`;

export const PinholeCamera = styled.div`
  width: 240px;
  height: 52px;
  background: #001b4e;
  border-radius: 50px;
  opacity: 15px;

  font-size: 15px;
  line-height: 15px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  padding: 1rem;
  color: #ffffff;
`;

export const PinholeCameraCirlce = styled.div`
  width: 45px;
  height: 41px;
  background: #ffffff;
  border-radius: 50%;
  margin-left: -2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const PinholeLock = styled.img``;

export const GameP1 = styled.p`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  margin: 0.3rem;
  @media screen and (max-width: 650px) {
    font-size: 13px;
  }
`;

export const GameSquare = styled.img`
  width: 250px;
  margin-top: 1rem;
  margin-left: -8rem;
`;
export const Gametrees = styled.img`
  margin-left: -2rem;
  margin-top: -6rem;
`;

export const GameWhiteStairs = styled.img`
  position: absolute;
  margin-left: -12rem;
  margin-top: -6.6rem;
  z-index: 1;
`;
export const GameStairsShadow = styled.img`
  mix-blend-mode: multiply;
  margin-left: -11rem;
  margin-top: -0.5rem;
`;
// square 2
export const GameSquare2 = styled.img`
  width: 250px;
  margin-left: -22rem;
  margin-top: -2.5rem;
`;
export const Gametrees2 = styled.img`
  margin-left: -20rem;
  margin-top: -9rem;
`;

export const GameWhiteStairs2 = styled.img`
  position: absolute;
  margin-left: -13.5rem;
  margin-top: -6.5rem;
  z-index: 1;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;
export const GameStairsShadow2 = styled.img`
  mix-blend-mode: multiply;
  margin-left: -15rem;
  margin-top: 3rem;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export const PinholeSetup2 = styled.div`
  width: 200px;
  height: 52px;
  opacity: 0.3;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 1rem;
  margin-right: -5rem;
  margin-left: 45rem;
  @media screen and (max-width: 650px) {
  }
`;

export const PinholeCamera2 = styled.div`
  width: 240px;
  height: 52px;
  background: #001b4e;
  border-radius: 50px;
  opacity: 15px;

  font-size: 15px;
  line-height: 15px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  padding: 1rem;
  color: #ffffff;
`;

export const PinholeCameraCirlce2 = styled.div`
  width: 45px;
  height: 41px;
  background: #ffffff;
  border-radius: 50%;
  margin-left: -2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const PinholeLock2 = styled.img``;

export const GameSmallClouds = styled.img`
  margin-left: 50rem;
`;
// square 3

export const GameSquare3 = styled.img`
  width: 250px;
  margin-left: 42rem;
  margin-top: -2rem;
`;
export const Gametrees3 = styled.img`
  margin-left: 20rem;
  margin-top: -9rem;
`;

export const GameWhiteStairs3 = styled.img`
  position: absolute;
  margin-left: -13.5rem;
  margin-top: -6.5rem;
  z-index: 1;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;
export const GameStairsShadow3 = styled.img`
  mix-blend-mode: multiply;
  margin-left: -15rem;
  margin-top: 3rem;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export const PinholeSetup3 = styled.div`
  width: 200px;
  height: 52px;
  opacity: 0.3;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 1rem;
  margin-right: -5rem;
  margin-left: 30rem;
  @media screen and (max-width: 650px) {
  }
`;

export const PinholeCamera3 = styled.div`
  width: 240px;
  height: 52px;
  background: #001b4e;
  border-radius: 50px;
  opacity: 15px;

  font-size: 15px;
  line-height: 15px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  padding: 1rem;
  color: #ffffff;
`;

export const PinholeCameraCirlce3 = styled.div`
  width: 45px;
  height: 41px;
  background: #ffffff;
  border-radius: 50%;
  margin-left: -2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const PinholeLock3 = styled.img``;

export const GameSmallClouds3 = styled.img`
  margin-left: 50rem;
`;
// score start
export const GameP = styled.p`
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-top: 1rem;
  color: #000000;
  @media screen and (max-width: 650px) {
  }
`;

export const GameRectangle = styled.div`
  background: #0d2249;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 1rem;
  width: 850px;
  height: 530px;

  @media screen and (max-width: 650px) {
    width: 250px;
    height: 390px;
  }
  @media screen and (width: 768px) {
    width: 650px;
    height: 350px;
  }
`;

export const GameScoreCircle = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export const GameScoreCircleOne = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 59px;
  height: 59px;
  margin-left: 0.5rem;
  background: #a79c9a;
  border-radius: 100px;
`;
export const GameScoreCircleTwo = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;

  width: 59px;
  height: 59px;
  margin-left: 0.5rem;
  background: #ff8a00;
  border-radius: 100px;
`;

export const GameScoreCircleThree = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;

  width: 59px;
  height: 59px;
  margin-left: 0.5rem;
  background: #93c951;
  border-radius: 100px;
`;

export const PartOne = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;

  margin: 0 auto;
  max-height: 100%;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const ScoreDiv = styled.div`
  margin-right: 5rem;
`;

export const GameScoreRectangle = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 219px;
  height: 73px;
  background: #ffffff;
  border-radius: 100px;
`;

// Score complete

// big clouds
export const GameBigClouds = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  // flex-direction: column;
  flex-wrap: wrap;
  margin-top: -1.4rem;
  @media screen and (max-width: 650px) {
  }
`;
export const GameCloudsOne = styled.img`
  margin-top: -15rem;
  @media screen and (max-width: 650px) {
  }
`;
export const GameCloudsTwo = styled.img`
  margin-top: -20rem;
  @media screen and (max-width: 650px) {
  }
`;
export const GameCloudsThree = styled.img`
  margin-top: 3.5rem;
  @media screen and (max-width: 650px) {
  }
`;
