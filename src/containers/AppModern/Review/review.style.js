import styled, { css } from "styled-components";

const ContainerReview = styled.section`
  padding: 60px 0;
  background: #edf2f1;
  overflow: hidden;
  display: block;
  clear: both;
`;
export default ContainerReview;

export const ContainerChild = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 0 30px;
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 130%;
    text-align: center;
    letter-spacing: -0.03em;
    color: #3342aa;
    display: block;
    margin-bottom: 20px;
  }
  .desc {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    color: #555;
    margin: 0 auto 80px;
  }
`;
export const GridReviews = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;

  > div {
    width: calc(100% / 6 - 34px);
    margin: 30px 17px 10px;

    @media only screen and (max-width: 1400px) {
      width: calc(100% / 6 - 34px);
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
  .image {
    display: inline-block;
    height: 117px;
  }
`;
