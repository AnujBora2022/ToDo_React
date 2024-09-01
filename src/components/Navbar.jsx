import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <nav className='flex justify-between bg-blue-700 text-white py-3'>
      <div className="logo">
        <span className='font-bold text-xl mx-8'>ToDo</span>
      </div>
      <ul className="flex gap-10 mx-8">
        <NavLink className={(e)=>{
          return e.isActive?"red":""
        }}  to="/"><li className='cursor-pointer hover:font-bold'>Home</li></NavLink>
        <NavLink className={(e)=>{
          return e.isActive?"red":""
        }}  to="/YourTasks"><li className='cursor-pointer hover:font-bold '>Your Tasks</li></NavLink>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
