import imag from '../assets/images/moo.png';

import React from "react";


const Home = () => {
  return(
    <>
    <div className=" md:flex pt-10 pb-10 px-6 bg-gradient-to-br from-gray-800 to-blue-800 items-center justify-center" >
      <div className='text-center md:text-left md:mr-20'>
        <h4 className='text-sm text-blue-400 pb-7'>👋 Hey, I'm</h4>
        <h1 className='md:text-7xl text-4xl font-bold text-white md:pb-5 pb-3'>Olaleye Farouq </h1>
        <h2 className='text-2xl font-bold text-blue-400 md:pb-7 pb-4'>Frontend Developer</h2>
        <h2 className='text-xl text-gray-300 mx-auto'>Passionate about building web apps & solving complex problems. 🚀</h2>
        <div className='pt-10 md:space-x-6'>
         <a href="#Contact"> <button className=' bg-gradient-to-r from-blue-600 to-purple-700 md:h-12 md:w-40 h-13 w-78 mb-5 rounded-md font-semibold text-white cursor-pointer'>Let's Connect ✨</button></a>
         <a href="#Projects"> <button className='border-2 border-blue-400 rounded-md md:h-12 md:w-40 h-13 w-78 mb-10 text-blue-400 hover:text-purple-400 cursor-pointer'>View my work</button> </a>
        </div>
      </div>
      <div className='w-500px h-500px   inset-[-10%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl '>
      
        <img src={imag} alt="" />
      </div>
    </div>
   
    </>
  );
}
export default Home;
