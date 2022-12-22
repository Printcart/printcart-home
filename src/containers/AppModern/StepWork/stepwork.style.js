import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const StepworkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
  > div {
    width: calc(100% / 3 - 34px);
    margin: 30px 17px 10px;

    @media only screen and (max-width: 1400px) {
      width: calc(100% / 3 - 34px);
    }
    @media only screen and (max-width: 1200px) {
      width: calc(100% / 2 - 34px);
    }
    @media only screen and (max-width: 991px) {
      width: calc(100% / 1 - 34px);
    }
    @media only screen and (max-width: 767px) {
      width: calc(100% / 1 - 34px);
      justify-content: space-between;

    }
    @media only screen and (max-width: 594px) {
      width: 100%;
      margin-top: 15px;
    }
  }
  .container {
    text-align: center;
    color: #1e3d71;
  }
`;
export default StepworkWrapper;
