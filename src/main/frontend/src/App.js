import React from "react";

import Navbar from "./layout/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Blog from "./pages/blog.js";
import Article from "./pages/article";
import Contact from "./pages/Contact";
import Guest from "./pages/Guest";
import Navbar2 from "./layout/navbar2";
const App = () => {
  return (
      <div className="bg-stone-300 w-full h-full">
    <Router>
        <Navbar />
        <Navbar2/>
        <Routes>
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/articles/:id" element={<Article />} />
          <Route exact path="/" element={<Blog />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/guest_book" element={<Guest />} />
          {/* <Route exact path={`/articles`} element={<Articles/>}/>
      <Route exact path={`/viewuser`} element={<About/>}/>
      <Route exact path={`/viewuser`} element={<GB/>}/>
    <Route exact path={`/Contact`} element={<Contact/>}/> */}
        </Routes>
    </Router>
      </div>
  );
};

export default App;
