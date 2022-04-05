import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../shared/button/Button";

export default function Category() {
  return (
    <>
      <p className="text-center VazirLight text-lg mb-3">دسته بندی کتب</p>
      <Swiper
        spaceBetween={5}
        slidesPerView={"auto"}
        freeMode={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {[...new Array(20)].map((item, index) => (
          <SwiperSlide key={`swiper-${index}`}>
            <Link to={`/list?category=بیوگرافی`}>
              <Button
                outline
                className="mt-2 border-lightest-green bg-white hover:border-light-green hover:bg-light-green shadow-md"
                textClassName="text-xs green group-hover:white"
                title={`بیوگرافی | ${Math.floor(Math.random() * 50 + 1)}`}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
