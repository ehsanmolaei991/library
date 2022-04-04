import React, { useEffect, useState } from "react";
import Button from "../components/shared/button/Button";
import Input from "../components/shared/input/Input";

export default function Search({}) {
  const [search, setSearch] = useState("");

  return (
    <div className="container mx-auto py-10">
      <div className="min-w-[70%] shadow">
        <Input
          onChange={(value) => setSearch(value)}
          placeholder="جستجوی کتاب، نویسنده، ناشر ..."
          iconRight="fa-regular fa-magnifying-glass"
        />
      </div>
      {/* <div className="grid grid-cols-12 gap-x-2 gap-y-5 w-full">
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="bg-white p-3 rounded-lg shadow-lg border-2">
            <h5 className="VazirBold text-center mb-2 dark-green">
              جستجو در متن کتاب ها
            </h5>
            <hr />
            <Input
              containerClassName="mt-2"
              // onChange={(value) => setSearch(value)}
              placeholder="جستجوی کتاب، نویسنده، ناشر ..."
              iconRight="fa-regular fa-magnifying-glass"
            />
            <Button className="mt-2" textClassName="text-xs" title="جستجو کن" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="bg-white p-3 rounded-lg shadow-lg border-2">
            <h5 className="VazirBold text-center mb-2 dark-green">
              جستجو کتاب و نویسنده
            </h5>
            <hr />
            <Input
              containerClassName="mt-2"
              // onChange={(value) => setSearch(value)}
              placeholder="جستجوی کتاب، نویسنده، ناشر ..."
              iconRight="fa-regular fa-magnifying-glass"
            />
            <Button className="mt-2" textClassName="text-xs" title="جستجو کن" />
          </div>
        </div>
      </div> */}

      <p className="VazirBold my-3">
        نتایج جستجو در: <span className="green">{search}</span>
      </p>
    </div>
  );
}
