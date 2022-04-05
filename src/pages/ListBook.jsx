import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BookItem from "../components/bookItem/BookItem";

export default function ListBook() {
  const [category, setCategory] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setCategory(searchParams.get("category"));
    return () => {};
  }, [searchParams]);

  return (
    <div className="container mx-auto p-3">
      <div className="grid grid-cols-12 gap-x-2">
        <div className="col-span-12 md:col-span-3 lg:col-span-2 sticky top-16 z-20">
          <div className="bg-white/80 backdrop-blur shadow-md border-2 p-4 rounded-md">
            <h3 className="VazirBold dark-purple">
              <i className="fa-regular fa-folder-tree ml-1"></i> دسته بندی کتب
            </h3>
            <hr className="my-2" />
            <ul className="list-disc list-inside overflow-auto touch-pan-x overflow-y-hidden flex md:flex-col pt-2 pb-1">
              {[...new Array(20)].map((item, index) => (
                <Link className="mt-0 md:first:mt-0 ml-3 md:ml-0 md:mt-4" key={`category-${index}`} to={`/list?category=بیوگرافی`}>
                  <li className="Vazir text-sm text-gray-500 group hover:green cursor-pointer whitespace-nowrap">
                    {`بیوگرافی | ${Math.floor(Math.random() * 50 + 1)}`}
                    <i className="fa-regular fa-arrow-left-long mx-2 hidden md:inline-block invisible group-hover:mx-3 group-hover:visible transition-all"></i>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          <div className="bg-white shadow-md p-4 rounded-md">
            <h3 className="VazirBold text-gray-400">
              <Link to={"/list"}>
                <span className="text-sm cursor-pointer hover:green">کتب</span>
              </Link>
              {category && (
                <i className="fa-regular fa-chevron-left text-xs mx-2"></i>
              )}
              {category && (
                <span className="text-sm cursor-pointer light-green hover:green">
                  {category}
                </span>
              )}
            </h3>
            <hr className="my-2 mb-4" />
            <div className="grid grid-cols-12 gap-5">
              {[...new Array(30)].map((item, index) => (
                <div
                  key={`book-${index}`}
                  className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-2 flex justify-center items-center"
                >
                  <BookItem />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
