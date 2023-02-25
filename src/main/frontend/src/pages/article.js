import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const [articles, setArticle] = useState({
    id:"",
    title: "",
    date: "",
    description: "",
    article: "",
  });

  
  const { id } = useParams();
  useEffect(() => {
    loadArticle();
  }, []);
  const loadArticle = async () => {
    const result = await axios.get(`http://192.168.0.113:8443/articles/${id}`);
    setArticle(result.data);
  };


    // Save the article data to local storage
    // localStorage.setItem(`article-${id}`, JSON.stringify(result.data))

  return (
    <div className="w-full h-auto bg-stone-300 text-slate-900 p-10 font-mono">
      <div key={articles.id} className="space-y-3">
        <div className="text-4xl flex justify-between w-full font-bold">
          <div className="font-Epilogue">{articles.title}</div>
          <br />
          <div className="text-sm py-5 text-slate-500 w-32 font-extralight">{articles.date}</div>
        </div>
        <h3 className="text-md text-stone-500">{articles.description}</h3>

        <p className="text-lg text-justify">
      {articles.article}
        </p>
      </div>
    </div>
  );
};

export default Article;
