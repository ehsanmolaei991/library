import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../shared/icons/Logo";
import Button from "../shared/button/Button";
export default function Navbar() {
  let navigate = useNavigate();
  return (
    <div className="container mx-auto p-2 flex items-center justify-between relative">
      <div className="flex items-center">
        <Link to="">
          <Logo className="fill-light-green  ml-3" />
        </Link>
        <nav className="navSmallScreenView hidden md:block w-full border-r-2 border-darkest-gray pr-3">
          <ul className="flex items-center">
            <li className="ml-3 darkest-gray hover:light-green VazirBold">
              <Link to="/">خانه</Link>
            </li>
            <li className="ml-3 darkest-gray hover:light-green VazirBold">
              <Link to="/library">کتابخانه</Link>
            </li>
            <li className="ml-3 darkest-gray hover:light-green VazirBold">
              <Link to="/contact">ارتباط با ما</Link>
            </li>
            <li className="ml-3 darkest-gray hover:light-green VazirBold">
              <Link to="/about">درباره ما</Link>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="flex">
        <li className="mr-1">
          <Button
            iconRight="fa-regular fa-user"
            textClassName="text-xs"
            title="حساب کاربری"
          />
        </li>
        <li className="mr-1 hidden md:block">
          <Link to="/search">
            <Button iconLeft="fa-regular fa-magnifying-glass" rounded outline />
          </Link>
        </li>
        <li className="mr-1">
          <Button
            onClick={() => navigate(-1)}
            iconLeft="fa-regular fa-arrow-left"
            rounded
            outline
          />
        </li>
      </ul>
    </div>
  );
}
