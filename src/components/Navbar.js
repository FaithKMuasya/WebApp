import React from 'react'

function Navbar() {
  return (
    <div className='flex mt-3 border-b border-solid border-gray-300 hover:border-blue-900'>
       <div>
        <a className='text-2xl'>ProMed Lab</a>
       </div>
       <div className='hidden sm:ml-6 sm:block px-14'>
        <ul className='flex space-x-7 mt-1.5'>
            <li className='font-bold'><a>Home</a></li>
            <li className='text-gray-500'><a>Services</a></li>
            <li className='text-gray-500'><a>Team</a></li>
            <li className='text-gray-500' ><a>Events</a></li>
            <li className='text-gray-500'><a>About Us</a></li>
        </ul>
       </div>
        <button className='absolute right-3 mt-1.3 bg-blue-500 rounded-md px-3 py-0.5'>Contact Us</button>
    </div>
  )
}

export default Navbar