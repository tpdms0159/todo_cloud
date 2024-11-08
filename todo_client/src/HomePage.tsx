import React from 'react'
import Header from './component/header/Header.tsx'
import MonthTitle from './component/MonthTitle/MonthTitle.tsx'
import DateFilter from './component/DateFilter/DateFilter.tsx'
import TodoBox from './component/TodoBox/TodoBox.tsx'

function HomePage() {
  return (
    <div>
        <Header/>
        <MonthTitle/>
        <DateFilter/>
        {/* date */}
        <TodoBox/>
        {/* todo area */}
    </div>
  )
}

export default HomePage