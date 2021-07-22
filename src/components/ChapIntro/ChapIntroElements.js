import styled from "styled-components";

export const ChapContainer = styled.div`
  max-height: 100vh;
`;
export const ChapContent = styled.div`
  background: #0c2651;
  height: 100vh;
  max-height: 100%;
  padding: 0rem calc((100vw - 1700px) / 2);
  @media screen and (max-width: 650px) {
    width: 100%;
    height: 100%;
  }
`;

export const ChapItems = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 650px) {
    width: 100%;
    height: 100%;
    background: #0c2651;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: Center;
    align-items: flex-start;
    align-content: flex-start;
  }
`;
export const ChapPartOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  @media screen and (max-width: 650px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const ChapP = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  text-align: left;
  @media screen and (max-width: 650px) {
    font-size: 15px;
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

export const ChapGrayArrow = styled.div`
  cursor: pointer;
  z-index: 3;
  width: 32px;
  height: 48px;
  margin-left: 3rem;
  margin-top: 7rem;
  background: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 0px 0px 15px;
  @media screen and (max-width: 650px) {
    width: 25px;
    height: 40px;
    margin-left: 3rem;
    margin-top: 3rem;
  }
`;

export const ChapGrayLine = styled.div`
  position: absolute;
  width: 720px;
  margin-left: 0.1rem;
  margin-top: 41rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transform: rotate(270deg);
  @media screen and (max-width: 650px) {
    margin-top: 21rem;
    margin-left: 4.6rem;
    width: 400px;
  }
`;

export const ModelOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: pink;
`;

export const ChapP2 = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: #ffc000;
  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;

export const ChapPartTwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  margin-left: 5rem;
  @media screen and (max-width: 650px) {
    margin-left: 0rem;
    margin-top: 18rem;
  }
`;

export const ChapRectangle = styled.div`
  width: 900px;
  height: 320px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 650px) {
    width: 280px;
    height: 180px;
  }
`;

export const ChapCircle = styled.div`
  width: 92px;
  height: 92px;
  border: 1px solid #72747b;
  box-sizing: border-box;
  border-radius: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 650px) {
    width: 42px;
    height: 42px;
  }
`;

export const ChapPTextList = styled.div`
  font-size: 18px;
  color: #ffc000;
  padding: 2rem;
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
    font-size: 22px;
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
  text-align: left;
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
  @media screen and (max-width: 650px) {
    margin: 0.5rem;
    margin-left: 8rem;
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
