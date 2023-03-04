import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Assets/logo192.png'
import { FaGithub } from 'react-icons/fa'
function navbar() {
  return (
    <div className=' w-auto h-auto bg-transparent'>
    <div className=' items-center justify-center flex xl:h-full lg:h-full font-Epilogue h-auto fixed top-0 left-0  xl:w-1/5 lg:w-1/5 bg-gradient-to-t from-stone-900  to-black w-full z-10 border-r border-b border-stone-300'>
       <a href="https://tunkstun.web.app/"><h1 className='top-0 absolute text-stone-300 w-auto h-auto p-1 xl:p-3 lg:p-3 font-mono xl:text-sm lg:text-sm text-xs  transition ease-in-out duration-200 hover:scale-y-105 hover:cursor-pointer hover:font-bold hover:text-stone-100 tracking w-full'>tunkstun.web.app</h1></a>
      <div className='flex text-white space-x-4 md:space-x-10 lg:space-y-8 xl:space-y-8 items-center justify-center lg:flex xl:flex-col text-sm md:text-xl xl:text-2xl lg:text-xl lg:flex-col my-5'>
       <div className="logo flex"> <Link className=' w-auto h-auto transition ease-in-out duration-200 hover:scale-y-110 hover:cursor-pointer hover:font-bold hover:text-stone-100' to={"/"}>
       <img src={Logo} alt="logo" className='xl:w-20 lg:w-20 xl:h-20 rotate-180 lg:h-20 w-10 h-10 xl:p-1 lg:p-2 p-1 transition ease-in-out duration-500 hover:rotate-0 hover:cursor-pointer'/>
       </Link>
       </div>
        <Link className=' w-auto h-auto transition ease-in-out duration-200 hover:scale-y-110 hover:cursor-pointer hover:font-bold hover:text-stone-100' to={"/"}> Blog</Link>
        <Link className='w-auto h-auto transition ease-in-out duration-200 hover:scale-y-110 hover:cursor-pointer hover:font-bold hover:text-stone-100' to={'/about'}> About</Link>
        <Link className='w-auto h-auto transition ease-in-out duration-200 hover:scale-y-110 hover:cursor-pointer hover:font-bold hover:text-stone-100' to={"/guest_book"}>Guest Book</Link>
        <Link className='w-auto h-auto transition ease-in-out duration-200 hover:scale-y-110 hover:cursor-pointer hover:font-bold hover:text-stone-100' to={'/contact'}>Contact</Link>
        <div className='flex justify-evenly items-center p-1 h-max'>
        <div className='flex w-auto rounded h-auto xl:text-3xl text-xl transition ease-in-out duration-1000 hover:text-green-300 hover:scale-105 border hover:border-green-300 justify-center  bottom-0 right-0 xl:flex lg:flex p-2'><a href="https://github.com/tunkstun/ethichax" className='flex items-center  space-x-3'><FaGithub/></a></div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default navbar