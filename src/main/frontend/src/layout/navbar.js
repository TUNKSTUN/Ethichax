import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Assets/logo192.png'
function navbar() {
  return (
    <div className=' h-screen items-center justify-center sticky top-0 left-0 font-Epilogue xl:w-full w-auto border-r-white border-r border-dashed'>
       <a href="https://tunkstun.web.app/"><h1 className='absolute text-stone-300 w-auto h-auto p-5 font-mono z-10 text-sm transition ease-in-out duration-200 hover:scale-y-105 hover:cursor-pointer hover:font-bold hover:text-stone-100 tracking w-full'>tunkstun.web.app</h1></a>
       <nav className='flex flex-col bg-gradient-to-b from-black to-slate-900 h-screen px-20 text-stone-300 justify-center items-center'>
        <div className='justify-start item-start flex'>
            <Link className='w-auto h-auto text-4xl ' to={"/"}><img src={Logo} alt='logo' className='w-28 rotate-0 scale-100 p-5 border-none items-start h-auto transition ease-in-out duration-700 transform hover:rotate-180 hover:scale-110 hover:border'/></Link>
        </div>
        <br/>
        <div className='space-y-2 md:space-y-5 lg:space-y-8 xl:space-y-8 flex flex-col text-start xl:text-2xl text-xl px-20 '>
        <Link className=' w-max h-auto transition ease-in-out duration-200 hover:scale-y-110 hover:cursor-pointer hover:font-bold hover:text-stone-100' to={"/"}> Blog</Link>
        <Link className='w-max h-auto transition ease-in-out duration-200 hover:scale-y-110 hover:cursor-pointer hover:font-bold hover:text-stone-100' to={'/about'}> About</Link>
        <Link className='w-max h-auto transition ease-in-out duration-200 hover:scale-y-110 hover:cursor-pointer hover:font-bold hover:text-stone-100' to={"/guest_book"}>Guest Book</Link>
        <Link className='w-max h-auto transition ease-in-out duration-200 hover:scale-y-110 hover:cursor-pointer hover:font-bold hover:text-stone-100' to={'/contact'}>Contact</Link>
        </div>
       </nav>
    </div>
  )
}

export default navbar