import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

export const MyCalendar = styled(Calendar)`

.react-calendar{
    border: none;
    border-radius: 20px;
}
.react-calendar__navigation {
    border: none;

    span {
      font-size: 24px;
      font-weight: 600;
    }
} 

.react-calendar__navigation__next2-button,
.react-calendar__navigation__prev2-button{
    display: none;
}


// 날짜 부분
.react-calendar__viewContainer {
    border: none;
}
.react-calendar__tile abbr {
    color: rgba(74, 79, 90, 1);
}

.react-calendar__tile:enabled:hover,
.react-calendar__tile--active {
    background: rgba(294, 0, 4, 0.2);
    border-radius: 20px;
}


.react-calendar__tile:enabled:focus {
    background-color: rgba(294, 0, 4, 0.2);
    border-radius: 20px;
}

.react-calendar__tile--now {
    background-color: #95F4FF;
    border-radius: 20px;
}
`

export const SelectButton = styled.button`
    border: none;
    width: 50%;
    margin: 1rem;
    background-color: white;
    font-size: 1rem;
    border-radius: 20px;
    padding: 1rem;
    cursor: pointer;

    &:hover{
        background-color:  rgba(74, 79, 90, 0.5);
    }
`