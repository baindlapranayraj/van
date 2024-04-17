import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

export default function HvanDetail() {

    let {HvanInfo} = useOutletContext();

  return (
    <div className='w-[480px] space-y-3 mt-6'>
        <h1><span className='font-semibold'>Name : </span>{HvanInfo.name}</h1>
        <h1><span className='font-semibold'>Category : </span>{HvanInfo.type}</h1>
        <p><span className='font-semibold'>Description : </span>{HvanInfo.description}</p>
    </div>
  )
}
