import React from "react";

const admin_login = () => {
  return (
    <div className="fixed top-0 left-0 z-20 w-full bg-transparent justify-center items-center flex">
      <div className="flex w-full h-full items-center justify-center  backdrop-blur-lg m-20 rounded-xl border ">

      <form
                className="w-full text-stone text-start h-auto items-center rounded-xl bg-transparent flex flex-col space-y-2 text-stone-900 text-base m-5"
              >
                <h1 className=" text-stone-900 text-center md:text-5xl text-3xl xl:text-5xl font-[Epilogue] font-bold lg:text-2xl  flex mt-3">
                  Contact
                </h1>
                <label>Name</label>
                <input
                  type="name"
                  name="user_name"
                  autoComplete="off"
                  autoSave="off"
                  className=" p-2 font-mono w-auto h-auto border-none rounded-md bg-stone-900 "
                />
                <label>Email</label>
                <input
                  type="email"
                  name="user_email"
                  autoComplete="off"
                  autoSave="off"
                  className="p-2  font-mono w-auto h-auto border-none rounded-md bg-stone-900 "
                />
                <label>Message</label>
                <textarea
                  type="message"
                  name="message"
                  resize="none"
                  className="resize-none h-24 p-2 font-mono w-auto border-none rounded-lg bg-stone-900 "
                />

                
                  <button
                    type="submit"
                    alt="submit"
                    name="message"
                    value="Send"
                    className="bg-stone-900 border-2 text-lg xl:p-2 w-[100px] p-1 border-stone-200 text-stone-200 transition ease-in-out duration-300 rounded-xl hover:text-black hover:border-stone-700 hover:bg-stone-100 hover:scale-105"
                  >
                    Submit
                  </button>
                  </form>
      </div>
    </div>
  );
};

export default admin_login;
