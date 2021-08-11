import styled from "styled-components";

export const LoginForm = styled.div`
  @media screen and (max-width: 650px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
  }
`;

export const FormInput = styled.div`
  width: 430px;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  background: #ffffff;
  border-radius: 100px;
  color: black;
  margin: 0.5rem;
  padding: 1rem 1rem;
  outline: none;
  font-family: Proxima Nova;
  font-style: normal;
  color: #5c5c5c;
  font-size: 14px;
  line-height: 17px;
  @media screen and (max-width: 650px) {
    width: 280px;
    height: 55px;
    padding: 1rem 1rem;
  }
  @media screen and (max-width: 280px) {
    width: 250px;
    height: 50px;
    padding: 0.8rem 1rem;
  }
`;

export const FormP = styled.p`
  color: #d8d8d8;
  // text-align: right;
  margin-left: 13rem;
  font-family: Proxima Nova;
  font-style: normal;
  font-size: 12px;
  line-height: 12px;
  @media screen and (max-width: 650px) {
    margin-left: 6rem;
    font-size: 10px;
  }
  @media screen and (max-width: 650px) {
    margin-left: 4rem;
    font-size: 10px;
  }
`;

export const FormError = styled.p`
  font-size: 1px;
  color: red;
  text-align: right;
  font-family: Proxima Nova;
  font-style: normal;
`;

export const LoginBtn = styled.button`
  background: linear-gradient(253.58deg, #ffc000 1.55%, #ff8a00 95.8%);
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 100px;
  color: #ffffff;
  padding: 1rem 2rem;
  width: 430px;
  height: 60px;
  font-size: 14px;
  margin: 1rem;
  margin-top: 2rem;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    width: 280px;
    height: 55px;
  }
  @media screen and (max-width: 280px) {
    width: 250px;
    height: 50px;
    padding: 0.7rem 2rem;
  }
`;
