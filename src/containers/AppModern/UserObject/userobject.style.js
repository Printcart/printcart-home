import styled, { css } from "styled-components";

const ContainerUO = styled.section`
  margin-right: auto;
  margin-left: auto;
  padding: 48px 32px;
  border-bottom: 1px solid #e3e3e3;
  background: #f4f7f8;
  @media only screen and (min-width: 1400px) {
    width: 1294px;
  }
  .titleuser {
    color: #fff;
    background: #4385f2;
    padding-bottom: 30px;
    font-weight: 700;
    font-size: 35px;
    line-height: 48px;
    text-align: center;
  }
`;
export default ContainerUO;

export const StepProject = styled.div`
  padding-left: 25px;
  border-left: 4px solid #999;
  color: #999;
  font-weight: 600;
  & p {
    line-height: 25px;
    font-size: 20px;
  }
`;
