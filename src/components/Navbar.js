import React, { useState } from 'react'
import Logo from '../assets/logo1.png'
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }
    return (
        <div className='w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <img src={Logo} alt="Logo" className='w-52' />

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
                {!nav === true ? <FaBars /> : <FaTimes />}
            </div>

            <div className={nav === true ? 'absolute top-0 left-0 w-full flex justify-center items-center h-screen bg-[#0a192f]' : 'hidden'}>
                <ul>
                    <li className='py-6 text-4xl'>Home</li>
                    <li className='py-6 text-4xl'>About</li>
                    <li className='py-6 text-4xl'>Skills</li>
                    <li className='py-6 text-4xl'>Works</li>
                    <li className='py-6 text-4xl'>Contact</li>
                </ul>
            </div>

            {/* social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a href="/" className="flex justify-between items-center w-full text-gray-300">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a href="/" className="flex justify-between items-center w-full text-gray-300">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a href="/" className="flex justify-between items-center w-full text-gray-300">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a href="/" className="flex justify-between items-center w-full text-gray-300">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>

            </div>

        </div>

    )
}

export default Navbar