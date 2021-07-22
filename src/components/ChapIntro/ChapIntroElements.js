import styled from "styled-components";

export const ChapContainer = styled.div`
  max-height: 100vh;
`;
export const ChapContent = styled.div`
  background: #0c2651;
  height: 100vh;
  max-height: 100%;
  padding: 0rem calc((100vw - 1700px) / 2);
`;

export const ChapItems = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 650px) {
    width: 100%;
    padding: 1rem;
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
    margin-top: 3rem;
    font-size: 20px;
  }
`;

export const ChapIcon = styled.img`
  cursor: pointer;
  padding: 0.5rem;
  @media screen and (max-width: 650px) {
    margin-top: 3rem;
    font-size: 20px;
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
    width: 30px;
    height: 45px;
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
    margin-top: 32rem;
    margin-left: 2.5rem;
    width: 620px;
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
    font-size: 20px;
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
`;

export const ChapPList = styled.div`
  font-size: 18px;
  color: #ffc000;
  padding: 2rem;
  line-height: 2rem;
  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;
export const ChapYellowP = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: #ffc000;
  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;

export const ChapWhiteP = styled.p`
  font-size: 20px;
  color: #ffffff;
  text-align: left;
  @media screen and (max-width: 650px) {
    margin-top: 3rem;
    font-size: 20px;
  }
`;
export const ChapWhiteBoldP = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  text-align: left;
  @media screen and (max-width: 650px) {
    margin-top: 3rem;
    font-size: 20px;
  }
`;
export const ChapModelP3 = styled.p`
  font-size: 25px;
  color: white;
  padding: 1rem;
  @media screen and (max-width: 650px) {
    font-size: 20px;
  }
`;

export const ChapGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin: 5rem;
`;

export const ModelGroup = styled.div`
  width: 450px;
  height: 330px;
  background: #ff8a48;
  opacity: 0.95;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
  margin: 2rem;
  padding: 1rem;
  @media screen and (max-width: 650px) {
    width: 300px;
    height: 280px;
    padding: 0rem;
  }
`;

export const ModelGroupTwo = styled.div`
  width: 450px;
  height: 330px;
  background: #1bb8ae;
  opacity: 0.95;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
  margin: 2rem;
  padding: 1rem;
  @media screen and (max-width: 650px) {
    width: 300px;
    height: 280px;
    padding: 0rem;
  }
`;

export const ChapBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 125px;
  height: 40px;
  background: #fff1c7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 31px;
  color: #111;
  margin-left: 14rem;
  margin-top: -1rem;
  font-size: 15px;
  color: black;
  @media screen and (max-width: 650px) {
    width: 120px;
    height: 40px;
    margin-left: 8rem;
    margin-top: -2rem;
  }
`;
export const ChapStar = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 0.1rem;
  @media screen and (max-width: 650px) {
    width: 15px;
    height: 15px;
    margin-right: 0.1rem;
  }
`;
