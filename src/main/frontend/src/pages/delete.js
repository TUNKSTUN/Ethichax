import React, {useState, Link} from 'react'
import axios from '../axios-config'


const Delete = () => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    
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
    const deleteUser=async(id)=>{
        try{
    
            await axios.delete(`/articles/${id}`)
            loadArticles()
        }catch (error) {
            console.error(error);
          }
      }
  return (
    <div className=''>
        <div className="">
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
       
      <button to="/" onClick={()=>deleteUser(articles.id)} className="bg-white text-black w-full h-full">Delete</button>
      </div>
    </div>
  )
}

export default Delete;  