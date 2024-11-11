import React from 'react'
import { Wrapper } from '../../../CommonStyle.tsx'
import { Input, Label, NewTodoWrapper, TextArea, Title } from './NewTodoInputComponentStyle.tsx'
import { Button } from '../Login/InputComponent/InputComponentStyle.tsx'

function NewTodoInputComponent() {
  return (
    <NewTodoWrapper>
        <Title>CREATE TODO</Title>
        <Label>Title</Label>
        <Input placeholder='할 일을 간단하게 작성해주세요.'/>
        <Label>Text</Label>
        <TextArea placeholder='할 일을 작성해주세요.'/>
        <Label>DeadLine</Label>

        <NewTodoWrapper style={{width:"100%", alignItems:"center"}}>
            <Button>SAVE</Button>
            </NewTodoWrapper>
        
        
    </NewTodoWrapper>
  )
}

export default NewTodoInputComponent