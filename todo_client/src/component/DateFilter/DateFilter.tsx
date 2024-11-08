import React, { useState } from 'react'
import { engDay } from '../Datas.tsx';
import { Wrapper } from '../../CommonStyle.tsx'
import * as S from './DateFilterSytle.tsx'

function DateFilter() {
    const date = new Date();
    const today = date.getDate();
    const day = date.getDay();
    const maximum = [0,1,2,3,4,5,6,7,8,9,10];
    const [selectDate, setSelectDate] = useState(today);


    console.log(selectDate);

    const changeSelecDate = (date) => {
        setSelectDate(date);

    }
  return (
    <Wrapper padding='0 10rem'>
        {maximum.map((data, ind) => {
            const showDate = today + data;
            const showDay = (day + data) % 7;
            return(
                <S.OneDateWrapper selectNow={ showDate === selectDate} key={ind}
                onClick={() => changeSelecDate(showDate)}>
                    <S.DateText>{showDate}</S.DateText>
                    <S.DateText>{engDay[showDay].eng}</S.DateText>
                </S.OneDateWrapper>

            )
        })}
    </Wrapper>
  )
}

export default DateFilter