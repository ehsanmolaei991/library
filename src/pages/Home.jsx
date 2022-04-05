import React from "react";
import Logo from "../components/shared/icons/Logo";
import HorizontalCarousel from "../components/horizontalCarousel/HorizontalCarousel";
import Banner from "../components/banner/Banner";
import Category from "../components/category/Category";

export default function Home() {
  

  return (
    <>
      <div className="patternBackground py-20">
        <div className="flex justify-center items-center">
          <Logo className="fill-light-green" width={500} height={100} />
        </div>
      </div>
      <div className="container mx-auto py-5 md:py-10 px-3">
        <Category />
        <HorizontalCarousel title="تازه های برگزیده" />
        <Banner />
        <HorizontalCarousel title="کتب متنی پرفروش" />
      </div>
    </>
  );
}
