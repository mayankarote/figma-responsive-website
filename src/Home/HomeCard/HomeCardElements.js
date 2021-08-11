import styled from "styled-components";

export const HomeContainer = styled.div`
  max-height: 100%;
`;
export const HomeContentThree = styled.div`
  background: white;
  margin: 0 auto;
  max-height: 100vh;
`;

export const HomeItemsfour = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 650px) {
    max-width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 540px) {
    margin-top: -4rem;
  }
`;

export const WhiteFourCard = styled.div`
  width: 400px;
  height: 320px;
  margin: 1rem;
  padding: 0.5rem;
  border: 2px solid rgb(241, 238, 238);
  border-radius: 5px;
  opacity: 35%;
`;
export const WhiteFourCardHighlight = styled.div`
  width: 400px;
  height: 320px;
  margin: 1rem;
  padding: 0.5rem;
  border: 2px solid #efefef;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 5px;
`;
export const CardImg = styled.img`
  width: 34px;
  height: 26px;
  margin: 0rem 1rem;
`;
export const CardInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 1rem 1rem;
`;

export const CardTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #5c5c5c;
  text-align: justify;
  font-family: Proxima Nova;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const CardUserPicImg = styled.img`
  width: 60px;
  height: 65px;
  margin-top: 1.5rem;
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 4rem;
  margin-top: -3rem;
`;

export const CardHeading = styled.p`
  font-size: 16px;
  font-weight: 600;
  font-family: Proxima Nova;
  font-style: normal;
  color: #5c5c5c;
  border-radius: 5px;
  line-height: 105.47%;
`;

export const CardsubTitle = styled.p`
  font-size: 12px;
  font-family: Proxima Nova;
  font-style: normal;
  color: #5c5c5c;
  border-radius: 5px;
  line-height: 105.47%;
  margin-left: -2rem;
  margin-top: 0.4rem;
`;

// -----------------------------------------------------------------

export const HomeYellowContentFour = styled.div`
  max-height: 100vh;
`;

export const HomeYellowItemsfour = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: #ff9201;
  margin-top: 2rem;

  // transform: matrix(1, 0, 0, 1, 1, -1);
`;

export const YellowCardImg = styled.img`
  width: 90px;
  height: 90px;
  margin: 0rem 1.8rem;
`;

export const YellowCardInfo = styled.div`
  margin: 1rem 4rem;
  font-family: Proxima Nova;
  font-style: normal;
`;

export const YellowCardHeading = styled.p`
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  font-family: Proxima Nova;
  font-style: normal;
  color: #ffffff;
`;

export const YellowCardTitle = styled.p`
  width: 200px;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  text-align: center;
  font-family: Proxima Nova;
  font-style: normal;
`;
