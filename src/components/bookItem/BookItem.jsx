import React from "react";
import { Link } from "react-router-dom";
import TomanIcon from "../shared/icons/TomanIcon";

export default function BookItem({
  url = "https://img.ketabrah.ir/img/s/1659769248245481.jpg",
  alt = "BookItem",
  title,
  type = Math.floor(Math.random() * 3 + 1), // sound, text, video
}) {
  return (
    <div className="inline-block w-36 md:w-40 group cursor-pointer relative">
      <Link to={"/book/1"}>
        <>
          <div>
            <img
              className="rounded group-hover:scale-95 transition-all"
              src={url}
              alt={alt}
            />
          </div>
          <div className="px-3">
            <h1 className="text-sm whitespace-nowrap Vazir w-full text-ellipsis overflow-hidden my-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </h1>
            <div className="flex justify-between items-center">
              <small className="text-sm VazirLight">دنیل لودر</small>
              <small className="text-sm VazirBold flex">
                ۲۴۰۰۰ <TomanIcon />
              </small>
            </div>
          </div>
          {/* Sound */}
          {type === 1 && (
            <span className="bg-white rounded w-7 h-7 absolute top-2 left-2 flex justify-center items-center shadow-lg">
              <i className="fa-regular fa-headphones green"></i>
            </span>
          )}
          {/* Text */}
          {type === 2 && (
            <span className="bg-white rounded w-7 h-7 absolute top-2 left-2 flex justify-center items-center shadow-lg">
              <i className="fa-regular fa-file-lines green"></i>
            </span>
          )}
          {type === 3 && (
            <span className="bg-white rounded w-7 h-7 absolute top-2 left-2 flex justify-center items-center shadow-lg">
              <i className="fa-regular fa-video green"></i>
            </span>
          )}
        </>
      </Link>
    </div>
  );
}
