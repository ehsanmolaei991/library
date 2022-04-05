import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavReading({
  onHighlightClick = () => {},
  onSettingsClick = () => {},
  onTopicsListClick = () => {},
}) {
  const navigate = useNavigate();

  return (
    <div className="w-full fixed left-0 top-0 flex justify-center items-center z-10">
      {/* Menu */}
      <div className="container backdrop-blur bg-white/75 z-20  flex justify-between items-center pt-3 pb-2 px-5">
        {/* Right Side */}
        <ul className="flex">
          <li className="ml-7" onClick={onHighlightClick}>
            <i className="fa-regular fa-highlighter-line text-2xl text-gray-500 hover:green cursor-pointer"></i>
          </li>
          <li className="ml-7" onClick={onSettingsClick}>
            <i className="fa-regular fa-square-sliders text-2xl text-gray-500 hover:green cursor-pointer"></i>
          </li>
        </ul>
        {/* Left Side */}
        <ul className="flex">
          <li className="mr-7" onClick={onTopicsListClick}>
            <i className="fa-regular fa-list-radio text-2xl text-gray-500 hover:green cursor-pointer"></i>
          </li>
          <li className="mr-7" onClick={() => navigate(-1)}>
            <i className="fa-regular fa-arrow-right-from-bracket rotate-y-180 text-2xl text-gray-500 hover:green cursor-pointer"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
