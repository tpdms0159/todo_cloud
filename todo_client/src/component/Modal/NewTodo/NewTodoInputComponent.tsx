import React, { useState } from 'react'
import { Wrapper } from '../../../CommonStyle.tsx'
import { Input, Label, NewTodoWrapper, TextArea, Title } from './NewTodoInputComponentStyle.tsx'
import { Button } from '../Login/InputComponent/InputComponentStyle.tsx'
import DeadLineCalendar from './Calendar/DeadLineCalendar.tsx';
import postSaveApi from '../../../API/postSaveApi.tsx';
import useModalStore from '../../../variable/useModalStore.tsx';
import useAuthStore from '../../../variable/useAuthStore.tsx';

function NewTodoInputComponent() {
  const { username } = useAuthStore(state=>state);
  const { setNewTodoState} = useModalStore(state=>state);
  const [todo, setTodo] = useState({username: username, title: "", text: "", deadline: ""});
  const [showCalendar, setShowCalendar] = useState(false);

  const onChange = (label: string, data: string) => {
    if (label == "title") {setTodo({...todo, title: data})}
    else if (label == "text") {setTodo({...todo, text: data})}
    else if (label == "deadline") {setTodo({...todo, deadline: data})}
  }

  const clickDeadLine = () => {
      setShowCalendar(!showCalendar);
  }

  const saveClick = () => {
    postSaveApi(todo)
    .then((res) => setNewTodoState(false))
    .catch((err) => console.log(err));
  }
  return (
    <NewTodoWrapper>
        <Title>CREATE TODO</Title>
        <Label>Title</Label>
        <Input placeholder='할 일을 간단하게 작성해주세요.'
        onChange={(e) => onChange("title", e.target.value)}/>

        <Label>Text</Label>
        <TextArea placeholder='할 일을 작성해주세요.'
        onChange={(e) => onChange("text", e.target.value)}/>

        <Label>DeadLine</Label>
        <Input placeholder='마감일을 선택해주세요.' 
        onClick={clickDeadLine}
        value={todo.deadline}
        readOnly/>
        <DeadLineCalendar 
        isOpen={showCalendar} changeDate={onChange}
        showCalendar={setShowCalendar}/>

        <NewTodoWrapper style={{width:"100%", alignItems:"center"}}>
            <Button onClick={saveClick}>SAVE</Button>
        </NewTodoWrapper>
        
        
    </NewTodoWrapper>
  )
}

export default NewTodoInputComponent