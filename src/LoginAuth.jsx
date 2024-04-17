import React, { useContext, useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { auth,} from './Firebase';
import { AuthContext,UserAuth } from './context/AuthContext';


export default function LoginAuth() {

    const [eamil,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const {googleSignIn} = UserAuth();

    const google = async () => {
        try{
            await googleSignIn();
        }catch (error){
            console.log(error)
        }
    }

  return (
   <>
    <Nav/>
    <div className='bg-orange-100 min-h-screen flex justify-center items-center'>
      <div className="bg-orange-200 p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login to your account</h1>
        <div className="mb-4">
          <input value={eamil} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='Enter Your Email Here' className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-400" />
        </div>
        <div className="mb-6">
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Your Password Here' className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-400" />
        </div>
        <button onClick={google} className='bg-orange-500 w-full text-white py-2 px-4 rounded mb-2 hover:bg-orange-600 transition duration-300'>Google Login</button>
        <button  className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300">Submit</button>
      </div>
    </div>
    <Footer/>
   </>
  )
}
