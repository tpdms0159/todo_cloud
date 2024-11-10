import React from "react";
import TodoBox from "./TodoBox/TodoBox.tsx";
import { Wrapper } from "../../CommonStyle.tsx";
import { TodoAreaWrapper } from "./TodoAreaStyle.tsx";

function TodoArea() {
  return (
    <TodoAreaWrapper>
      <TodoBox />
      <TodoBox />
      <TodoBox />
      <TodoBox />
      <TodoBox />
      <TodoBox />
      <TodoBox />
      <TodoBox />
    </TodoAreaWrapper>
  );
}

export default TodoArea;
