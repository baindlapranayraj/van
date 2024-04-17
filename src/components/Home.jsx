import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <img className='absolute inset-0 w-full h-full' src="image54.png" alt="Travel Vans" />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 px-8 text-center">
        <h1 className='text-5xl md:text-7xl text-white font-bold mb-6 max-w-4xl px-6'>You got the travel plans, we got the travel vans.</h1>
        <p className='text-lg md:text-xl text-white mb-12 max-w-4xl px-6'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
       <Link to={"/van"}><button className='bg-orange-500 hover:bg-orange-600 text-white w-80 rounded-md font-medium py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline'>Find your van</button></Link>
      </div>
    </div>
  );
}
