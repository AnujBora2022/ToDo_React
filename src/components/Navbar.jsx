import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-blue-700 text-white py-3'>
      <div className="logo">
        <span className='font-bold text-xl mx-8'>ToDo</span>
      </div>
      <ul className="flex gap-10 mx-8">
        <li className='cursor-pointer hover:font-bold'>Home</li>
        <li className='cursor-pointer hover:font-bold '>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
