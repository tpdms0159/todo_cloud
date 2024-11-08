import React from 'react'
import * as S from './TodoBoxStyle.tsx'
import { Wrapper } from '../../CommonStyle.tsx'

function TodoBox() {
  return (
    <Wrapper padding='5rem 10rem'>
    <S.TodoWrapper>
        <S.Title>title</S.Title>
        <S.SubBox>Done</S.SubBox>
        <S.SubBox>~2024.11.10</S.SubBox>

    </S.TodoWrapper>
    </Wrapper>
  )
}

export default TodoBox