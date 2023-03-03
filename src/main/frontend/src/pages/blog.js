import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios-config";
import { InfinitySpin } from "react-loader-spinner";
import {BiArrowToTop} from "react-icons/bi"

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
 
    function handleClick() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   
  }

  const loadArticles = async () => {
    setLoading(true)
    setTimeout(async () => {
        try {
          const response = await axios.get("/articles/all");
          setArticles(response.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false); // Set loading to false after data is fetched (or after an error occurs)
        }
      }, 1000); // Set the timeout duration to 3 seconds
    };

    useEffect(() => {
    loadArticles();
  }, []);

  if (loading) {
    return (
      <div className="flex xl:ml-80 lg:ml-40 h-screen justify-center items-center">
        <InfinitySpin
          color="#1A120B"
          height={140}
          width={140}
          wrapperStyle
          wrapperClass
          ariaLabel="Loading"
        />
      </div>
    );
  }
  return (
    <div className="flex xl:right-0 xl:top-0 w-full bg-transparent font-mono mt-20  xl:mt-0 lg:mt-0 h-full justify-end p-10 bg-gradient-to-bl from-stone-600 to-stone-100">
      <div className="grid grid-cols-1 lg:w-4/5 xl:w-3/4 gap-1 justify-center items-center p-2 xl:p-10 lg:p-10 h-full">
        {articles.reverse().map((article, index) => (
          <div
            className="p-4 mb-4 bg-gradient-to-tl from-black to-stone-800 text-stone-300 rounded-lg shadow-lg transition ease-in-out duration-500 hover:scale-105 hover:-rotate-1 hover:bg-gradient-br hover:from-black hover:to-stone-700 hover:border-stone-300 hover:border-b"
            key={article.id}
          >
            <div>
              <h2 className="text-lg font-medium">
                <Link className=" font-Epilogue" to={`/articles/${article.id}`}>
                  <h1 className="xl:text-5xl lg:5xl text-3xl transition ease-in-out duration-500 hover:text-white hover:font-bold">
                  {index + 1}. {article.title}
                  </h1>
                </Link>
              </h2>
              <p className="text-gray-500">{article.date}</p>
              <h3 className="text-md text-gray-400 text-justify">
                {article.description.split(" ").slice(0, 10).join(" ")}
                {article.description.split(" ").length > 10 ? "..." : ""}
              </h3>
            </div>
          </div>
        ))}
       
      </div>
      <button onClick={handleClick} className="text-xl opacity-50 text-center text-stone-100 flex items-center justify-center w-10 h-10 z-20 fixed bottom-10 right-5 border bg-stone-800 rounded-full transition ease-in-out  duration-300 delay-50 hover:scale-110 hover:border hover:opacity-90">
      <BiArrowToTop/>
    </button>
    </div>
  );
};

export default Blog;
