import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className='text-pink-600 text-xl'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccdcf6]'>Udbhas Dutta</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a MERN Stack Developer.</h2>
                <p className='text-[#8892b0] text-lg py-4 max-w-[700px]'>I am an engineering undergrad at Jadavpur University and a tech and programming enthusiast. Currently learning full stack development, I aim to create useful, efficient and scalable web applications.</p>
                <div>
                    <button className='group text-white border-2 px-6 py-3 my-2 flex items-center justify-between hover:bg-pink-500 hover:border-pink-500 duration-150'>
                        View Works
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home