import styled from "styled-components";

export const GameContainer = styled.div`
  max-height: 100vh;
`;
export const GameContent = styled.div`
  background: #68aeff;
  max-height: 100%;
  height: calc(100vh - 0px);
  padding: 0rem calc((100vw - 1900px) / 2);
  @media screen and (max-width: 650px) {
    height: 100%;
    max-width: 100%;
  }
`;

export const GameItems = styled.div`
  // display: flex;
  // flex-wrap: nowrap;
  // align-content: center;
  // align-items: flex-end;
  // justify-content: flex-end;
  // flex-direction: column;

  margin: 0 auto;
  max-height: 100%;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
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
// Score complete

export const ScoreDiv2 = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
`;

export const GameSunIcon = styled.img`
  margin-left: -6rem;
  margin-top: -2rem;
  @media screen and (max-width: 650px) {
  }
`;
export const GameSmallCloudIcon2 = styled.img`
  margin-left: 1rem;
  z-index: 1;
  @media screen and (max-width: 650px) {
  }
`;
export const GameMiniCloudIcon = styled.img`
  margin-left: -2rem;
  margin-top: 2rem;
  z-index: 1;

  @media screen and (max-width: 650px) {
  }
`;

// sun clouds complete

export const GameGrayArrow = styled.div`
  cursor: pointer;
  z-index: 3;
  width: 32px;
  height: 48px;
  margin-left: -8.5rem;
  background: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 0px 0px 15px;
  transform: rotate(180deg);

  @media screen and (max-width: 650px) {
    width: 25px;
    height: 40px;
    margin-left: -7rem;
    margin-top: -0.5rem;
  }
  @media screen and (max-width: 768px) {
    margin-left: -8.8rem;
    margin-top: -0.5rem;
  }
`;

export const CDGrayLine = styled.div`
  position: absolute;
  width: 600px;
  margin-left: -10rem;
  margin-top: 28rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transform: rotate(270deg);
  @media screen and (max-width: 650px) {
    margin-top: 11rem;
    margin-left: -8rem;
    width: 230px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 15rem;
    margin-left: -10rem;
    width: 300px;
  }
`;

export const GameModelOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const GameP2 = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: #ffc000;
  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;
export const GamePartTwo = styled.div`
  margin-top: 10rem;
  margin-left: 5rem;

  @media screen and (max-width: 650px) {
    margin-left: 3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  @media screen and (width: 768px) {
    margin-left: rem;
    margin-top: 5rem;
    margin-bottom: 1rem;
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

export const GameGroupOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
`;

export const GameYellowCircle = styled.div`
  width: 22px;
  height: 22px;
  margin: 0.5rem;
  background-color: #ffc000;
  border: 1px solid white;
  border-radius: 100%;
`;

export const GameCircle = styled.div`
  width: 22px;
  height: 22px;
  margin: 0.5rem;
  border: 1px solid white;
  border-radius: 100%;
`;

export const GameYellowP = styled.p`
  font-weight: bold;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

export const GameGroupTwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 3rem;
  @media screen and (max-width: 650px) {
    margin-top: 2rem;
  }
`;
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

export const GameColorfulRing = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 5rem;

  width: 50px;
  height: 50px;

  border: 4px solid;
  border-right-color: #ffc000;
  border-bottom-color: #ffc000;
  border-top-color: #fff;
  border-left-color: #fff;
  border-radius: 100%;
  transform: rotate(49.75deg);

  @media screen and (max-width: 650px) {
    margin-top: 2rem;
  }
`;

export const GameTextList = styled.div`
  color: white;
  font-size: 15px;
  font-weight: bold;
  transform: rotate(310.75deg);
`;
export const GameBtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 2rem;
  @media screen and (max-width: 650px) {
    margin-top: 1rem;
  }
`;

export const GameBtn = styled.button`
  width: 130px;
  height: 55px;
  background: #93c951;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  margin: 1rem;
  @media screen and (max-width: 650px) {
    width: 180px;
    height: 35px;
    font-size: 15px;
  }
`;
export const GameBtn2 = styled.button`
  width: 130px;
  height: 50px;
  background: #ff6f1e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  margin: 1rem;

  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #fff;

  @media screen and (max-width: 650px) {
    width: 180px;
    height: 35px;
    font-size: 15px;
  }
`;

export const GameBtn3 = styled.button`
  width: 135px;
  height: 50px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  font-size: 15px;
  font-weight: 600;
  text-align: center;
  color: #111;
  margin: 2rem;
  @media screen and (max-width: 650px) {
    width: 120px;
    height: 40px;
    padding: 0.1rem;
    font-size: 15px;
  }
`;
