import styled, { css } from "styled-components";

const ContainerWrapper = styled.div`
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
      padding-left: 90px;
      padding-right: 90px;
    `};
  @media (min-width: 768px) {
    max-width: 992px;
    width: 100%;
  }
  @media (min-width: 992px) {
    max-width: 1192px;
    width: 100%;
  }
  @media (min-width: 1200px) {
    max-width: ${(props) => props.width || "1366px"};
    width: 100%;
  }
  @media (max-width: 768px) {
    max-width: 750px;
    width: 100%;
    ${(props) =>
      props.mobileGutter &&
      css`
        padding-left: 90px;
        padding-right: 90px;
      `};
  }
`;

export default ContainerWrapper;
