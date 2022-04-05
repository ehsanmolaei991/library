import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/shared/button/Button";
import TomanIcon from "../components/shared/icons/TomanIcon";

const activeTabClass = "border-green dark-green";

export default function Book({
  url = "https://img.ketabrah.ir/img/s/1659769248245481.jpg",
  alt = "BookItem",
}) {
  

  const [isFavorite, setIsFavorite] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [tab, setTab] = useState(1);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <div className="container mx-auto px-2 py-10">
      <div className="border-2 rounded-md shadow-md p-3">
        <div className="grid grid-cols-9 gap-2">
          <div className="col-span-9 md:col-span-2 flex flex-col md:flex-row justify-center items-center">
            <ul className="flex flex-row md:flex-col justify-between w-full h-full p-5">
              <li
                onClick={handleFavorite}
                className="flex justify-center items-center cursor-pointer"
              >
                {!isFavorite && (
                  <i className="fa-regular fa-bookmark text-lg green"></i>
                )}
                {isFavorite && (
                  <i className="fa-solid fa-bookmark text-lg green"></i>
                )}
              </li>
              {/*  */}
              <li
                onClick={handleLike}
                className="flex flex-col justify-center items-center cursor-pointer"
              >
                {!isLike && (
                  <i className="fa-regular fa-heart text-lg green"></i>
                )}
                {isLike && <i className="fa-solid fa-heart text-lg green"></i>}
              </li>
              {/*  */}
              <li className="flex flex-col justify-center items-center">
                <i className="fa-regular fa-eye text-lg green"></i>
              </li>
            </ul>
            <img
              className="rounded w-full w-44 transition-all"
              src={url}
              alt={alt}
            />
          </div>
          <div className="col-span-9 md:col-span-4">
            <ul className="py-3">
              <li className="mt-2 text-md">
                <span className="VazirBold">نویسنده:</span>
                <span className="green mx-2">تریسی توتر</span>
              </li>
              <li className="mt-2 text-md">
                <span className="VazirBold">مترجم:</span>
                <span className="green mx-2">محدثه احمدی</span>
              </li>
              <li className="mt-2 text-md">
                <span className="VazirBold">ناشر:</span>
                <span className="green mx-2">نشر مون</span>
              </li>
              <li className="mt-2 text-md">
                <span className="VazirBold">سال انتشار:</span>
                <span className="green mx-2">۱۳۹۹</span>
              </li>
              <li className="mt-2 text-md">
                <span className="VazirBold">تعداد صفحات:</span>
                <span className="green mx-2">۱۶۸</span>
              </li>
              <li className="mt-2 text-md">
                <span className="VazirBold">زبان:</span>
                <span className="green mx-2">فارسی</span>
              </li>
              <li className="mt-2 text-md">
                <span className="VazirBold">موضوع کتاب:</span>
                <span className="green mx-2">کتاب موفقیت و خودسازی</span>
              </li>
            </ul>
          </div>
          <div className="col-span-9 md:col-span-3 flex justify-end">
            <ul className="py-3 w-full">
              <li className="flex items-center">
                <i className="fa-regular fa-badge-percent text-red-500 text-xl"></i>
                <span className="mx-2">
                  ۵۰٪ تخفیف اولین خرید با کد{" "}
                  <span className="green px-1 py-1 text-sm rounded-full mx-1 cursor-pointer">
                    <span>welcome50</span>
                    <i className="fa-regular fa-copy mr-2"></i>
                  </span>
                </span>
              </li>
              <li className="text-md mt-2">
                <span className="VazirBold">قیمت:</span>
                <span className="white px-3 py-1 bg-green rounded-full mx-2 items-center VazirBold inline-flex">
                  ۲۴۰۰۰ <TomanIcon />
                </span>
              </li>
              <li className="mt-10 text-md flex flex-col md:flex-row">
                <Button
                  className="m-2 md:m-0 md:mr-2 py-1"
                  iconLeft="fa-regular fa-bag-shopping"
                  textClassName="text-sm"
                  title="دریافت کتاب"
                />
                <Link to={"/reading"}>
                  <Button
                    outline
                    className="m-2 md:m-0 md:mr-2 py-1"
                    iconLeft="fa-regular fa-book"
                    title="مشاهده نمونه رایگان"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-7 mb-5" />

        {/* Tabs */}
        <ul className="flex mx-5">
          <li
            onClick={() => setTab(1)}
            className={`px-5 py-1 ml-2 hover:green cursor-pointer border-b-2 ${
              tab === 1 && activeTabClass
            }`}
          >
            معرفی
          </li>
          <li
            onClick={() => setTab(2)}
            className={`px-5 py-1 ml-2 hover:green cursor-pointer border-b-2 ${
              tab === 2 && activeTabClass
            }`}
          >
            فهرست
          </li>
          <li
            onClick={() => setTab(3)}
            className={`px-5 py-1 ml-2 hover:green cursor-pointer border-b-2 ${
              tab === 3 && activeTabClass
            }`}
          >
            نظرات
          </li>
        </ul>

        {/* About Book */}
        {tab === 1 && (
          <section className="px-3 pb-5">
            <h2 className="VazirBold my-5 text-lg">
              معرفی کتاب ترس تنها یک کلمه سه‌ حرفی است
            </h2>
            <p className="mt-3 Vazir leading-8">
              آیا افراد خودشیفته شما را به ستوه می‌آورند؟ آیا در موقعیت‌های
              مخاطره‌آمیز وحشت‌زده می‌شوید و احساس ضعف می‌کنید؟ با{" "}
              <strong>تریسی توتر</strong> در کتاب{" "}
              <strong>ترس تنها یک کلمه سه‌ حرفی است</strong> همراه شوید تا از
              این پس پیروز میدان باشید. کتاب حاضر از پرفروش‌ترین کتاب‌های وال
              استریت ژورنال بوده است.
            </p>

            <h2>درباره‌ی کتاب ترس تنها یک کلمه سه‌ حرفی است:</h2>

            <p className="mt-3 Vazir leading-8">
              همیشه و در هر جایی، افراد خودشیفته‌ای حضور دارند که اعتمادبه‌نفس
              ما را از بین می‌برند، این افراد ترسناک و شکست‌ناپذیر به نظر
              می‌رسند. ما غالباً در مواجهه با این افراد خود را می‌بازیم و پیش از
              آنکه واقعاً اوضاع از کنترلمان خارج شود، احساس شکست می‌کنیم. اما
              کتاب حاضر به یاری ما آمده تا نشان دهد ترس تنها یک کلمه‌ی سه‌حرفی
              است.
            </p>

            <p className="mt-3 Vazir leading-8">
              تریسی توتر (Tracy Tutor) مشاوری موفق در زمینه‌ی املاک است. او در
              حوزه‌ی کاری خود که مردان آن را تسخیر کرده‌اند توانسته به جایگاه
              برجسته‌ای دست پیدا کند. او تاجری سرزنده، سرسخت و تکرارناشدنی است
              که با رقابت با مردان توانسته معاملات پرسودی را در دنیای املاک
              لس‌آنجلس از آن خود کند. حالا، توتر، در این کتاب راهنما، از تجربیات
              خود به ما می‌گوید و زنان را تشویق می‌کند تا برای جایگاهی که
              شایسته‌شان است با اعتمادبه‌نفس بجنگند.
            </p>

            <p className="mt-3 Vazir leading-8">
              نویسنده‌ی کتاب حاضر ما را خاطرجمع می‌کند که افراد از آن چیزی که به
              نظر می‌رسد پیش‌بینی‌پذیرترند، و هنگامی که آن‌ها را درک کردیم،
              می‌توانیم از اهرم‌های فشار مناسب استفاده کنیم تا آنچه را می‌خواهیم
              به دست آوریم. توتر با بازگو کردن خاطراتش، دوره‌ی آموزشی کوتاهی
              برای ما برگزار می‌کند که در آن یاد می‌گیریم چگونه آدم‌ها را
              بشناسیم، چطور لباس بپوشیم، از چه روش‌هایی برای تلطیف فضا استفاده
              کنیم، و چه زمان از خود قاطعیت نشان دهیم.
            </p>

            <p className="mt-3 Vazir leading-8">
              کتاب ترس تنها یک کلمه‌ی سه‌ حرفی است (Fear Is Just a Four-Letter
              Word) که از پرفروش‌ترین کتاب‌های وال‌استریت جورنال بوده، راهنمایی
              جامع برای زنان است تا بتوانند در رویارویی با جهان مردسالارانه‌ی
              فعلی جایگاه خود را پیدا کنند و پیروز مذاکرات باشند.
            </p>

            <h2>نکوداشت‌های کتاب ترس تنها یک کلمه سه‌ حرفی است:</h2>

            <p className="mt-3 Vazir leading-8">
              - اگر می‌خواهید یاد بگیرید که چگونه با نگرشی بی‌نظیر با زندگی و
              حرفه‌تان برخورد کنید، بهتر است کتاب تریسی توتر را جزو کتاب‌های
              مقدس خود بگذارید. (کارولین استنبری)
            </p>

            <p className="mt-3 Vazir leading-8">
              - احتمالاً پنج نفر هستند که می‌توانم در شرایط اضطراری روی کمکشان
              حساب کنم. تریسی توتر یکی از آن‌هاست. حتی اگر نتواند کمکی کند،
              لااقل مرا می‌خنداند. تریسی در کتاب ترس تنها یک کلمه‌ی سه‌حرفی است
              داستان‌هایی را به اشتراک می‌گذارد که نشان می‌دهد او چقدر شاد است.
              ممکن است شما در شرایط اضطراری تریسی توتر را در کنار خود نداشته
              باشید، اما لااقل می‌توانید این کتاب را پیش خود نگه دارید. (جاش
              فلگ)
            </p>

            <p className="mt-3 Vazir leading-8">
              - حالا دیگر رمزوراز کار تریسی توتر را می‌دانم! (جاش آلتمن)
            </p>

            <h2>کتاب ترس تنها یک کلمه سه‌ حرفی است برای چه کسانی مناسب است؟</h2>

            <p className="mt-3 Vazir leading-8">
              خواندن این کتاب را به تمام زنانی که می‌خواهند اعتمادبه‌نفس خود را
              بازیابند و در زندگی حرفه‌ای خود موفق عمل کنند توصیه می‌کنیم.
            </p>

            <h2>با تریسی توتر بیشتر آشنا شویم:</h2>

            <p className="mt-3 Vazir leading-8">
              نویسنده‌ی آمریکایی کتاب حاضر مشاور املاک برجسته‌ای در داگلاس الیمن
              بورلی‌هیلز است که با تنی چند از بهترین معماران و بسازبفروش‌های
              دنیا همفکری می‌کند. تریسی توتر نخستین و تنها زنی است که در
              برنامه‌ی شبکه‌ی براوو به نام فهرست‌برداری میلیون‌دلاری در لس‌آنجلس
              حضور دارد.
            </p>

            <h2>در بخشی از کتاب ترس تنها یک کلمه سه‌ حرفی است می‌خوانیم:</h2>

            <p className="mt-3 Vazir leading-8">
              باید بدانید چه‌ چیزی حس خوبی به شما می‌دهد و اینکه پوشش برای
              پیشرفت مهم است. ولی این کار می‌تواند سخت باشد، چون افراد باید و
              نبایدهای خود را در زمینه‌ی پوشش شما دارند. من چیزهای زیادی راجع به
              مواجهه با تمام این سروصداها می‌دانم. کسی هستم که در یک برنامه‌ی
              تلویزیونی حضور دارد؛ نه‌تنها میلیون‌ها نفر پوششم را می‌بینند بلکه
              در گذشته کسی غیر از خودم ظاهرم را کنترل می‌کرد. اجازه دهید بگویم
              وقتی سعی داشتم تک‌تک نظرات یک نفر دیگر را در پوششم پیاده کنم، حالم
              از همیشه بدتر بود. وقتی برای اولین بار جلوی دوربین رفتم، مدام این
              کار را می‌کردم. اجازه دادم نظرات مردم راجع به رنگ بلوزم، مدل
              موهایم و لباسم کاملاً ناراحتم کند. زمانی راجع به ظاهرم از بقیه کمک
              گرفتم که نیازی به این کار نداشتم. اجازه دادم تمام سروصداها راجع به
              اینکه «باید به نقشت بخوری» اعصابم را به‌هم بریزد. به‌خاطر همین،
              نتوانستم در لحظه زندگی کنم.
            </p>

            <p className="mt-3 Vazir leading-8">
              من این نکته‌ی اساسی را یاد گرفتم: باید چیزی بپوشید که حس خوبی با
              آن دارید. وقتی کسی زیادی به جانتان نق می‌زند و بعد حس می‌کنید
              خودتان نیستید، نمی‌توانید بهترین توانایی‌هایتان را به نمایش
              بگذارید. درست مثل زمانی که یک لباس مد روز می‌پوشید ولی واقعاً حس
              خوبی در آن ندارید. پس آن را نپوشید. اگر در آن لباس احساس نمی‌کنید
              جذاب و قدرتمند هستید و همه‌چیز تحت کنترلتان است، آن را درآورید.
            </p>

            <p className="mt-3 Vazir leading-8">
              وقتی با این ذهنیت به گذشته نگاه می‌کنم، می‌فهمم باید در مقابل تمام
              توصیه‌های دیگران می‌ایستادم. باید به خودم می‌گفتم تو دنبال کسب
              اعتبار هستی، پس برو و لباسی بپوش که در رسیدن به این هدف، کمکت
              می‌کنه. من یه مشاور املاکم. وکیل حق انحصار که نیستم. باید حس کنم
              خودم هستم.
            </p>
          </section>
        )}

        {tab === 2 && (
          <section className="px-3 pb-5">
            <h2 className="VazirBold my-5 text-lg">فهرست مطالب کتاب</h2>
            <ul className="list-disc px-5">
              <li className="mt-2">مقدمه</li>
              <li className="mt-2">فصل اول: محیط را بشناسید</li>
              <li className="mt-2">فصل دوم: حس درونی خود را مخفی نکنید</li>
              <li className="mt-2">فصل سوم: زنانه مبارزه کنید</li>
              <li className="mt-2">فصل چهارم: استقامت به خرج دهید</li>
              <li className="mt-2">فصل پنجم: سخت نگیرید و پیروز شوید</li>
              <li className="mt-2">فصل ششم: برای پیشرفت، لباس مناسب بپوشید</li>
              <li className="mt-2">فصل هفتم: خودآگاهی الزامی است</li>
              <li className="mt-2">فصل هشتم: دوباره تمرکز کنید</li>
              <li className="mt-2">فصل نهم: همچنان به پیش بروید</li>
              <li className="mt-2">سپاسگزاری</li>
              <li className="mt-2">درباره‌ی نویسنده</li>
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
