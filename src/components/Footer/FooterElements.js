import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #0c2651;
  color: white;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 2px;
  max-width: 100%;
  margin: 0rem auto;
  font-size: 18px;
  @media screen and (max-width: 400px) {
    font-size: 13px;
  }
`;
