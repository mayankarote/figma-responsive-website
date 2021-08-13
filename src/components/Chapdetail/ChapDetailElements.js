import styled from "styled-components";

export const CDContainer = styled.div`
  max-height: 100vh;
  background: #0c2651;
`;
export const CDContent = styled.div`
  background: #0c2651;
  max-height: 100%;
  height: 100%;
  @media screen and (max-width: 650px) {
    max-height: 100%;
  }

  @media screen and (width: 1024px) {
    height: 100%;
    height: 100vh;
  }
`;

export const CDItems = styled.div`
  background: #0c2651;
  max-height: 100%;
  // height: 100vh;
  @media screen and (max-width: 650px) {
    width: 100%;
    height: 100%;
  }
`;
export const Items = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

export const CDPartOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  margin: 3rem;
  margin-top: 4rem;
  margin-left: 3rem;
  @media screen and (max-width: 650px) {
    margin: 2rem;
  }
  @media screen and (max-width: 768px) {
    margin-top: 3rem;
  }
  @media screen and (width: 1024px) {
    margin-top: 4rem;
  }
`;

export const CDP = styled.p`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #ffffff;
  font-family: Proxima Nova;
  font-style: normal;

  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;

export const CDIcon = styled.img`
  cursor: pointer;
  padding: 0.5rem;
  @media screen and (max-width: 650px) {
    width: 30px;
    height: 30px;
  }
`;

export const CDGrayArrow = styled.div`
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

export const CDModelOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const CDP2 = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: #ffc000;
  font-family: Proxima Nova;
  font-style: normal;
  line-height: 20px;
  text-align: center;
  width: 894px;
  height: 55px;
  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;
export const CDPartTwo = styled.div`
  margin-top: 8rem;
  margin-left: 3rem;

  @media screen and (max-width: 650px) {
    margin-left: 5rem;
    margin-top: -2rem;
    margin-bottom: 1rem;
  }
  @media screen and (width: 280px) {
    margin-left: 3.5rem;
  }
  @media screen and (width: 768px) {
    margin-left: 7rem;
    margin-top: -3rem;
    margin-bottom: 1rem;
  }
  @media screen and (width: 1024px) {
    margin-left: 7rem;
    margin-top: -3rem;
    margin-bottom: 1rem;
  }
`;

export const CDRectangle = styled.div`
  background: #0d2249;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 1rem;
  width: 950px;
  height: 530px;

  @media screen and (max-width: 650px) {
    width: 220px;
    height: 350px;
  }

  @media screen and (width: 768px) {
    width: 600px;
    height: 400px;
  }

  @media screen and (width: 1024px) {
    width: 800px;
    height: 400px;
  }
`;

export const CDGroupOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
`;

export const CDYellowCircle = styled.div`
  width: 22px;
  height: 22px;
  margin: 0.5rem;
  background-color: #ffc000;
  border: 1px solid white;
  border-radius: 100%;
`;

export const CDCircle = styled.div`
  width: 22px;
  height: 22px;
  margin: 0.5rem;
  border: 1px solid white;
  border-radius: 100%;
`;

export const CDYellowP = styled.p`
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  font-family: Proxima Nova;
  font-style: normal;
`;

export const CDGroupTwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 1rem;
  @media screen and (max-width: 650px) {
    margin-top: 1rem;
  }
`;
export const CDP1 = styled.p`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  margin: 0.3rem;
  font-family: Proxima Nova;
  font-style: normal;

  @media screen and (max-width: 650px) {
    font-size: 13px;
  }
`;

export const CDColorfulRing = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 2rem;

  width: 81px;
  height: 81px;
  // background: linear-gradient(253.58deg, #ffc000 1.55%, #ff8a00 95.8%);
  // border: 5px solid;

  // border-image-source: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 25.52%, #FF8A00 100%);

  border: 4px solid;
  border-right-color: #ffc000;
  border-bottom-color: #ffc000;
  border-top-color: #fff;
  border-left-color: #fff;
  border-radius: 100%;
  transform: rotate(49.75deg);

  @media screen and (max-width: 650px) {
    margin-top: 1rem;
  }
`;

export const ChapPTextList = styled.div`
  color: white;
  font-size: 18px;
  font-weight: bold;
  font-family: Proxima Nova;
  font-style: normal;

  transform: rotate(310.75deg);
`;
export const CDBtnDiv = styled.div`
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

export const ChapBtn = styled.button`
  width: 130px;
  height: 46px;
  background: #93c951;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  margin: 1rem;
  font-family: Proxima Nova;
  font-style: normal;

  @media screen and (max-width: 650px) {
    width: 180px;
    height: 35px;
    font-size: 14px;
  }
`;
export const ChapBtn2 = styled.button`
  width: 130px;
  height: 46px;
  background: #ff6f1e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  margin: 1rem;

  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  font-family: Proxima Nova;
  font-style: normal;

  @media screen and (max-width: 650px) {
    width: 180px;
    height: 35px;
    font-size: 14px;
  }
`;

export const ChapBtn3 = styled.button`
  width: 142px;
  height: 51px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  font-size: 18px;
  line-height: 27px;
  font-weight: 600;
  text-align: center;
  color: #0c2657;
  margin: 2rem;
  margin-left: 5rem;
  font-family: Proxima Nova;
  font-style: normal;

  @media screen and (max-width: 650px) {
    width: 120px;
    height: 40px;
    padding: 0.1rem;
    font-size: 12px;
    margin-top: 1rem;
  }
  @media screen and (width: 1024px) {
    margin-left: 9rem;
  }
`;
