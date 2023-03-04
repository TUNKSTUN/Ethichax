import React, { useState, useEffect } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdPostAdd, MdSearch } from "react-icons/md";
import Logo from "../Assets/logo192.png";

function Navbar2() {
  const [popdown, setPopdown] = useState();
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setPopdown(true);
      } else {
        setPopdown(false);
      }
      prevScrollPos = currentScrollPos;
    };
  }, []);

  return (
    <div
      className={`hidden xl:block lg:block fixed z-10 top-0 right-0 xl:w-4/5 lg:w-4/5 w-1/6 h-full xl:h-auto lg:h-auto bg-gradient-to-tr border-b border-stone-300 from-black to-stone-800 stroke-slate-500 border-l bg-stone-200 justify-evenly shadow-sm text-stone-900 shadow-gray-900  ${
        popdown
          ? "block transition ease-in-out delay-100 duration-500 xl:hover:translate-y-0 lg:hover:translate-y-0 hover:translate-x-0 sm:translate-x-0 md:translate-x-0 w-auto"
          : "block transition ease-in-out duration-200 xl:-translate-y-14 lg:-translate-y-14 sm:translate-x-24 md:translate-x-24 xl:hover:translate-y-0 lg:hover:translate-y-0 hover:cursor-pointer"
      }`}
    >
      <div onScroll={() => setPopdown(popdown)} className="flex ">
        <div className="flex xl:flex lg:flex justify-evenly h-full bg-transparent p-1 text-stone-100 font-Epilogue text-4xl font-normal text-start w-full items-center space-x-2">
          <p className="hidden xl:flex gap-3 lg:flex xl:text-2xl lg:text-2xl tracking-widest font-Epilogue w-auto px-3 text-white items-center transition ease-in-out duration-200 hover:scale-y-105 cursor-pointer">
            <img src={Logo} alt="logo" className="-mt-2 w-7 h-7" />T H I C H A X{" "}
          </p>
          <form
            onSubmit={"event"}
            className="bg-white xl:w-1/2 lg:w-auto text-stone-900 flex items-center p-1 rounded shadow-inner shadow-gray-800"
          >
            <input
              required="true"
              type={"text"}
              autoFocus="false"
              className="w-full h-10 border-none p-2 text-xl font-mono"
            />
            <button className="w-auto h-auto px-2 hover:text-stone-600">
              <MdSearch />
            </button>
          </form>
          <div className="flex space-x-2 h-auto justify-evenly">
            <Link
              to={`/articles/add`}
              className="w-24 text-sm flex flex-col text-center border-stone-400 border items-center transition ease-in-out duration-200 hover:border hover:bg-stone-700 hover:text-stone-100 p-1 rounded-lg gap-1 "
            >
              <MdPostAdd className="text-xl " />
              Add
            </Link>
            <Link
              to={`/articles/all`}
              className="w-24 text-sm flex flex-col text-center border-stone-400 border items-center transition ease-in-out duration-200 hover:border hover:bg-stone-700 hover:text-stone-100 p-1 rounded-lg gap-1"
            >
              <AiTwotoneDelete className="text-xl" />
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
