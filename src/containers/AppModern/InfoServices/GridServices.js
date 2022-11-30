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
  .title-related {
    font-weight: 500;
    color: #5c5c5c;
    margin: 0 40px;
    padding-top: 20px;
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
    & h2 {
      font-size: 17px;
      margin-bottom: -15px;
    }
    & strong {
      line-height: 1.2;
      font-size: 17px;
      margin-bottom: -15px;
    }
    & p {
      line-height: 1.2;
      font-size: 17px;
      margin-bottom: -15px;
    }
    & ul {
      line-height: 1.2;
      font-size: 17px;
      padding: 16px;
      margin-left: -16px;
    }
    height: 80px;
    font-size: 17px;
    color: #5c5c5c;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .avataruser {
    display: flex;
    align-items: center;
    & img {
      border-radius: 5px;
      margin-right: 10px;
      border: 1px solid #cdcdcd;
      width: 40px;
      height: 40px;
    }
  }
  .info {
    display: flex;
    align-items: center;
    color: #5c5c5c;
    display: -webkit-box;

    & strong {
      font-size: 16px;
      font-weight: 500;
      margin-right: 3px;
      padding-bottom: 1px;
    }
    & p {
      font-size: 16px;
    }
  }
  .infodate {
    display: flex;
    align-items: center;
    color: #5c5c5c;
    display: -webkit-box;

    & strong {
      font-size: 16px;
      font-weight: 500;
      margin-right: 3px;
      padding-bottom: 1px;
    }
    & p {
      font-size: 16px;
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
    max-width: 900px;
    width: 100%;
  }
  @media (min-width: 992px) {
    max-width: 1220px;
    width: 100%;
  }
  @media (min-width: 1220px) {
    max-width: ${(props) => props.width || "100%"};
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
  .containerServices {
    margin: 0 aut;
    display: flex;
    flex-wrap: wrap;
  }
  .choice {
    display: flex;
    background: #2d58af;
    border: 1px solid #2d58af;
    color: #fff;
    height: 27px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 10px;
    font-size: 16px;
    text-transform: capitalize;
  }
  .btncategory {
    border: 1px solid #cdcdcd;
    height: 27px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 10px;
    font-size: 16px;
    color: #5c5c5c;
    font-weight: 500;
    text-transform: capitalize;
    &:hover {
      color: #fff;
      background: #2d58af;
      border: 1px solid #2d58af;
    }
  }
  .space {
    background: #cdcdcd;
    width: 2px;
    height: 27px;
    margin-right: 15px;
    margin-left: 5px;
  }
  .mainbred {
    display: flex;
    font-size: 18px;
    margin-bottom: 30px;
    align-items: center;
    justify-content: space-between;
  }
  .breadcome {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    .text {
      color: #5c5c5c;
    }
    & a,
    & span {
      display: flex;
      align-items: flex-end;
      white-space: nowrap;
      font-size: 16;
      text-transform: capitalize;
      margin: 0 5px;
    }
    & a:hover {
      color: #2d58af;
      text-decoration: underline;
    }
    & svg {
      margin: 0 5px 0 0;
      width: 30px;
      height: 35px;
    }
  }
  .boxButton {
    display: flex;
    align-items: center;
    & div {
      margin: unset;
    }
  }
  .shareone {
    display: flex;
    justify-content: space-between;
    width: 210px;
    margin-top: 10px;
    & button,
    & svg {
      width: 30px;
      height: 35px;
      border-radius: 7px;
    }
  }
  .notify {
    display: flex;
    font-size: 18px;
    color: #5c5c5c;
    margin-top: 10px;
    & svg {
      width: 20px;
      height: 25px;
      color: red;
  }
`;
