import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios-config";
import { InfinitySpin } from "react-loader-spinner";
const Article = () => {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState({
    id: null,
    title: "",
    date: "",
    description: "",
    article: "",
  });
  const { id } = useParams();
  useEffect(() => {
    const loadArticle = async () => {
      try{
      const result = await axios.get(`/articles/${id}`);
      setArticle(result.data);
      setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    loadArticle();
  }, []);

  if (loading) {
    return (
      <div className="flex xl:ml-80 h-screen lg:ml-52 md:ml-20 justify-center items-center bg-stone-900">
        <InfinitySpin
          color="#FFFFFF"
          height={140}
          width={140}
          wrapperStyle
          wrapperClass
          ariaLabel="Loading"
        />
      </div>
    );
  }

  if (!article.id) {
    return (
      <div className="flex justify-center items-center h-screen text-white bg-transparent text-xl">
        <p>Loading article...</p>
      </div>
    );
  }

  return (
    <div className="flex w-full h-full bg-stone-900">

    <div className="flex justify-between  w-full xl:pt-20 lg:pt-20 pt-32 h-full p-8  text-white font-mono">
      <div className="flex xl:w-1/3 lg:w-1/4 h-1/6 w-auto"></div>
      <div
        key={article.id}
        className="space-y-3  h-full w-full xl:p-10 lg:p-10 p-5 rounded-xl bg-stone-900"
        >
        <div className="xl:text-4xl lg:text-4xl text-3xl flex justify-between w-full font-bold ">
          <div className="font-Epilogue">{article.title} </div>
          <br />
          <div className="xl:text-sm lg:text-sm text-xs md:text-sm py-5 text-stone-500 w-32 font-extralight">
            {article.date}
          </div>
        </div>
        <h3 className="text-xl text-stone-100">{article.description}</h3>

        <p className="text-xl text-justify">{article.article} </p>
      </div>
    </div>
        </div>
  );
};

export default Article;
