import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Search from "../pages/Search";
import Contact from "../pages/Contact";
import Auth from "../pages/Auth";
import Book from "../pages/Book";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<Search />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/book/:id" element={<Book />} />
    </Routes>
  );
}
