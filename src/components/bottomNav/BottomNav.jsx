import React from "react";
import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="flex md:hidden fixed bottom-0 left-0 backdrop-blur z-10 bg-white/75 w-full  border-t-2 py-3 justify-center">
      <ul className="flex items-center justify-between w-full max-w-md px-10">
        <li className="ml-3 hover:light-green VazirBold">
          <Link to="/">
            <i class="text-lg fa-regular fa-house"></i>
          </Link>
        </li>
        <li className="ml-3 hover:light-green VazirBold">
          <Link to="/library">
            <i class="text-lg fa-regular fa-books"></i>
          </Link>
        </li>
        <li className="ml-3 hover:light-green VazirBold">
          <Link to="/search">
            <i class="text-lg fa-regular fa-magnifying-glass"></i>
          </Link>
        </li>
        <li className="ml-3 hover:light-green VazirBold">
          <Link to="/contact">
            <i class="text-lg fa-regular fa-headset"></i>
          </Link>
        </li>
        <li className="ml-3 hover:light-green VazirBold">
          <Link to="/about">
            <i class="text-lg fa-regular fa-circle-question"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
