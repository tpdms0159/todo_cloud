import React from "react";
import ReactModal from "react-modal";
import { MyReactModal } from "../Login/LoginJoinModalStyle.tsx";
import NewTodoInputComponent from "./NewTodoInputComponent.tsx";
import useModalStore from "../../../variable/useModalStore.tsx";
import { AfterCloseModal } from "../AfterCloseModal.tsx";

function NewTodoModal() {
  const { newTodoState, setNewTodoState } = useModalStore((state) => state);
  return (
    <ReactModal
      isOpen={newTodoState}
      style={MyReactModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => {
        setNewTodoState(false);
        AfterCloseModal();
      }}
    >
      <NewTodoInputComponent />
    </ReactModal>
  );
}

export default NewTodoModal;
