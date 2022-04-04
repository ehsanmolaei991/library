import React, { useState } from "react";

export default function Input({
  containerClassName = "",
  type = "text",
  name = "",
  placeholder = "",
  disabled = false,
  required = false,
  style = {},
  className = "",
  defaultValue,
  onChange = () => {},
  iconRight = "",
  iconRightClassName = "",
  iconLeft = "",
  iconLeftClassName = "",
}) {
  const [value, setValue] = useState("");

  return (
    <div
      className={`flex items-center border-2 rounded-md py-2 px-2 bg-lightest-gray opacity-90 ${containerClassName}`}
    >
      {iconRight && (
        <i className={`ml-2 text-sm dark-gray opacity-70 ${iconRight} ${iconRightClassName}`}></i>
      )}
      <input
        type={type}
        style={style}
        className={`outline-none bg-transparent w-full darkest-gray placeholder:text-xs text-sm ${className}`}
        placeholder={placeholder}
        name={name}
        alt={name}
        disabled={disabled}
        required={required}
        value={defaultValue ? defaultValue : value}
        onChange={(ele) => {
          setValue(ele.target.value);
          onChange(ele.target.value);
        }}
      />
      {iconLeft && (
        <i className={`ml-2 text-sm dark-gray opacity-70 ${iconLeft} ${iconLeftClassName}`}></i>
      )}
    </div>
  );
}
