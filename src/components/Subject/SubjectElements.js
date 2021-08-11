import styled from "styled-components";

export const SubjectContainer = styled.div`
  max-height: 100vh;
  background: #0c2651;
`;
export const SubjectContent = styled.div`
  max-height: 100%;
  background: #0c2651;
  padding: 0rem calc((100vw - 1500px) / 2);
  @media screen and (max-width: 650px) {
    max-height: 100%;
  }
`;

export const SubjectItems = styled.div`
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

export const ModelOne = styled.div`
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
export const ModelTwo = styled.div`
  width: 500px;
  height: 300px;
  margin: 4rem;
  background-color: #ffffff;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
  padding: 1rem;
  opacity: 0.95;

  @media screen and (max-width: 650px) {
    width: 250px;
    height: 300px;
    margin: 3rem;
  }
`;

export const YellowCirlce = styled.div`
  width: 139px;
  height: 139px;
  background: linear-gradient(180deg, #ff8a00 13.64%, #ffc000 100%);
  border-radius: 100%;
  margin-left: 7rem;
  @media screen and (max-width: 650px) {
    width: 100px;
    height: 100px;
    margin-left: 2rem;
  }
`;
export const SubjectIcon = styled.img`
  cursor: pointer;
  margin-left: 9rem;
  margin-top: -5rem;
  width: 129px;
  height: 104px;
  @media screen and (max-width: 650px) {
    width: 80px;
    height: 80px;
    margin-left: 3.5rem;
    margin-top: -4rem;
  }
`;

export const SubjP = styled.p`
  font-weight: 600;
  font-size: 28px;
  color: #5c5c5c;
  text-align: center;
  padding: 1rem;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    font-size: 20px;
  }
`;

export const SubjP2 = styled.p`
  width: 334px;
  height: 48px;
  margin-left: 3rem;
  font-size: 15px;
  line-height: 15px;
  color: #5c5c5c;
  text-align: center;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    font-size: 10px;
    width: 200px;
    height: 48px;
    margin-left: 0.3rem;
  }
`;

export const SubjModelP = styled.p`
  font-weight: 600;
  font-size: 28px;
  color: white;
  padding: 1rem;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    font-size: 20px;
  }
`;

export const SubjModelP2 = styled.p`
  font-size: 15px;
  color: white;
  padding: 1rem;
  font-weight: bold;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;
export const SubjModelP3 = styled.p`
  font-size: 28px;
  color: white;
  padding: 1rem;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    font-size: 20px;
  }
`;

export const SubjectGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin: 5rem;
`;

export const ModelGroup = styled.div`
  width: 430px;
  height: 280px;
  background: #ff8a48;
  opacity: 0.95;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
  margin: 1rem;
  padding: 0.3rem;
  @media screen and (max-width: 650px) {
    width: 300px;
    height: 260px;
    padding: 0rem;
  }
`;

export const ModelGroupTwo = styled.div`
  width: 430px;
  height: 280px;
  background: #1bb8ae;
  opacity: 0.95;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
  margin: 1rem;
  padding: 0.3rem;
  @media screen and (max-width: 650px) {
    width: 300px;
    height: 260px;
    padding: 0rem;
  }
`;

export const ChapBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 117px;
  height: 33px;
  background: #fff1c7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 31px;
  color: #111;
  margin-left: 14rem;
  margin-top: -3rem;
  font-size: 14px;
  color: black;
  font-family: Proxima Nova;
  font-style: normal;
  @media screen and (max-width: 650px) {
    width: 110px;
    height: 30px;
    margin-left: 8rem;
    margin-top: -2.5rem;
  }
`;
export const SubjectStar = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 0.1rem;
  @media screen and (max-width: 650px) {
    width: 12px;
    height: 12px;
    margin-right: 0.1rem;
  }
`;
