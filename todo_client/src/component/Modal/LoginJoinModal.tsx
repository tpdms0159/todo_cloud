import React, { useState } from "react";
import ReactModal from "react-modal";
import { Button, MyReactModal } from "./LoginJoinModalStyle.tsx";
import InputComponent from "./InputComponent/InputComponent.tsx";

function LoginJoinModal() {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <ReactModal isOpen={modalOpen} style={MyReactModal}>
      <InputComponent loginOrJoin="login" />
      <Button>Login</Button>
      <Button>Login</Button>
    </ReactModal>
  );
}

export default LoginJoinModal;
