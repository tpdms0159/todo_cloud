import React from "react";
import * as S from "./TodoBoxStyle.tsx";
import { Wrapper } from "../../../CommonStyle.tsx";
import useModalStore from "../../../variable/useModalStore.tsx";
import ChangeModal from "../../Modal/ChangeModal/ChangeModal.tsx";
import useNowTodo from "../../../variable/useNowTodo.tsx";

function TodoBox(todoInfo) {
  const { setDetailTodoState, setChangeState } = useModalStore(
    (state) => state
  );

  const { setId, setTitle, setText, setState, setDeadline } = useNowTodo(
    (state) => state
  );
  todoInfo = todoInfo.todoInfo;

  // console.log(todoInfo);

  const onMore = () => {
    // modal 열기
    setDetailTodoState(true);
    // data 저장하기
    setId(todoInfo.id);
    setTitle(todoInfo.title);
    setText(todoInfo.text);
    setState(todoInfo.state);
    setDeadline(todoInfo.deadline);
  };
  const onChange = () => {
    setChangeState(true);
  };

  // todo list 가져오기
  // username, 선택된 날짜 기준으로 가져오기
  return (
    <Wrapper style={{ width: "25%" }}>
      <S.TodoWrapper>
        <Wrapper padding="0" color="black">
          <S.Title>
            <S.StateCircle />
            {todoInfo.title}
          </S.Title>
          <S.Title justifyContent="right" onClick={onMore}>
            more
          </S.Title>
        </Wrapper>

        <Wrapper padding="0" color="black" style={{ alignItems: "center" }}>
          <S.SubBox>{todoInfo.state}</S.SubBox>
          <S.Title justifyContent="right" border={true} onClick={onChange}>
            change
          </S.Title>
          <ChangeModal />
        </Wrapper>

        <Wrapper padding="0" color="black" style={{ alignItems: "center" }}>
          <S.SubBox>~2024.11.10</S.SubBox>
          <S.Title justifyContent="right" border={true} onClick={onChange}>
            change
          </S.Title>
        </Wrapper>
      </S.TodoWrapper>
    </Wrapper>
  );
}

export default TodoBox;
