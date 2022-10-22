import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const SectionWrapperServices = styled.section`
  padding: 105px 0 75px;
  overflow: hidden;
  @media only screen and (max-width: 1440px) {
    padding: 50px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 0;
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

export const GridServices = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;

  > div {
    width: calc(100% / 5 - 34px);
    margin: 30px 17px 10px;

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
    padding: 5px 10px;
    border: 1px solid #2d58af;
  }
`;

export default SectionWrapperServices;

export const ContainerServices = styled.div`
  text-align: center;
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
      padding-left: 30px;
      padding-right: 30px;
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
    max-width: ${(props) => props.width || "1170px"};
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
