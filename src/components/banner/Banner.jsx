import React from "react";
import Button from "../shared/button/Button";

export default function Banner() {
  return (
    <>
      <div
        className="medium-banner rounded-lg shadow-md"
        style={{
          backgroundColor: "#293168",
          backgroundImage:
            "url(https://www.ketabrah.ir/img/content-blocks/s/i9288833954.jpg)",
        }}
      >
        <h3 className="white text-right">
          عطاری گمشده؛
          <br />
          از پرفروش‌ترین کتاب‌های
          <br />
          نیویورک تایمز و ساندی تایمز
        </h3>
        <Button
          className="mt-2 bg-white hover:bg-white"
          iconLeft="fa-regular fa-bag-shopping green group-hover:dark-green"
          textClassName="text-xs green group-hover:dark-green"
          title="دریافت کتاب"
        />
      </div>
    </>
  );
}
