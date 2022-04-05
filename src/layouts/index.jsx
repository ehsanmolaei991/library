import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BottomNav from "../components/bottomNav/BottomNav";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

export default function Layout({ children }) {
  const location = useLocation();

  const [isFooterShow, setisFooterShow] = useState(true);
  const [isHeaderShow, setisHeaderShow] = useState(true);
  const [isBottomNavShow, setisBottomNavShow] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    //
    setisFooterShow(true);
    setisHeaderShow(true);
    setisBottomNavShow(true);
    // if is route in reading page
    if (location?.pathname.search("reading")) {
      setisFooterShow(false);
      setisHeaderShow(false);
      setisBottomNavShow(false);
    }
  }, [location]);

  return (
    <>
      {/*  */}
      {isHeaderShow && (
        <header className="shadow sticky top-0 z-10 backdrop-blur bg-white/75">
          <Navbar />
        </header>
      )}
      {/*  */}
      <main>{children}</main>
      {/*  */}
      {isBottomNavShow && <BottomNav />}
      {/*  */}
      {isFooterShow && (
        <footer className="pb-10 md:pb-0">
          <Footer />
        </footer>
      )}
      {/*  */}
    </>
  );
}
