import React from "react";
import BottomNav from "../components/bottomNav/BottomNav";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      {/*  */}
      <header className="shadow sticky top-0 z-10 backdrop-blur bg-white/75">
        <Navbar />
      </header>
      {/*  */}
      <main>{children}</main>
      {/*  */}
      <BottomNav />
      {/*  */}
      <footer className="pb-10 md:pb-0">
        <Footer />
      </footer>
      {/*  */}
    </>
  );
}
