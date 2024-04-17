import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='Nav-Bar  sticky top-0 right-0 left-0 shadow-md z-10'>
        <div className="main flex justify-between px-8 py-10 bg-orange-50">
            <div className="logo">
                <h1 className='font-bold text-3xl'><Link to='/'>#VANLIFE</Link></h1>
            </div>
            <div className="Link-Routes flex gap-6">
              <Link className={`text-zinc-900 text-lg font-semibold`} to={'/host'}>Host</Link>
                <Link className={`text-zinc-900 text-lg font-semibold`} to='/about'>About</Link>
                <Link className={`text-zinc-900 text-lg font-semibold`} to='/van'>Vans</Link>
            </div>
        </div>
    </div>
  )
}
