import React, { useState } from "react";
import ReactModal from "react-modal";
import useModalStore from "../../../variable/useModalStore.tsx";
import { MyReactModal } from "../Login/LoginJoinModalStyle.tsx";
import {
  Button,
  InfoBox,
  InfoWrapper,
  TextWrapper,
  Title,
  TitleButtonWrapper,
} from "./DetailTodoModalStyle.tsx";
import useNowTodo from "../../../variable/useNowTodo.tsx";
import useAuthStore from "../../../variable/useAuthStore.tsx";
import PostUpdateApi from "../../../API/PostUpdateApi.tsx";
import PostDeleteApi from "../../../API/PostDeleteApi.tsx";
import { AfterCloseModal } from "../AfterCloseModal.tsx";

function DetailTodoModal() {
  const { detailTodoState, setDetailTodoState } = useModalStore(
    (state) => state
  );
  const { username } = useAuthStore((state) => state);
  const { id, title, text, state, deadline, setTitle, setText } = useNowTodo(
    (state) => state
  );
  const [updateTodo, setUpdateTodo] = useState({
    id: id,
    username: username,
    title: title,
    text: text,
    state: state,
    deadline: deadline,
  });
  const [deleteTodo, setDeleteTodo] = useState({
    id: id,
    username: username,
  });
  const clickSave = () => {
    PostUpdateApi(updateTodo)
      .then((res) => setDetailTodoState(false))
      .catch((err) => console.log(err));
  };

  const clickDelete = () => {
    console.log(deleteTodo);
    PostDeleteApi(deleteTodo)
      .then((res) => setDetailTodoState(false))
      .catch((err) => console.log(err));
  };

  const onChagneText = (text) => {
    setUpdateTodo({ ...updateTodo, text: text });
    setText(text);
  };
  return (
    <ReactModal
      isOpen={detailTodoState}
      style={MyReactModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setDetailTodoState(false)}
      onAfterClose={() => AfterCloseModal}
    >
      {/* title */}
      <TitleButtonWrapper>
        <Title>{title}</Title>
        <InfoWrapper>
          <InfoBox>{state}</InfoBox>
          <InfoBox>
            ~{deadline?.substring(0, 4)}-{deadline?.substring(6, 8)}-
            {deadline?.substring(10, 12)}
          </InfoBox>
        </InfoWrapper>
      </TitleButtonWrapper>

      {/* text */}
      <TextWrapper onChange={(e) => onChagneText(e.target.value)}>
        {text}
      </TextWrapper>

      {/* upate, delete 버튼 */}
      <TitleButtonWrapper style={{ border: "none" }}>
        <Button onClick={clickSave}>SAVE</Button>
        <Button onClick={clickDelete}>DELETE</Button>
      </TitleButtonWrapper>
    </ReactModal>
  );
}

export default DetailTodoModal;
