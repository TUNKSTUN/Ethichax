import React from "react";

import Navbar from "./layout/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Blog from "./pages/blog.js";
import Article from "./pages/article";
import Contact from "./pages/Contact";
import Guest from "./pages/Guest";
import Navbar2 from "./layout/navbar2";
import Error from "./layout/Error"
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
        </Routes>
    </Router>
      </div>
  );
};

export default App;
