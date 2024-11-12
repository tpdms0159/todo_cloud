import React, { useState } from "react";
import ReactModal from "react-modal";
import { MyReactModal } from "./LoginJoinModalStyle.tsx";
import InputComponent from "./InputComponent/InputComponent.tsx";
import useModalStore from "../../../variable/useModalStore.tsx";

function LoginJoinModal() {
  const {loginState, joinState, setLoginState, setJoinState} = useModalStore(state=>state);
  const loginOrJoin = loginState && joinState ? "join" : "login";

  console.log("login state:" , loginState);

  return (
    <ReactModal 
    isOpen={loginState || joinState} 
    style={MyReactModal}
    shouldCloseOnOverlayClick={true}
    onRequestClose={()=> {setLoginState(false) ; setJoinState(false)}}>
      <InputComponent loginOrJoin={loginOrJoin} />
    </ReactModal>
  );
}

export default LoginJoinModal;
