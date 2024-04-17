import React from 'react'
import { Link } from 'react-router-dom'

export default function Errror() {
  return (
    <div className='bg-orange-100 h-screen'>
       <div className="Error-info flex items-center justify-center flex-col gap-8 pt-80">
        <h1 className='text-4xl font-semibold'>Sorry,the page you were <br /> looking for was not found.</h1>
        <Link to={"/"}><button className='bg-black rounded-md p-3 w-48 hover:bg-orange-600 duration-300 text-white'>Return Home</button></Link>
       </div>
    </div>
  )
}
