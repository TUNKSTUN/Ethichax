import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "../axios-config";
import { FaEdit } from "react-icons/fa";

const Edit = () => {
  const history = useNavigate();
  const [edit, setEdit] = useState({
    id: "",
    title: "",
    description: "",
    article: "",
    date: "",
  });

  const { id } = useParams();
  const { title, description, article, date } = edit;

  const today = new Date().toISOString().substr(0, 10);
  const updatedEdit = { ...edit, date: today };

  const onInputChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/articles/${id}/edit`, updatedEdit);
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
        date: new Date(result.data.date).toISOString().substr(0, 10),
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
      <div className="flex w-full h-full pt-20 bg-stone-900 items-center">
        <div className="flex justify-between  w-full h-full p-8 text-white font-mono">
          <div className="flex xl:w-1/3 lg:w-1/4 h-1/6 w-auto "></div>
          <div
            key={edit.id}
            className="space-y-3  h-full w-full xl:p-10 lg:p-10 p-5 bg-stone-900"
          >
            <div className="xl:text-4xl lg:text-4xl text-3xl flex justify-between w-full font-bold ">
              <div className="font-Epilogue">{edit.title} </div>
              <br />
              <div className="xl:text-sm lg:text-sm text-xs md:text-sm py-5 text-stone-500 w-32 font-extralight">
                {edit.date}
              </div>
              <Link
                to={`/articles/${id}/edit`}
                className="p-2 text-white xl:text-xl lg:text-lg text-base"
                id="edit"
                active="text-black"
              >
                <FaEdit />
              </Link>
            </div>
            <h3 className="text-sm py-5 text-gray-500 italic">
              {article.description}
            </h3>

            <p className="text-base text-justify h-full">{edit.article} </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full backdrop-blur-sm text-stone-200 z-20 top-0 left-0 fixed justify-center items-center">
        <div className="justify-center items-center flex xl:m-20 m-10 xl:p-10 xl:px-40">
          <div className="flex w-full h-full items-center justify-center bg-stone-900  rounded-xl border flex-col ">
            <h1 className="text-stone-200 text-center md:text-5xl text-3xl xl:text-5xl font-[Epilogue]  font-bold lg:text-2xl flex mt-3">
              Edit
            </h1>
            <form
              className="w-full text-stone-100 text-start h-auto items-start px-20 rounded-xl bg-transparent xl:grid xl:grid-cols-2 flex flex-col gap-2 m-5"
              onSubmit={onSubmit}
            >
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={date}
                className="w-full border-b-white p-2 font-[Epilogue] h-auto border-none rounded-md bg-stone-100 text-black "
                onChange={onInputChange}
              />
              <label>Title</label>
              <input
                type="title"
                name="title"
                autoComplete="off"
                autoSave="off"
                value={title}
                className="w-full border-b-white p-2 font-[Epilogue]  h-auto border-none rounded-md bg-stone-100 text-black"
                onChange={onInputChange}
              />
              <label>Description</label>
              <input
                type="description"
                name="description"
                autoComplete="off"
                autoSave="off"
                value={description}
                className="w-full border-b-white p-2 font-[Epilogue]  h-auto border-none rounded-md bg-stone-100 text-black"
                onChange={onInputChange}
              />
              <label>Article</label>
              <input
                type="article"
                name="article"
                autoComplete="off"
                autoSave="off"
                value={article}
                className="w-full border-b-white p-2 font-[Epilogue]  h-auto border-none rounded-md bg-stone-100 text-black"
                onChange={onInputChange}
              />
              <div className="w-full h-full space-x-3 flex">
                  <button
                    type="submit"
                    className="w-full h-auto bg-stone-900 text-white p-2 rounded-md hover:bg-white hover:text-stone-900 hover:border-stone-900 border-2 transition duration-300 ease-in-out"
                  >
                Update
                  </button>
                <Link
                  to={`/articles/${id}`}
                  className="w-full text-center h-auto bg-red-600 text-red-100 p-2 rounded-md hover:bg-red-500 hover:border-red-100 border-2  transition duration-300 ease-in-out "
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
