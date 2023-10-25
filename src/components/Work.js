import React from 'react'
import Sample1 from '../assets/sample2.jpg'
import SampleVid from '../assets/work_sample1.jpg'


const Work = () => {
    return (
        <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Works</p>
                    <p className='py-6'>Check out some of my recent works</p>
                </div>

                {/* container */}
                <div className='grid sm:grid-cols-2 md:grid-col-3 gap-4'>
                    
                    {/* grid item */}

                    <div style={{ backgroundImage: `url(${Sample1})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center special-style'>

                        {/* hover effects */}
                        <div  className='opacity-0 group-hover:opacity-100 duration-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                React Js application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Sample</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* grid item */}

                    <div style={{ backgroundImage: `url(${Sample1})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center special-style'>

                        {/* hover effects */}
                        <div  className='opacity-0 group-hover:opacity-100 duration-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                React Js application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Sample</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* grid item */}

                    <div style={{ backgroundImage: `url(${Sample1})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center special-style'>

                        {/* hover effects */}
                        <div  className='opacity-0 group-hover:opacity-100 duration-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                React Js application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Sample</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* grid item */}

                    <div style={{ backgroundImage: `url(${Sample1})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center special-style'>

                        {/* hover effects */}
                        <div  className='opacity-0 group-hover:opacity-100 duration-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                React Js application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Sample</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* grid item */}

                    <div style={{ backgroundImage: `url(${Sample1})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center special-style'>

                        {/* hover effects */}
                        <div  className='opacity-0 group-hover:opacity-100 duration-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                React Js application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Sample</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* grid item */}

                    <div style={{ backgroundImage: `url(${Sample1})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center special-style'>

                        {/* hover effects */}
                        <div  className='opacity-0 group-hover:opacity-100 duration-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                React Js application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Sample</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>

        </div>
    )
}

export default Work