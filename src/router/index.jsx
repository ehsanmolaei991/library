import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Search from "../pages/Search";
import Contact from "../pages/Contact";
import Auth from "../pages/Auth";
import Book from "../pages/Book";
import ListBook from "../pages/ListBook";
import NotFound from "../pages/NotFound";
import Reading from "../pages/Reading";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<Search />} />
      <Route path="/auth" element={<Auth />} />
      <Route exact path="/book/:id" element={<Book />} />
      <Route path="/list" element={<ListBook />} />
      <Route path="/reading" element={<Reading />} />
      {/* Not Found 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
