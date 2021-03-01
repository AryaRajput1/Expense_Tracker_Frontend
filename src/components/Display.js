import React from 'react'
import Card from './Card'
import './css/display.css'

function Display() {
    return (
        <div className='display_history'>
            <p>Expense - Income History</p>
            <div className='history'>
                {/* expense-income box */}
                <Card income amount='5000' note='saving'/>
                <Card amount='2500' note='momo'/>
                <Card amount='20' note='tea'/>
            </div>
        </div>
    )
}

export default Display
