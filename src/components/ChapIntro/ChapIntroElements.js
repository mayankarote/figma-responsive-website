import styled from "styled-components";

export const ChapContainer = styled.div`
  max-height: 100vh;
  background: #0c2651;
`;
export const ChapContent = styled.div`
  background: #0c2651;
  max-height: 100%;
  height: 100%;
  // padding: 0rem calc((100vw - 1800px) / 2);
  @media screen and (width: 1024px) {
    height: 100%;
  }
`;

export const ChapItems = styled.div`
  background: #0c2651;
  max-height: 100%;
  // margin: 0 auto;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
export const Items = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

export const ChapPartOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  margin: 3rem;
  margin-top: 4rem;
  @media screen and (max-width: 650px) {
    margin-left: 3rem;
  }
  @media screen and (max-width: 280px) {
    margin-left: 2.5rem;
  }
  @media screen and (max-width: 540px) {
    margin-left: 2rem;
  }
`;

export const ChapPartTwo = styled.div`
  margin: 3rem;
  @media screen and (max-width: 650px) {
    margin-left: 2rem;
    margin-top: 3rem;
  }
  @media screen and (max-width: 320px) {
    margin-left: 2rem;
    margin-top: 3rem;
  }
`;

export const ChapP = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #ffffff;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    font-size: 15px;
    margin-top: 0.2rem;
  }
`;

export const ChapIcon = styled.img`
  cursor: pointer;
  padding: 0.4rem;
  @media screen and (max-width: 650px) {
    width: 30px;
    height: 30px;
  }
`;
export const ChapPartGrayLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  margin: 2rem;
  margin-left: 5rem;
  @media screen and (max-width: 650px) {
    margin-left: 2rem;
    margin-top: -3.3rem;
  }
  @media screen and (max-width: 540px) {
    margin-left: 2.5rem;
    margin-top: -3.3rem;
  }
`;

export const ChapGrayArrow = styled.div`
  cursor: pointer;
  z-index: 3;
  width: 32px;
  height: 48px;
  margin-left: 15rem;
  background: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 0px 0px 15px;
  @media screen and (max-width: 650px) {
    width: 25px;
    height: 40px;
    margin-left: 12rem;
    margin-top: 1rem;
  }
  @media screen and (max-width: 320px) {
    width: 25px;
    height: 40px;
    margin-left: 10rem;
    margin-top: 1rem;
  }
  @media screen and (max-width: 280px) {
    width: 25px;
    height: 40px;
    margin-left: 10.5rem;
    margin-top: 1rem;
  }
`;

export const ChapGrayLine = styled.div`
  position: absolute;
  width: 510px;
  margin-left: 3.8rem;
  margin-top: 12.7rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transform: rotate(270deg);
  @media screen and (max-width: 650px) {
    margin-top: 8.5rem;
    margin-left: 5.9rem;
    width: 290px;
  }
  @media screen and (width: 280px) {
    margin-top: 8.5rem;
    margin-left: 4.4rem;
    width: 290px;
  }
  @media screen and (width: 320px) {
    margin-top: 8.5rem;
    margin-left: 3.9rem;
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
  margin: 3rem;
  margin-top: -4rem;
  @media screen and (max-width: 650px) {
    margin-left: 3rem;
  }
  @media screen and (max-width: 280px) {
    margin-left: 2rem;
  }
  @media screen and (max-width: 540px) {
    margin-left: 1.5rem;
  }
`;

export const ChapHorizontalLine = styled.div`
  width: 290px;
  height: 1px;
  background: #c4c4c4;
  opacity: 0.28;
  border-radius: 20px;
  transform: matrix(1, 0, 0, -1, 0, 0);
  @media screen and (max-width: 650px) {
    width: 200px;
  }
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
  font-size: 28px;
  line-height: 150%;
  font-weight: 600;
  color: #ffc000;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    font-size: 18px;
    margin: 0.5rem;
  }
`;
export const ChapZigzagGroupTwo = styled.div`
  margin-top: -9.7rem;
  margin-left: 2.2rem;
  @media screen and (max-width: 650px) {
    margin-top: -8.8rem;
  }
`;
export const ChapP3 = styled.p`
  font-size: 18px;
  line-height: 150%;
  margin-top: 1rem;
  color: #ffffff;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    font-size: 14px;
  }
`;

export const ChapRectangle = styled.div`
  width: 700px;
  height: 330px;
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
  @media screen and (width: 280px) {
    width: 200px;
    height: 180px;
  }
  @media screen and (max-width: 540px) {
    width: 300px;
    height: 180px;
  }
  @media screen and (max-width: 320px) {
    width: 220px;
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
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    font-size: 15px;
    line-height: 1.8rem;
  }
`;

export const ChapYellowP = styled.p`
  font-size: 28px;
  line-height: 150%;
  font-weight: 600;
  color: #ffc000;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    font-size: 25px;
    margin-bottom: 1rem;
  }
`;

export const ChapHightlightP = styled.label`
  font-size: 18px;
  line-height: 20px;
  color: #ffc000;
  margin: 0.3rem;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;

export const ChapWhiteP = styled.p`
  font-size: 18px;
  color: #ffffff;
  font-family: Proxima Nova;
  font-style: normal;
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
  font-family: Proxima Nova;
  font-style: normal;
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
  width: 142px;
  height: 51px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;

  font-size: 18px;
  line-height: 150%;
  font-weight: 600;
  text-align: center;
  color: #0c2657;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    width: 95px;
    height: 40px;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 600;
  }
`;
