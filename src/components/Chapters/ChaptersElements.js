import styled from "styled-components";

export const ChapContainer = styled.div`
  height: 100vh;
`;

export const ChapContent = styled.div`
  background: #0c2651;
  max-height: 100%;
  height: 100%;
`;
export const ChapItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  margin: 0 auto;
  background: #0c2651;
  height: 100vh;
  max-height: 100%;
  @media screen and (max-width: 650px) {
    width: 100%;
    height: 100%;
  }
`;
export const WhiteFourCard = styled.div`
  width: 430px;
  height: 290px;
  margin: 2rem;
  background: #ffffff;
  padding: 0.8rem;
  border: 2px solid rgba(0, 0, 0, 0.8);
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
  opacity: 0.95;

  @media screen and (max-width: 650px) {
    width: 390px;
    height: 260px;
    margin: 2rem;
    padding: 0.7rem;
  }
`;

export const ChapP = styled.p`
  font-weight: bold;
  text-align: justify;
  font-size: 28px;
  line-height: 34px;
  color: #000000;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    font-size: 20px;
  }
`;

export const ChapP2 = styled.p`
  width: 311px;
  height: 48px;
  font-size: 15px;
  line-height: 24px;
  margin-top: 1rem;
  color: #000000;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    font-size: 15px;
    margin-top: 0.5rem;
  }
`;
export const ChapP3 = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  margin-top: 0.8rem;
  color: #000000;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    font-size: 18px;
    margin-top: 1rem;
  }
`;
export const ChapAlign = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

export const ChapBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  width: 119px;
  height: 49px;
  margin-top: 1rem;
  background: #ff8f50;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 31px;
  @media screen and (max-width: 650px) {
    width: 115px;
    height: 40px;
    margin-top: rem;
  }
`;

export const ChapIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
  text-align: left;
  margin-right: 0.1rem;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    width: 15px;
    height: 15px;
  }
`;

export const Chap4 = styled.p`
  font-weight: 600;
  font-size: 19px;
  color: #ffffff;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;
export const ChapAlignTwo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`;

export const ChapBtn1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 137px;
  height: 49px;
  cursor: pointer;
  mix-blend-mode: normal;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 31px;
  color: #000000;
  font-size: 15px;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    width: 120px;
    height: 35px;
    padding: 0.5rem;
    font-size: 15px;
  }
`;

export const ChapStar = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 0.5rem;
  @media screen and (max-width: 650px) {
    width: 15px;
    height: 15px;
    margin-right: 0.3rem;
  }
`;
