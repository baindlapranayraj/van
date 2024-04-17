import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HvanPrice() {
    let {HvanInfo} = useOutletContext();
  return (
    <div>
        <h1 className='text-2xl font-light mt-10'>${HvanInfo.price}<span className='text-sm '>/day</span></h1>
    </div>
  )
}
