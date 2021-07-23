import styled from "styled-components";

export const ChapContainer = styled.div`
  height: 100vh;
  background: #0c2651;
`;

export const ChapContent = styled.div`
  max-height: 100%;
  height: calc(100vh - 1px);
  padding: 0rem calc((100vw - 1800px) / 2);
`;

export const ChapItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  background: #0c2651;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const WhiteFourCard = styled.div`
  width: 450px;
  height: 320px;
  margin: 3rem;
  background: white;
  padding: 0.8rem;
  border: 2px solid rgba(0, 0, 0, 0.8);
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
  opacity: 0.95;
  @media screen and (max-width: 650px) {
    width: 440px;
    height: 300px;
    margin: 2rem;
    padding: 0.3rem;
  }
`;

export const ChapP = styled.p`
  font-weight: bold;
  text-align: justify;
  font-size: 25px;
  line-height: 34px;
  color: #000000;
  margin-left: 1rem;
  @media screen and (max-width: 650px) {
    font-size: 20px;
  }
`;

export const ChapP2 = styled.p`
  font-size: 20px;
  line-height: 1.5em;
  margin-left: 1rem;
  margin-top: 1rem;
  color: #0c2657;
  @media screen and (max-width: 650px) {
    font-size: 18px;
    margin-top: 0.5rem;
  }
`;
export const ChapP3 = styled.p`
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3em;
  margin-left: 1rem;
  margin-top: 1.2rem;
  color: #0c2657;
  @media screen and (max-width: 650px) {
    font-size: 18px;
    margin-top: 1rem;
  }
`;

export const ChapBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  width: 145px;
  height: 50px;
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
  margin-right: 1rem;
  @media screen and (max-width: 650px) {
    width: 15px;
    height: 15px;
  }
`;

export const Chap4 = styled.p`
  font-weight: 600;
  font-size: 19px;
  color: white;
  text-align: center;
  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;

export const ChapAlign = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`;

export const ChapBtn1 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  width: 140px;
  height: 46px;
  padding: 0.5rem;
  cursor: pointer;
  mix-blend-mode: normal;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 31px;
  color: #111;
  font-size: 17px;
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
