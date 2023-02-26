import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios-config";
import { InfinitySpin } from "react-loader-spinner";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await axios.get("/articles");
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    loadArticles();
  }, []);

  if (loading) {
    return (
      <div className="flex xl:ml-80 h-screen lg:ml-52 md:ml-20 justify-center items-center">
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
    <div className="flex xl:right-0 xl:top-0 w-full bg-transparent font-mono mt-20  xl:mt-0 lg:mt-0 h-full justify-end p-10">
      <div className="grid grid-cols-1 lg:w-4/5 xl:w-3/4 gap-1 justify-center items-center p-10 h-full">
        {articles.map((article) => (
          <div
            className="p-4 mb-4 bg-gradient-to-tl from-black to-stone-800 text-stone-300 rounded-lg shadow-lg transition ease-in-out duration-500 hover:scale-105 hover:bg-gradient-br hover:from-black hover:to-stone-700"
            key={article.id}
          >
            <div>
              <h2 className="text-lg font-medium">
                <Link className=" font-Epilogue" to={`/articles/${article.id}`}>
                  <h1 className="xl:text-5xl lg:5xl text-3xl transition ease-in-out duration-500 hover:text-white hover:font-bold">
                    {article.title}
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
    </div>
  );
};

export default Blog;
