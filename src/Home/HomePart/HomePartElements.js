import styled from "styled-components";

export const HomeContainerTwo = styled.div`
  padding: 0rem calc((100vw - 1300px) / 2);
  max-height: 100vh;
  background: #0c2657;
  margin: 0 auto;
`;

export const HomeItemsTwo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 450px;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
export const StepAppLogo = styled.img`
  width: 194px;
  height: 72px;
  margin: 2rem;
  @media screen and (max-width: 650px) {
    width: 150px;
    height: 50px;
  }
`;

export const HomeH1 = styled.h1`
  font-size: 24px;
  color: #d8d8d8;
  margin-bottom: 1rem;
  font-family: Proxima Nova;
  font-style: normal;
`;

export const HomeSelect = styled.div`
  width: 500px;
  height: 65px;
  border-radius: 50px;
  margin-bottom: 2rem;
  color: #5c5c5c;
  padding: 0.5rem;
  font-family: Proxima Nova;
  font-style: normal;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 100px;
  @media screen and (max-width: 650px) {
    width: 250px;
    height: 65px;
    margin-bottom: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    color: #5c5c5c;
    font-family: Proxima Nova;
    font-style: normal;
  }
`;

export const HomeBtn = styled.button`
  background: linear-gradient(253.58deg, #ffc000 1.55%, #ff8a00 95.8%);
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 100px;
  color: #ffffff;
  padding: 0.5rem 1rem;
  width: 500px;
  height: 65px;
  font-size: 25px;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    width: 250px;
    height: 65px;
  }
`;
