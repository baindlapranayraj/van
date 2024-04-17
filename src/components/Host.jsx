import React from 'react'
import {RiGithubFill, RiLinkedinFill, RiTwitterXFill} from "@remixicon/react"

export default function Host() {
  return (
    <>
    <div className="AboutMeContainer flex justify-between px-11 items-center">
      <div className="PersonInfo space-y-7">
        <h1 className='text-3xl font-semibold'>Pranay Raj</h1>
        <h1 > <span className='text-2xl'>About :</span><br /><span className='text-lg font-light'>A student who created this project is from CMR Technical Campus,<br />Who got detained in his 1st year 😁</span></h1>
        <h1 className='text-2xl'>Techstack :</h1>
        <div className="tech-stack flex gap-7">
         <img className='w-16 h-14' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png" alt="" />
         <img  className='w-28 h-14' src="https://static-00.iconduck.com/assets.00/react-router-icon-2048x1116-jfeevj0l.png" alt="" />
        </div>
        <h1 className='text-2xl'>Socail Links :</h1>
        <div className="SocialHandle flex gap-4 mt-28">
         <a className='hover:-translate-y-2 duration-300' href="https://twitter.com/pranayraj069"><RiTwitterXFill/></a>
         <a className='hover:-translate-y-2 duration-300' href="https://www.linkedin.com/in/pranay-raj-%F0%9F%8E%96%EF%B8%8F-bb5054240/"><RiLinkedinFill/></a>
        <a className='hover:-translate-y-2 duration-300' href="https://github.com/baindlapranayraj"><RiGithubFill/></a> 
       </div>
      </div>
      <div className="right-container">
        <img className='w-96 cursor-pointer rounded hover:scale-105 duration-200 transition-all' src="sato.jpeg" alt="" />
      </div>
    </div>
    </>
  )
}
