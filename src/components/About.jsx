import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-orange-50 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              className="w-full h-full object-cover transform hover:scale-125 transition duration-300"
              src="About.png"
              alt="About"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Do not squeeze in a sedan when you could relax in a van.
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra 😉)
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
        </div>
        <div className="bg-orange-200 rounded-lg px-8 py-12 text-center mt-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Your destination is waiting.
            <br />
            Your van is ready.
          </h1>
         <Link to={"/van"}><button className="bg-black text-white px-6 py-3 rounded-full hover:-translate-y-1 hover:text-white transition duration-300">
            Explore our vans
          </button></Link> 
        </div>
      </div>
    </div>
  );
}
