import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "../axios-config";

const Edit = () => {
  const history = useNavigate();
  const [edit, setEdit] = useState({
    id: "",
    title: "",
    description: "",
    article: "",
    date: new Date().toISOString().split('T')[0],
  });

  const { id } = useParams();
  const { title, description, article, date } = edit;

  const onInputChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/articles/${id}/edit`, edit);
      history(`/articles/${id}/edit`);
      alert("Update Success")
    } catch (error) {
      console.log(error);
    }
  };

  const loadArticle = async () => {
    try {
      const result = await axios.get(`articles/${id}`);
      setEdit({
        ...result.data,
        date: new Date(result.data.date).toISOString().substring(0, 10),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadArticle();
  }, []);

  return (
    <>
       {/* background */}
    <div className="flex w-full h-screen pt-20 bg-stone-900 items-center"/>
    <div className="w-full h-full backdrop-blur-lg text-stone-200 z-20 top-0 left-0 absolute justify-center items-center">
      <div className="justify-center h-full items-center sm:flex-col md:flex-col xl:flex xl:p-10 backdrop-blur-sm">
          <h1 className="text-stone-200 p-10 text-start md:text-3xl tracking-widest text-3xl xl:text-5xl font-[Epilogue]  font-bold lg:text-4xl flex mt-3">
            Update Article
          </h1>
        <div className="flex w-full h-full items-center justify-center bg-gradient-to-bl p-10 from-stone-800 to-black rounded-md border flex-col">
          <form
            className="w-full text-stone-100 text-start h-full text-lg tracking-widest items-start px-10 rounded-xl bg-transparent flex flex-col space-y-2 "
            onSubmit={(e) => onSubmit(e)}
            >
            <label>Date</label>
            <input
              type={"text"}
              value={date}
              name="date"
              className="w-full border-b-white p-2 font-mono h-auto border-none rounded-md bg-stone-100 text-black "
              onChange={onInputChange}
              />
            <label>Title</label>
            <input
              type={"text"}
              value={title}
              name="title"
              className="w-full border-b-white p-2 font-mono  h-auto border-none rounded-md bg-stone-100 text-black"
              onChange={(e) => onInputChange(e)}
              />
            <label>Description</label>
            <input
              type={"text"}
              value={description}
              name="description"
              autoComplete="off"
              autoSave="off"
              className="w-full border-b-white p-2 font-mono  h-auto border-none rounded-md bg-stone-100 text-black"
              onChange={(e) => onInputChange(e)}
              />
            <label>Article</label>
            <textarea
              type={"text"}
              value={article}
              name="article"
              autoComplete="off"
              autoSave="off"
              required="true"
              spellCheck="true"
              rows="10"
              className="w-full border-b-white p-3 shadow-inner shadow-gray-900 font-mono h-auto scrollbar-thumb-stone-500 scrollbar-thumb-rounded scrollbar-track-transparent scroll-auto scrollbar-thin  border-none rounded-md bg-stone-100 text-black"
              onChange={(e) => onInputChange(e)}
              />
            <div className="w-full space-x-3 flex p-5">
              <button
                type="submit"
                className="w-28 h-12 bg-stone-800 text-white p-2 rounded-md hover:bg-stone-700 hover:border-stone-100 border-2 transition duration-300 ease-in-out"
                >
                Update
              </button>
              <Link
                  to={`/`}
                  className="w-28 h-12 items-center justify-center flex text-center bg-red-600 text-red-100 p-2 rounded-md hover:bg-red-500 hover:border-red-100 border-2  transition duration-300 ease-in-out "
                  >
                  Back
                </Link>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
