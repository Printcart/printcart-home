import React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import IconClose from "./IconClose";

const animatetop = keyframes`
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
`;

const StyleModalOverlay = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 99999;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  overflow: auto;
  overscroll-behavior-y: none;
  background-color: rgba(0, 0, 0, 0.48);
`;

const StyleModal = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  outline: transparent solid 2px;
  outline-offset: 2px;
  border-radius: 10px;
  color: inherit;
  z-index: 99999;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  width: 448px;
  animation-name: ${animatetop};
  animation-duration: 0.4s;
  &.isFull {
    width: 100vw;
    height: 100vh;
  }
`;

const StyleButonClose = styled.button`
  outline: transparent solid 2px;
  outline-offset: 2px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  position: absolute;
  top: 8px;
  right: 12px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  :hover {
    background-color: #cfcfcf;
  }
  &.iConLeft {
    right: 100%;
    left: 20px;
  }
`;

const StyleModalBody = styled.div`
  padding-inline-start: 24px;
  padding-inline-end: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  flex: 1 1 0%;
`;

const StyleModalHeader = styled.div`
  display: flex;
  flex: 0 1 0%;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
  padding-inline-end: 24px;
  padding-inline-start: 24px;
`;

const StyleModalFooter = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding-inline-start: 24px;
  padding-inline-end: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const Header = (props) => {
  const { children } = props;

  return <StyleModalHeader>{children}</StyleModalHeader>;
};

const Footer = (props) => {
  const { children } = props;

  return <StyleModalFooter>{children}</StyleModalFooter>;
};

const Body = (props) => {
  const { children } = props;

  return <StyleModalBody>{children}</StyleModalBody>;
};

const Modal = (props) => {
  const { show, onClose, children, isFullScreen, showClose } = props;
  const [isBrowser, setIsBrowser] = React.useState(show);
  const modalRef = React.useRef(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      let wrapperModal = document.getElementById("wrapper-modal");

      if (!wrapperModal) {
        wrapperModal = document.createElement("div");
        wrapperModal.setAttribute("id", "wrapper-modal");
        document.body.append(wrapperModal);
      }
    }
  }, []);

  React.useEffect(() => {
    setIsBrowser(show);

    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // const handleOutsideClick = (e) => {
    //   if (modalRef.current && !modalRef.current.contains(e.target)) {
    //     onClose && onClose(e);
    //     setIsBrowser(false);
    //   }
    // };

    // if (modalRef) {
    //   document.addEventListener("click", handleOutsideClick, false);
    // }

    // return () => {
    //   document.removeEventListener("click", handleOutsideClick);
    // };
  }, [show]);

  const modalContent = (
    <StyleModalOverlay>
      <StyleModal ref={modalRef} className={isFullScreen ? "isFull" : ""}>
        {showClose && (
          <StyleButonClose
            className={isFullScreen ? "iConLeft" : ""}
            onClick={(e) => {
              setIsBrowser(false);
              onClose && onClose(e);
            }}
          >
            <IconClose />
          </StyleButonClose>
        )}
        {children}
      </StyleModal>
    </StyleModalOverlay>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("wrapper-modal")
    );
  } else {
    return null;
  }
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
