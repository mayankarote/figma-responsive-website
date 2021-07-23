import styled from "styled-components";

export const CDContainer = styled.div`
  max-height: 100vh;
`;
export const CDContent = styled.div`
  background: #0c2651;
  max-height: 100%;
  height: calc(100vh - 1px);
  @media screen and (max-width: 650px) {
    height: 100%;
  }
`;

export const CDItems = styled.div`
  margin: 0 auto;
  max-height: 100%;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const CDPartOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  margin: 3rem;
  @media screen and (max-width: 650px) {
    margin: 1.5rem;
  }
`;

export const CDPartTwo = styled.div`
  margin: 3rem;
  @media screen and (max-width: 650px) {
    margin-left: 2rem;
    margin-top: 8rem;
  }
`;

export const CDP = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
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
  margin-left: 3rem;
  background: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 0px 0px 15px;
  transform: rotate(180deg);

  @media screen and (max-width: 650px) {
    width: 25px;
    height: 40px;
    margin-left: 1.3rem;
    margin-top: 3rem;
  }
`;

export const CDGrayLine = styled.div`
  position: absolute;
  width: 480px;
  margin-left: 1.5rem;
  margin-top: 25rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transform: rotate(270deg);
  @media screen and (max-width: 650px) {
    margin-top: 8.5rem;
    margin-left: 5rem;
    width: 290px;
  }
`;

export const CDModelOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: pink;
`;

export const CDP2 = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: #ffc000;
  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;

export const CDRectangle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  width: 1050px;
  height: 400px;

  background: #0d2249;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  @media screen and (max-width: 650px) {
    width: 250px;
    height: 180px;
  }
`;

export const ChapPTextList = styled.div`
  font-size: 18px;
  color: #ffc000;
  padding: 1rem;
  line-height: 2rem;
  @media screen and (max-width: 650px) {
    font-size: 15px;
    line-height: 1.8rem;
  }
`;

export const ChapYellowP = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: #ffc000;
  @media screen and (max-width: 650px) {
    font-size: 25px;
    margin-bottom: 1rem;
  }
`;

export const ChapHightlightP = styled.label`
  font-size: 18px;
  color: #ffc000;
  margin: 0.3rem;
  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;

export const ChapWhiteP = styled.p`
  font-size: 20px;
  color: #ffffff;
  @media screen and (max-width: 650px) {
    font-size: 15px;
    line-height: 1rem;
  }
`;
export const ChapWhiteBoldP = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  text-align: left;
  @media screen and (max-width: 650px) {
    margin-top: 1rem;
    font-size: 15px;
  }
`;

export const ChapBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  margin-left: 8rem;
  @media screen and (max-width: 650px) {
    margin: 3rem;
  }
`;
export const ChapBtn = styled.button`
  width: 130px;
  height: 55px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;

  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #0c2657;

  @media screen and (max-width: 650px) {
    width: 95px;
    height: 40px;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 600;
  }
`;
