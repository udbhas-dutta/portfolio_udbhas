import React, { useState } from 'react'
import Logo from '../assets/logo1.png'
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from 'react-scroll';



const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }
    return (
        <div className='w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <img src={Logo} alt="Logo" className='w-24' />

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>Works</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

            {/* hamburger */}
            <div className='md:hidden z-10' onClick={handleClick}>
                {!nav === true ? <FaBars /> : <FaTimes />}
            </div>

            <div className={nav === true ? 'absolute top-0 left-0 w-full flex justify-center items-center h-screen bg-[#0a192f]' : 'hidden'}>
                <ul>
                <li>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>Works</Link>
                </li>
                <li>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
                </ul>
            </div>

            {/* social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a href="linkedin.com/in/udbhas-dutta-75b001223" className="flex justify-between items-center w-full text-gray-300">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a href="/https://github.com/udbhas-dutta" className="flex justify-between items-center w-full text-gray-300">
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