import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const WrapperServices = styled.div`
  padding: 86px 0 0;
  overflow: hidden;
  @media only screen and (max-width: 1440px) {
    padding: 50px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 0;
  }
  #wrapper-modal {
    position: relative;
  }
  .contentMain {
    position: relative;
    padding: 50px 0;
    background: #f5f5f5;
  }
  .container {
    max-width: 1324px;
    margin: 0 auto;
  }
  .breadcrumb {
    padding: 15px 0;
    background-color: #f5f5f5;
    & a,
    & span {
      font-size: 16px;
      color: #5c5c5c;
      text-transform: capitalize;
    }
    & a:hover {
      color: #2d58af;
    }
  }
  .container-text {
    max-width: 1024px;
    margin: 0 auto;
  }
  .banner {
    height: 400px;
    background-image: url("/product_image.jpg");
    background-size: cover;
    background-position: center;
  }

  .paginateWrap {
    display: inline-block;
    text-align: center;
    width: 100%;
    margin: 50px 0 30px 0;
    > li {
      display: inline-block;
    }
    > li a {
      padding: 8px 13px;
      margin: 0 4px;
      border: 1px solid #ddd;
      border-radius: 3px;
      cursor: pointer;
    }
    > .paginate-active {
      color: #2d58af;
      > .paginate-a {
        border: 1px solid #2d58af !important;
      }
    }
  }
`;

export const GridServicesDT = styled.div`
  display: flex;

  > div {
    @media only screen and (max-width: 1466px) {
      width: calc(100% / 2 + 205px);
    }
    @media only screen and (max-width: 1200px) {
      width: calc(100% / 2 + 205px);
    }
    @media only screen and (max-width: 991px) {
      100%;
    }
    @media only screen and (max-width: 767px) {
      width: calc(100% / 2 - 34px);
    }
    @media only screen and (max-width: 594px) {
      width: 100%;
      margin-top: 15px;
    }
  }
  .boxLeft {
    width: 80%;
  }
  .boxRight {
    padding-top: 30px;
    width: 42%;
    padding-left: 30px;
  }

  .sumReviews {
    margin-top: -10px;
    font-size: 25px;
    font-weight: 500;
    color: #444;
    margin-bottom: 20px;
  }
  .containerReviews {
    border: 1px solid #f2f2f2;
    border-radius: 5px;
    padding: 5px 25px;
  }
  .infoReview {
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
    & svg {
      width: 30px;
      height: 25px;
      color: #cdcdcd;
    }
  }
  .contentReview {
    padding-left: 10px;
    & h4 {
      font-size: 16px;
      font-weight: 500;
      color: #5c5c5c;
    },
    & span {
      line-height: 0.2;
      color: #777;
      font-size: 16px;
    }
  }
  .buttonRequest {
    width: 100%;
    margin-top: 35px;
    background-color: #424dc6;
  }
  .mainPA {
    display: flex;
    padding-bottom: 30px;
    border-bottom: 1px solid #f2f2f2;
  }
  .imagePA {
    width: 80px;
    height: 80px;
    margin-right: 20px;
    border-radius: 5px;
  }
  .boxTopPA {
    & a {
      font-size: 18px;
      font-weight: 600;
      color: #444;
    },
    & p {
      font-size: 16px;
      font-weight: 500;
    },
    & span {
      font-size: 14px;
      margin-left: 5px;
      font-weight: 400;
    },
  }
  .boxSkills {
    display: flex;
    margin-top: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 1px solid #f2f2f2;
    & button {
      cursor: pointer;
      border: none;
      padding: 8px 12px;
      font-size: 13px;
      border-radius: 3px;
      text-transform: capitalize;
      color: #5c5c5c;
      background: #e9e9e9;
      margin: 0 5px 5px 0;
      &:hover {
        background: #2d58af;
        color: #fff;
      }
    }
  }

  .boxAssistant {
    line-height: 0.8;
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
  }
  .titleAssistant {
    font-size: 20px;
    font-weight: 600;
    color: #444;
  }
  .verified {
    display: flex;
    align-items: center;
    margin: 20px 0 5px 0;
    & p {
      margin-left: 5px;
      font-size: 18px;
      color: #444;
    },
  }
  .review {
    margin-top: -10px;
    margin-bottom: 25px;
    font-size: 16px;
    color: #888;
  }
  .intro {
    margin-top: 15px;
    & p {
      font-size: 15px;
      color: #5c5c5c;
    }
  }
  .buttomSendMes {
    width: 100%;
    margin-top: 35px;
    
  }
  
  
  .cardItem {
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgb(0 0 50 / 25%);
    &:hover {
      box-shadow: 5px 10px 10px 2px rgb(0 0 50 / 25%);
      transform: translate(0, -7px);
      transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
    }
    @media only screen and (max-width: 480px) {
      padding: 25px 25px 30px;
    }
  }

  .content {
    padding: 20px;
  }

  .title {
    font-size: 36px;
    font-weight: 400;
    color: #fff;
    line-height: initial;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .boxInfo {
    display: flex;
    align-items: center;
    margin-top: 20px;
    & p {
      padding-left: 10px;
      color: #fff;
      font-size: 16;
    }
    ,
    & a {
      color: #ff9800;
    }
  }

  .text {
    > h2 {
      font-size: 17px;
      margin-bottom: -15px;
    }
    height: 90px;
    margin: 5px;
    font-size: 15px;
    line-height: 1.3;
    color: #5c5c5c;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
  .info {
    display: flex;
    align-items: center;
    color: #5c5c5c;
    & strong {
      font-size: 16px;
      font-weight: 500;
      margin-right: 5px;
      padding-bottom: 1px;
    }
  }
  .boxBtn {
    text-align: end;
    border-top: 1px dashed #cdcdcd;
    margin-top: 15px;
    padding-top: 20px;
  }
  button {
    padding: 10px 10px;
    display: flex;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.5);
    align-items: center;
    margin-right: 18px;
    border-radius: 5px;
    text-transform: capitalize;
  }
  .boxImage {
    position: relative;
    background: #fff;
    box-shadow: 0 0 20px rgb(0 0 0 / 5%);
    border-radius: 4px;
    margin-top: 50px;
    margin-bottom: 50px;
    &:hover {
      & button {
        display: block;
      },
      & img {
        padding: 5px 10px;
        transition: padding .5s ease-out;
      },
    },
    & img {
      padding: 10px 15px;
      object-fit: cover;
    },
    & div {
      display: flex;
      align-items: center;
      font-size: 14px;
      padding: 5px 10px;
      border-radius: 5px;
      textTransform: capitalize;
    }
  }
  .btnFull {
    display: none;
    position: absolute;
    right: 0%;
    top: 0%;
    color: #fff;
    cursor: pointer
  }
  .ItemCard {
    background: #fff;
    padding: 30px;
    box-shadow: 0 0 20px rgb(0 0 0 / 5%);
    border-radius: 4px;
    margin-bottom: 20px;
    .titleDes {
      font-size: 24px;
      font-weight: 500;
      color: #444;
      padding-bottom: 20px;
      border-bottom: 1px solid #f2f2f2;
      margin-bottom: 30px;
    }
    .description {
      line-height: 1.5;
      color: #5c5c5c;
      & h1, h2 {
        font-size: 24px;
        font-weight: 500;
        line-height: 1.3;
        text-transform: capitalize;
        margin: 20px 0;
      }
      & strong {
        line-height: 1.4;
        font-size: 16px;
        font-weight: 500;
        color: #5c5c5c;
      }
    }
  }
 
`;

export default WrapperServices;

export const ContainerServicesDT = styled.div`
  margin-top: -390px;
  margin-left: auto;
  margin-right: auto;

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      max-width: none !important;
    `};
  ${(props) =>
    (props.noGutter &&
      css`
        padding-left: 0;
        padding-right: 0;
      `) ||
    css`
      padding-left: 0px;
      padding-right: 0px;
    `};
  @media (min-width: 768px) {
    max-width: 750px;
    width: 100%;
  }
  @media (min-width: 992px) {
    max-width: 970px;
    width: 100%;
  }
  @media (min-width: 1220px) {
    max-width: ${(props) => props.width || "1324px"};
    width: 100%;
  }
  @media (max-width: 768px) {
    ${(props) =>
      props.mobileGutter &&
      css`
        padding-left: 30px;
        padding-right: 30px;
      `};
  }
  .ItemCardRelated {
    background: #fff;
    padding: 10px;
    box-shadow: 0 0 20px rgb(0 0 0 / 5%);
    border-radius: 4px;
    padding-bottom: 20px;
  }
  .titlerelated {
    font-size: 24px;
    font-weight: 500;
    color: #444;
    padding-bottom: 20px;
    border-bottom: 1px solid #f2f2f2;
    margin-bottom: 30px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;
export const GridServicesRelated = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: calc(100% / 4 - 34px);
    margin: 20px 17px 10px;

    @media only screen and (max-width: 1466px) {
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
      width: 100%;
      margin-top: 15px;
    }
  }
  .cardItem {
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgb(0 0 50 / 25%);
    &:hover {
      box-shadow: 5px 10px 10px 2px rgb(0 0 50 / 25%);
      transform: translate(0, -7px);
      transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
    }
    @media only screen and (max-width: 480px) {
      padding: 25px 25px 30px;
    }
  }

  .content {
    padding: 20px;
  }

  .title {
    margin-top: 0px;
    height: 52px;
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #444;
    line-height: 1.2;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    cursor: pointer;
  }
  .text {
    > h2 {
      font-size: 17px;
      margin-bottom: -15px;
    }
    height: 90px;
    font-size: 15px;
    line-height: 1.3;
    color: #5c5c5c;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
  .info {
    display: flex;
    align-items: center;
    color: #5c5c5c;
    & strong {
      font-size: 16px;
      font-weight: 500;
      margin-right: 5px;
      padding-bottom: 1px;
    }
  }
  .boxBtn {
    text-align: end;
    border-top: 1px dashed #cdcdcd;
    margin-top: 15px;
    padding-top: 20px;
  }
  button {
    padding: 5px 10px;
    border: 1px solid #2d58af;
  }
`;
