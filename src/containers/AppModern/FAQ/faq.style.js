import styled, { css } from "styled-components";
import bgImage from "../../../common/assets/image/bg-faq.jpg";

const ContainerFAQ = styled.section`
  padding: 80px 0;
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  background-image: url(${bgImage?.src});
  background-size: cover;
  .FAQquestion {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }
  .questionLeft {
    width: 50%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 30px;
    @media (max-width: 992px) {
      width: 100%;
      padding: 16px 0;
    }
  }
  .questionRight {
    width: 50%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-left: 30px;
    @media (max-width: 992px) {
      width: 100%;
      padding: 16px 0;
    }
  }
  & p {
    color: #ddd;
    font-weight: 400;
  }
  .panel-default {
    margin-bottom: 20px;
  }
  .titlequestion {
    margin: 0;
    color: #fff;

    & > i {
      right: 0;
      color: #fff;
    }
  }
  .panel-title {
    background: transparent;
    border: aliceblue;
    width: 100%;
    font-size: 16px;
    padding: 0;
    font-weight: 400;
    border-bottom: 1px dashed #707070;
  }
  .collapsed {
    display: flex;
    align-items: end;
    cursor: pointer;
    line-height: 22px;
    text-decoration: none;
    position: relative;
    color: #fff;
    justify-content: space-between;
    &:hover {
      color: #f7931e;
    }
  }

  & span {
    color: #ddd !important;
    background: transparent !important;
    font-weight: 400;
  }
`;
export default ContainerFAQ;

export const FAQHeader = styled.div`
  width: 100%;
  max-width: 1130px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  .containerSlogan {
    max-width: 1130px;
    margin-left: auto;
    margin-right: auto;
  }
  .titleSlogan {
    color: #ddd;
    font-size: 30px;
    text-transform: uppercase;
    margin: 0 auto 15px;
    text-align: center;
    font-weight: 700;
    max-width: 750px;
  }
  .faq {
    color: #ddd;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    margin: 20px 0 50px;
  }
`;
