import React from 'react'
import './css/main.css'
import Display from './Display'
import NewExpense from './NewExpense'

function Main() {
    return (
        <div className='main'>
            <div className='balance_info'>
        <p>Your Balance</p>
        <strong>5000 Rupee</strong>
        </div>
        {/* income expense */}
      <div className='expense_area'> 
       <NewExpense/>
        <Display/>
        </div>
        </div>
    )
}

export default Main
