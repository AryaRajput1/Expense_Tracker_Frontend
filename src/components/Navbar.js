import React from 'react'
import './css/navbar.css'

function Navbar() {
    return (
        <div>
            <nav>
                <div className='logo_section'>
                    <img src=''/>
                    <span>Expense Tracker</span>
                </div>
                <div className='link_section'>
                    <p>Home</p>
                    <p>Clear</p>
                    </div>
            </nav>
        </div>
    )
}

export default Navbar
