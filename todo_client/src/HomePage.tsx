import React from "react";
import Header from "./component/header/Header.tsx";
import MonthTitle from "./component/MonthTitle/MonthTitle.tsx";
import DateFilter from "./component/DateFilter/DateFilter.tsx";
import TodoArea from "./component/TodoArea/TodoArea.tsx";
import LoginJoinModal from "./component/Modal/Login/LoginJoinModal.tsx";
import NewTodoModal from "./component/Modal/NewTodo/NewTodoModal.tsx";
import DetailTodoModal from "./component/Modal/DetailTodo/DetailTodoModal.tsx";

function HomePage() {
  return (
    <div>
      <Header />
      <MonthTitle />
      <DateFilter />
      {/* date */}
      <TodoArea />
      {/* todo area */}

      <LoginJoinModal/>
      <NewTodoModal />
      <DetailTodoModal/>
      
    </div>
  );
}

export default HomePage;
