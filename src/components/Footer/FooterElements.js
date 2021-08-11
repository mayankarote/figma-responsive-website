import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #0d2249;
  color: #ffffff;
  height: 36px;
  max-width: 100%;
`;

export const FooterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
export const FooterP = styled.p`
  margin-top: 0.4rem;
  text-align: center;
  font-size: 14px;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  @media screen and (max-width: 400px) {
    font-size: 10px;
  }
`;
