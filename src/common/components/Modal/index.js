import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  StyleModal,
  StyleModalBody,
  //   StyleModalHeader,
  StyleModalOverlay,
} from "./modal.style";

const Modal = ({ show, onClose, children, title, Image }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <StyleModalOverlay>
      <StyleModal>
        {/* <StyleModalHeader> */}
        {/* <img style={{ width: "1050px", height: "550px" }} src={Image} /> */}
        {/* </StyleModalHeader> */}
        <StyleModalBody>
          <img style={{ width: "1050px", height: "550px" }} src={Image} />
          {children}
        </StyleModalBody>
      </StyleModal>
    </StyleModalOverlay>
  ) : null;
  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("wrapper-modal")
    );
  } else {
    return null;
  }
};
export default Modal;
