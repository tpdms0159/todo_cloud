import React from "react";
import * as S from "./TodoBoxStyle.tsx";
import { Wrapper } from "../../../CommonStyle.tsx";

function TodoBox() {
  return (
    <Wrapper style={{ width: "30%" }}>
      <S.TodoWrapper>
        <Wrapper padding="0" color="black">
          <S.Title>
            <S.StateCircle />
            title
          </S.Title>
          <S.Title justifyContent="right">hello</S.Title>
        </Wrapper>

        <Wrapper padding="0" color="black" style={{ alignItems: "center" }}>
          <S.SubBox>Done</S.SubBox>
          <S.Title justifyContent="right" border={true}>
            change
          </S.Title>
        </Wrapper>

        <Wrapper padding="0" color="black" style={{ alignItems: "center" }}>
          <S.SubBox>~2024.11.10</S.SubBox>
          <S.Title justifyContent="right" border={true}>
            change
          </S.Title>
        </Wrapper>
      </S.TodoWrapper>
    </Wrapper>
  );
}

export default TodoBox;
