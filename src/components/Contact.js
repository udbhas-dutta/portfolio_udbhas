import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/8540c55d-c5dc-467e-af9c-32867b4e72c9" className='flex flex-col nax-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-gray-300 inline border-b-4 border-pink-600'>Contact</p>
                <p className='text-gray-300 p-4'>Submit the form below or send me an email at - udbhasdutta@gmail.com. Let's connect and collaborate together!</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccdcf6] p-2' name="message" id="" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>

    </div>
  )
}

export default Contact