import React,{useState,useEffect} from 'react'

import './css/main.css'
import Display from './Display'
import NewExpense from './NewExpense'
import axios from 'axios'
function Main() {
    
    const [data, setdata] = useState(null)
    const [expense, setExpense] = useState(0)
    const [income, setIncome] = useState(0)
    useEffect(() => {
        axios.get('http://localhost:3001/data').then((resp)=>{setdata(resp.data)

        if(data){
            var inc=0,ex=0;
        data.forEach(ele => {
            if(ele.incomeType=='income'){
inc+=ele.money
            }
            else{
                ex+=ele.money
            }

            
        });
        setIncome(inc);
        setExpense(ex);
        
        }
    }
        )
    
    })
    return (
        <div className='main'>
            <div className='balance_info'>
        <p>Your Balance</p>
        <strong>{income-expense} Rupee</strong>
        </div>
        {/* income expense */}
      <div className='expense_area'> 
       <NewExpense income={income} expense={expense}/>
        <Display/>
        </div>
        </div>
    )
}

export default Main
