import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/shared/button/Button";

export default function NotFound() {
  return (
    <div className="py-36">
      <div className="flex justify-center items-center">
        <i className="fa-solid fa-square-4 mx-3 text-4xl green animate-bounce"></i>
        <i className="fa-regular fa-square-0 mx-3 text-4xl green animate-bounce mb-10"></i>
        <i className="fa-solid fa-square-4 mx-3 text-4xl green animate-bounce"></i>
      </div>
      <h1 className="text-center dark-green Vazir mt-5">
        صفحه مورد نظر شما یافت نشد.
      </h1>
      <Link to={"/"}>
        <Button
          iconLeft="fa-regular fa-square-arrow-left"
          textClassName="text-xs"
          title="بازگشت به خانه"
          containerClassName="my-3 flex justify-center"
        />
      </Link>
    </div>
  );
}
