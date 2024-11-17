import React, { useState } from "react";
import ReactModal from "react-modal";
import { MyReactModal } from "../Login/LoginJoinModalStyle.tsx";
import {
  SelectText,
  State,
  StateLineWapper,
  StateWrapper,
} from "./ChangeModalStyle.tsx";
import useModalStore from "../../../variable/useModalStore.tsx";
import { Button } from "../DetailTodo/DetailTodoModalStyle.tsx";
import PostUpdateApi from "../../../API/PostUpdateApi.tsx";
import useNowTodo from "../../../variable/useNowTodo.tsx";
import useAuthStore from "../../../variable/useAuthStore.tsx";
import { AfterCloseModal } from "../AfterCloseModal.tsx";

function ChangeModal() {
  const { changeState, setChangeState } = useModalStore((state) => state);
  const { username } = useAuthStore((state) => state);
  const { id, title, text, state, deadline } = useNowTodo((state) => state);
  const [focusState, setFocusState] = useState({
    done: false,
    running: false,
    delay: false,
  });
  const [updateData, setUpdateData] = useState({
    id: id,
    username: username,
    title: title,
    text: text,
    state: state,
    deadline: deadline,
  });

  const changeFocus = (state: string) => {
    setUpdateData({ ...updateData, state: state });
    if (state == "done") {
      setFocusState({
        ...focusState,
        done: true,
        running: false,
        delay: false,
      });
    } else if (state === "running") {
      setFocusState({
        ...focusState,
        done: false,
        running: true,
        delay: false,
      });
    } else if (state === "delay") {
      setFocusState({
        ...focusState,
        done: false,
        running: false,
        delay: true,
      });
    }
  };

  // ok 버튼
  const clickOk = async () => {
    // 수정 api
    PostUpdateApi(updateData)
      .then((res) => setChangeState(false))
      .catch((err) => console.log(err));
  };
  return (
    <ReactModal
      isOpen={changeState}
      style={MyReactModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setChangeState(false)}
      onAfterClose={AfterCloseModal}
    >
      <StateWrapper>
        <StateLineWapper
          onFocus={focusState.done}
          onClick={() => changeFocus("done")}
        >
          <SelectText>Todo 완료한 상태</SelectText>
          <SelectText> :: </SelectText>
          <State backgroundColor="rgba(3,210, 40, 0.5)"> DONE </State>
        </StateLineWapper>

        <StateLineWapper
          onFocus={focusState.running}
          onClick={() => changeFocus("running")}
        >
          <SelectText>Todo 진행중인 상태</SelectText>
          <SelectText> :: </SelectText>
          <State backgroundColor="rgba(3,120,248, 0.5)"> RUNNING </State>
        </StateLineWapper>

        <StateLineWapper
          onFocus={focusState.delay}
          onClick={() => changeFocus("delay")}
        >
          <SelectText>Todo 일정상 보류 상태</SelectText>
          <SelectText> :: </SelectText>
          <State backgroundColor="rgba(255, 191, 0, 0.5)"> DELAY </State>
        </StateLineWapper>

        <Button onClick={clickOk}>OK</Button>
      </StateWrapper>
    </ReactModal>
  );
}

export default ChangeModal;
