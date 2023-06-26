import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import ImagePrinProvider from "common/assets/image/printing-house.webp";

const HeaderPOD = styled.header`
  width: 100%;
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

export const BannerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  > div {
    width: calc(100% / 2 - 34px);
    margin: 38px 0 30px;
    @media only screen and (max-width: 1440px) {
      width: calc(100% / 2 - 34px);
      margin: 100px 0 30px;
    }
    @media only screen and (max-width: 1366px) {
      width: calc(100% / 2 - 34px);
    }
    @media only screen and (max-width: 991px) {
      width: calc(100% / 1 - 0px);
    }
    @media only screen and (max-width: 767px) {
      width: calc(100% / 1 - 0px);
    }
    @media only screen and (max-width: 594px) {
      width: 100%;
      margin-top: 34px;
    }
  }
  .heading {
    font-size: 35px;
  }
  .heading-first {
    position: relative;
    width: 386px;
    &:after {
      content: "";
      width: 100%;
      height: 50%;
      position: absolute;
      bottom: 1px;
      left: 0px;
      background: #ff6666;
      z-index: -1;
    }
  }
  .heading-second {
    color: #0099ff;
  }
  .description {
    color: #718096;
  }
  .svg-background {
    width: 100%;
    height: 130%;
    display: inline-block;
    line-height: 1em;
    position: absolute;
    fill: none;
    top: -20%;
    left: 0px;
    z-index: -1;
    color: #fff5f5;
  }
  .boxImage {
    position: relative;
    height: 300px;
    border-radius: 1rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    width: 100%;
    overflow: hidden;
  }
  .imageBanner {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
  .footer {
    margin-top: 2.5rem;
  }
  .btn-getstart {
    display: inline-block;
    align-items: center;
    justify-content: center;
    position: relative;
    white-space: nowrap;
    border-radius: 25px;
    font-weight: 400;
    height: 3rem;
    min-width: 3rem;
    font-size: 1.125rem;
    background: #63b3ed;
    color: #fff;
    &:hover {
      background: #2b6cb0;
    }
  }
  .btn-howitworks {
    display: inline-block;
    margin-left: 30px;
    align-items: center;
    justify-content: center;
    position: relative;
    white-space: nowrap;
    border-radius: 25px;
    font-weight: 400;
    height: 3rem;
    min-width: 3rem;
    font-size: 1.125rem;
    background: #edf2f7;
    color: inherit;
    &:hover {
      background: #e2e8f0;
    }
  }
`;
export const ContainerPP = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  margin-bottom: 3rem;
  background-image: url(${ImagePrinProvider?.src});
  background-size: cover;
  background-position: center center;
`;
