import React,{useState,useEffect} from 'react'
import Card from './Card'
import './css/display.css'
import axios from 'axios'

function Display() {
    const [data, setdata] = useState(null)
    useEffect(() => {
        axios.get('http://localhost:3001/data').then((resp)=>{setdata(resp.data)
        
    }
        )
    
    })
    return (
        <div className='display_history'>
            <p>Expense - Income History</p>
            <div className='history'>
                {/* expense-income box */}
                
                {
                  data &&  data.map(a =><Card ids={a._id} key={a._id} incomeType={a.incomeType} amount={a.money} note={a.note}/>)
                }
                
                
            </div>
        </div>
    )
}

export default Display
