import React from "react";

export default function TopicsList({
  isOpen = false,
  renditionRef,
  topics = [],
  onClose = () => {},
}) {
  return (
    <div
      style={{ boxShadow: "rgb(0 0 0 / 16%) 4px 0px 8px 0px" }}
      className={`bg-white fixed top-0 left-0 rounded-none sm:rounded-r-xl  transition-all duration-500 p-4 border-r-2 z-20 w-full max-w-sm h-full  ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <div className="flex justify-between items-center">
        <h3 className="VazirBold text-lg dark-green flex items-center">
          <i className="fa-regular fa-list-radio mx-3 text-xl"></i> سرفصل ها
        </h3>
        <i
          className="fa-regular fa-octagon-xmark text-lg dark-purple cursor-pointer"
          onClick={onClose}
        ></i>
      </div>
      <hr className="my-3" />
      <ul className="list-disc h-full list-inside touch-pan-y overflow-y-scroll overflow-auto overflow-x-hidden">
        {topics &&
          topics.map((item, i) => (
            <li
              onClick={() => renditionRef.current.display(item.href)}
              key={i}
              className="p-2 hover:green cursor-pointer mt-3 text-sm"
            >
              {item?.label}
            </li>
          ))}
      </ul>
    </div>
  );
}
