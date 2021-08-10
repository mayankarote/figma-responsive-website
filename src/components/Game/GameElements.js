import styled from "styled-components";

export const GameContainer = styled.div`
  height: 120vh;
`;
export const GameContent = styled.div`
  background: #68aeff;
  height: 140vh;
  padding: 0rem calc((100vw - 1700px) / 2);
`;

export const GameItems = styled.div`
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  // justify-content: center;
  background: #68aeff;
  margin: 0 auto;
  height: 100vh;
  max-height: 100%;
  padding: 1rem;
  @media screen and (max-width: 650px) {
    max-width: 100%;
  }
  @media screen and (min-width: 320px) {
    max-width: 100%;
  }
`;
// sun clouds
export const GameSMSetup = styled.div`
  margin-left: 1rem;
  width: 100px;
  @media screen and (max-width: 650px) {
    margin-left: 0.2rem;
  }
  @media screen and (max-width: 280px) {
    margin-left: -0.2rem;
  }
`;
export const GameSunIcon = styled.img`
  margin-left: 2rem;
  margin-top: 5rem;
  max-width: 200px;
  @media screen and (max-width: 650px) {
    width: 80px;
    margin-top: 2.5rem;
  }
  @media screen and (min-width: 320px) {
    margin-top: 1.5rem;
  }
`;
export const GameSmallCloudIcon2 = styled.img`
  margin-left: -4rem;
  margin-top: -9rem;
  max-width: 200px;
  @media screen and (max-width: 650px) {
    width: 75px;
    margin-left: -0rem;
    margin-top: -3.2rem;
  }
`;

export const GameMiniCloudIcon = styled.img`
  position: absolute;
  margin-left: 10rem;
  margin-top: -3rem;
  z-index: 1;
  width: 100px;

  @media screen and (max-width: 650px) {
    width: 50px;
    margin-left: 4.5rem;
    margin-top: -1.5rem;
  }
`;

// sun clouds complete
//-------------------------------------------square 1
export const Setup = styled.div`
  margin-left: 20rem;
  @media screen and (max-width: 650px) {
    margin-left: -0rem;
    margin-top: 3.5rem;
  }
  @media screen and (max-width: 360px) {
    margin-left: -2rem;
    margin-top: 1.5rem;
  }
  @media screen and (max-width: 280px) {
    margin-left: -2rem;
    margin-top: 4rem;
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
    margin-left: -6rem;
    margin-top: -8rem;
  }
  @media screen and (max-width: 360px) {
    margin-left: -5.2rem;
    margin-top: -7rem;
  }
  @media screen and (max-width: 280px) {
    margin-left: -4rem;
    margin-top: -7rem;
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
    max-width: 140px;
    height: 34px;
    line-height: 10px;
    font-size: 3px;
    padding: 0.3rem;
  }
  @media screen and (max-width: 280px) {
    max-width: 125px;
    height: 35px;
    line-height: 12px;
    font-size: 13px;
    padding: 0.2rem;
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
    max-width: 30px;
    height: 25px;
    background: #ffffff;
    border-radius: 50%;
    margin-left: -1.8rem;
  }
  @media screen and (max-width: 280px) {
    max-width: 25px;
    height: 20px;
    background: #ffffff;
    border-radius: 50%;
    margin-left: -1.5rem;
  }
`;

export const PinholeLock = styled.img`
  @media screen and (max-width: 650px) {
    width: 10px;
    height: 15px;
    // background: pink;
  }
`;

export const GameSquare = styled.img`
  width: 250px;
  margin-top: 1rem;
  margin-left: 12rem;
  @media screen and (max-width: 650px) {
    width: 120px;
    margin-top: 4rem;
    margin-left: 3rem;
  }
`;
export const Gametrees = styled.img`
  margin-left: 18rem;
  margin-top: -6.5rem;
  @media screen and (max-width: 650px) {
    width: 80px;
    margin-left: 6rem;
    margin-top: -3.7rem;
  }
`;

export const GameWhiteStairs = styled.img`
  position: absolute;
  margin-left: 8rem;
  margin-top: -1.6rem;
  z-index: 1;
  @media screen and (max-width: 650px) {
    width: 100px;
    margin-left: 0.5rem;
    margin-top: -0.8rem;
  }
`;
export const GameStairsShadow = styled.img`
  mix-blend-mode: multiply;
  margin-left: 8rem;
  margin-top: 1.2rem;
  @media screen and (max-width: 650px) {
    width: 100px;
    margin-left: 0.3rem;
    margin-top: 0.7rem;
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
  margin-left: 14rem;
  margin-top: -2rem;
  @media screen and (max-width: 650px) {
    margin-left: 1.5rem;
    margin-top: -1.5rem;
  }
  @media screen and (max-width: 360px) {
    margin-left: 2.5rem;
    margin-top: -1.8rem;
  }
  @media screen and (max-width: 280px) {
    margin-left: 2.8rem;
    margin-top: -1.8rem;
  }
`;

export const GameSmallClouds2 = styled.img`
  margin-left: 25rem;
  margin-top: -4.8rem;
  @media screen and (max-width: 650px) {
    width: 70px;
    margin-left: 6rem;
    margin-top: -0.6rem;
  }
  @media screen and (max-width: 280px) {
    width: 70px;
    margin-left: 5.5rem;
    margin-top: -0.6rem;
  }
`;

export const GameSquare2 = styled.img`
  width: 250px;
  margin-top: -6.9rem;
  @media screen and (max-width: 650px) {
    width: 120px;
    margin-top: -5.9rem;
    margin-left: -3.2rem;
  }
`;
export const Gametrees2 = styled.img`
  margin-left: 2rem;
  margin-top: -10rem;
  @media screen and (max-width: 650px) {
    width: 80px;
    margin-left: -3rem;
    margin-top: -5rem;
  }
`;

export const GameWhiteStairs2 = styled.img`
  position: absolute;
  margin-left: 9rem;
  margin-top: 2rem;
  z-index: 1;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  @media screen and (max-width: 650px) {
    width: 100px;
    margin-left: 0.5rem;
    margin-top: 0.7rem;
  }
`;
export const GameStairsShadow2 = styled.img`
  mix-blend-mode: multiply;
  margin-left: 9rem;
  margin-top: 4.8rem;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  @media screen and (max-width: 650px) {
    width: 100px;
    margin-left: 0.4rem;
    margin-top: 2.4rem;
  }
`;

// --------------------------------square 3
export const GameSmallClouds3 = styled.img`
  margin-left: -10rem;
  margin-top: -1.5rem;
  @media screen and (max-width: 650px) {
    width: 70px;
    margin-left: -3.8rem;
    margin-top: 1.2rem;
  }
  @media screen and (max-width: 280px) {
    width: 70px;
    margin-left: -3.4rem;
    margin-top: 1.2rem;
  }
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
    margin-left: -6.5rem;
    margin-top: -7rem;
  }
  @media screen and (max-width: 360px) {
    margin-left: -5.2rem;
    margin-top: -7rem;
  }
  @media screen and (max-width: 280px) {
    margin-left: -3.7rem;
    margin-top: -6.9rem;
  }
`;

export const GameSquare3 = styled.img`
  width: 250px;
  margin-left: 13rem;
  margin-top: -8rem;
  @media screen and (max-width: 650px) {
    width: 120px;
    margin-top: -5.7rem;
    margin-left: 3rem;
  }
`;
export const Gametrees3 = styled.img`
  margin-left: 20rem;
  margin-top: -7rem;
   @media screen and (max-width: 650px) {
    width: 80px;
    margin-left: 5.5rem;
    margin-top: -3.6rem;
  
`;

export const GameWhiteStairs3 = styled.img`
  position: absolute;
  margin-left: 9rem;
  margin-top: -1rem;
  z-index: 1;
  @media screen and (max-width: 650px) {
    position: absolute;
    margin-left: 0.5rem;
    margin-top: -0.8rem;
    width: 100px;
    z-index: 1;
  }
`;
export const GameStairsShadow3 = styled.img`
  mix-blend-mode: multiply;
  margin-left: 9rem;
  margin-top: 1.8rem;
  @media screen and (max-width: 650px) {
    width: 100px;
    mix-blend-mode: multiply;
    margin-left: 0.5rem;
    margin-top: 1rem;
  }
`;

// ------------------------------------------square 4

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
    margin-left: 2.2rem;
    margin-top: -1.8rem;
    padding: -2.5rem;
  }
  @media screen and (max-width: 320px) {
    margin-left: 2.5rem;
    margin-top: -1.8rem;
    padding: -1rem;
    font-size: 1px;
  }
  @media screen and (max-width: 280px) {
    margin-left: 2.9rem;
    margin-top: -1.7rem;
    padding: -1rem;
    font-size: 1px;
  }
`;

export const GameSquare4 = styled.img`
  width: 250px;
  margin-left: 0.8rem;
  margin-top: -6rem;
  @media screen and (max-width: 650px) {
    width: 120px;
    margin-top: -3.7rem;
    margin-left: -3rem;
  }
`;
export const Gametrees4 = styled.img`
  margin-left: 3rem;
  margin-top: -8.5rem;
   @media screen and (max-width: 650px) {
    width: 70px;
    margin-left: -1.2rem;
    margin-top: -4rem;
  
`;
export const GameGreenLine4 = styled.img`
  z-index: 1;
  margin-left: 1.5rem;
  margin-top: -10.3rem;
  @media screen and (max-width: 650px) {
    width: 60px;
    margin-left: -2.3rem;
    margin-top: -6.2rem;
  }
`;

export const GameWhiteStairs4 = styled.img`
  position: absolute;
  margin-left: 9rem;
  margin-top: -0.5rem;
  z-index: 1;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  @media screen and (max-width: 650px) {
    position: absolute;
    margin-left: 0.5rem;
    margin-top: 0.2rem;
    width: 100px;
    z-index: 1;
`;
export const GameStairsShadow4 = styled.img`
  mix-blend-mode: multiply;
  margin-left: 9rem;
  margin-top: 2.2rem;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  @media screen and (max-width: 650px) {
    width: 100px;
    margin-left: 1.2rem;
    margin-top: 2rem;
  }
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
    margin-left: -3rem;
    margin-top: 4.5rem;
    padding: -2.5rem;
  }
  @media screen and (max-width: 320px) {
    margin-left: -3rem;
    margin-top: 4rem;
    padding: -2.5rem;
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
  @media screen and (max-width: 650px) {
    max-width: 150px;
    height: 40px;
  }
  @media screen and (max-width: 320px) {
    max-width: 150px;
    height: 30px;
  }
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
  @media screen and (max-width: 650px) {
    font-size: 5px;
    line-height: 11px;
    padding-right: 2.2rem;
  }
`;
export const PinholeLine = styled.img`
  margin-left: -7rem;
  margin-top: 1.5rem;
  @media screen and (max-width: 650px) {
    margin-left: -6rem;
    margin-top: 1.2rem;
    padding-right: 0.5rem;
  }
  @media screen and (max-width: 320px) {
    margin-left: -6rem;
    margin-top: 1.2rem;
    padding-right: 0.5rem;
  }
  @media screen and (max-width: 280px) {
    margin-left: -5rem;
    margin-top: 1.2rem;
    padding-right: 0.5rem;
  }
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
  @media screen and (max-width: 650px) {
    max-width: 28px;
    height: 25px;
    background: #ffffff;
    border-radius: 50%;
    margin-left: -1.7rem;
  }
`;

export const PinholePlay = styled.img`
  @media screen and (max-width: 650px) {
    max-width: 15px;
    height: 15px;
  }
`;

export const GameSquare5 = styled.img`
  position: absolute;
  width: 250px;
  margin-left: 12rem;
  margin-top: 1.2rem;
  z-index: 1;
  @media screen and (max-width: 650px) {
    width: 120px;
    margin-top: 0.8rem;
    margin-left: 2.3rem;
  }
`;
export const GameLight = styled.img`
  position: absolute;
  margin-left: 16rem;
  margin-top: -3.5rem;
  z-index: 1;
  @media screen and (max-width: 650px) {
    width: 45px;
    margin-top: -1.5rem;
    margin-left: 4rem;
  }
`;

// score start
export const ScoreDiv = styled.div`
  // margin-left: -5rem;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 650px) {
    margin-left: -0.2rem;
    margin-top: -0.5rem;
    width: 300px;
  }
  @media screen and (max-width: 320px) {
    margin-left: -0.3rem;
    margin-top: -2rem;
    width: 300px;
  }
  @media screen and (max-width: 280px) {
    margin-left: 0rem;
    margin-top: -2rem;
    width: 300px;
  }
`;

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
    font-size: 13px;
  }
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
  @media screen and (max-width: 650px) {
    max-width: 250px;
    height: 130px;
    padding: 0.1rem;
  }
`;

export const GameScoreCircle = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 650px) {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const GameScoreCircleOne = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 59px;
  height: 59px;
  background: #a79c9a;
  border-radius: 100px;
  @media screen and (max-width: 650px) {
    width: 20px;
    height: 30px;
    font-size: 14px;
  }
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
  @media screen and (max-width: 650px) {
    width: 20px;
    height: 30px;
    margin-left: 0.1rem;
    font-size: 14px;
    margin-top: 0.3rem;
  }
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
  @media screen and (max-width: 650px) {
    width: 20px;
    height: 30px;
    margin-left: 0.1rem;
    font-size: 14px;
    margin-top: 0.3rem;
  }
`;

// Score complete

// big clouds
export const GameBigClouds = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  flex-direction: column;
  flex-wrap: no-wrap;
  margin-top: -rem;
  width: 100%;
  @media screen and (max-width: 650px) {
    width: 100%;
    // margin-top: 4rem;
  }
`;
export const GameCloudsThree = styled.img`
  position: absolute;
  margin-left: -7.5rem;
  max-width: 1900px;
  margin-top: 10.4rem;
  @media screen and (max-width: 650px) {
    max-width: 370px;
    margin-left: -5rem;
    margin-top: 8.4rem;
    background: pink;
  }
`;

export const GameCloudsTwo = styled.img`
  margin-top: -22.4rem;
  margin-left: -32.6rem;
  max-width: 1900px;
  @media screen and (max-width: 650px) {
    max-width: 370px;
    margin-left: -5rem;
    margin-top: -4.3rem;
  }
`;
export const GameCloudsOne = styled.img`
  margin-top: -16.7rem;
  margin-left: -32.6rem;
  max-width: 1900px;
  @media screen and (max-width: 650px) {
    max-width: 370px;
    margin-left: -5rem;
    margin-top: -3.3rem;
  }
`;
