import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Hostvan() {
    const [hostVan,setHostVan] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
        .then((res) => res.json())
        .then((json)=> setHostVan(json.vans))
    },[])
  

  return (
    <>
    <div className="Hostvan-container ">
        <h1 className='text-3xl font-semibold'>Your listed vans</h1>
        <div className="van-products">
            <div className="Van flex mt-20 gap-5 flex-wrap">
               {hostVan.map((Van) => (
                    <Link to={`/host/van/${Van.id}`} key={Van.id}>
                    <div className="Van-container rounded-md bg-white hover:bg-orange-400 hover:text-white transition duration-200 flex gap-10 items-center  w-96 h-28 px-5">
                        <img className='w-16 h-16 rounded-sm' src={Van.imageUrl} alt="" />
                        <div className="van-info">
                            <h1 className='text-xl font-semibold text-inherit'>{Van.name}</h1>
                            <p className='text-neutral-600 text-inherit'>${Van.price}/day</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}
