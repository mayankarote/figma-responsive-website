import styled from "styled-components";

export const LoginContainer = styled.div`
  max-height: 100vh;
  margin: 0 auto;
`;

export const LoginItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
  background: #0c2657;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const StepAppLogo = styled.img`
  width: 194px;
  height: 72px;
  margin: 1rem;
  margin-top: -5rem;
  @media screen and (max-width: 650px) {
    width: 170px;
    height: 55px;
    margin-top: 1rem;
  }
`;

export const HomeH1 = styled.h1`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #d8d8d8;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 650px) {
    font-size: 12px;
  }
`;
