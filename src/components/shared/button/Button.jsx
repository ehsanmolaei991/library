import React from "react";

export default function Button({
  title = "",
  containerClassName = "",
  className = "",
  textClassName = "",
  iconRightClassName = "",
  iconLeftClassName = "",
  iconRight = "",
  iconLeft = "",
  outline = false,
  rounded = false,
  animation = false,
  onClick = () => {},
}) {
  const defaultRoundClass = "w-10 h-10 flex items-center justify-center";

  if (outline) {
    return (
      <div className={`${containerClassName}`}>
        <button
          onClick={onClick}
          className={`flex items-center border-green border-2 green ${
            rounded ? defaultRoundClass : "px-4 py-2"
          } rounded-full group hover:bg-green hover:white ${className}`}
        >
          {iconRight && (
            <i
              className={`${title ? "ml-2 text-sm" : ""} ${
                animation
                  ? "transform transition-all group-hover:translate-x-1"
                  : ""
              } ${iconRight} ${iconRightClassName}`}
            ></i>
          )}
          {title && <span className={`${textClassName}`}>{title}</span>}
          {iconLeft && (
            <i
              className={`${title ? "mr-2 text-sm" : ""} ${
                animation
                  ? "transform transition-all group-hover:-translate-x-1"
                  : ""
              } ${iconLeft} ${iconLeftClassName}`}
            ></i>
          )}
        </button>
      </div>
    );
  } else {
    return (
      <div className={`${containerClassName}`}>
        <button
          onClick={onClick}
          className={`flex items-center border-2 border-transparent bg-green white ${
            rounded ? defaultRoundClass : "px-4 py-2"
          } rounded-full group hover:bg-dark-green ${className}`}
        >
          {iconRight && (
            <i
              className={`${title ? "ml-2 text-sm" : ""} ${
                animation
                  ? "transform transition-all group-hover:translate-x-1"
                  : ""
              } ${iconRight} ${iconRightClassName}`}
            ></i>
          )}
          {title && <span className={`${textClassName}`}>{title}</span>}
          {iconLeft && (
            <i
              className={`${title ? "mr-2 text-sm" : ""} ${
                animation
                  ? "transform transition-all group-hover:-translate-x-1"
                  : ""
              } ${iconLeft} ${iconLeftClassName}`}
            ></i>
          )}
        </button>
      </div>
    );
  }
}
