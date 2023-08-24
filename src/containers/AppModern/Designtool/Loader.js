import styled from "styled-components";

const StyleLoaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyleLoader = styled.div`
  width: 60px;
  height: 60px;
  min-height: 100px;
  ::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border-top: 2px solid #424dc6;
    border-right: 2px solid transparent;
    animation: spinner 0.8s linear infinite;
  }
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

const StyleLoaderLabel = styled.span`
  text-transform: capitalize;
  color: #6b6b6f;
  font-weight: 500;
`;

const Loader = (props) => {
  const { label } = props;

  return (
    <StyleLoaderWrap>
      <StyleLoader class="loader" />
      {label && <StyleLoaderLabel>{label}</StyleLoaderLabel>}
    </StyleLoaderWrap>
  );
};

export default Loader;
