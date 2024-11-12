import React, { useState } from 'react'
import ReactModal from 'react-modal'
import Calendar from 'react-calendar';
import { MyCalendar, SelectButton } from './DeadLineCalendarStyle.tsx';
import moment from 'moment';

// props
interface DeadLineCalendarProps {
    isOpen : boolean,
    changeDate: (title: string, data: string) => void;
    showCalendar: (value: boolean) => void;
}

function DeadLineCalendar({ isOpen, changeDate, showCalendar } : DeadLineCalendarProps) {
  const [value, setValue] = useState(new Date());

  // 사용자 -> 날짜 선택 -> value 값 변경
  const handleDateChange = (selectedDate) => {
    // showCalendar(false);
    setValue(selectedDate);
    changeDate("deadline", moment(selectedDate).format("YYYY년 MM월 DD일"));
  };

  // 달력 modal 닫기
  const okClick = () => {
    showCalendar(false);
  }

  return (
    <ReactModal isOpen={isOpen}>
        <MyCalendar
        formatDay={(locale, date) => moment(date).format('D')}
        showNeighboringMonth={false}
        onChange={handleDateChange}
        value={value}
        />

        <SelectButton onClick={okClick}>OK</SelectButton>
    </ReactModal>
  )
}

export default DeadLineCalendar