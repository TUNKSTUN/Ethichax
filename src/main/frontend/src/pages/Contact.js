import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="flex bg-transparent h-full w-full ">
      <div className="xl:w-1/4 lg:w-1/5 h-1/4">ok</div>

    <div className=" w-full p-10 flex-col xl:text-start lg:text-start text-center text-xl  text-stone-900 xl:w-3/4 lg:w-4/5 h-full xl:mt-0 lg:mt-0 flex top-0 right-0 xl:py-36 pt-40 font-Epilogue  bg-gradient-to-tl from-stone-500 to-stone-100">
      <h1 className="text-4xl drop-shadow-md font-bold tracking-widest ">Contact:</h1>
    <br/>

      <p className="flex flex-col ">Let's Connect!</p>
        <div className="flex flex-col items-center xl:items-start lg:items-start ">
      <div className="flex flex-col space-y-10 py-10 px-2 w-40">

        
        <a href="https://Linkedin.com/in/yahya24" className="flex border border-black p-2 rounded-md transition ease-in-out duration-100 hover:bg-gradient-to-tl hover:from-stone-800 hover:to-black hover:border hover:text-stone-300">
        <h1 className="flex text-xl gap-5 transition ease-in-out duration-200 hover:scale-y-105 hover:cursor-pointer hover:font-bold"><p>Linkedin </p>
            <FaLinkedin className="text-3xl" />
        </h1>
        </a>
        <a href="https://github.com/TUNKSTUN" className=" flex border border-black p-2 rounded-md transition ease-in-out duration-100 hover:bg-gradient-to-tl hover:from-stone-800 hover:to-black hover:border hover:text-stone-300">
        <h1 className="flex text-xl gap-x-9 transition ease-in-out duration-200 hover:scale-y-105 hover:cursor-pointer hover:font-bold"><p> Github</p> 
            <FaGithub className="text-3xl"/>
        </h1>
        </a><a href="https://Instagram.com/solo_perfecto24" className=" flex border border-black p-2 rounded-md transition ease-in-out duration-100 hover:bg-gradient-to-tl hover:from-stone-800 hover:to-black hover:border hover:text-stone-300">
        <h1 className="flex text-xl gap-1 transition ease-in-out duration-200 hover:scale-y-105 hover:cursor-pointer hover:font-bold"><p>Instagram </p>
            <FaInstagram className="text-3xl" />
        </h1>
        </a>
      </div>
        </div>
    </div>
    </div>
  );
};

export default Contact;
