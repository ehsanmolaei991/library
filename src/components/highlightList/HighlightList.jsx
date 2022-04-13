import React from "react";

export default function HighlightList({
  isOpen = false,
  selections = [],
  setSelections,
  renditionRef,
  onClose = () => {},
}) {
  return (
    <div
      style={{ boxShadow: "rgb(0 0 0 / 16%) -4px 0px 8px 0px" }}
      className={`bg-white fixed top-0 right-0 rounded-none sm:rounded-l-xl  transition-all duration-500 p-4 border-l-2 z-20 w-full max-w-sm h-full  ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } `}
    >
      <div className="flex justify-between items-center">
        <h3 className="VazirBold text-lg dark-purple flex items-center">
          <i className="fa-regular fa-highlighter-line mx-3 text-xl"></i> هایلات
          ها
        </h3>
        <i
          className="fa-regular fa-octagon-xmark text-lg dark-purple cursor-pointer"
          onClick={onClose}
        ></i>
      </div>
      <hr className="my-3" />
      <ul className="h-[95%] overflow-auto px-2">
        {selections.map(({ text, cfiRange, color = "yellow" }, i) => (
          <li
            onClick={() => {
              renditionRef.current.display(cfiRange);
              onClose();
            }}
            key={i}
            style={{ backgroundColor: color }}
            className={`p-2 rounded-md white mt-3 text-sm`}
          >
            {text}{" "}
            {/* <button
              onClick={() => {
                renditionRef.current.display(cfiRange);
              }}
            >
              Show
            </button> */}
            {/* <button
              onClick={() => {
                renditionRef.current.annotations.remove(cfiRange, "highlight");
                setSelections(selections.filter((item, j) => j !== i));
              }}
            >
              x
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
