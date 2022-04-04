import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper";
import BookItem from "../bookItem/BookItem";
import HeaderTitle from "../headerTitle/HeaderTitle";

export default function HorizontalCarousel({ title }) {
  return (
    <div className="bg-white p-5 rounded-lg border-2 border-lightest-gray">
      <HeaderTitle title={title} more />
      <Swiper
        spaceBetween={15}
        slidesPerView={"auto"}
        freeMode={true}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {[...new Array(10)].map(() => (
          <SwiperSlide>
            <BookItem />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
