import styled from "styled-components";
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
`;

export const GridServices = styled.div`
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    width: calc(100% / 5 - 34px);
    margin: 38px 0 30px;
    @media only screen and (max-width: 1366px) {
      width: calc(100% / 5 - 30px);
    }
    @media only screen and (max-width: 991px) {
      width: calc(100% / 2 - 30px);
    }
    @media only screen and (max-width: 767px) {
      width: calc(100% / 2 - 15px);
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
      margin-top: 15px;
    }
  }
  .cardItem {
    border-radius: 5;
    box-shadow: "0 0px 10px 0 rgb(0 0 50 / 22%)";
    "&:hover": {
      box-shadow: "5px 10px 10px 2px rgb(0 0 50 / 25%)";
      transform: "translate(0,-7px)";
      transition: "box-shadow .3s ease-out, transform .3s ease-out";
    }
    @media only screen and (max-width: 480px) {
      padding: 25px 25px 30px;
    }

    &:hover {
      box-shadow: 0 10px 50px rgba(38, 78, 118, 0.1);
    }

    .card-footer {
      display: flex;
      align-items: center;
      margin-top: 33px;
      @media only screen and (max-width: 480px) {
        align-items: flex-start;
        margin-top: 30px;
      }
    }
    .content {
      padding: 20px;
    }

    .title {
      height: 52px;
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 10px;
      color: '#444';
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      webkit-box-orient: vertical;
      webkit-line-clamp: 2px;
    }
    .text {
      height: 96px;
      font-size: 16px;
      line-height: 1.3;
      color: #5c5c5c;
      margin-bottom: 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      webkit-box-orient: vertical;
      webkit-line-clamp: 3px;
    }
    .info {
      display: flex;
      align-items: center;
      color: #5c5c5c;
      "& strong": {
        font-size: 14px;
        font-weight: 500px;
      }
      "& p": {
        font-size: 14px;
        margin-left: 5px;
        font-weight: 300px;
        padding-bottom: 1px;
      }
    }
    .boxBtn {
      text-align: end;
      border-top: 1px dashed #cdcdcd;
      margin-top: 15px;
      padding-top: 20px;
    }
`;

export default SectionWrapperServices;
