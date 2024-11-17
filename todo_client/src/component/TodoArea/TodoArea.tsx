import React, { useEffect, useState } from "react";
import TodoBox from "./TodoBox/TodoBox.tsx";
import { Wrapper } from "../../CommonStyle.tsx";
import { TodoAreaWrapper } from "./TodoAreaStyle.tsx";
import GetTodoApi from "../../API/GetTodoApi.tsx";
import useAuthStore from "../../variable/useAuthStore.tsx";
import useModalStore from "../../variable/useModalStore.tsx";

interface todoInterface {
  id: string;
  username: string;
  title: string;
  text: string;
  state: string;
  deadline: string;
}
function TodoArea() {
  const { username } = useAuthStore((state) => state);
  const { modalClose } = useModalStore((state) => state);

  const [todos, setTodos] = useState<todoInterface[]>();
  //  todo 가져오기
  // username, deadline 기준으로 가져오기

  useEffect(() => {
    GetTodoApi(username, "2024년 1월 11일")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));

    console.log("todo area useEffect");
  }, [sessionStorage.getItem("closeModal")]);
  return (
    <TodoAreaWrapper>
      {todos &&
        todos.map((data, ind) => {
          return <TodoBox todoInfo={data} key={ind} />;
        })}
    </TodoAreaWrapper>
  );
}

export default TodoArea;
