import styled from "styled-components";

export const ChapContainer = styled.div`
  max-height: 100vh;
`;
export const ChapContent = styled.div`
  background: #0c2651;
  max-height: 100%;
  height: calc(100vh - 1px);
  padding: 0rem calc((100vw - 1600px) / 2);
  @media screen and (max-width: 850px) {
    height: 100%;
    width: 100%;
  }
`;

export const ChapItems = styled.div`
  margin: 0 auto;
  max-height: 100%;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: 100%;
  }
`;

export const ChapPartOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  margin: 3rem;
  @media screen and (max-width: 650px) {
    margin-left: 1.5rem;
  }
`;

export const ChapPartTwo = styled.div`
  margin: 3rem;
  @media screen and (max-width: 650px) {
    margin-left: 2rem;
    margin-top: 10rem;
  }
`;

export const ChapP = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  @media screen and (max-width: 650px) {
    font-size: 15px;
    margin-top: 0.2rem;
  }
`;

export const ChapIcon = styled.img`
  cursor: pointer;
  padding: 0.5rem;
  @media screen and (max-width: 650px) {
    width: 30px;
    height: 30px;
  }
`;
export const ChapGrayGroup = styled.div`
  // cursor: pointer;
  margin: 1rem;
`;

export const ChapGrayArrow = styled.div`
  cursor: pointer;
  z-index: 3;
  width: 32px;
  height: 48px;
  margin-left: 2rem;
  background: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 0px 0px 15px;
  @media screen and (max-width: 650px) {
    width: 25px;
    height: 40px;
    margin-left: 1rem;
    margin-top: 1rem;
  }
`;

export const ChapGrayLine = styled.div`
  position: absolute;
  width: 500px;
  margin-left: 5.6rem;
  margin-top: 15rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transform: rotate(270deg);
  @media screen and (max-width: 650px) {
    margin-top: 8.5rem;
    margin-left: 5.3rem;
    width: 290px;
  }
`;

export const ModelOne = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  margin: 2rem;
  @media screen and (max-width: 650px) {
    margin-left: 2rem;
  }
`;

export const ChapHorizontalLine = styled.div`
  width: 180px;
  height: 1px;
  background: #c4c4c4;
  opacity: 0.28;
  border-radius: 20px;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

export const ChapZigzagLine = styled.img`
  width: 25px;
  height: 190px;
`;

export const ChapZigzagGroup = styled.div`
  margin-top: -8rem;
  margin-left: 0.7rem;
`;
export const ChapZigzagCircle = styled.img`
  width: 22px;
  height: 22px;
  margin-bottom: 1rem;
  @media screen and (max-width: 650px) {
    width: 20px;
    height: 20px;
  }
`;

export const ChapP2 = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #ffc000;
  @media screen and (max-width: 650px) {
    font-size: 18px;
    margin: 0.5rem;
  }
`;
export const ChapZigzagGroupTwo = styled.div`
  margin-top: -9rem;
  margin-left: 2.2rem;
`;
export const ChapP3 = styled.p`
  font-size: 18px;
  margin-top: 0.9rem;
  color: #fff;
  @media screen and (max-width: 650px) {
    font-size: 14px;
  }
`;

export const ChapRectangle = styled.div`
  width: 680px;
  height: 300px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media screen and (max-width: 650px) {
    width: 250px;
    height: 180px;
  }
`;

export const ChapCircle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 92px;
  height: 92px;
  border: 1px solid #72747b;
  box-sizing: border-box;
  border-radius: 100%;
  @media screen and (max-width: 650px) {
    width: 42px;
    height: 42px;
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
