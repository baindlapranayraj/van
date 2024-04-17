import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

export default function HvanLayout() {
    const [HvanInfo,setHvanInfo] = useState([]);

    let params =useParams();
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setHvanInfo(data.vans))
    },[])

  return (
    <>

    <div className="Van-container p-6 bg-white rounded-md">
        <Link className='border-b-2' to={"/host/vans"}>Back to all vans</Link>
        <div className="van-info flex items-center gap-11  p-7 rounded-md mt-9">
            <img className='w-40 h-40 rounded-md' src={HvanInfo.imageUrl} alt="" />
            <div className="van-name flex flex-col items-start gap-3">
                <button className='text-white bg-orange-400 py-2 px-4 rounded-lg '>{HvanInfo.type}</button>
                <h1 className='text-2xl font-semibold'>{HvanInfo.name}</h1>
                <p className='font-semibold'>${HvanInfo.price}<span className='font-normal'>/day</span></p>
            </div>
        </div>
        <div className="Links flex gap-3 mt-5">
            <Link className='font-semibold' to={"/host/van/:id"}>Details</Link>
            <Link className='font-semibold' to={"/host/van/:id/price"}>Pricing</Link>
            <Link className='font-semibold'to={"/host/van/:id/photos"} >Photos</Link>
        </div>
        <Outlet context={{HvanInfo}}/>
    </div>

    </>
  )
}
