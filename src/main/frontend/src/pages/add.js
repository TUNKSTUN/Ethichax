import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from '../axios-config';

const Add = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [add, setAdd] = useState({
    title: '',
    description: '',
    article: '',
    date: '',
  });

  const { title, description, article, date } = add;
  const today = new Date().toISOString().length(0, 10);
  const updatedEdit = { ...add, date: today };

  const onInputChange = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    try{

        e.preventDefault();
        await axios.post('/', add);
        navigate('/');
        alert('done');
    }catch(e){
        console.log(e);
    }
  };

  return (
    <div className="w-full h-full backdrop-blur-sm text-stone-200 z-20 top-0 left-0 fixed justify-center items-center">
      <div className="justify-center items-center flex xl:m-20 m-10 xl:p-10 xl:px-40">
        <div className="flex w-full h-full items-center justify-center bg-stone-900  rounded-xl border flex-col ">
          <h1 className="text-stone-200 text-center md:text-5xl text-3xl xl:text-5xl font-[Epilogue]  font-bold lg:text-2xl flex mt-3">
            Edit
          </h1>
          <form
            className="w-full text-stone-100 text-start h-auto items-start px-20 rounded-xl bg-transparent xl:grid xl:grid-cols-2 flex flex-col gap-2 m-5"
            onSubmit={(e) => onSubmit(e)}
          >
            <label>Date</label>
            <input
              type="text"
              name="date"
              value={date}
              className="w-full border-b-white p-2 font-[Epilogue] h-auto border-none rounded-md bg-stone-100 text-black "
              onChange={onInputChange}
            />
            <label>Title</label>
            <input
              type="text"
              name="title"
              autoComplete="off"
              autoSave="off"
              value={title}
              className="w-full border-b-white p-2 font-[Epilogue]  h-auto border-none rounded-md bg-stone-100 text-black"
              onChange={(e) => onInputChange(e)}
            />
            <label>Description</label>
            <input
              type="text"
              name="description"
              autoComplete="off"
              autoSave="off"
              value={description}
              className="w-full border-b-white p-2 font-[Epilogue]  h-auto border-none rounded-md bg-stone-100 text-black"
              onChange={(e) => onInputChange(e)}
            />
            <label>Article</label>
            <input
              type="text"
              name="article"
              autoComplete="off"
              autoSave="off"
              value={article}
              className="w-full border-b-white p-2 font-[Epilogue]  h-auto border-none rounded-md bg-stone-100 text-black"
              onChange={(e) => onInputChange(e)}
            />
            <div className="w-full h-full space-x-3 flex">
              <button
                type="submit"
                className="w-full h-auto bg-stone-900 text-white p-2 rounded-md hover:bg-white hover:text-stone-900 hover:border-stone-900 border-2 transition duration-300 ease-in-out"
              >
                Add
              </button>
              <Link
                  to={`/`}
                  className="w-full text-center h-auto bg-red-600 text-red-100 p-2 rounded-md hover:bg-red-500 hover:border-red-100 border-2  transition duration-300 ease-in-out "
                >
                  Back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Add