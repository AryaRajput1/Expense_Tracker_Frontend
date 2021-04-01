import axios from 'axios';
import React,{useState} from 'react'
import './css/newExpense.css'

function NewExpense({income,expense}) {
    const [data, setdata] = useState({'incomeType':'expense'})
const changeHandler=(e)=>{
    setdata({...data,[e.target.name]: e.target.value});
}
const clickHandler=()=>{
    if(data.note &&data.money&&data.incomeType)
     axios.post('http://localhost:3001/data',data)
    .then(res=>console.log(res));
}
    return (
        <div className='newExpense'>
            <div className='income-expense'>
                <div className='income'>
                    <p>Income</p>
                    <p>{income}</p>
                </div>
                <div className='expense'>
                    <p>Expense</p>
                    <p>{expense}</p>
                </div>
            </div>
            <hr />
            <input name='note' onChange={changeHandler} placeholder='Enter Note' type='text' />
            <div className='options'>
                {/* checkboxes */}

                <input onChange={changeHandler} id='expense' value='expense' type='radio' name='incomeType' /><label for='expense' >Expense</label>
                <input onChange={changeHandler} id='income' value='income' type='radio' name='incomeType' c /><label for='income'>Income</label>

            </div>
            <input onChange={changeHandler} name='money' placeholder='Enter Amount' type='number' />
            <button onClick={clickHandler}>Add</button>
        </div>
    )
}

export default NewExpense
