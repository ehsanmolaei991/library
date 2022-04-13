import React from "react";

export default function HighlightColorSelection({
  selectionRange,
  setIsColorSelectionShow,
  setRenderSelection,
}) {
  return (
    <div className="absolute bottom-0 left-0 w-full animate__animated animate__fadeInUp green flex justify-center bg-white py-2 text-center z-20 rounded-t-md">
      <div className="flex justify-between w-full max-w-md">
        <i
          className="fa-regular fa-octagon-xmark text-lg dark-purple cursor-pointer"
          onClick={() => setIsColorSelectionShow(false)}
        ></i>
        <div className="flex">
          <span
            className="block w-8 h-8 rounded-full mx-3 transition-all cursor-pointer hover:-translate-y-1 bg-orange-500"
            onClick={() => {
              setIsColorSelectionShow(false);
              const { range, contents } = selectionRange;
              setRenderSelection(range, contents, "#f97316");
            }}
          />
          <span
            className="block w-8 h-8 rounded-full mx-3 transition-all cursor-pointer hover:-translate-y-1 bg-red-400"
            onClick={() => {
              setIsColorSelectionShow(false);
              const { range, contents } = selectionRange;
              setRenderSelection(range, contents, "#f87171");
            }}
          />
          <span
            className="block w-8 h-8 rounded-full mx-3 transition-all cursor-pointer hover:-translate-y-1 bg-indigo-500"
            onClick={() => {
              setIsColorSelectionShow(false);
              const { range, contents } = selectionRange;
              setRenderSelection(range, contents, "#6366f1");
            }}
          />
          <span
            className="block w-8 h-8 rounded-full mx-3 transition-all cursor-pointer hover:-translate-y-1 bg-green-400"
            onClick={() => {
              setIsColorSelectionShow(false);
              const { range, contents } = selectionRange;
              setRenderSelection(range, contents, "#4ade80");
            }}
          />
        </div>
      </div>
    </div>
  );
}
