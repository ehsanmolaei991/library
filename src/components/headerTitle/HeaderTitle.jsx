import React from "react";
import { Link } from "react-router-dom";

export default function HeaderTitle({ title, more = false }) {
  return (
    <div className="flex justify-between items-center mb-3 border-b-2">
      <h1 className="VazirBold text-xl md:text-3xl dark-purple mb-2">
        {title}
      </h1>
      {more && (
        <Link to={`/list?category=${title}`}>
          <small className="VazirLight text-md md:text-lg cursor-pointer hover:dark-purple">
            مشاهده همه <i className="fa-regular fa-square-arrow-up-left mr-1"></i>
          </small>
        </Link>
      )}
    </div>
  );
}
