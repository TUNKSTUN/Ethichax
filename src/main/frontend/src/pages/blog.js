import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import axios from "../axios-config";


const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    
    // Load articles from the server
    loadArticles();
  }, []);
  // Try to load articles from local storage
  const localArticles = localStorage.getItem("articles");
  if (localArticles) {
    setArticles(JSON.parse(localArticles));
  }

  const loadArticles = async () => {
    try {
      const response = await axios.get("https://backend-1677300384071.azurewebsites.net/articles");
      setArticles(response.data);
      // Save articles to local storage
      // localStorage.setItem('articles', JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full p-10 justify-center bg-stone-300 font-mono">
  <div className="">
    {articles.map((article) => (
      <div
        className="p-4 mb-4 bg-gradient-to-tl from-black to-slate-800 text-stone-300 rounded-lg shadow-lg transition ease-in-out duration-500 hover:scale-105 hover:bg-gradient-br hover:from-black hover:to-slate-700"
        key={article.id}
      >
        <div>
          <h2 className="text-lg font-medium">
            <Link
              className="text-4xl font-Epilogue"
              to={`/articles/${article.id}`}
            >
              <h1 className="transition ease-in-out duration-500 hover:text-white hover:font-bold">
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
