import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../layout/NavBar";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieDetail from "../pages/MovieDetail";
import Footer from "../layout/Footer";

const RoutesApp = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movieDetail/:id" element={<MovieDetail/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default RoutesApp;
