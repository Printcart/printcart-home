import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const HeaderPOD = styled.header`
  width: 100%;
  margin: 0 auto 65px;
  text-align: center;
  overflow: hidden;
  @media only screen and (max-width: 1400px) {
    padding: 60px 100px 0px;
  }
  @media only screen and (max-width: 992px) {
    margin-bottom: 50px;
  }

  h5 {
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    color: ${themeGet("colors.primary", "#2563FF")};
    text-transform: uppercase;
    @media only screen and (max-width: 992px) {
      font-size: 13px;
      margin-bottom: 10px;
    }
  }
  h2 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    color: ${themeGet("colors.headingColor", "#0F2137")};
    margin: 0;
    letter-spacing: -1px;
    @media only screen and (max-width: 1366px) {
      font-size: 28px;
      letter-spacing: -0.7px;
    }
    @media only screen and (max-width: 992px) {
      font-size: 26px;
      line-height: 38px;
      letter-spacing: -0.5px;
    }
  }
  .containerSlogan {
    padding: 40px 70px;
    background-color: #002e47;
  }
  .titleSlogan {
    color: #5c5c5c;
    font-size: 32px;
    font-weight: 500;
    line-height: 36px;
    text-align: center;
  }
  & p {
    color: #5c5c5c;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    margin: 20px 0 50px;
  }
`;
export default HeaderPOD;
