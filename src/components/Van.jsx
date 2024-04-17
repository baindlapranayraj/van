import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export default function Van() {
    const [Vans,setVans] = useState([]);
    const [check,setCheck] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
            .then((res) => res.json())
            .then((data) => {
                setVans(data.vans)
                setCheck(data.vans)
            })
    }, [])

    const vanElement = Vans.map((van) => (
        <Link to={`${van.id}`} key={van.id}>
        <div key={van.id} className="van-element">
            <img className='w-64 rounded-md' src={van.imageUrl} alt="" />
            <div className="van-info flex justify-between">
                <h1 className='text-xl font-semibold'>{van.name}</h1>
                <h1><span className='text-xl font-semibold'>${van.price}</span><br /><span>/day</span></h1>
            </div>
            <button className={``}>{van.type}</button>
        </div>
        </Link>
    ))

  return (
    <div className='bg-orange-50 p-7 space-y-8'>
        <h1 className='text-3xl font-semibold mb-5'>Explore our van options</h1>
         
        <div className="Filteration flex gap-3">
            <button className='bg-orange-200 px-5 py-1 rounded-md hover:bg-red-400 hover:text-orange-200 duration-200'
            onClick={() => {
                let list = check.filter((van) => van.type === "simple")
                setVans(list)
            }}
            >Simple</button>
            <button className='bg-orange-200 px-5 py-1 rounded-md hover:bg-black hover:text-orange-200 duration-200'
            onClick={() => {
                let list = check.filter((van) => van.type === "luxury")
                setVans(list)
            }}
            >Luxury</button>
            <button className='bg-orange-200 px-5 py-1 rounded-md hover:bg-green-500 hover:text-orange-200 duration-200'
            onClick={() => {
                let list = check.filter((van) => van.type === "rugged")
                setVans(list)
            }}
            >Rugged</button>
            <button className='bg-orange-200 px-5 py-1 rounded-md'
             onClick={() => {
                setVans(check)
            }}>All</button>
           
        </div>
        <div className="van-container flex flex-wrap gap-5">
        {Vans.length!==0?(vanElement):<h1 className='text-center ml-[590px] flex font-semibold text-4xl'>Loading....</h1>}
        </div>
    </div>
  
  )
}
