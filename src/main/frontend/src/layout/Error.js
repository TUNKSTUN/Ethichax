import React from 'react'
import { CgUnavailable } from 'react-icons/cg'

const Error = () => {
  return (
    <div>
        <div className='font-[Epilogue] font-extrabold flex justify-center space-x-5 text-10xl items-center p-20 fixed w-screen h-screen z-20 bg-stone-300 text-stone-900 top-0 left-0'>
            <CgUnavailable className='flex mb-3 text-black'/>
            <h1>Page not found!</h1>
            </div>
    </div>
  )
}

export default Error