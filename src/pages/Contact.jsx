import React from "react";
import HeaderTitle from "../components/headerTitle/HeaderTitle";

const supportBtn = [
  {
    title: "پشتیبانی کاربران",
    subtitle: "راهنمایی، پشتیبانی و رفع مشکلات",
  },
  {
    title: "انتشار کتاب در کتابراه",
    subtitle: "راهنمای شروع همکاری و نشر کتاب الکترونیک و صوتی",
  },
  {
    title: "پشتیبانی ناشران و مولفان",
    subtitle: "راهنمایی و پشتیبانی ناشران و مولفان طرف قرارداد",
  },
];

export default function Contact() {
  return (
    <div className="container mx-auto p-5 py-10 md:py-24">
      <HeaderTitle title="ارتباط با ما" />
      <div className="grid grid-cols-12 gap-3 my-8 lg:my-10">
        {supportBtn?.map((item) => (
          <div className="col-span-12 lg:col-span-4 w-full flex justify-center">
            <div className="border-2 shadow-lg group hover:bg-light-green bg-white flex w-full max-w-md p-10 rounded-lg justify-between items-center border-light-green cursor-pointer">
              <div>
                <h3 className="darkest-gray VazirBold group-hover:white transition-all">
                  {item.title}
                </h3>
                <small className="darkest-gray VazirLight pl-5 group-hover:white transition-all group-hover:-translate-x-2 block">
                  {item.subtitle}
                </small>
              </div>
              <i class="fa-regular fa-square-arrow-left light-green text-4xl group-hover:white transition-all group-hover:-translate-x-2"></i>
            </div>
          </div>
        ))}
      </div>
      <HeaderTitle title="راه های ارتباطی" />
      <p className="flex items-center leading-7 my-5 text-sm md:text-md">
        <i class="fa-regular fa-location-dot text-xl green ml-3"></i>
        <span>
          تهران، خیابان کارگر جنوبی، بالاتر از خیابان جمهوری، پلاک ۱۲۱۳ واحد ۱،
          کد پستی ۱۳۱۴۹۳۳۱۶۳
        </span>
      </p>
      <p className="flex items-center leading-7 my-5 text-sm md:text-md">
        <i class="fa-regular fa-envelope text-xl green ml-3"></i>
        <span>
          جهت ارسال پیشنهادات و انتقادات و یا امور دیگر از طریق ایمیل
          <a className="dark-green px-2" href="mailto:info@ketabrah.ir">
            info@ketabrah.ir
          </a>{" "}
          و یا تلفن
          <a className="dark-green px-2" href="callto:+989376594526">
            +989376594526
          </a>
        </span>
      </p>
      <p className="flex items-center leading-7 my-5 text-sm md:text-md">
      <i class="fa-regular fa-clock text-xl green ml-3"></i>
        <span>ساعات اداری (شنبه تا چهارشنبه ۸:۳۰ الی ۱۶:۳۰)</span>
      </p>
    </div>
  );
}
