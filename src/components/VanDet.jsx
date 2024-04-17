import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function VanDet() {
    const [vanInfo,setVanInfo] = useState(null);
    let params = useParams();
    console.log(params);

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVanInfo(data.vans))
    },[])
    // console.log(vanInfo);

  return (
    <div className='bg-orange-50 pt-8 space-y-20 h-screen'>
        <Link className='border-b-2 border-black ml-7' to={"/van"}>Back to all vans</Link>
        {vanInfo?(<div className="van-container flex gap-24 items-center px-16 ">
            <div className="van-img">
                <img className='rounded-md scale-105' src={vanInfo.imageUrl} alt="" />
            </div>
            <div className="van-info space-y-7 mb-7">
                <button className='bg-orange-400 text-white rounded-md px-6 py-2'>{vanInfo.type}</button>
                <h1 className='font-semibold text-2xl'>{vanInfo.name}</h1>
                <p><span className='font-semibold text-xl'>${vanInfo.price}</span>/day</p>
                <p className='text-xl font-light'>{vanInfo.description}</p>
                <button className= ' bg-orange-400  px-10 py-3 hover:bg-orange-600 duration-150 text-white rounded-md'>Rent this van</button>
            </div>
        </div>):<h1 className='text-center text-4xl font-bold'>Loading...</h1>}

    </div>
  )
}
