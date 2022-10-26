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

  .contentMain {
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
  padding: 20px;
  display: flex;

  > div {
    width: calc(100% / 2 + 205px);

    @media only screen and (max-width: 1466px) {
      width: calc(100% / 2 - 34px);
    }
    @media only screen and (max-width: 1200px) {
      width: calc(100% / 2 - 34px);
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
      padding: 10px 20px;
      object-fit: cover;
    },
    & div {
      display: flex;
      align-items: center;
      font-size: 14px;
      padding: 5px 10px;
      border-radius: 5px;
      margin-right: 8px;
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
`;
