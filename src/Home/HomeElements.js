import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
`;

export const HomeContentOne = styled.div`
  background: linear-gradient(253.58deg, #ffc000 1.55%, #ff8a00 95.8%);
  height: calc(100px + 190px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1700px) / 2);
  @media screen and (max-width: 650px) {
    max-width: 100%;
  }
`;

export const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0rem 1rem;
  width: 650px;
  color: #fff;
  height: 100vh;
  max-height: 100%;
  @media screen and (max-width: 650px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const HomeP = styled.p`
  font-size: 18px;
  line-height: 27px;
  font-weight: normal;
  font-family: Proxima Nova;
  font-style: normal;
  margin-bottom: 2rem;
  width: 444px;
  color: #fff7df;
  @media screen and (max-width: 650px) {
    font-size: 15px;
    line-height: 27px;
    margin-bottom: 1rem;
    width: 310px;
  }
  @media screen and (max-width: 540px) {
    font-size: 15px;
    line-height: 27px;
    margin-bottom: 1rem;
    width: 400px;
  }
  @media screen and (max-width: 280px) {
    font-size: 10px;
    line-height: 27px;
    margin-bottom: 1rem;
    width: 250px;
  }
`;

export const HomeP2 = styled.p`
  font-size: 44px;
  line-height: 118.3%;
  font-weight: 600;
  font-family: Proxima Nova;
  font-style: normal;
  padding: 0.1rem;
  width: 556px;
  color: #fff7df;
  margin-left: 90px;
  @media screen and (max-width: 650px) {
    font-size: 25px;
    line-height: 118.3%;
    padding: 0.1rem;
    width: 320px;
    margin-left: -0rem;
  }
  @media screen and (max-width: 540px) {
    font-size: 30px;
    line-height: 118.3%;
    padding: 0.1rem;
    width: 380px;
    margin-left: -2rem;
  }
  @media screen and (max-width: 280px) {
    font-size: 20px;
    line-height: 118.3%;
    padding: 0.1rem;
    width: 280px;
    margin-left: 1rem;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 4rem;
  right: 0;
`;

export const SVGIcon = styled.img`
  width: 100rem;
  height: 241px;
  margin-left: 15rem;
  @media screen and (max-width: 650px) {
    width: 90rem;
    height: 230px;
    margin-left: -0.4rem;
    opacity: 0.4;
  }
  @media screen and (width: 1024px) {
    width: 90rem;
    height: 230px;
    margin-left: 9rem;
  }
  @media screen and (width: 768px) {
    width: 90rem;
    height: 230px;
    margin-left: 5rem;
  }
  @media screen and (width: 280px) {
    width: 20rem;
    height: 200px;
    // margin-left: 5rem;
  }
  @media screen and (width: 540px) {
    width: 20rem;
    height: 200px;
    margin-left: 3rem;
  }
`;

// fourth part is start
