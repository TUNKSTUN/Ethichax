import React from "react";

import Navbar from "./layout/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Blog from "./pages/blog.js";
import Article from "./pages/article";
import Contact from "./pages/contact";
import Guest from "./pages/guest";
import Navbar2 from "./layout/navbar2";
import Error from "./layout/error"
import Edit from "./pages/edit"
import Delete from "./pages/delete"
import Add from "./pages/add"
const App = () => {
  return (
      <div className="bg-stone-900 w-full h-full z-10">
    <Router className="bg-black">
        <Navbar />
        <Navbar2/>
        <Routes>
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/articles/:id" element={<Article />} component={Article} />
          <Route exact path="/" element={<Blog />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/guest_book" element={<Guest />} />
          <Route exact path="*" element={<Error />} />
          <Route exact path="/articles/:id/edit" element={<Edit />} />
          <Route exact path="/articles/all" element={<Delete />} />
          <Route exact path="/articles/add" element={<Add />} />



          
        </Routes>
    </Router>
      </div>
  );
};

export default App;
