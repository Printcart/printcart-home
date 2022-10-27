import styled from "styled-components";

export const StyleModalBody = styled.div`
  padding-top: 10px;
  .boxClose {
    position: absolute;
    width: 40px;
    background: none;
    height: 35px;
    color: #fff;
    border: none;
    cursor: pointer;
    min-width: unset;
    &:hover {
      background: #919191eb;
    }
  }
  .boxModal {
    position: absolute;
    top: 211px;
    left: 1461px;
    transform: translate(-50%, -50%);
    &:focus-visible {
      outline: unset;
    }
  }
`;
// export const StyleModalHeader = styled.div`
//   position: absolute;
//   display: flex;
//   justify-content: center;
// `;
export const StyleModal = styled.div`
  width: 1032px;
  height: 682px;
  border-radius: 15px;
  padding: 15px;
`;
export const StyleModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #efefefc7;
`;
