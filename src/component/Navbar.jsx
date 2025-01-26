import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"
const Navbar = () => {
  return (
    <div className='Navbar' >
        <div>
            <Link style={{color:"black"}} to="/" >🏠Home</Link>
        </div>
        <div>
            <Link style={{color:"black"}} to= "/add" > 💹Add Expense</Link>
        </div>
        <div>
            <Link style={{color:"black"}} to="/addIncome" >💰Add Income</Link>
        </div>
        <div>
        <Link style={{color:"black"}} to="/transaction" >💳 Transactions</Link>
       
        </div>
    </div>
  )
}

export default Navbar