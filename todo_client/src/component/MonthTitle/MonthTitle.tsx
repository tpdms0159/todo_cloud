import React from 'react'
import { Wrapper } from '../../CommonStyle.tsx';
import * as S from './MonthTitleStyle.tsx';
import {engMonth} from '../Datas.tsx';

function MonthTitle() {
    const date = new Date();
    const month = date.getMonth();
    
  return (
    <Wrapper justifyContent='center' padding='1rem'>
        <S.Title>{engMonth[month].eng}</S.Title>
    </Wrapper>
  )
}

export default MonthTitle;