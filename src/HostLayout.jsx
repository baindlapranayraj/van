import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function HostLayout() {
  return (
    <>
    <div className="HostContainer p-8 space-y-6 bg-orange-50 h-screen">
      <div className='Nav-host flex gap-5 '>
         <Link className='font-semibold' to={"/host"}>About Me 🤓</Link>
         {/* <Link className='font-semibold' to={"/host/review"}>Review</Link> */}
         <Link className='font-semibold' to={"/host/vans"}>Vans</Link>
      </div>
      <Outlet/>
    </div>
    </>
  )
}
