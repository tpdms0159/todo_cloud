import React, { useState } from "react";
import ReactModal from "react-modal";
import { MyReactModal } from "./LoginJoinModalStyle.tsx";
import InputComponent from "./InputComponent/InputComponent.tsx";

interface LoginJoinModalProps {
  loginOrJoin : string
}

function LoginJoinModal({loginOrJoin} : LoginJoinModalProps) {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <ReactModal isOpen={modalOpen} style={MyReactModal}>
      <InputComponent loginOrJoin={loginOrJoin} setModal={setModalOpen} />
    </ReactModal>
  );
}

export default LoginJoinModal;
