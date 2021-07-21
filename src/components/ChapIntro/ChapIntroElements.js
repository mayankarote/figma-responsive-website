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
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  background: #0c2651;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const ModelOne = styled.div`
  width: 500px;
  height: 300px;
  margin: 4rem;
  background-color: #ffffff;
  opacity: 0.95;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
  padding: 1rem;
  @media screen and (max-width: 650px) {
    width: 250px;
    height: 300px;
    margin: 3rem;
  }
`;
export const ModelTwo = styled.div`
  width: 500px;
  height: 300px;
  margin: 4rem;
  background-color: #ffffff;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
  padding: 1rem;
  @media screen and (max-width: 650px) {
    width: 250px;
    height: 300px;
    margin: 3rem;
  }
`;

export const ChapNameBox = styled.div`
  margin: 1rem;
`;

export const ChapIcon = styled.img`
  cursor: pointer;
  margin-top: 3rem;
  @media screen and (max-width: 650px) {
    width: 11px;
    height: 11px;
    margin-top: 3rem;
  }
`;
export const ChapGrayAL = styled.div`
  cursor: pointer;
  margin-top: 3rem;
  @media screen and (max-width: 650px) {
    width: 11px;
    height: 11px;
    margin-top: 3rem;
  }
`;

export const ChapGrayArrow = styled.div`
  cursor: pointer;
  z-index: 3;
  width: 32px;
  height: 48px;
  margin-left: 100px;
  margin-top: 129px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c4c4c4;
  border-radius: 15px 0px 0px 15px;

  @media screen and (max-width: 650px) {
    width: 11px;
    height: 11px;
    margin-top: 3rem;
  }
`;

export const ChapGrayLine = styled.div`
  width: 870px;
  height: 0px;
  // left: 65px;
  // top: 663px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transform: rotate(90deg);

  @media screen and (max-width: 650px) {
    margin-top: 3rem;
    font-size: 20px;
  }
`;

export const ChapP = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  padding: 1rem;
  margin-top: 3rem;
  @media screen and (max-width: 650px) {
    margin-top: 3rem;
    font-size: 20px;
  }
`;

export const ChapP2 = styled.p`
  font-size: 18px;
  color: #5c5c5c;
  text-align: center;
  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;

export const ChapModelP = styled.p`
  font-weight: 600;
  font-size: 25px;
  color: white;
  padding: 1rem;
  @media screen and (max-width: 650px) {
    font-size: 20px;
  }
`;

export const ChapModelP2 = styled.p`
  font-size: 18px;
  color: white;
  padding: 1rem;
  @media screen and (max-width: 650px) {
    font-size: 15px;
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
