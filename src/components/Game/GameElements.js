import styled from "styled-components";

export const GameContainer = styled.div`
  height: 100vh;
`;
export const GameContent = styled.div`
  background: #68aeff;
  // max-height: 100%;
  height: 110%;
`;

export const GameItems = styled.div`
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: center;
  background: #68aeff;
  margin: 0 auto;
  height: 100%;
  max-height: 100%;
  @media screen and (max-width: 650px) {
    max-width: 100%;
    display: flex;
    align-content: flex-start;
    align-items: flex-start;
    justify-content: center;
  }
`;
// sun clouds

export const GameSunIcon = styled.img`
  margin-left: rem;
  margin-top: 5rem;
  @media screen and (max-width: 650px) {
  }
`;
export const GameSmallCloudIcon2 = styled.img`
  margin-left: -5rem;
  margin-top: -9rem;
  @media screen and (max-width: 650px) {
  }
`;

export const GameMiniCloudIcon = styled.img`
  position: absolute;
  margin-left: 10rem;
  margin-top: -5rem;
  z-index: 1;
  @media screen and (max-width: 650px) {
  }
`;

// sun clouds complete
//-------------------------------------------square 1
export const Setup = styled.div`
  margin-left: 10rem;
  @media screen and (max-width: 650px) {
    margin-left: 1rem;
  }
`;
export const PinholeSetup = styled.div`
  width: 200px;
  height: 52px;
  opacity: 0.3;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-left: 1rem;
  margin-top: -11rem;
  @media screen and (max-width: 650px) {
    width: 150px;
    height: 52px;
    margin-left: -5rem;
    margin-top: -8rem;
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
  @media screen and (max-width: 650px) {
    width: 150px;
    height: 42px;
  }
`;

export const PinholeCameraCirlce = styled.div`
  width: 45px;
  height: 41px;
  background: #ffffff;
  border-radius: 50%;
  margin-left: -2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media screen and (max-width: 650px) {
    width: 45px;
    height: 41px;
    margin-left: 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
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
  margin-left: 12rem;
  @media screen and (max-width: 650px) {
    width: 150px;
    margin-top: 1rem;
    margin-left: 5rem;
  }
`;
export const Gametrees = styled.img`
  margin-left: 18rem;
  margin-top: -6.5rem;
  @media screen and (max-width: 650px) {
    width: 100px;
    margin-left: 9rem;
    margin-top: -5rem;
  }
`;

export const GameWhiteStairs = styled.img`
  position: absolute;
  margin-left: 8rem;
  margin-top: -1.6rem;
  z-index: 1;
  @media screen and (max-width: 650px) {
    width: 100px;
    margin-left: 3rem;
    margin-top: -0.5rem;
  }
`;
export const GameStairsShadow = styled.img`
  mix-blend-mode: multiply;
  margin-left: 8rem;
  margin-top: 1.2rem;
  @media screen and (max-width: 650px) {
    width: 100px;
    margin-left: 3rem;
    margin-top: 1.2rem;
  }
`;
// -------------------------------------------------------square 2
export const PinholeSetup2 = styled.div`
  width: 200px;
  height: 52px;
  opacity: 0.3;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-left: 13rem;
  margin-top: -2rem;
`;

export const GameSmallClouds2 = styled.img`
  margin-left: 26rem;
  margin-top: -4.8rem;
`;

export const GameSquare2 = styled.img`
  width: 250px;
  margin-top: -6.5rem;
`;
export const Gametrees2 = styled.img`
  margin-left: 2rem;
  margin-top: -10rem;
`;

export const GameWhiteStairs2 = styled.img`
  position: absolute;
  margin-left: 9rem;
  margin-top: 2rem;
  z-index: 1;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;
export const GameStairsShadow2 = styled.img`
  mix-blend-mode: multiply;
  margin-left: 9rem;
  margin-top: 4.8rem;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

// --------------------------------square 3
export const GameSmallClouds3 = styled.img`
  margin-left: -10rem;
  margin-top: -1.5rem;
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
  margin-left: 1rem;
  margin-top: -11rem;
  @media screen and (max-width: 650px) {
  }
`;

export const GameSquare3 = styled.img`
  width: 250px;
  margin-left: 13rem;
  margin-top: -8rem;
`;
export const Gametrees3 = styled.img`
  margin-left: 20rem;
  margin-top: -7rem;
`;

export const GameWhiteStairs3 = styled.img`
  position: absolute;
  margin-left: 9rem;
  margin-top: -1rem;
  z-index: 1;
`;
export const GameStairsShadow3 = styled.img`
  mix-blend-mode: multiply;
  margin-left: 9rem;
  margin-top: 1.8rem;
`;

// ------------------------------------------square 4
export const GameSmallClouds4 = styled.img`
  margin-left: -10rem;
  margin-top: -1.5rem;
`;
export const PinholeSetup4 = styled.div`
  width: 235px;
  height: 52px;
  opacity: 0.3;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-left: 15rem;
  margin-top: -1rem;
  padding: -2.5rem;
  @media screen and (max-width: 650px) {
  }
`;

export const GameSquare4 = styled.img`
  width: 250px;
  margin-left: 0.8rem;
  margin-top: -6rem;
`;
export const Gametrees4 = styled.img`
  margin-left: 3rem;
  margin-top: -8.5rem;
`;

export const GameWhiteStairs4 = styled.img`
  position: absolute;
  margin-left: 9rem;
  margin-top: -0.5rem;
  z-index: 1;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;
export const GameStairsShadow4 = styled.img`
  mix-blend-mode: multiply;
  margin-left: 9rem;
  margin-top: 2.2rem;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;
export const GameGreenLine4 = styled.img`
  z-index: 1;
  margin-left: 1.5rem;
  margin-top: -10.3rem;
`;

// square 5
export const PinholeSetup5 = styled.div`
  width: 235px;
  height: 52px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-left: 26rem;
  margin-top: 3rem;
  @media screen and (max-width: 650px) {
  }
`;
export const PinholeCamera5 = styled.div`
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
export const PinholeText5 = styled.div`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: -0.5rem;
  color: #ffffff;
  cursor: pointer;
`;
export const PinholeLine = styled.img`
  margin-left: -7rem;
  margin-top: 1.5rem;
`;

export const PinholeCameraCirlce5 = styled.div`
  width: 45px;
  height: 41px;
  background: #ffffff;
  border-radius: 50%;
  margin-left: -2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  cursor: pointer;
`;

export const PinholePlay = styled.img``;

export const GameSquare5 = styled.img`
  position: absolute;
  width: 250px;
  margin-left: 12rem;
  margin-top: 1.2rem;
  z-index: 1;
`;
export const GameLight = styled.img`
  position: absolute;
  margin-left: 16rem;
  margin-top: -3.5rem;
  z-index: 1;
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
export const ScoreDiv = styled.div`
  margin-left: 15rem;
`;
export const GameRectangle = styled.div`
  display: flex;
  align-content: flex-end;
  align-items: flex-end;
  justify-content: flex-end;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  padding: 1rem;
  width: 150px;
  height: 50px;
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
