import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import axios from '../axios-config';

const Delete = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/articles/all');
      setArticles(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteArticle = async (id) => {
    try {
      await axios.delete(`/articles/${id}`);
      setArticles(articles.filter((article) => article.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
     {/* background */}
     <div className="flex w-full h-screen pt-20 bg-gradient-to-bl from-stone-800 to-black items-center"/>
    <div className='w-full h-full text-white fixed backdrop-blur-sm top-0 right-0 z-20 justify-center items-center flex flex-col p-10 font-Epilogue'>
        <div className='w-auto h-full text-stone-200  bg-gradient-to-bl from-stone-800 to-black rounded-xl  justify-center items-center p-10 flex flex-col border  '>
    <h1 className='mt-10 m-2 text-4xl font-extrabold tracking-widest'> Delete Articles</h1>
      <div className='w-full h-full shadow-black shadow-inner backdrop-blur-lg  rounded-xl bg-stone-800 py-5 border text-stone-200 flex flex-col scrollbar p-5 scrollbar-thumb-stone-100 scrollbar-thumb-rounded scrollbar-track-black scroll-auto  transition ease-in-out duration-500 hover:scrollbar-thumb-stone-300 overflow-y-auto '>
        
          <ol className='list-decimal text-white'>
            {articles.map((article, index) => (
              <li key={article.id} className='flex text-start space-y-2 justify-between'>
                <div className='w-full flex space-x-2'>
                <h2 className=' text-xl font-medium text-stone-200'>
                  {index + 1}. {article.title}
                </h2>
                </div>
                <div className='w-1/8'>
                <button
                  onClick={() => deleteArticle(article.id)}
                  className='text-stone-200 w-40 h-8 text-center bg-red-900 font-extrabold tracking-widest ml-10 rounded-lg hover:bg-red-700 hover:text-stone-100 border-2 transition duration-300 ease-in-out'
                  >
                  Delete
                </button>
                    </div>
              </li>
            ))}
          </ol>

      </div>
          <div className=' w-auto flex h-auto items-center justify-center  backdrop-blur-lg  rounded-xl text-stone-200  p-5 mx-60 '>
                
                <Link to={`/`}  className='w-20 font-extrabold tracking-widest h-auto bg-stone-800 text-white p-2 rounded-md hover:bg-stone-700 hover:border-stone-100 border-2 transition duration-300 text-center ease-in-out'>
                    Back
                </Link>
          </div>
            </div>
    </div>
            </>
  );
};

export default Delete;
