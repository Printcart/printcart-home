import styled, { css } from "styled-components";

const ContainerFAQ = styled.section`
  padding: 80px 0;
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  background-image: url(https://cmsmart.net/components/com_cmsmart/views/solution/images/bg-faq.jpg);
  background-size: cover;
`;
export default ContainerFAQ;

export const FAQHeader = styled.div`
  width: 100%;
  max-width: 1130px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  @media only screen and (max-width: 1440px) {
    padding-top: 57px;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 50px;
  }
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

  .questionLeft {
    width: 50%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 20px;
  }
  .questionRight {
    width: 50%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-left: 20px;
  }
  & p {
    color: #ddd;
    font-size: 18px;
    font-weight: 400;
  }

  .titlequestion {
    margin: 0;
    color: #fff;
    border-bottom: 1px dashed #707070;
    & > i {
      right: 0;
      color: #fff;
    }
  }
  .panel-title {
    font-size: 16px;
    font-weight: 400;
  }
  .collapsed {
    display: flex;
    cursor: pointer;
    line-height: 22px;
    text-decoration: none;
    position: relative;
    color: #fff;
    justify-content: space-between;
    padding-right: 20px;
    &:hover {
      color: #f7931e;
    }
  }
`;
