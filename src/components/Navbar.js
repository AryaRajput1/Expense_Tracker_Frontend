import React from 'react'
import './css/navbar.css'
import axios from 'axios';

function Navbar() {
    const clickHandler=()=>{
        window.confirm('you want to delete ?') && axios.delete(`http://localhost:3001/data/delMany`);
    }
    return (
        <div>
            <nav>
                <div className='logo_section'>
                    <img src=''/>
                    <span>Expense Tracker</span>
                </div>
                <div className='link_section'>
                    <p>Home</p>
                    <p onClick={clickHandler}>Clear</p>
                    </div>
            </nav>
        </div>
    )
}

export default Navbar
