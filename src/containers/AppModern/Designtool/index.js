import React from "react";
import LoginForm from "./LoginForm";
import Modal from "./Modal";
import { Button } from "./pc.style";

const Designtool = () => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Start Selling</Button>
      <Modal show={show} onClose={() => setShow(false)}>
        <Modal.Header>Authentication Printcart dashboard</Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Designtool;
