import { themeGet } from "@styled-system/theme-get";
import ImagePrinProvider from "common/assets/image/printing-house.webp";
import Box from "common/components/Box";
import Card from "common/components/Card";
import styled from "styled-components";
import { GridServices } from "../InfoServices/GridServices";

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
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
  margin-left: 17px;
  margin-right: 17px;
  > div {
    width: calc(100% / 2 - 34px);
    @media only screen and (max-width: 1440px) {
      width: calc(100% / 2 - 34px);
      margin: 0 17px;
    }
    @media only screen and (max-width: 1366px) {
      width: calc(100% / 2 - 34px);
      margin: 0 17px;
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
  height: 250px;
  margin-left: 17px;
  margin-right: 17px;
  margin-bottom: 2rem;
  background-image: url(${ImagePrinProvider?.src});
  background-size: cover;
  background-position: center center;
`;

export const ContainerBox = styled(Box)`
  margin-bottom: 3.5rem;
  display: block;
  margin: 0 17px;
`;
export const HeaderBox = styled(Box)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`;
export const TitleHead = styled.h4`
  margin: 0;
  font-size: 24px;
  line-height: 2rem;
  font-weight: 700;
  text-transform: capitalize;
`;
export const TitleBox = styled(Box)`
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 960px) {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    flex: 0 0 50%;
    margin-left: 25%;
    text-align: center;
  }
`;

export const WrapperProduct = styled(Box)`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
  margin-bottom: 3.5rem;
`;
export const GridFilter = styled(GridServices)`
  margin: 0px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  > div {
    width: calc(100% / 4 - 34px);
    margin: 30px 17px 10px;

    @media only screen and (max-width: 1400px) {
      width: calc(100% / 4 - 34px);
    }
    @media only screen and (max-width: 1200px) {
      width: calc(100% / 3 - 34px);
    }
    @media only screen and (max-width: 991px) {
      width: calc(100% / 2 - 34px);
    }
    @media only screen and (max-width: 767px) {
      width: calc(100% / 2 - 34px);
    }
    @media only screen and (max-width: 594px) {
      width: calc(100% / 1 - 34px);
    }
  }
`;
export const CardItems = styled(Card)`
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgb(0 0 50 / 25%);
  &:hover {
    img {
      transform: scale(1.1);
      transition: transform 0.3s ease-out;
    }
    background-color: #f7f7f7;
  }
  @media only screen and (max-width: 480px) {
    padding: 25px 25px 30px;
  }
`;
export const WrapImage = styled(Box)`
  position: relative;
  display: block;
  overflow: hidden;
  padding-bottom: 100%;
  text-align: center;
`;
export const BoxLabel = styled(Box)`
  position: absolute;
  z-index: 1;
  top: 16px;
  left: 16px;
`;
export const SmallNew = styled.small`
  border: 1px solid #2b6ca3;
  background-color: #e1eff9;
  color: #1e5180;
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0.1rem 0.5rem;
  border-radius: 3px;
`;
export const SmallEco = styled.small`
  border: 1px solid #248e4c;
  background-color: #e2f7e3;
  color: #1f6b45;
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0.1rem 0.5rem;
  border-radius: 3px;
`;
export const WrapContent = styled(Box)`
  padding: 16px 16px 16px;
`;
export const PTitle = styled.p`
  margin: 0;
  height: 24px;
  max-height: 48px;
  font-size: 1.25em;
  line-height: 1.5rem;
  color: #17262b;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
export const PByVendor = styled.p`
  margin: 0;
  height: 22px;
  margin-top: 8px;
  color: #757c7e;
  font-size: 1em;
  line-height: 1.25rem;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
export const VendorPrice = styled(Box)`
  margin: 8px 0 0;
`;
export const PPrice = styled.p`
  font-size: 1em;
  height: 22px;
  margin: 0;
  line-height: 1.25rem;
  color: #17262b;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
export const PDiscount = styled.p`
  font-size: 1em;
  height: 22px;
  margin: 0;
  line-height: 1.25rem;
  color: #29ab51;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
export const RedirectAll = styled(Box)`
  text-align: right;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 960px) {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    flex: 0 0 25%;
    max-width: 25%;
  }
`;
export const TagA = styled.a`
  cursor: pointer;
  text-decoration: none;
  outline: none;
  &:hover {
    color: #0013e7;
    text-decoration: underline;
  }
`;
export const SpanLink = styled.span`
  cursor: pointer;
  color: #424dc6;
  transition: color 0.15s ease;
  text-decoration: none;
  outline: none;
  &:hover {
    color: #0013e7;
    text-decoration: underline;
  }
`;
