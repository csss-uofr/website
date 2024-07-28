import React from 'react'
import { useNavigate } from 'react-router-dom'

const Four04 = () => {
    const navigate = useNavigate();
  return (
    <div className='container text-center h-screen py-48'>
<h1 className='font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-7xl'>Error 404. File Not Found</h1>
<p>The file you were looking for was not found on this server</p>
<button className='mt-6 bg-gray-200 py-2 px-6 rounded-md hover:cursor-pointer hover:bg-gray-300' onClick={() => navigate("/")}>Go back home</button>
    </div>
  )
}

export default Four04