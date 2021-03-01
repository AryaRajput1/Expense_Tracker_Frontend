import React from 'react'
import './css/newExpense.css'

function NewExpense() {
    return (
        <div className='newExpense'>
            <div className='income-expense'>
                <div className='income'>
                    <p>Income</p>
                    <p>5000</p>
                </div>
                <div className='expense'>
                    <p>Expense</p>
                    <p>2500</p>
                </div>
            </div>
            <hr />
            <input placeholder='Enter Note' type='text' />
            <div className='options'>
                {/* checkboxes */}

                <input id='expense' value='expense' type='radio' name='option' /><label for='expense'>Expense</label>
                <input id='income' value='income' type='radio' name='option' /><label for='income'>Income</label>

            </div>
            <input placeholder='Enter Amount' type='number' />
            <button>Add</button>
        </div>
    )
}

export default NewExpense
