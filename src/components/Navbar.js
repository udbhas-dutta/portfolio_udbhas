import React, { useState } from 'react'
import Logo from '../assets/logo1.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = ()=>{
        setNav(!nav)
    }
  return (
    <div className='w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <img src={Logo} alt="Logo image" className='w-52' />

        {/* menu */}        
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Works</li>
                <li>Contact</li>
            </ul>

        {/* hamburger */}
        <div className='md:hidden z-10' onClick={handleClick}> 
            {!nav === true? <FaBars/> : <FaTimes/>}
        </div>

        <div className= {nav === true? 'absolute top-0 left-0 w-full flex justify-center items-center h-screen bg-[#0a192f]' : 'hidden'}>
            <ul>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Works</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
        </div>

    </div>

)}

export default Navbar