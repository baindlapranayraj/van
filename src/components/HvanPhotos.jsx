import React, { useState,useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';


export default function HvanPhotos() {
    
    let {HvanInfo} = useOutletContext();

  return (
    <div>
        <img className='w-24 h-24 mt-10 rounded-md' src={HvanInfo.imageUrl} alt="" />
    </div>
  )
}
