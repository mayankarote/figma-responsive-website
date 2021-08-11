import styled from "styled-components";

export const HomeContainerThree = styled.div`
  max-height: 100vh;
  max-height: 100%;
  height: calc(100px + 640px);
  background: white;
`;
export const HomeContentThree = styled.div`
  background: white;
  max-height: 100vh;
`;

export const HomeItemsThree = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  padding: 0rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 650px) {
    max-width: 100%;
    height: 100%;
    height: calc(100vw + 1040px);
    background: white;
    margin: 2rem;
  }
`;

export const ProductCard = styled.div`
  width: 350px;
  margin: 1.5rem;
  padding: 0.55rem;
  @media screen and (max-width: 280px) {
    padding: 1rem;
  }
  @media screen and (max-width: 540px) {
    margin-top: -1rem;
  }
`;

export const HomeYellowCircle = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 100px;
  background: linear-gradient(253.58deg, #ffc000 1.55%, #ff8a00 95.8%);
  margin: 0rem 5rem;
  @media screen and (max-width: 280px) {
    margin-top: -2rem;
  }
`;

export const ProductImg = styled.img`
  margin: 0rem 1.1rem;
`;
export const ProductInfo = styled.div`
  margin: 1rem 1rem;
  font-family: Proxima Nova;
  font-style: normal;
`;

export const ProductsHeading = styled.h1`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  font-family: Proxima Nova;
  font-style: normal;
  color: #5c5c5c;
`;

export const ProductTitle = styled.p`
  width: 255px;
  height: 44px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #5c5c5c;
  text-align: center;
  font-family: Proxima Nova;
  font-style: normal;
  margin-top: 0.5rem;
`;

// colorLine

export const HomeLineDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
`;
export const HomeLine = styled.img`
  margin: 0rem;
  width: 160px;
  height: 5px;
  @media screen and (max-width: 540px) {
    margin-top: -5rem;
    width: 170px;
  }
`;
export const Info = styled.div`
  margin: 0rem 1rem;
`;

export const WhatStdsSayHeading = styled.h1`
  font-weight: 600;
  text-align: center;
  color: #ff8a00;
  margin: 1rem;
  font-family: Proxima Nova;
  font-style: normal;
  font-size: 40px;
  line-height: 158.34%;

  @media screen and (max-width: 650px) {
    font-size: 25px;
    line-height: 158.34%;
    margin: 0.5rem;
    font-family: Proxima Nova;
    font-style: normal;
    text-align: center;
  }
  @media screen and (max-width: 540px) {
    margin-top: -2rem;
    width: 234px;
    font-size: 25px;
    line-height: 158.34%;
    margin-left: 4rem;
    font-family: Proxima Nova;
    font-style: normal;
    text-align: center;
  }
`;
export const WhatStdsSayTitle = styled.p`
  width: 585px;
  height: 53px;
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  color: #5c5c5c;
  margin: 1rem;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    font-size: 1rem;
    line-height: 1.7rem;
    margin: 1rem;
    font-family: Proxima Nova;
    font-style: normal;
  }
`;
