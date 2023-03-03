import React, { useEffect, useState   } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "../axios-config";
import { RevolvingDot } from "react-loader-spinner";
import { FaEdit } from "react-icons/fa";
import { MdOutlineArrowBackIos } from "react-icons/md";
const Article = () => {
  const [loading, setLoading] = useState(true);
  const history = useNavigate();

  const [article, setArticle] = useState({
    id: null,
    title: "",
    date: "",
    description: "",
    article: "",
  });
  const { id } = useParams();
  
    const loadArticle = async () => {
      setLoading(true);
      setTimeout(async () => {
        try {
          const result = await axios.get(`/articles/${id}`);
          setArticle(result.data);
          history(`/articles/${id}`);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false); // Set loading to false after data is fetched (or after an error occurs)
        }
      }, 1500); // Set the timeout duration to 3 seconds
    };
    
    useEffect(() => {
      loadArticle();
    }, []);
  if (loading) {
    return (
      <div className="flex xl:ml-80 h-screen lg:ml-52 md:ml-20 justify-center items-center bg-stone-900">
        <RevolvingDot
          color="#FFFFFF"
          height={50}
          width={50}
          wrapperStyle
          wrapperClass
          ariaLabel="Loading"
        />
      </div>
    );
  }

  return (
    <div className="flex w-full h-full pt-20 bg-stone-900 items-center">

    <div className="flex justify-between  w-full h-full p-8 text-white font-mono">
      <div className="flex xl:w-1/3 lg:w-1/4 h-1/6 w-auto "></div>
     
      <div
        key={article.id}
        className="space-y-3  h-full w-full xl:p-10 lg:p-10 p-5 bg-stone-900"
        >
          <div className="flex justify-between">
      <Link to={`/`} className="p-2 border rounded-md text-stone-100 xl:text-lg lg:text-lg text-base gap-2 flex transition ease-in-out duration-200 hover:bg-stone-700 hover:text-stone-300 items-center" id="edit">Back <MdOutlineArrowBackIos/></Link>
      <Link to={`/articles/${id}/edit`} className="p-2 text-stone-100 border rounded-md xl:text-lg lg:text-lg text-base flex gap-2 transition ease-in-out duration-200 hover:bg-stone-700 items-center" id="edit">Edit <FaEdit/></Link>
          </div>

        <div className="xl:text-4xl lg:text-4xl text-3xl flex flex-col w-full font-bold border-t ">
          <div className="font-Epilogue mt-10">{article.title} </div>
         
          <div className="xl:text-sm lg:text-sm text-xs md:text-sm py-5 text-stone-500 w-32 font-extralight">
            {article.date}
          </div>
        </div>
        <h3 className="text-sm py-5 text-gray-500 italic">{article.description}</h3>

        <p className="text-base text-justify h-full">{article.article} </p>
      </div>
      
    </div>
        </div>
  );
};

export default Article;
