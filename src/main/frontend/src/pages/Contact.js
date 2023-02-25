import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="flex w-full h-screen p-10 flex-col text-start bg-stone-300 text-slate-900 font-mono">
      <h1 className="text-4xl drop-shadow-md">Connect</h1>
      <br />

      <p className="text-justify w-1/2">Lets Connect!</p>
        <div className="flex flex-col ">
      <div className="flex flex-col space-y-10 py-10">

        
        <a href="https://Linkedin.com/in/yahya24">
        <h1 className="flex text-2xl gap-4 transition ease-in-out duration-200 hover:scale-y-105 hover:cursor-pointer hover:font-bold">Linkedin 
            <FaLinkedin className="text-4xl" />
        </h1>
        </a>
        <a href="https://github.com/TUNKSTUN">
        <h1 className="flex text-2xl gap-4 transition ease-in-out duration-200 hover:scale-y-105 hover:cursor-pointer hover:font-bold"> Github 
            <FaGithub className="text-3xl" />
        </h1>
        </a><a href="https://Instagram.com/solo_perfecto24">
        <h1 className="flex text-2xl gap-4 transition ease-in-out duration-200 hover:scale-y-105 hover:cursor-pointer hover:font-bold">Instagram 
            <FaInstagram className="text-4xl" />
        </h1>
        </a>
      </div>
        </div>
    </div>
  );
};

export default Contact;
