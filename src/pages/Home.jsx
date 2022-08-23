import React, { useState } from "react";
import HorizontalCarousel from "../components/horizontalCarousel/HorizontalCarousel";
import Banner from "../components/banner/Banner";
import Category from "../components/category/Category";
import Input from "../components/shared/input/Input";

export default function Home() {
  const [search, setSearch] = useState();

  return (
    <>
      <div className="patternBackground py-20">
        <div className="flex flex-col justify-center items-center px-5">
          <Input
            onChange={(value) => setSearch(value)}
            placeholder="اسم کتاب، نام نویسنده و ..."
            iconRight="fa-regular fa-search"
            containerClassName="mt-3 w-full max-w-md"
          />
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
