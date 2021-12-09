import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Landing from "./pages/landing";
import Projects from "./pages/projects";
import Sketches from "./pages/sketches";
import Posts from "./pages/posts";

function App() {
  return (
    <Router basename="/portfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/sketches" element={<Sketches/>} />
      </Routes>
    </Router>
  );
}

export default App;
